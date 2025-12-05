import React from 'react';
import { ApprovalStep } from '../types';

interface ApprovalFlowProps {
  steps: ApprovalStep[];
}

export const ApprovalFlow: React.FC<ApprovalFlowProps> = ({ steps }) => {
  const getStepColor = (type: ApprovalStep['type']): string => {
    switch (type) {
      case '동의':
        return 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
      case '병렬협조':
        return 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)';
      case '병렬합의':
        return 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)';
      case '협조':
        return 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
      default:
        return 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexWrap: 'wrap',
        padding: '12px 16px',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        borderRadius: '12px',
        marginTop: '8px',
      }}
    >
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              background: getStepColor(step.type),
              borderRadius: '20px',
              color: 'white',
              fontSize: '13px',
              fontWeight: '500',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <span
              style={{
                fontSize: '10px',
                opacity: 0.9,
                background: 'rgba(255,255,255,0.2)',
                padding: '2px 6px',
                borderRadius: '8px',
              }}
            >
              {step.type}
            </span>
            <span style={{ fontWeight: '600' }}>{step.name}</span>
          </div>
          {index < steps.length - 1 && (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7 4L13 10L7 16"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

