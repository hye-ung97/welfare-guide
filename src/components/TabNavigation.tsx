import React from 'react';
import { TabId, Tab } from '../types';

interface TabNavigationProps {
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
}

const tabs: Tab[] = [
  { id: 'education', label: '📚 교육비', color: '#0ea5e9' },
  { id: 'fitness', label: '💪 체력단련비', color: '#10b981' },
  { id: 'software', label: '💻 소프트웨어', color: '#8b5cf6' },
  { id: 'club', label: '🎯 동아리', color: '#f59e0b' },
];

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '24px',
        padding: '6px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          style={{
            flex: 1,
            padding: '14px 20px',
            border: 'none',
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background:
              activeTab === tab.id
                ? `linear-gradient(135deg, ${tab.color} 0%, ${tab.color}dd 100%)`
                : 'transparent',
            color: activeTab === tab.id ? 'white' : '#64748b',
            boxShadow:
              activeTab === tab.id ? `0 4px 16px ${tab.color}40` : 'none',
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

