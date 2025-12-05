import React from 'react';

export const ClubTab: React.FC = () => {
  return (
    <div>
      <div
        style={{
          background: 'white',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: '32px' }}>🎯</span>
          <h3
            style={{
              margin: 0,
              fontSize: '20px',
              fontWeight: '700',
              color: '#1e293b',
            }}
          >
            동아리 신청 가이드
          </h3>
        </div>

        <div
          style={{
            padding: '48px 24px',
            background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
            borderRadius: '16px',
            textAlign: 'center',
            border: '2px dashed #fbbf24',
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚧</div>
          <h4
            style={{
              margin: '0 0 8px 0',
              fontSize: '18px',
              fontWeight: '700',
              color: '#b45309',
            }}
          >
            추후 업데이트 예정
          </h4>
          <p
            style={{
              margin: 0,
              color: '#d97706',
              fontSize: '14px',
            }}
          >
            동아리 신청 관련 내용이 곧 추가될 예정입니다
          </p>
        </div>
      </div>
    </div>
  );
};

