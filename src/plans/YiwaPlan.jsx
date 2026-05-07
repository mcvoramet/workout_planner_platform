import Drawer from '../components/Drawer.jsx';

const searchUrl = (name) =>
  `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(name + ' exercise form')}`;

const ExItem = ({ n, name, muscle, detail, color, badge }) => (
  <div className="ex-item">
    <span className="ex-num" style={{ color }}>{n}</span>
    <div>
      <a
        className="ex-name"
        href={searchUrl(name)}
        target="_blank"
        rel="noopener noreferrer"
        title={`Google search: ${name}`}
      >{name}</a>
      {badge}
      <div className="ex-muscle">{muscle}</div>
      <div className="ex-detail" style={{ color }}>{detail}</div>
    </div>
  </div>
);

export default function YiwaPlan() {
  return (
    <>
      {/* HEADER */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#FBEAF0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 600, color: '#993556', flexShrink: 0 }}>Y</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: '#1a1a18', marginBottom: 3 }}>Yiwa — Hybrid PPL Fat Loss Plan</div>
            <div style={{ fontSize: 12, color: '#7a6a66' }}>Female · 156 cm · Bangkok 🇹🇭 · 3 days/week · On-Site Tue–Thu · IF (Lunch + Dinner)</div>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}><div className="big-num" style={{ color: '#D4537E' }}>50</div><div className="sub">kg now</div></div>
            <div style={{ textAlign: 'center' }}><div className="big-num" style={{ color: '#EF9F27' }}>28–30%</div><div className="sub">body fat</div></div>
            <div style={{ textAlign: 'center' }}><div className="big-num" style={{ color: '#1D9E75' }}>44–46 kg</div><div className="sub">goal weight</div></div>
          </div>
        </div>
      </div>

      {/* BF JOURNEY */}
      <div className="card">
        <p className="sl">Body composition journey</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 12 }}>
          <div className="card-sm" style={{ borderLeft: '3px solid #E24B4A', borderRadius: '0 8px 8px 0' }}><div style={{ fontSize: 17, fontWeight: 600, color: '#E24B4A' }}>28–30%</div><div style={{ fontSize: 11, color: '#7a6a66' }}>Now</div><div style={{ fontSize: 10, color: '#9e8a85', marginTop: 2 }}>50 kg · ~14–15 kg fat</div></div>
          <div className="card-sm" style={{ borderLeft: '3px solid #EF9F27', borderRadius: '0 8px 8px 0' }}><div style={{ fontSize: 17, fontWeight: 600, color: '#EF9F27' }}>25%</div><div style={{ fontSize: 11, color: '#7a6a66' }}>Phase 1 · 6–8 wks</div><div style={{ fontSize: 10, color: '#9e8a85', marginTop: 2 }}>~47–48 kg</div></div>
          <div className="card-sm" style={{ borderLeft: '3px solid #D4537E', borderRadius: '0 8px 8px 0' }}><div style={{ fontSize: 17, fontWeight: 600, color: '#D4537E' }}>20–22%</div><div style={{ fontSize: 11, color: '#7a6a66' }}>Phase 2 · +8 wks</div><div style={{ fontSize: 10, color: '#9e8a85', marginTop: 2 }}>~45–46 kg</div></div>
          <div className="card-sm" style={{ borderLeft: '3px solid #1D9E75', borderRadius: '0 8px 8px 0' }}><div style={{ fontSize: 17, fontWeight: 600, color: '#1D9E75' }}>17–20%</div><div style={{ fontSize: 11, color: '#7a6a66' }}>Goal · +6–8 wks</div><div style={{ fontSize: 10, color: '#9e8a85', marginTop: 2 }}>44–46 kg · fit &amp; toned</div></div>
        </div>
        <div className="bar-wrap"><div className="bar-fill" style={{ width: '78%', background: 'linear-gradient(90deg,#1D9E75 0%,#D4537E 45%,#EF9F27 70%,#E24B4A 100%)' }} /></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
          <span style={{ fontSize: 10, color: '#9e8a85' }}>17% fit range</span>
          <span style={{ fontSize: 10, color: '#E24B4A', fontWeight: 600 }}>▲ you are here</span>
          <span style={{ fontSize: 10, color: '#9e8a85' }}>32%+ high fat</span>
        </div>
      </div>

      {/* PPL OVERVIEW */}
      <div className="card">
        <p className="sl">Split overview — Push / Pull / Legs · 8–15 reps · 3 sets each</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          <div className="card-sm" style={{ borderTop: '3px solid #E8824A' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#A03D10', marginBottom: 4 }}>🔴 Push — Tuesday</div>
            <div style={{ fontSize: 11, color: '#7a6a66', lineHeight: 1.7 }}>Shoulders · Chest<br />All machine-based · beginner-friendly<br />Focus on controlled squeeze</div>
          </div>
          <div className="card-sm" style={{ borderTop: '3px solid #378ADD' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0C447C', marginBottom: 4 }}>🔵 Pull — Wednesday</div>
            <div style={{ fontSize: 11, color: '#7a6a66', lineHeight: 1.7 }}>Back · Core (abs finish)<br />Row + pulldown combination<br />Superset abs at the end</div>
          </div>
          <div className="card-sm" style={{ borderTop: '3px solid #1D9E75' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#085041', marginBottom: 4 }}>🟢 Legs — Thursday</div>
            <div style={{ fontSize: 11, color: '#7a6a66', lineHeight: 1.7 }}>Quads · Hamstrings · Glutes<br />Machine-focused · safe for beginners<br />Biggest fat-burning session</div>
          </div>
        </div>
        <div style={{ marginTop: 8, background: '#E6F1FB', borderRadius: 8, padding: '8px 12px', fontSize: 11, color: '#0C447C', lineHeight: 1.6 }}>
          <span style={{ fontWeight: 600 }}>Progressive overload rule:</span> Every session — try to add 1 rep or increase weight vs last time. Write it down. This is the only way to keep getting results.
        </div>
      </div>

      {/* WEEKLY SCHEDULE */}
      <div className="card">
        <p className="sl">Weekly schedule — click session to see exercises</p>
        <div className="sched-head"><div /><div>Morning</div><div>Afternoon</div><div>Evening</div></div>

        {/* MON */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#fdf6f4' }}>
            <span className="day-name" style={{ color: '#9e8a85' }}>Mon</span>
            <span style={{ fontSize: 9, color: '#9e8a85' }}>Rest</span>
          </div>
          <div className="rest-cell"><span style={{ fontSize: 11, color: '#9e8a85' }}>Rest day — light walk or full rest. Start of week, conserve energy.</span></div>
        </div>

        {/* TUE — PUSH */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#FDEEE7' }}>
            <span className="day-name" style={{ color: '#A03D10' }}>Tue</span>
            <span style={{ fontSize: 9, color: '#E8824A', fontWeight: 700 }}>🔴 PUSH</span>
          </div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#9e8a85' }}>—</span></div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#9e8a85' }}>On-site work</span></div>
          <div>
            <Drawer btnStyle={{ background: '#FDEEE7' }} title="Cardio + Push Day" titleColor="#A03D10" subtitle="Shoulders · Chest · 5 exercises · ~65 min total" subtitleColor="#E8824A">
              <div style={{ fontSize: 10, fontWeight: 600, color: '#D4537E', marginBottom: 8, padding: '3px 8px', background: '#FBEAF0', borderRadius: 4, display: 'inline-block' }}>45 min Zone 2 cardio FIRST · then weights</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#888', marginBottom: 4, marginTop: 2 }}>All exercises: 8–15 reps · 3 sets · 1–2 min rest</div>
              <ExItem n={1} color="#E8824A" name="Dumbbell Shoulder Press" muscle="Front & Mid Delt primary · Triceps secondary" detail="8–15 reps · 3 sets · 1–2 min rest" />
              <ExItem n={2} color="#E8824A" name="Machine Shoulder Press" muscle="Front & Mid Delt primary · Stabilised — good for beginners" detail="8–15 reps · 3 sets · 1–2 min rest" />
              <ExItem n={3} color="#E8824A" name="Machine Chest Fly" muscle="Chest stretch & squeeze · Front Delt secondary" detail="8–15 reps · 3 sets · 1–2 min rest" />
              <ExItem n={4} color="#E8824A" name="Machine Chest Press" muscle="Chest primary · Triceps, Front Delt secondary" detail="8–15 reps · 3 sets · 1–2 min rest" />
              <ExItem n={5} color="#E8824A" name="Machine Side Raise" muscle="Mid Delt isolated · Supraspinatus secondary" detail="8–15 reps · 3 sets · 1 min rest" />
              <span className="prog-note">Log weights each session — add reps or weight next time</span>
            </Drawer>
          </div>
        </div>

        {/* WED — PULL */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#E6F1FB' }}>
            <span className="day-name" style={{ color: '#0C447C' }}>Wed</span>
            <span style={{ fontSize: 9, color: '#378ADD', fontWeight: 700 }}>🔵 PULL</span>
          </div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#9e8a85' }}>—</span></div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#9e8a85' }}>On-site work</span></div>
          <div>
            <Drawer btnStyle={{ background: '#E6F1FB' }} title="Cardio + Pull Day" titleColor="#0C447C" subtitle="Back · Core superset · 5 exercises · ~65 min total" subtitleColor="#378ADD">
              <div style={{ fontSize: 10, fontWeight: 600, color: '#D4537E', marginBottom: 8, padding: '3px 8px', background: '#FBEAF0', borderRadius: 4, display: 'inline-block' }}>45 min Zone 2 cardio FIRST · then weights</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#888', marginBottom: 4, marginTop: 2 }}>All exercises: 8–15 reps · 3 sets · 1–2 min rest</div>
              <ExItem n={1} color="#378ADD" name="Machine High Row" muscle="Upper Lats, Rear Delt primary · Biceps secondary" detail="8–15 reps · 3 sets · 1–2 min rest" />
              <ExItem n={2} color="#378ADD" name="Cable Pulldown (Natural Grip)" muscle="Lats primary · Biceps, Rear Delt secondary" detail="8–15 reps · 3 sets · 1–2 min rest" />
              <ExItem n={3} color="#378ADD" name="T-Bar Row" muscle="Mid Back, Rhomboids primary · Rear Delt secondary" detail="8–15 reps · 3 sets · 1–2 min rest" />
              <ExItem n={4} color="#378ADD" name="Machine Underhand Row" badge={<span className="last-badge">LAST EXERCISE</span>} muscle="Mid Back, Biceps primary · Squeeze at contraction" detail="10–15 reps · 3 sets · 1 min rest · ท่าสุดท้าย" />
              <div className="ex-item">
                <span className="ex-num" style={{ color: '#378ADD' }}>5</span>
                <div>
                  <a
                    className="ex-name"
                    href={searchUrl('Leg Raises')}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Google search: Leg Raises"
                  >Leg Raises</a>
                  <span className="superset-badge">SUPERSET</span>{' '}
                  <a
                    className="ex-name"
                    href={searchUrl('Machine Abs Crunch')}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Google search: Machine Abs Crunch"
                  >Machine Abs Crunch</a>
                  <div className="ex-muscle">Lower abs (Leg Raise) · Rectus Abdominis (Crunch) — no rest between pair</div>
                  <div className="ex-detail" style={{ color: '#856404' }}>8–15 reps each · Do Leg Raises → immediately Machine Abs Crunch · rest 1 min · repeat x3</div>
                </div>
              </div>
              <span className="prog-note">Log weights each session — add reps or weight next time</span>
            </Drawer>
          </div>
        </div>

        {/* THU — LEGS */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#E1F5EE' }}>
            <span className="day-name" style={{ color: '#085041' }}>Thu</span>
            <span style={{ fontSize: 9, color: '#1D9E75', fontWeight: 700 }}>🟢 LEGS</span>
          </div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#9e8a85' }}>—</span></div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#9e8a85' }}>On-site work</span></div>
          <div>
            <Drawer btnStyle={{ background: '#E1F5EE' }} title="Cardio + Legs Day" titleColor="#085041" subtitle="Quads · Hamstrings · Glutes · 5 exercises · ~70 min total" subtitleColor="#1D9E75">
              <div style={{ fontSize: 10, fontWeight: 600, color: '#D4537E', marginBottom: 8, padding: '3px 8px', background: '#FBEAF0', borderRadius: 4, display: 'inline-block' }}>45 min Zone 2 cardio FIRST · then weights</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#888', marginBottom: 4, marginTop: 2 }}>All exercises: 8–15 reps · 3 sets · 1–2 min rest</div>
              <ExItem n={1} color="#1D9E75" name="Leg Extensions" muscle="Quads isolated — all 4 heads · warm-up movement" detail="8–15 reps · 3 sets · 1 min rest" />
              <ExItem n={2} color="#1D9E75" name="Leg Curl" muscle="Hamstrings isolated · Gastrocnemius secondary" detail="8–15 reps · 3 sets · 1 min rest" />
              <ExItem n={3} color="#1D9E75" name="Machine Adductor" muscle="Inner thigh isolated · Glute medius secondary" detail="8–15 reps · 3 sets · 1 min rest" />
              <ExItem n={4} color="#1D9E75" name="Leg Press" muscle="Quads, Glutes primary · Hamstrings secondary" detail="8–15 reps · 3 sets · 1–2 min rest" />
              <ExItem n={5} color="#1D9E75" name="Machine Squat" muscle="Quads, Glutes primary · Safer than barbell — good form focus" detail="8–15 reps · 3 sets · 1–2 min rest" />
              <span className="prog-note">Log weights each session — add reps or weight next time</span>
            </Drawer>
          </div>
        </div>

        {/* FRI */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#fdf6f4' }}>
            <span className="day-name" style={{ color: '#9e8a85' }}>Fri</span>
            <span style={{ fontSize: 9, color: '#9e8a85' }}>Rest</span>
          </div>
          <div className="rest-cell"><span style={{ fontSize: 11, color: '#9e8a85' }}>Rest day — recovery from 3 consecutive training days. Body rebuilds here.</span></div>
        </div>

        {/* SAT */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#FAEEDA' }}>
            <span className="day-name" style={{ color: '#633806' }}>Sat</span>
            <span style={{ fontSize: 9, color: '#BA7517' }}>Optional</span>
          </div>
          <div>
            <Drawer btnStyle={{ background: '#FAEEDA' }} title="Outdoor Run (Optional)" titleColor="#633806" subtitle="Zone 2 · easy pace · 20–30 min" subtitleColor="#BA7517">
              <div style={{ fontSize: 11, color: '#5f5e5a', lineHeight: 1.8 }}>
                Easy conversational pace — can hold a sentence<br />
                Park or neighborhood route works great<br />
                Not mandatory — rest is equally valid today<br />
                ~150–250 kcal burn
              </div>
            </Drawer>
          </div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#9e8a85' }}>—</span></div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#9e8a85' }}>—</span></div>
        </div>

        {/* SUN */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#FAEEDA' }}>
            <span className="day-name" style={{ color: '#633806' }}>Sun</span>
            <span style={{ fontSize: 9, color: '#BA7517' }}>Optional</span>
          </div>
          <div>
            <Drawer btnStyle={{ background: '#FAEEDA' }} title="Outdoor Run (Optional)" titleColor="#633806" subtitle="Zone 2 · easy pace · 20–30 min" subtitleColor="#BA7517">
              <div style={{ fontSize: 11, color: '#5f5e5a', lineHeight: 1.8 }}>
                Full rest or easy run<br />
                Lowest calorie day (1,300 kcal)<br />
                Good day to prep meals for the week ahead
              </div>
            </Drawer>
          </div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#9e8a85' }}>—</span></div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#9e8a85' }}>—</span></div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 12, marginTop: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, color: '#7a6a66' }}><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: '#E8824A', marginRight: 3 }} />Push</span>
          <span style={{ fontSize: 10, color: '#7a6a66' }}><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: '#378ADD', marginRight: 3 }} />Pull</span>
          <span style={{ fontSize: 10, color: '#7a6a66' }}><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: '#1D9E75', marginRight: 3 }} />Legs</span>
          <span style={{ fontSize: 10, color: '#7a6a66' }}><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: '#EF9F27', marginRight: 3 }} />Optional run</span>
        </div>
      </div>

      {/* IF NOTE */}
      <div className="card" style={{ background: '#FFF8F5', borderColor: '#F4C0D1' }}>
        <p className="sl" style={{ color: '#993556' }}>Intermittent fasting — 16:8 protocol</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          <div className="card-sm" style={{ background: '#FBEAF0' }}><div style={{ fontSize: 11, fontWeight: 600, color: '#993556', marginBottom: 3 }}>Eating window</div><div style={{ fontSize: 12, color: '#5f5e5a' }}>~12:00 PM – 8:00 PM<br />Lunch + Dinner only</div></div>
          <div className="card-sm" style={{ background: '#FBEAF0' }}><div style={{ fontSize: 11, fontWeight: 600, color: '#993556', marginBottom: 3 }}>Fasting window</div><div style={{ fontSize: 12, color: '#5f5e5a' }}>~8:00 PM – 12:00 PM<br />Water, black coffee, tea OK</div></div>
          <div className="card-sm" style={{ background: '#FBEAF0' }}><div style={{ fontSize: 11, fontWeight: 600, color: '#993556', marginBottom: 3 }}>Training timing</div><div style={{ fontSize: 12, color: '#5f5e5a' }}>Evening fits IF well<br />Eat lunch 1–2 hrs before gym</div></div>
        </div>
      </div>

      {/* NUTRITION */}
      <div className="card">
        <p className="sl">Daily nutrition targets</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 14 }}>
          <div className="card-sm" style={{ textAlign: 'center' }}><div style={{ fontSize: 10, color: '#9e8a85', marginBottom: 4 }}>Rest day (Mon, Fri–Sun)</div><div style={{ fontSize: 20, fontWeight: 600 }}>1,300</div><div className="sub">kcal</div></div>
          <div className="card-sm" style={{ textAlign: 'center', border: '1px solid #F4C0D1' }}><div style={{ fontSize: 10, color: '#993556', marginBottom: 4 }}>Training day (Tue–Thu)</div><div style={{ fontSize: 20, fontWeight: 600, color: '#D4537E' }}>1,500</div><div className="sub">kcal</div></div>
          <div className="card-sm" style={{ textAlign: 'center', border: '1px solid #B5D4F4' }}><div style={{ fontSize: 10, color: '#185FA5', marginBottom: 4 }}>Weekly deficit target</div><div style={{ fontSize: 20, fontWeight: 600, color: '#185FA5' }}>~2,500</div><div className="sub">kcal/wk ≈ 0.3 kg/wk</div></div>
        </div>
        <div className="grid2">
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Training day macros</div>
            <div className="macro-row"><span className="macro-label">Protein</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '30%', background: '#D4537E' }} /></div><span className="macro-val" style={{ color: '#D4537E' }}>90–100g</span></div>
            <div className="macro-row"><span className="macro-label">Carbs</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '55%', background: '#EF9F27' }} /></div><span className="macro-val" style={{ color: '#BA7517' }}>150–170g</span></div>
            <div className="macro-row"><span className="macro-label">Fat</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '40%', background: '#1D9E75' }} /></div><span className="macro-val" style={{ color: '#1D9E75' }}>45–55g</span></div>
            <div className="macro-row"><span className="macro-label">Added sugar</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '45%', background: '#E24B4A' }} /></div><span className="macro-val" style={{ color: '#E24B4A' }}>≤25g</span></div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Rest day macros</div>
            <div className="macro-row"><span className="macro-label">Protein</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '28%', background: '#D4537E' }} /></div><span className="macro-val" style={{ color: '#D4537E' }}>85–95g</span></div>
            <div className="macro-row"><span className="macro-label">Carbs</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '42%', background: '#EF9F27' }} /></div><span className="macro-val" style={{ color: '#BA7517' }}>110–130g</span></div>
            <div className="macro-row"><span className="macro-label">Fat</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '38%', background: '#1D9E75' }} /></div><span className="macro-val" style={{ color: '#1D9E75' }}>40–50g</span></div>
            <div className="macro-row"><span className="macro-label">Added sugar</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '35%', background: '#E24B4A' }} /></div><span className="macro-val" style={{ color: '#E24B4A' }}>≤20g</span></div>
          </div>
        </div>
        <div style={{ marginTop: 10, background: '#fdf6f4', borderRadius: 8, padding: '8px 12px', fontSize: 11, color: '#7a6a66', lineHeight: 1.7 }}>
          <span style={{ fontWeight: 600, color: '#993556' }}>IF meal split: </span>Lunch ~700–800 kcal (bigger — fuels evening training) · Dinner ~600–700 kcal (lighter — post-workout recovery)
        </div>
      </div>

      {/* PROTEIN SOURCES */}
      <div className="card">
        <p className="sl">Protein sources — Thai meals (smaller portions)</p>
        <div style={{ fontSize: 11, color: '#7a6a66', marginBottom: 10 }}>Main sources: Chicken · Fish · Eggs · Greek yogurt · Whey (if needed)</div>
        <div className="grid2">
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#9e8a85', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Best choices</div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>ข้าวมันไก่ (อกไก่ไม่หนัง)</div><div style={{ fontSize: 10, color: '#0F6E56' }}>Smaller portion · no skin ✓</div></div><span className="pbadge">20–30g</span></div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>กระเพราไก่สับ + ไข่ดาว</div><div style={{ fontSize: 10, color: '#0F6E56' }}>Good fat loss meal ✓</div></div><span className="pbadge">18–28g</span></div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>เกาเหลาหมูล้วน + ไข่ + ข้าว</div><div style={{ fontSize: 10, color: '#0F6E56' }}>Low fat · good recovery ✓</div></div><span className="pbadge">~18–25g</span></div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>Greek yogurt</div><div style={{ fontSize: 10, color: '#0F6E56' }}>Great in eating window ✓</div></div><span className="pbadge">10–15g</span></div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#9e8a85', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Watch carefully</div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>คอหมูย่าง</div><div style={{ fontSize: 10, color: '#BA7517' }}>High fat cut — limit frequency</div></div><span className="pbadge">13–20g</span></div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>บะหมี่หมูต้มยำ</div><div style={{ fontSize: 10, color: '#7a6a66' }}>Lower protein per portion</div></div><span className="pbadge">12–20g</span></div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>ข้าวผัดกุ้ง</div><div style={{ fontSize: 10, color: '#BA7517' }}>High oil — ask less oil</div></div><span className="pbadge">10–22g</span></div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>ก๋วยเตี๋ยวไก่มะระ</div><div style={{ fontSize: 10, color: '#7a6a66' }}>Control portion size</div></div><span className="pbadge">18–35g</span></div>
          </div>
        </div>
        <div style={{ marginTop: 10, background: '#FBEAF0', borderRadius: 8, padding: '8px 12px', fontSize: 11, color: '#993556', lineHeight: 1.7 }}>
          <span style={{ fontWeight: 600 }}>Protein target: 90–100g/day across 2 meals</span> · ~45–50g per meal · Add eggs or yogurt if falling short
        </div>
      </div>

      {/* SUGAR + QUICK REF */}
      <div className="grid2">
        <div className="card">
          <p className="sl">Sugar traps — Bangkok</p>
          <div className="food-row"><span>Bubble tea (full sugar)</span><span style={{ color: '#E24B4A', fontWeight: 600 }}>50–70g ⚠️</span></div>
          <div className="food-row"><span>Thai iced tea</span><span style={{ color: '#E24B4A', fontWeight: 600 }}>30–40g ⚠️</span></div>
          <div className="food-row"><span>1 can Coke</span><span style={{ color: '#E24B4A', fontWeight: 600 }}>39g ⚠️</span></div>
          <div className="food-row"><span>Sports drink</span><span style={{ color: '#BA7517', fontWeight: 600 }}>20–25g (training only)</span></div>
          <div className="food-row"><span>Flavored yogurt</span><span style={{ color: '#BA7517', fontWeight: 600 }}>12–15g</span></div>
          <div className="food-row"><span>Unsweetened green tea</span><span style={{ color: '#1D9E75', fontWeight: 600 }}>0g ✓ ideal</span></div>
          <div style={{ marginTop: 8, background: '#FBEAF0', borderRadius: 6, padding: '7px 10px', fontSize: 11, color: '#993556', fontWeight: 600 }}>≤25g training days · ≤20g rest days</div>
        </div>
        <div className="card">
          <p className="sl">Thai food macros (C · P · F)</p>
          <div className="food-row"><span>ข้าวมันไก่ (small)</span><span style={{ fontSize: 11, color: '#7a6a66' }}>45c · 25p · 8f</span></div>
          <div className="food-row"><span>กระเพราไก่ + ข้าว</span><span style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600 }}>50c · 28p · 8f ✓</span></div>
          <div className="food-row"><span>เกาเหลา + ไข่ + ข้าว</span><span style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600 }}>40c · 22p · 6f ✓</span></div>
          <div className="food-row"><span>Som Tum</span><span style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600 }}>15c · 5p · 2f ✓ low cal</span></div>
          <div className="food-row"><span>Pad Thai</span><span style={{ fontSize: 11, color: '#BA7517', fontWeight: 600 }}>75c · 18p · 15f — high cal</span></div>
          <div className="food-row"><span>Thai Milk Tea</span><span style={{ fontSize: 11, color: '#E24B4A', fontWeight: 600 }}>30g sugar ⚠️</span></div>
        </div>
      </div>

      {/* KEY RULES */}
      <div className="card">
        <p className="sl">Non-negotiable rules</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          <div className="card-sm" style={{ background: '#FBEAF0' }}><div style={{ fontSize: 11, fontWeight: 600, color: '#993556', marginBottom: 3 }}>Log every session</div><div style={{ fontSize: 11, color: '#7a6a66' }}>Write down weights. Next session: add 1 rep or increase weight. This is progress.</div></div>
          <div className="card-sm" style={{ background: '#FBEAF0' }}><div style={{ fontSize: 11, fontWeight: 600, color: '#993556', marginBottom: 3 }}>Cardio before lifting</div><div style={{ fontSize: 11, color: '#7a6a66' }}>Zone 2 cardio first — primes fat burning before resistance training every session</div></div>
          <div className="card-sm" style={{ background: '#FBEAF0' }}><div style={{ fontSize: 11, fontWeight: 600, color: '#993556', marginBottom: 3 }}>Protein every meal</div><div style={{ fontSize: 11, color: '#7a6a66' }}>45–50g per meal across lunch + dinner. Preserves muscle while losing fat.</div></div>
          <div className="card-sm" style={{ background: '#FBEAF0' }}><div style={{ fontSize: 11, fontWeight: 600, color: '#993556', marginBottom: 3 }}>Sleep 7–8 hrs</div><div style={{ fontSize: 11, color: '#7a6a66' }}>Poor sleep raises cortisol — holds fat and kills recovery. Non-negotiable.</div></div>
          <div className="card-sm" style={{ background: '#FBEAF0' }}><div style={{ fontSize: 11, fontWeight: 600, color: '#993556', marginBottom: 3 }}>No bubble tea / Thai tea</div><div style={{ fontSize: 11, color: '#7a6a66' }}>One drink uses the full day's sugar budget. Green tea or water only.</div></div>
          <div className="card-sm" style={{ background: '#FBEAF0' }}><div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', marginBottom: 3 }}>Goal: fat loss</div><div style={{ fontSize: 11, color: '#7a6a66' }}>Target 17–20% BF at 44–46 kg in ~4–5 months. Consistent &gt; perfect.</div></div>
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 10, color: '#9e8a85', padding: '8px 0' }}>Yiwa · Hybrid PPL Fat Loss Plan · Bangkok 🇹🇭 · With ♡ from Voramet</div>
    </>
  );
}
