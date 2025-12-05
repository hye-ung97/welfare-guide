import React, { useState } from 'react';
import { TabNavigation } from './TabNavigation';
import { EducationTab } from './tabs/EducationTab';
import { FitnessTab } from './tabs/FitnessTab';
import { SoftwareTab } from './tabs/SoftwareTab';
import { ClubTab } from './tabs/ClubTab';
import { TabId, ExpandedSections } from '../types';

export const ExpenseGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('education');
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    external: true,
    internal: true,
    process: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%)',
        fontFamily: '"Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        padding: '32px 16px',
      }}
    >
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        * { box-sizing: border-box; }
        button:hover { opacity: 0.95; }
        button:active { transform: scale(0.98); }
      `}</style>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: '0 0 8px 0',
            }}
          >
            복지비용 신청 가이드
          </h1>
          <p
            style={{
              color: '#64748b',
              fontSize: '15px',
              margin: '0 0 8px 0',
            }}
          >
            교육비 · 체력단련비 · 소프트웨어 · 동아리 신청 방법 안내
          </p>
          <p
            style={{
              color: '#94a3b8',
              fontSize: '13px',
              margin: 0,
              background: '#f1f5f9',
              padding: '6px 12px',
              borderRadius: '20px',
              display: 'inline-block',
            }}
          >
            📌 B2B 팀 기준으로 작성됨
          </p>
        </div>

        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab Content */}
        {activeTab === 'education' && (
          <EducationTab
            expandedSections={expandedSections}
            onToggleSection={toggleSection}
          />
        )}
        {activeTab === 'fitness' && <FitnessTab />}
        {activeTab === 'software' && <SoftwareTab />}
        {activeTab === 'club' && <ClubTab />}

        {/* Footer */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '32px',
            padding: '20px',
            color: '#94a3b8',
            fontSize: '13px',
          }}
        >
          <p style={{ margin: 0 }}>문의사항이 있으시면 담당자에게 연락해주세요</p>
        </div>
      </div>
    </div>
  );
};

