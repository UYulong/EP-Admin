export interface SummaryListModel {
  id: number;
  title: string;
  type: string;
  visits: string;
  totalVisits: string;
  dayStatus: string;
  dayPercent: string;
  weekPercent: string;
  weekStatus: string;
}

export interface StatusMapModel {
  [key: string]: string;
}
