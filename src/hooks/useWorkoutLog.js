import { useEffect, useState, useCallback } from 'react';

const SHEET_ID = '1VFqkQnOI3fNO-b_8l-1r6nhsPmE6XjAmtuak4ke1xzo';

function parseGvizDate(v) {
  if (!v) return null;
  if (v instanceof Date) return v;
  if (typeof v === 'string') {
    // Format: "Date(2026,3,28)"  (month is 0-indexed)
    const m = v.match(/^Date\((\d+),(\d+),(\d+)/);
    if (m) return new Date(Number(m[1]), Number(m[2]), Number(m[3]));
    // ISO fallback
    const d = new Date(v);
    if (!isNaN(d.getTime())) return d;
  }
  return null;
}

function formatDate(d) {
  if (!d) return '';
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function useWorkoutLog(sheetName) {
  const [state, setState] = useState({ loading: true, error: null, sessions: [], fetchedAt: null });

  const fetchLog = useCallback(async () => {
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
      const res = await fetch(url, { cache: 'no-store' });
      const text = await res.text();
      // Strip the JSONP wrapper: /*O_o*/ google.visualization.Query.setResponse({...});
      const match = text.match(/setResponse\(([\s\S]+)\);?\s*$/);
      if (!match) throw new Error('Unexpected response from Google Sheets');
      const json = JSON.parse(match[1]);
      if (json.status === 'error') {
        throw new Error(json.errors?.[0]?.detailed_message || json.errors?.[0]?.message || 'Sheet error');
      }
      if (!json.table) throw new Error('No table data in response');

      const cols = json.table.cols.map((c) => (c.label || '').trim().toLowerCase());
      // Match exact first, then prefix — so "Weight (kg)" still resolves
      // to the weight column, "Reps (per set)" to reps, etc.
      const findCol = (name) => {
        const t = name.toLowerCase();
        const exact = cols.indexOf(t);
        if (exact !== -1) return exact;
        return cols.findIndex((c) => c === t || c.startsWith(t + ' ') || c.startsWith(t + '('));
      };
      const dateI = findCol('date');
      const dayI = findCol('day');
      const exI = findCol('exercise');
      const setsI = findCol('sets');
      const repsI = findCol('reps');
      const weightI = findCol('weight');
      const rpeI = findCol('rpe');
      const notesI = findCol('notes');

      const rows = (json.table.rows || [])
        .map((r) => {
          const cell = (i) => (i >= 0 ? r.c?.[i] ?? null : null);
          const val = (i) => cell(i)?.v ?? null;
          const dCell = cell(dateI);
          const date = parseGvizDate(dCell?.v);
          const dateStr = dCell?.f || formatDate(date) || '';
          return {
            date,
            dateStr,
            day: val(dayI) || '',
            exercise: (val(exI) || '').toString(),
            sets: val(setsI) ?? '',
            reps: (val(repsI) ?? '').toString(),
            weight: (val(weightI) ?? '').toString(),
            rpe: val(rpeI) ?? '',
            notes: (val(notesI) ?? '').toString()
          };
        })
        .filter((r) => r.exercise);

      // Group by date+day into sessions
      const sessionMap = new Map();
      for (const row of rows) {
        const key = `${row.dateStr}__${row.day}`;
        if (!sessionMap.has(key)) {
          sessionMap.set(key, { dateStr: row.dateStr, date: row.date, day: row.day, exercises: [] });
        }
        sessionMap.get(key).exercises.push(row);
      }
      const sessions = Array.from(sessionMap.values()).sort((a, b) => {
        const aT = a.date instanceof Date ? a.date.getTime() : 0;
        const bT = b.date instanceof Date ? b.date.getTime() : 0;
        return bT - aT;
      });

      setState({ loading: false, error: null, sessions, fetchedAt: new Date() });
    } catch (err) {
      setState({ loading: false, error: err.message || String(err), sessions: [], fetchedAt: new Date() });
    }
  }, [sheetName]);

  useEffect(() => {
    fetchLog();
  }, [fetchLog]);

  return { ...state, refresh: fetchLog };
}

export const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit?usp=sharing`;
