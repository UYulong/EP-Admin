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

// 部门简介
export interface ProjectListModel {
  avatar_url: string,
  name: string,
  slogan: string,
  source: string,
  time: string,
}

// 最新动态
export interface NewsListModel {
  avatar_url: string,
  name: string,
  desc: string,
  time: string,
}

// 快捷导航
export interface NavModel {
  icon: string
  color: string
  name: string
}

// 导航跳转
interface routeObjModel {
  [key: string]: string
}
