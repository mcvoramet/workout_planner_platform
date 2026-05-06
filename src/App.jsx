import { useState, useEffect } from 'react';
import MCPlan from './plans/MCPlan.jsx';
import YiwaPlan from './plans/YiwaPlan.jsx';

export default function App() {
  const [active, setActive] = useState(() => {
    return localStorage.getItem('planner') || 'mc';
  });

  useEffect(() => {
    localStorage.setItem('planner', active);
    document.body.classList.remove('theme-mc', 'theme-yiwa');
    document.body.classList.add(active === 'mc' ? 'theme-mc' : 'theme-yiwa');
  }, [active]);

  return (
    <div className="app-shell">
      <div className="page">
        <div className="switcher">
          <button
            className={`mc ${active === 'mc' ? 'active' : ''}`}
            onClick={() => setActive('mc')}
          >
            MC · Hybrid Recomp
          </button>
          <button
            className={`yiwa ${active === 'yiwa' ? 'active' : ''}`}
            onClick={() => setActive('yiwa')}
          >
            Yiwa · PPL Fat Loss
          </button>
        </div>
        {active === 'mc' ? <MCPlan /> : <YiwaPlan />}
      </div>
    </div>
  );
}
