// 图表数据
export interface ChartDataModel {
  [key: string]: {
    lineData: LineDataModel
    pieData: PieDataModel
  }
}

// 饼图
export interface PieChartDataModel {
  value: number;
  name: string;
}

export interface PieDataModel {
  desc: string;
  data: PieChartDataModel[];
}

// 折线图
export interface LineDataModel {
  desc: string
  xAxisData: [string]
  yAxisData: YAxisModel
}

export interface YAxisModel {
  NetProfit: [number]
  salesVolume: [number]
}