import React from 'react';

interface InfoCardProps {
  icon: string;
  title: string;
  items: string[];
  type?: 'default' | 'warning' | 'info';
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  items,
  type = 'default',
}) => {
  const getBackground = (): string => {
    switch (type) {
      case 'warning':
        return 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)';
      case 'info':
        return 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)';
      default:
        return 'white';
    }
  };

  const getTextColor = (): string => {
    switch (type) {
      case 'warning':
        return '#92400e';
      case 'info':
        return '#1e40af';
      default:
        return '#1e293b';
    }
  };

  const getItemColor = (): string => {
    switch (type) {
      case 'warning':
        return '#a16207';
      case 'info':
        return '#1e40af';
      default:
        return '#475569';
    }
  };

  return (
    <div
      style={{
        background: getBackground(),
        borderRadius: '16px',
        padding: '20px',
        boxShadow: type === 'default' ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
        border: type === 'default' ? '1px solid #e2e8f0' : 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '14px',
        }}
      >
        <span style={{ fontSize: '22px' }}>{icon}</span>
        <h4
          style={{
            margin: 0,
            fontSize: '15px',
            fontWeight: '700',
            color: getTextColor(),
          }}
        >
          {title}
        </h4>
      </div>
      <ul
        style={{
          margin: 0,
          paddingLeft: '20px',
          color: getItemColor(),
          fontSize: '14px',
          lineHeight: '1.8',
        }}
      >
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

