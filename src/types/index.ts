export type TabId = 'education' | 'fitness' | 'software' | 'club';

export interface Tab {
  id: TabId;
  label: string;
  color: string;
}

export interface ApprovalStep {
  type: '동의' | '병렬협조' | '병렬합의' | '협조' | '합의';
  name: string;
}

export interface ExpandedSections {
  [key: string]: boolean;
}

