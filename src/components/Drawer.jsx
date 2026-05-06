import { useState } from 'react';

export default function Drawer({ btnStyle, title, titleColor, subtitle, subtitleColor, children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="session-btn" style={btnStyle} onClick={() => setOpen(o => !o)}>
        <span className="sname" style={{ color: titleColor }}>{title}</span>
        <span className="stype" style={{ color: subtitleColor }}>{subtitle}</span>
        <span className="stoggle" style={{ color: subtitleColor }}>
          {open ? '▲ tap to collapse' : '▼ tap to expand'}
        </span>
      </button>
      <div className={`ex-drawer ${open ? 'open' : ''}`}>
        {children}
      </div>
    </>
  );
}
