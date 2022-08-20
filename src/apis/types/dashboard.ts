/**
 * @description 主控页数据汇总 - 接口声明
 */
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
