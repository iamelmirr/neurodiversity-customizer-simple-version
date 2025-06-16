import React, { useState } from 'react';

const ModeButton = ({ label, icon, isActive, onClick, tooltip, className = '' }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button 
        className={`mode-button w-full ${isActive ? 'active' : ''}`}
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label={`${label} mode ${tooltip ? `- ${tooltip}` : ''}`}
      >
        <div className="icon-container">
          {icon}
        </div>
        <span className="text-sm font-medium">{label}</span>
      </button>
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-lg z-10 w-32 text-center">
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default ModeButton;
