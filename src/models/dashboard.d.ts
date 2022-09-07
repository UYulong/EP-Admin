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

// 饼图数据
export interface PieDataModel {
  value: number
  name: string
}

export interface PieChartDataModel {
  desc: string;
  data: PieDataModel[];
}

// 折线图数据
export interface LineDataModel {
  desc: string
  xAxisData: [string]
  yAxisData: YAxisModel
}

export interface YAxisModel {
  NetProfit: [number]
  salesVolume: [number]
}