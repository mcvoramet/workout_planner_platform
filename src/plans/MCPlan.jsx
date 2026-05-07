import Drawer from '../components/Drawer.jsx';

const searchUrl = (name) =>
  `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(name + ' exercise form')}`;

const ExItem = ({ n, name, detail }) => (
  <div className="ex-item">
    <span className="ex-num">{n}</span>
    <div>
      <a
        className="ex-name"
        href={searchUrl(name)}
        target="_blank"
        rel="noopener noreferrer"
        title={`Google search: ${name}`}
      >{name}</a>
      <div className="ex-detail">{detail}</div>
    </div>
  </div>
);

export default function MCPlan() {
  return (
    <>
      {/* HEADER */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 600, color: '#0C447C', flexShrink: 0 }}>V</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: '#1a1a18', marginBottom: 3 }}>Voramet — Hybrid Recomp Plan</div>
            <div style={{ fontSize: 12, color: '#5f5e5a' }}>Male · 26 · 180 cm · Bangkok 🇹🇭</div>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}><div className="big-num" style={{ color: '#185FA5' }}>74.1</div><div className="sub">kg</div></div>
            <div style={{ textAlign: 'center' }}><div className="big-num" style={{ color: '#0F6E56' }}>34.8</div><div className="sub">kg muscle</div></div>
            <div style={{ textAlign: 'center' }}><div className="big-num" style={{ color: '#BA7517' }}>17.4%</div><div className="sub">body fat</div></div>
          </div>
        </div>
      </div>

      {/* BF JOURNEY */}
      <div className="card">
        <p className="sl">Body fat journey</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 12 }}>
          <div className="card-sm" style={{ borderLeft: '3px solid #E24B4A', borderRadius: '0 8px 8px 0' }}><div style={{ fontSize: 18, fontWeight: 600, color: '#E24B4A' }}>17.4%</div><div style={{ fontSize: 11, color: '#5f5e5a' }}>Now — borderline avg</div><div style={{ fontSize: 10, color: '#888780', marginTop: 2 }}>74.1 kg</div></div>
          <div className="card-sm" style={{ borderLeft: '3px solid #EF9F27', borderRadius: '0 8px 8px 0' }}><div style={{ fontSize: 18, fontWeight: 600, color: '#EF9F27' }}>15%</div><div style={{ fontSize: 11, color: '#5f5e5a' }}>Phase 1 · 8–12 wks</div><div style={{ fontSize: 10, color: '#888780', marginTop: 2 }}>~72.5 kg</div></div>
          <div className="card-sm" style={{ borderLeft: '3px solid #1D9E75', borderRadius: '0 8px 8px 0' }}><div style={{ fontSize: 18, fontWeight: 600, color: '#1D9E75' }}>13%</div><div style={{ fontSize: 11, color: '#5f5e5a' }}>Phase 2 · +8–10 wks</div><div style={{ fontSize: 10, color: '#888780', marginTop: 2 }}>~71.5 kg</div></div>
          <div className="card-sm" style={{ borderLeft: '3px solid #378ADD', borderRadius: '0 8px 8px 0' }}><div style={{ fontSize: 18, fontWeight: 600, color: '#378ADD' }}>11–12%</div><div style={{ fontSize: 11, color: '#5f5e5a' }}>Stretch · +6–8 wks</div><div style={{ fontSize: 10, color: '#888780', marginTop: 2 }}>~70 kg</div></div>
        </div>
        <div className="bar-wrap"><div className="bar-fill" style={{ width: '65%', background: 'linear-gradient(90deg,#378ADD 0%,#1D9E75 40%,#EF9F27 70%,#E24B4A 100%)' }} /></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
          <span style={{ fontSize: 10, color: '#888780' }}>11% athletic</span>
          <span style={{ fontSize: 10, color: '#BA7517', fontWeight: 600 }}>▲ you are here</span>
          <span style={{ fontSize: 10, color: '#888780' }}>25%+ obese</span>
        </div>
      </div>

      {/* WEEKLY SCHEDULE */}
      <div className="card">
        <p className="sl">Weekly schedule — click session to see exercises</p>
        <div className="sched-head"><div /><div>Morning</div><div>Afternoon</div><div>Evening</div></div>

        {/* MON */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#EEEDFE' }}>
            <span className="day-name" style={{ color: '#3C3489' }}>Mon</span>
            <span style={{ fontSize: 9, color: '#7F77DD' }}>Hypertrophy</span>
          </div>
          <div>
            <Drawer btnStyle={{ background: '#EEEDFE' }} title="Lower B" titleColor="#3C3489" subtitle="~50 min · 7 exercises" subtitleColor="#7F77DD">
              <ExItem n={1} name="Front/Goblet Squat" detail="8–10 reps · 3 sets · 2 min rest" />
              <ExItem n={2} name="Dumbbell RDL" detail="10–12 reps · 3 sets · 2 min rest" />
              <ExItem n={3} name="Walking Lunges" detail="10–12/leg · 3 sets · 90 sec rest" />
              <ExItem n={4} name="Leg Extension" detail="12–15 reps · 3 sets · 90 sec rest" />
              <ExItem n={5} name="Leg Curl" detail="12–15 reps · 3 sets · 90 sec rest" />
              <ExItem n={6} name="Seated Calf Raise" detail="12–15 reps · 3 sets · 60 sec rest" />
              <ExItem n={7} name="Cable Crunch" detail="12–15 reps · 3 sets · 60 sec rest" />
            </Drawer>
          </div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#888780' }}>—</span></div>
          <div>
            <Drawer btnStyle={{ background: '#E1F5EE' }} title="Badminton Game" titleColor="#085041" subtitle="Zone 2–3 · casual" subtitleColor="#1D9E75">
              <div style={{ fontSize: 11, color: '#5f5e5a', lineHeight: 1.7 }}>
                ~300–450 kcal burn<br />
                Keep it casual — legs already trained this morning<br />
                No intense rallies or jumping smashes
              </div>
            </Drawer>
          </div>
        </div>

        {/* TUE */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#f5f4f0' }}><span className="day-name" style={{ color: '#5f5e5a' }}>Tue</span></div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#888780' }}>—</span></div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#888780' }}>—</span></div>
          <div>
            <Drawer btnStyle={{ background: '#E6F1FB' }} title="Upper A" titleColor="#0C447C" subtitle="Strength · ~55 min · 6 exercises" subtitleColor="#378ADD">
              <ExItem n={1} name="Barbell Bench Press" detail="5–7 reps · 4 sets · 3 min rest" />
              <ExItem n={2} name="Weighted Pull-ups" detail="5–7 reps · 4 sets · 3 min rest" />
              <ExItem n={3} name="Overhead Press" detail="6–8 reps · 3 sets · 2–3 min rest" />
              <ExItem n={4} name="Barbell Row" detail="6–8 reps · 3 sets · 2–3 min rest" />
              <ExItem n={5} name="Dumbbell Curl" detail="8–12 reps · 2 sets · 90 sec rest" />
              <ExItem n={6} name="Tricep Pushdown" detail="8–12 reps · 2 sets · 90 sec rest" />
            </Drawer>
          </div>
        </div>

        {/* WED */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#f5f4f0' }}><span className="day-name" style={{ color: '#5f5e5a' }}>Wed</span></div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#888780' }}>—</span></div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#888780' }}>—</span></div>
          <div>
            <Drawer btnStyle={{ background: '#E6F1FB' }} title="Lower A" titleColor="#0C447C" subtitle="Strength · ~50 min · 6 exercises" subtitleColor="#378ADD">
              <ExItem n={1} name="Barbell Back Squat" detail="5–7 reps · 4 sets · 3 min rest" />
              <ExItem n={2} name="Romanian Deadlift" detail="6–8 reps · 3 sets · 2–3 min rest" />
              <ExItem n={3} name="Leg Press" detail="8–10 reps · 3 sets · 2 min rest" />
              <ExItem n={4} name="Leg Curl" detail="10–12 reps · 3 sets · 90 sec rest" />
              <ExItem n={5} name="Standing Calf Raise" detail="10–15 reps · 3 sets · 90 sec rest" />
              <ExItem n={6} name="Plank" detail="30–60 sec · 3 sets · 60 sec rest" />
            </Drawer>
          </div>
        </div>

        {/* THU */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#EEEDFE' }}>
            <span className="day-name" style={{ color: '#3C3489' }}>Thu</span>
            <span style={{ fontSize: 9, color: '#7F77DD' }}>Hypertrophy</span>
          </div>
          <div>
            <Drawer btnStyle={{ background: '#FAEEDA' }} title="Morning Run" titleColor="#633806" subtitle="Zone 2 · easy" subtitleColor="#BA7517">
              <div style={{ fontSize: 11, color: '#5f5e5a', lineHeight: 1.7 }}>
                20–30 min steady pace<br />
                Conversational pace — can hold a sentence<br />
                Light pre-Upper B fat burn — fuel up before evening lift
              </div>
            </Drawer>
          </div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#888780' }}>—</span></div>
          <div>
            <Drawer btnStyle={{ background: '#EEEDFE' }} title="Upper B" titleColor="#3C3489" subtitle="Hypertrophy · ~55 min · 8 exercises" subtitleColor="#7F77DD">
              <ExItem n={1} name="Incline Dumbbell Press" detail="8–12 reps · 3 sets · 2 min rest" />
              <ExItem n={2} name="Cable Row" detail="10–12 reps · 3 sets · 2 min rest" />
              <ExItem n={3} name="DB Lateral Raise" detail="12–15 reps · 3 sets · 90 sec rest" />
              <ExItem n={4} name="Lat Pulldown" detail="10–12 reps · 3 sets · 2 min rest" />
              <ExItem n={5} name="Cable Fly" detail="12–15 reps · 2 sets · 90 sec rest" />
              <ExItem n={6} name="Face Pull" detail="15–20 reps · 3 sets · 60 sec rest" />
              <ExItem n={7} name="Hammer Curl" detail="10–12 reps · 2 sets · 90 sec rest" />
              <ExItem n={8} name="Overhead Tricep Ext." detail="10–12 reps · 2 sets · 90 sec rest" />
            </Drawer>
          </div>
        </div>

        {/* FRI */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#FAEEDA' }}>
            <span className="day-name" style={{ color: '#633806' }}>Fri</span>
            <span style={{ fontSize: 9, color: '#BA7517', fontWeight: 600 }}>HIGH FUEL</span>
          </div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#888780' }}>—</span></div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#888780' }}>—</span></div>
          <div>
            <Drawer btnStyle={{ background: '#FCEBEB' }} title="Badminton Practice" titleColor="#791F1F" subtitle="HIIT · Zone 3–5" subtitleColor="#E24B4A">
              <div style={{ fontSize: 11, color: '#5f5e5a', lineHeight: 1.7 }}>
                ~500–700 kcal burn<br />
                Highest intensity session of the week<br />
                Eat 2,700 kcal today total<br />
                Post session: protein + fast carbs within 1 hr
              </div>
            </Drawer>
          </div>
        </div>

        {/* SAT */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#FAEEDA' }}><span className="day-name" style={{ color: '#633806' }}>Sat</span></div>
          <div>
            <Drawer btnStyle={{ background: '#FAEEDA' }} title="Morning Run" titleColor="#633806" subtitle="Zone 2 · easy" subtitleColor="#BA7517">
              <div style={{ fontSize: 11, color: '#5f5e5a', lineHeight: 1.7 }}>
                20–30 min steady pace<br />
                Active recovery from Fri HIIT<br />
                Very easy effort today
              </div>
            </Drawer>
          </div>
          <div className="empty-cell"><span style={{ fontSize: 11, color: '#888780' }}>—</span></div>
          <div>
            <Drawer btnStyle={{ background: '#E1F5EE' }} title="Badminton Game" titleColor="#085041" subtitle="Zone 2–3 · casual" subtitleColor="#1D9E75">
              <div style={{ fontSize: 11, color: '#5f5e5a', lineHeight: 1.7 }}>
                ~300–450 kcal burn<br />
                No gym session today — can play freely<br />
                Enjoy the game, social recovery day
              </div>
            </Drawer>
          </div>
        </div>

        {/* SUN */}
        <div className="sched-row">
          <div className="day-cell" style={{ background: '#f5f4f0' }}><span className="day-name" style={{ color: '#888780' }}>Sun</span></div>
          <div className="rest-cell"><span style={{ fontSize: 11, color: '#888780' }}>Full rest — recovery day · lowest calorie intake (2,150 kcal)</span></div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 12, marginTop: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 10, color: '#5f5e5a' }}><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: '#378ADD', marginRight: 3 }} />Strength</span>
          <span style={{ fontSize: 10, color: '#5f5e5a' }}><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: '#7F77DD', marginRight: 3 }} />Hypertrophy</span>
          <span style={{ fontSize: 10, color: '#5f5e5a' }}><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: '#1D9E75', marginRight: 3 }} />Badminton game</span>
          <span style={{ fontSize: 10, color: '#5f5e5a' }}><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: '#E24B4A', marginRight: 3 }} />Badminton HIIT</span>
          <span style={{ fontSize: 10, color: '#5f5e5a' }}><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: '#EF9F27', marginRight: 3 }} />Run</span>
        </div>
      </div>

      {/* NUTRITION */}
      <div className="card">
        <p className="sl">Daily nutrition targets</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 14 }}>
          <div className="card-sm" style={{ textAlign: 'center' }}><div style={{ fontSize: 10, color: '#888780', marginBottom: 4 }}>Rest (Sun)</div><div style={{ fontSize: 20, fontWeight: 600 }}>2,150</div><div className="sub">kcal</div></div>
          <div className="card-sm" style={{ textAlign: 'center', border: '1px solid #B5D4F4' }}><div style={{ fontSize: 10, color: '#185FA5', marginBottom: 4 }}>Strength day</div><div style={{ fontSize: 20, fontWeight: 600, color: '#185FA5' }}>2,550</div><div className="sub">kcal</div></div>
          <div className="card-sm" style={{ textAlign: 'center', border: '1px solid #FAC775' }}><div style={{ fontSize: 10, color: '#BA7517', marginBottom: 4 }}>Run + game</div><div style={{ fontSize: 20, fontWeight: 600, color: '#BA7517' }}>2,450</div><div className="sub">kcal</div></div>
          <div className="card-sm" style={{ textAlign: 'center', border: '1px solid #F09595' }}><div style={{ fontSize: 10, color: '#A32D2D', marginBottom: 4 }}>Fri (Run + HIIT)</div><div style={{ fontSize: 20, fontWeight: 600, color: '#A32D2D' }}>2,700</div><div className="sub">kcal — highest</div></div>
        </div>
        <div className="grid2">
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Strength day</div>
            <div className="macro-row"><span className="macro-label">Protein</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '25%', background: '#378ADD' }} /></div><span className="macro-val" style={{ color: '#378ADD' }}>155g</span></div>
            <div className="macro-row"><span className="macro-label">Carbs</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '72%', background: '#EF9F27' }} /></div><span className="macro-val" style={{ color: '#BA7517' }}>275g</span></div>
            <div className="macro-row"><span className="macro-label">Fat</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '50%', background: '#1D9E75' }} /></div><span className="macro-val" style={{ color: '#1D9E75' }}>78g</span></div>
            <div className="macro-row"><span className="macro-label">Added sugar</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '60%', background: '#E24B4A' }} /></div><span className="macro-val" style={{ color: '#E24B4A' }}>≤36g</span></div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Fri (Run + HIIT)</div>
            <div className="macro-row"><span className="macro-label">Protein</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '25%', background: '#378ADD' }} /></div><span className="macro-val" style={{ color: '#378ADD' }}>160g</span></div>
            <div className="macro-row"><span className="macro-label">Carbs</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '85%', background: '#EF9F27' }} /></div><span className="macro-val" style={{ color: '#BA7517' }}>320g</span></div>
            <div className="macro-row"><span className="macro-label">Fat</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '46%', background: '#1D9E75' }} /></div><span className="macro-val" style={{ color: '#1D9E75' }}>73g</span></div>
            <div className="macro-row"><span className="macro-label">Added sugar</span><div className="macro-bar-wrap"><div className="macro-bar" style={{ width: '78%', background: '#E24B4A' }} /></div><span className="macro-val" style={{ color: '#E24B4A' }}>≤45g</span></div>
          </div>
        </div>
      </div>

      {/* PROTEIN SOURCES */}
      <div className="card">
        <p className="sl">Your protein sources — Thai meals</p>
        <div style={{ fontSize: 11, color: '#5f5e5a', marginBottom: 10 }}>Main sources: Chicken · Beef · Fish · Eggs · Greek yogurt · Whey protein</div>
        <div className="grid2">
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Supplement</div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>ISO Fitwhey (1 scoop)</div><div style={{ fontSize: 10, color: '#0F6E56' }}>Post-workout · fast absorbing</div></div><span className="pbadge">30g</span></div>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '10px 0 6px' }}>Thai meals</div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>ข้าวมันไก่ (อกไก่ไม่หนัง)</div><div style={{ fontSize: 10, color: '#0F6E56' }}>Best daily staple ✓</div></div><span className="pbadge">27–42g</span></div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>ก๋วยเตี๋ยวไก่มะระ (อกไก่)</div><div style={{ fontSize: 10, color: '#5f5e5a' }}>Wide range by portion</div></div><span className="pbadge">24–55g</span></div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>กระเพราหมูสับ + ไข่ดาว</div><div style={{ fontSize: 10, color: '#0F6E56' }}>Good protein + carb ✓</div></div><span className="pbadge">20–39g</span></div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#888780', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>More meals</div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>คอหมูย่าง</div><div style={{ fontSize: 10, color: '#BA7517' }}>Watch fat content</div></div><span className="pbadge">17–28g</span></div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>บะหมี่หมูต้มยำ</div><div style={{ fontSize: 10, color: '#5f5e5a' }}>Varies by shop</div></div><span className="pbadge">15–28g</span></div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>ข้าวผัดกุ้ง</div><div style={{ fontSize: 10, color: '#5f5e5a' }}>Higher carb, lower protein</div></div><span className="pbadge">13–35g</span></div>
            <div className="food-row"><div><div style={{ fontSize: 12, fontWeight: 600 }}>เกาเหลาหมูล้วน + ไข่ + ข้าว</div><div style={{ fontSize: 10, color: '#0F6E56' }}>Good recovery meal ✓</div></div><span className="pbadge">~24–30g</span></div>
          </div>
        </div>
      </div>

      {/* SUGAR + QUICK REF */}
      <div className="grid2">
        <div className="card">
          <p className="sl">Sugar traps — Bangkok</p>
          <div className="food-row"><span>Thai iced tea</span><span style={{ color: '#E24B4A', fontWeight: 600 }}>30–40g ⚠️</span></div>
          <div className="food-row"><span>1 can Coke</span><span style={{ color: '#E24B4A', fontWeight: 600 }}>39g ⚠️</span></div>
          <div className="food-row"><span>Sports drink</span><span style={{ color: '#BA7517', fontWeight: 600 }}>20–25g</span></div>
          <div className="food-row"><span>Flavored yogurt</span><span style={{ color: '#BA7517', fontWeight: 600 }}>12–15g</span></div>
          <div className="food-row"><span>BBQ sauce (1 tbsp)</span><span style={{ color: '#1D9E75', fontWeight: 600 }}>6g</span></div>
          <div className="food-row"><span>Unsweetened green tea</span><span style={{ color: '#1D9E75', fontWeight: 600 }}>0g ✓</span></div>
          <div style={{ marginTop: 8, background: '#FCEBEB', borderRadius: 6, padding: '7px 10px', fontSize: 11, color: '#791F1F', fontWeight: 600 }}>Daily limit: ≤36g added sugar on normal days</div>
        </div>
        <div className="card">
          <p className="sl">Thai food macros (C · P · F)</p>
          <div className="food-row"><span>ข้าวมันไก่</span><span style={{ fontSize: 11, color: '#5f5e5a' }}>65c · 35p · 12f</span></div>
          <div className="food-row"><span>Pad Thai</span><span style={{ fontSize: 11, color: '#5f5e5a' }}>75c · 25p · 18f</span></div>
          <div className="food-row"><span>Khao Pad</span><span style={{ fontSize: 11, color: '#5f5e5a' }}>70c · 20p · 15f</span></div>
          <div className="food-row"><span>Som Tum</span><span style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600 }}>15c · 5p · 2f ✓</span></div>
          <div className="food-row"><span>เกาเหลา + ไข่ + ข้าว</span><span style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600 }}>50c · 27p · 8f ✓</span></div>
          <div className="food-row"><span>Thai Milk Tea</span><span style={{ fontSize: 11, color: '#E24B4A', fontWeight: 600 }}>30g sugar ⚠️</span></div>
        </div>
      </div>

      {/* KEY RULES */}
      <div className="card">
        <p className="sl">Non-negotiable rules</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          <div className="card-sm"><div style={{ fontSize: 11, fontWeight: 600, color: '#185FA5', marginBottom: 3 }}>Protein first</div><div style={{ fontSize: 11, color: '#5f5e5a' }}>148–160g every day regardless of calorie target</div></div>
          <div className="card-sm"><div style={{ fontSize: 11, fontWeight: 600, color: '#BA7517', marginBottom: 3 }}>Fri = highest fuel day</div><div style={{ fontSize: 11, color: '#5f5e5a' }}>Run AM + HIIT PM = biggest burn. Eat 2,700 kcal</div></div>
          <div className="card-sm"><div style={{ fontSize: 11, fontWeight: 600, color: '#0F6E56', marginBottom: 3 }}>Sleep 7–8 hrs</div><div style={{ fontSize: 11, color: '#5f5e5a' }}>6 active days — recovery is part of the program</div></div>
          <div className="card-sm"><div style={{ fontSize: 11, fontWeight: 600, color: '#D85A30', marginBottom: 3 }}>Sweet drinks = no</div><div style={{ fontSize: 11, color: '#5f5e5a' }}>Switch Thai milk tea → green tea. Saves 30–40g sugar daily</div></div>
          <div className="card-sm"><div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', marginBottom: 3 }}>Goal: recomp</div><div style={{ fontSize: 11, color: '#5f5e5a' }}>Target 13% BF at ~72 kg in ~4–5 months</div></div>
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 10, color: '#888780', padding: '8px 0' }}>Voramet · Hybrid Recomp Plan · Bangkok 🇹🇭</div>
    </>
  );
}
