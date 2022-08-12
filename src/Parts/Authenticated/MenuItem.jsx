import React from 'react';

export default function MenuItem({ link, icon, text, isActive }) {
  return (
    <a
      href={link}
      className={`side-link cursor-pointer ${isActive && 'active'}`}
    >
      {icon}
      {text}
    </a>
  );
}
