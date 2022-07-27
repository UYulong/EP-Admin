// 对账户 token 等数据的存储管理 get、set、clear
import { TOKEN_KEY } from "./settings";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY) || null;
}

export function setToken(key: string) {
  localStorage.setItem(TOKEN_KEY, key);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}
