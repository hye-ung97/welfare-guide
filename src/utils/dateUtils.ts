/**
 * 지급일 계산 함수
 * 기안 시점 1일 ~ 15일 → 해당 월 말일 지급
 * 기안 시점 16일 ~ 말일 → 익월 15일 지급
 */
export const getPaymentDate = (): string => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  if (currentDay >= 1 && currentDay <= 15) {
    // 해당 월 말일 지급
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    return `${currentMonth + 1}월 ${lastDay}일`;
  } else {
    // 익월 15일 지급
    const nextMonth = currentMonth + 2 > 12 ? 1 : currentMonth + 2;
    return `${nextMonth}월 15일`;
  }
};

/**
 * 오늘 날짜 정보 반환
 */
export const getTodayInfo = (): string => {
  const today = new Date();
  return `${today.getMonth() + 1}월 ${today.getDate()}일`;
};

