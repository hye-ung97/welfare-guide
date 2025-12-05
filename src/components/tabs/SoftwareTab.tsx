import React from 'react';
import { ProcessStep } from '../ProcessStep';
import { ApprovalFlow } from '../ApprovalFlow';

export const SoftwareTab: React.FC = () => {
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
          <span style={{ fontSize: '32px' }}>🖥️</span>
          <h3
            style={{
              margin: 0,
              fontSize: '20px',
              fontWeight: '700',
              color: '#1e293b',
            }}
          >
            소프트웨어 구매 프로세스
          </h3>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '24px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            borderRadius: '16px',
            marginBottom: '32px',
          }}
        >
          {['일반기안 제출', '지출결의서'].map((step, idx) => (
            <React.Fragment key={idx}>
              <div
                style={{
                  background: 'white',
                  padding: '16px 28px',
                  borderRadius: '14px',
                  fontWeight: '700',
                  color: '#7c3aed',
                  fontSize: '16px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                }}
              >
                {step}
              </div>
              {idx < 1 && (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>

        <div
          style={{
            position: 'relative',
            paddingLeft: '48px',
            paddingBottom: '24px',
            borderLeft: '2px solid #c4b5fd',
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
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '14px',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
            }}
          >
            1
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
              일반기안 제출
            </h4>
            <div
              style={{
                background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '12px',
              }}
            >
              <p
                style={{
                  margin: '0 0 8px 0',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#5b21b6',
                }}
              >
                📝 필수 작성 항목
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#6d28d9',
                  fontSize: '14px',
                  lineHeight: '1.8',
                }}
              >
                <li>
                  <strong>요청 항목</strong> - 구매할 소프트웨어 명칭
                </li>
                <li>
                  <strong>요청 사유</strong> - 구체적인 사용 목적
                </li>
                <li>
                  <strong>요청 금액</strong> - 정확한 금액 기재
                </li>
              </ul>
            </div>
            <div
              style={{
                marginBottom: '12px',
                padding: '12px 16px',
                background: '#fef3c7',
                borderRadius: '8px',
                borderLeft: '3px solid #f59e0b',
                fontSize: '13px',
                color: '#92400e',
              }}
            >
              ⚠️ <strong>"업무에 필요한 소프트웨어"</strong>라는 내용을 반드시 포함해주세요!
            </div>
            <span
              style={{
                fontSize: '12px',
                color: '#64748b',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              결재라인
            </span>
            <ApprovalFlow
              steps={[
                { type: '동의', name: '신종훈' },
                { type: '협조', name: '김연숙' },
                { type: '동의', name: '신건호' },
              ]}
            />
            <div
              style={{
                marginTop: '16px',
                padding: '16px',
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                borderRadius: '12px',
                border: '2px dashed #c4b5fd',
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
                  일반기안 예시 이미지를 여기에 추가하세요
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            paddingLeft: '48px',
            paddingBottom: '8px',
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
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '14px',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
            }}
          >
            2
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
              지출결의서
            </h4>
            <div
              style={{
                padding: '24px',
                background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                borderRadius: '12px',
                textAlign: 'center',
                border: '2px dashed #94a3b8',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🚧</div>
              <p
                style={{
                  margin: 0,
                  color: '#64748b',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                추후 업데이트 예정
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

