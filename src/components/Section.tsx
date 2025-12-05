import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  icon,
  children,
  isExpanded,
  onToggle,
}) => {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '20px',
        marginBottom: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        border: '1px solid #e2e8f0',
      }}
    >
      <button
        onClick={() => onToggle(id)}
        style={{
          width: '100%',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          border: 'none',
          cursor: 'pointer',
          borderBottom: isExpanded ? '1px solid #e2e8f0' : 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>{icon}</span>
          <span
            style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#1e293b',
            }}
          >
            {title}
          </span>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#64748b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isExpanded && <div style={{ padding: '24px' }}>{children}</div>}
    </div>
  );
};

