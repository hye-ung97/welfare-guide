import React from 'react';
import { Section } from '../Section';
import { InfoCard } from '../InfoCard';
import { ProcessStep } from '../ProcessStep';
import { ApprovalFlow } from '../ApprovalFlow';
import { getPaymentDate, getTodayInfo } from '../../utils/dateUtils';
import { ExpandedSections } from '../../types';

interface EducationTabProps {
  expandedSections: ExpandedSections;
  onToggleSection: (section: string) => void;
}

export const EducationTab: React.FC<EducationTabProps> = ({
  expandedSections,
  onToggleSection,
}) => {
  return (
    <div>
      <Section
        id="external"
        title="외부교육"
        icon="🌐"
        isExpanded={expandedSections.external}
        onToggle={onToggleSection}
      >
        <div style={{ display: 'grid', gap: '16px' }}>
          <InfoCard icon="📖" title="ebook" items={['전자책 구매 가능']} />
          <InfoCard
            icon="🔄"
            title="온라인 구독 서비스"
            items={[
              '퍼블리',
              '아웃스탠딩',
              '밀리의서재',
              '크레마',
              '모바일 한경',
              '미디움',
            ]}
          />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <InfoCard
              icon="💻"
              title="온라인 컨텐츠"
              items={['수료증 필요 없음']}
              type="info"
            />
            <InfoCard
              icon="🎤"
              title="오프라인/컨퍼런스"
              items={['수료증 필요함']}
              type="warning"
            />
          </div>
        </div>
      </Section>

      <Section
        id="internal"
        title="내부교육"
        icon="🏢"
        isExpanded={expandedSections.internal}
        onToggle={onToggleSection}
      >
        <InfoCard
          icon="⚠️"
          title="신청 시 주의사항"
          items={[
            '직무와 관련 있는 것만 신청 가능',
            '가벼운 학습지에서 콜라보 제품은 구매 불가',
          ]}
          type="warning"
        />
      </Section>

      <Section
        id="process"
        title="신청 프로세스"
        icon="📝"
        isExpanded={expandedSections.process}
        onToggle={onToggleSection}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '20px',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
            borderRadius: '16px',
            marginBottom: '24px',
            flexWrap: 'wrap',
          }}
        >
          {['교육신청서', '비용정산신청', '지출결의서'].map((step, idx) => (
            <React.Fragment key={idx}>
              <div
                style={{
                  background: 'white',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  color: '#0284c7',
                  fontSize: '14px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                {step}
              </div>
              {idx < 2 && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>

        <ProcessStep
          number={1}
          title="교육신청서"
          note="결제를 먼저 완료해도 상관없습니다"
          exampleImage="/images/education-1.png"
        >
          <p
            style={{
              margin: '0 0 12px 0',
              color: '#475569',
              fontSize: '14px',
              lineHeight: '1.7',
            }}
          >
            책 이름, 항목들을{' '}
            <strong style={{ color: '#0284c7' }}>자세하게</strong> 작성해주세요.
          </p>
          <div style={{ marginTop: '12px' }}>
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
                { type: '병렬합의', name: '진혜영' },
                { type: '동의', name: '신해동' },
              ]}
            />
          </div>
        </ProcessStep>

        <ProcessStep
          number={2}
          title="비용정산 신청"
          exampleImage="/images/edu-cost.png"
        >
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
            🔗 <strong>연관문서:</strong> 교육신청서 추가
          </div>
          <div style={{ marginTop: '12px' }}>
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
          </div>
        </ProcessStep>

        <ProcessStep
          number={3}
          title="지출결의서"
          exampleImage="/images/pay.png"
        >
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
            🔗 <strong>연관문서:</strong> 교육신청서 + 비용정산신청서 추가
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
          <div style={{ marginTop: '12px' }}>
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
          </div>
          <div
            style={{
              marginTop: '16px',
              padding: '12px 16px',
              background: '#fef2f2',
              borderRadius: '8px',
              borderLeft: '3px solid #ef4444',
              fontSize: '13px',
              color: '#b91c1c',
            }}
          >
            ⚠️ 결재라인은 매번 변동될 수 있으니 하단의 결재라인을 참고해주세요
          </div>
          <div
            style={{
              marginTop: '12px',
              padding: '12px 16px',
              background: '#dbeafe',
              borderRadius: '8px',
              borderLeft: '3px solid #3b82f6',
              fontSize: '13px',
              color: '#1e40af',
            }}
          >
            💡 <strong>TIP:</strong> 체력단련비와 합쳐서 한 번에 제출 가능!
          </div>
        </ProcessStep>
      </Section>
    </div>
  );
};

