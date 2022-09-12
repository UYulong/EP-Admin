/**
 * 
 * @param time 时间戳
 * @returns 完整时间
 */
export function getTime(time: number): string {
  const cacheTime = new Date(time)

  const Y = cacheTime.getFullYear()
  const M = (cacheTime.getMonth() + 1).toString().padStart(2, '0')
  const D = cacheTime.getDate().toString().padStart(2, '0')

  const hh = cacheTime.getHours().toString().padStart(2, '0')
  const mm = cacheTime.getMinutes().toString().padStart(2, '0')
  const ss = cacheTime.getSeconds().toString().padStart(2, '0')

  return `${Y}-${M}-${D} ${hh}:${mm}:${ss}`
  
}