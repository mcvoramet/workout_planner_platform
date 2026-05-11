import { useMemo, useState } from 'react';
import { useWorkoutLog, SHEET_URL } from '../hooks/useWorkoutLog.js';

const DEFAULT_VISIBLE = 5;

const searchUrl = (name) =>
  `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(name + ' exercise form')}`;

export default function WorkoutLog({ sheetName, accentColor = '#185FA5', label = 'Workout log' }) {
  const { loading, error, sessions, fetchedAt, refresh } = useWorkoutLog(sheetName);
  const [showAll, setShowAll] = useState(false);
  const [query, setQuery] = useState('');

  const trimmedQuery = query.trim();
  const isSearching = trimmedQuery.length > 0;

  // Flat matching rows, newest first (sessions are already date-desc).
  const matches = useMemo(() => {
    if (!isSearching) return [];
    const q = trimmedQuery.toLowerCase();
    const out = [];
    for (const s of sessions) {
      for (const ex of s.exercises) {
        if ((ex.exercise || '').toLowerCase().includes(q)) {
          out.push({ ...ex, dateStr: s.dateStr, day: s.day, date: s.date });
        }
      }
    }
    return out;
  }, [isSearching, trimmedQuery, sessions]);

  const shellHeader = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
      <p className="sl" style={{ margin: 0 }}>{label} · live from Google Sheet</p>
      <div style={{ display: 'flex', gap: 8, fontSize: 10 }}>
        <a href={SHEET_URL} target="_blank" rel="noopener noreferrer" style={{ color: accentColor, textDecoration: 'none' }}>
          open sheet ↗
        </a>
        <button
          onClick={refresh}
          disabled={loading}
          style={{
            border: 'none',
            background: 'transparent',
            color: accentColor,
            cursor: loading ? 'wait' : 'pointer',
            fontSize: 10,
            fontFamily: 'inherit',
            padding: 0
          }}
        >
          ↻ refresh
        </button>
      </div>
    </div>
  );

  const searchBar = (
    <div style={{ position: 'relative', marginBottom: 12 }}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 Search exercise name (e.g. squat, bench, row)…"
        style={{
          width: '100%',
          padding: '8px 32px 8px 12px',
          fontSize: 12,
          fontFamily: 'inherit',
          color: '#1a1a18',
          background: '#fff',
          border: `0.5px solid ${query ? accentColor : 'rgba(0,0,0,0.15)'}`,
          borderRadius: 8,
          outline: 'none',
          transition: 'border-color 0.15s'
        }}
      />
      {query && (
        <button
          onClick={() => setQuery('')}
          aria-label="Clear search"
          style={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            border: 'none',
            background: 'transparent',
            color: '#888780',
            cursor: 'pointer',
            fontSize: 14,
            lineHeight: 1,
            padding: 4
          }}
        >
          ×
        </button>
      )}
    </div>
  );

  if (loading && sessions.length === 0) {
    return (
      <div className="card">
        {shellHeader}
        <div style={{ fontSize: 11, color: '#888780' }}>Loading from "{sheetName}"…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        {shellHeader}
        <div style={{ fontSize: 11, color: '#A32D2D', marginBottom: 4 }}>Couldn't load: {error}</div>
        <div style={{ fontSize: 10, color: '#888780', lineHeight: 1.6 }}>
          Check that the tab is named exactly <strong>"{sheetName}"</strong> and the sheet is shared
          as "Anyone with the link can view".
        </div>
      </div>
    );
  }

  if (sessions.length === 0) {
    return (
      <div className="card">
        {shellHeader}
        {searchBar}
        <div style={{ fontSize: 11, color: '#888780' }}>No entries yet in "{sheetName}".</div>
      </div>
    );
  }

  const totalSessions = sessions.length;
  const totalExercises = sessions.reduce((a, s) => a + s.exercises.length, 0);
  const last = sessions[0];
  const visible = showAll ? sessions : sessions.slice(0, DEFAULT_VISIBLE);

  return (
    <div className="card">
      {shellHeader}
      {searchBar}

      {isSearching ? (
        <SearchResults matches={matches} query={trimmedQuery} accentColor={accentColor} />
      ) : (
        <>
          {/* Summary */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 14 }}>
            <div className="card-sm" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 600, color: accentColor }}>{totalSessions}</div>
              <div className="sub">sessions logged</div>
            </div>
            <div className="card-sm" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 600, color: accentColor }}>{totalExercises}</div>
              <div className="sub">exercises logged</div>
            </div>
            <div className="card-sm" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: accentColor }}>{last.dateStr}</div>
              <div className="sub">last · {last.day}</div>
            </div>
          </div>

          {visible.map((s, i) => (
            <SessionCard key={s.dateStr + s.day + i} session={s} accentColor={accentColor} />
          ))}

          {sessions.length > DEFAULT_VISIBLE && (
            <div style={{ textAlign: 'center', marginTop: 8 }}>
              <button
                onClick={() => setShowAll((v) => !v)}
                style={{
                  border: `0.5px solid ${accentColor}`,
                  background: 'transparent',
                  color: accentColor,
                  padding: '6px 14px',
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  cursor: 'pointer'
                }}
              >
                {showAll ? `Show only latest ${DEFAULT_VISIBLE}` : `Show all ${sessions.length} sessions`}
              </button>
            </div>
          )}
        </>
      )}

      {fetchedAt && (
        <div style={{ fontSize: 9, color: '#888780', textAlign: 'right', marginTop: 6 }}>
          fetched {fetchedAt.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}

function SearchResults({ matches, query, accentColor }) {
  if (matches.length === 0) {
    return (
      <div style={{ fontSize: 11, color: '#888780', padding: '8px 0' }}>
        No matches for <strong>"{query}"</strong>. Try a shorter or different keyword.
      </div>
    );
  }
  return (
    <>
      <div style={{ fontSize: 11, color: '#5f5e5a', marginBottom: 8 }}>
        Found <strong style={{ color: accentColor }}>{matches.length}</strong> entr{matches.length === 1 ? 'y' : 'ies'} for
        <strong> "{query}"</strong> · newest first
      </div>
      {matches.map((ex, i) => (
        <ExerciseRow key={i} ex={ex} accentColor={accentColor} showDate />
      ))}
    </>
  );
}

function SessionCard({ session, accentColor }) {
  return (
    <div style={{ marginBottom: 10, paddingBottom: 8, borderBottom: '0.5px solid rgba(0,0,0,0.06)' }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: accentColor, marginBottom: 6 }}>
        {session.dateStr} <span style={{ fontWeight: 500, opacity: 0.7 }}>· {session.day}</span>
        <span style={{ float: 'right', fontSize: 10, color: '#888780', fontWeight: 500 }}>
          {session.exercises.length} exercises
        </span>
      </div>
      {session.exercises.map((ex, j) => (
        <ExerciseRow key={j} ex={ex} accentColor={accentColor} />
      ))}
    </div>
  );
}

function ExerciseRow({ ex, accentColor, showDate = false }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 8,
        padding: '6px 0',
        borderBottom: '0.5px solid rgba(0,0,0,0.04)',
        alignItems: 'start'
      }}
    >
      <div>
        {showDate && (
          <div style={{ fontSize: 10, fontWeight: 600, color: accentColor, marginBottom: 2 }}>
            {ex.dateStr} · {ex.day}
          </div>
        )}
        <a
          href={searchUrl(ex.exercise)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontWeight: 600,
            fontSize: 12,
            color: '#1a1a18',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          title={`Google search: ${ex.exercise}`}
        >
          {ex.exercise} <span style={{ fontSize: 9, opacity: 0.45 }}>↗</span>
        </a>
        {ex.weight ? (
          <div style={{ fontSize: 10, color: '#5f5e5a', whiteSpace: 'pre-line', marginTop: 2 }}>
            {ex.weight}
          </div>
        ) : null}
        {ex.notes ? (
          <div style={{ fontSize: 10, color: '#888780', marginTop: 2, fontStyle: 'italic' }}>
            {ex.notes}
          </div>
        ) : null}
      </div>
      <RepsBlock ex={ex} accentColor={accentColor} />
    </div>
  );
}

function RepsBlock({ ex, accentColor }) {
  const repsText = formatReps(ex.reps);
  const setsText = ex.sets !== '' && ex.sets != null ? `${ex.sets} sets` : '';
  const showVarying = typeof ex.reps === 'string' && ex.reps.includes('/');

  return (
    <div style={{ textAlign: 'right', minWidth: 105 }}>
      <div style={{ fontSize: 11, color: '#5f5e5a' }}>
        {setsText}
        {setsText && repsText ? ' · ' : ''}
        {repsText ? `${repsText} reps` : ''}
      </div>
      {showVarying && (
        <div style={{ fontSize: 9, color: '#888780', marginTop: 1, fontStyle: 'italic' }}>
          per set
        </div>
      )}
      {ex.rpe !== '' && ex.rpe != null ? (
        <div style={{ fontSize: 10, color: accentColor, fontWeight: 600, marginTop: 2 }}>
          RPE {ex.rpe}
        </div>
      ) : null}
    </div>
  );
}

function formatReps(reps) {
  if (reps == null || reps === '') return '';
  const s = String(reps).trim();
  // Preserve patterns like "12/8/8/8" or "10, 8, 6" exactly as written
  return s;
}
