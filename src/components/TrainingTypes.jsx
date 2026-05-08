export default function TrainingTypes() {
  const cardio = [
    {
      bar: '#1D9E75',
      titleColor: '#085041',
      title: 'Aerobic Base (Zone 2)',
      body:
        'Steady-state cardio at conversational pace (~60–70% HRmax). Builds mitochondria, fat oxidation, and capillary density. Foundation of endurance — should be the bulk of cardio volume.'
    },
    {
      bar: '#EF9F27',
      titleColor: '#BA7517',
      title: 'VO₂ Max',
      body:
        'High-intensity intervals (~90–100% HRmax) — typically 3–5 min hard with equal rest. Raises the ceiling of how much oxygen your body can actually use — the engine size.'
    },
    {
      bar: '#E24B4A',
      titleColor: '#791F1F',
      title: 'Anaerobic',
      body:
        'All-out short efforts (10–90 sec) past what oxygen can supply. Develops lactate tolerance, sprint power, and top-end speed.'
    }
  ];

  const muscle = [
    {
      bar: '#639922',
      titleColor: '#27500A',
      title: 'Endurance',
      body:
        'Light load, 15–25+ reps, short rest. Builds muscular stamina and local capillary density. Higher calorie burn, lower hypertrophy stimulus.'
    },
    {
      bar: '#7F77DD',
      titleColor: '#3C3489',
      title: 'Hypertrophy',
      body:
        'Moderate load, 8–15 reps, 60–90 sec rest. Maximizes muscle growth via mechanical tension and metabolic stress. The classic bodybuilder range.'
    },
    {
      bar: '#378ADD',
      titleColor: '#0C447C',
      title: 'Strength + Speed → Power',
      body:
        'Heavy load 1–6 reps (strength) or explosive light load (speed). Combined → power. 3+ min rest. Builds max force and rate of force development.'
    }
  ];

  const Block = ({ heading, headingColor, items }) => (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, color: headingColor }}>
        {heading}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        {items.map((it) => (
          <div key={it.title} className="card-sm" style={{ borderTop: `3px solid ${it.bar}` }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: it.titleColor, marginBottom: 4 }}>
              {it.title}
            </div>
            <div style={{ fontSize: 11, color: '#5f5e5a', lineHeight: 1.6 }}>
              {it.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="card">
      <p className="sl">Training types — quick reference</p>
      <Block heading="Cardiovascular" headingColor="#185FA5" items={cardio} />
      <Block heading="Musculoskeletal" headingColor="#3C3489" items={muscle} />
      <div
        style={{
          marginTop: 4,
          background: '#f5f4f0',
          borderRadius: 8,
          padding: '8px 12px',
          fontSize: 11,
          color: '#5f5e5a',
          lineHeight: 1.6
        }}
      >
        <span style={{ fontWeight: 600 }}>Why this matters:</span> different stimuli train different
        physiology. A balanced plan touches more than one zone — Zone 2 builds the base your VO₂ max
        and anaerobic work sit on top of, and hypertrophy work feeds the strength + power ceiling.
      </div>
    </div>
  );
}
