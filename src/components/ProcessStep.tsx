import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  children: React.ReactNode;
  note?: string;
  exampleImage?: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  children,
  note,
  exampleImage,
}) => {
  return (
    <div
      style={{
        position: 'relative',
        paddingLeft: '48px',
        paddingBottom: '24px',
        borderLeft: '2px solid #e2e8f0',
        marginLeft: '16px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '-17px',
          top: '0',
          width: '32px',
          height: '32px',
          background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: '700',
          fontSize: '14px',
          boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)',
        }}
      >
        {number}
      </div>
      <div style={{ paddingTop: '4px' }}>
        <h4
          style={{
            margin: '0 0 8px 0',
            fontSize: '16px',
            fontWeight: '700',
            color: '#1e293b',
          }}
        >
          {title}
        </h4>
        {children}
        {note && (
          <div
            style={{
              marginTop: '12px',
              padding: '12px 16px',
              background: '#fffbeb',
              borderRadius: '8px',
              borderLeft: '3px solid #f59e0b',
              fontSize: '13px',
              color: '#92400e',
            }}
          >
            💡 {note}
          </div>
        )}
        {exampleImage && (
          <div
            style={{
              marginTop: '16px',
              padding: '16px',
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              borderRadius: '12px',
              border: '2px dashed #cbd5e1',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px',
              }}
            >
              <span style={{ fontSize: '16px' }}>📎</span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#64748b',
                }}
              >
                예시 첨부
              </span>
            </div>
            {exampleImage.startsWith('http') || exampleImage.startsWith('/') ? (
              <img
                src={exampleImage}
                alt="예시 이미지"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                }}
              />
            ) : (
              <div
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '40px 20px',
                  textAlign: 'center',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>🖼️</div>
                <p
                  style={{
                    margin: 0,
                    color: '#94a3b8',
                    fontSize: '13px',
                  }}
                >
                  {exampleImage}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

