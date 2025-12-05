import React from 'react';
import { ApprovalFlow } from '../ApprovalFlow';
import { getPaymentDate, getTodayInfo } from '../../utils/dateUtils';

export const FitnessTab: React.FC = () => {
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
          <span style={{ fontSize: '32px' }}>🏃‍♂️</span>
          <h3
            style={{
              margin: 0,
              fontSize: '20px',
              fontWeight: '700',
              color: '#1e293b',
            }}
          >
            체력단련비 신청 프로세스
          </h3>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '24px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            borderRadius: '16px',
            marginBottom: '32px',
          }}
        >
          {['비용정산신청', '지출결의서'].map((step, idx) => (
            <React.Fragment key={idx}>
              <div
                style={{
                  background: 'white',
                  padding: '16px 28px',
                  borderRadius: '14px',
                  fontWeight: '700',
                  color: '#059669',
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
            borderLeft: '2px solid #86efac',
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
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '14px',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
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
              비용정산신청
            </h4>
            <p
              style={{
                margin: '0 0 12px 0',
                color: '#475569',
                fontSize: '14px',
              }}
            >
              📎 <strong>영수증 첨부</strong> 필수
            </p>
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
            <ApprovalFlow steps={[{ type: '협조', name: '김태형' }]} />
            <div
              style={{
                marginTop: '16px',
                padding: '16px',
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                borderRadius: '12px',
                border: '2px dashed #86efac',
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
              <img
                src={`${import.meta.env.BASE_URL}images/gym.png`}
                alt="비용정산신청 예시"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                }}
              />
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
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '14px',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
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
            <p
              style={{
                margin: '0 0 12px 0',
                color: '#475569',
                fontSize: '14px',
              }}
            >
              📎 <strong>영수증 첨부</strong> 필수
            </p>
            <div
              style={{
                marginBottom: '12px',
                padding: '12px 16px',
                background: '#f0fdf4',
                borderRadius: '8px',
                borderLeft: '3px solid #10b981',
                fontSize: '13px',
                color: '#166534',
              }}
            >
              🔗 <strong>연관문서:</strong> 비용정산신청서 추가
            </div>
            <div
              style={{
                marginBottom: '12px',
                padding: '16px',
                background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
                borderRadius: '8px',
                border: '1px solid #e9d5ff',
              }}
            >
              <p
                style={{
                  margin: '0 0 8px 0',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#7c3aed',
                }}
              >
                💰 지급 일자 안내
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '16px',
                  fontSize: '13px',
                  color: '#6b21a8',
                  lineHeight: '1.8',
                }}
              >
                <li>
                  기안 시점 <strong>1일 ~ 15일</strong> → 해당 월 말일 지급
                </li>
                <li>
                  기안 시점 <strong>16일 ~ 말일</strong> → 익월 15일 지급
                </li>
              </ul>
              <div
                style={{
                  marginTop: '12px',
                  padding: '10px 14px',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: '500',
                }}
              >
                📅 오늘({getTodayInfo()}) 기준 → <strong>{getPaymentDate()}</strong> 지급 예정
              </div>
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
            <ApprovalFlow steps={[{ type: '협조', name: '권은혜' }]} />
            <div
              style={{
                marginTop: '16px',
                padding: '16px',
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                borderRadius: '12px',
                border: '2px dashed #86efac',
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
              <img
                src={`${import.meta.env.BASE_URL}images/pay.png`}
                alt="지출결의서 예시"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: '24px',
            padding: '20px',
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            borderRadius: '12px',
            borderLeft: '4px solid #3b82f6',
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#1e40af',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            💡 <strong>TIP:</strong> 지출결의서는 교육비와 체력단련비를 합쳐서 한 번에 제출할 수
            있습니다!
          </p>
        </div>
      </div>
    </div>
  );
};

