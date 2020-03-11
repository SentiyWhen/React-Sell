// 日期格式化

export function formatDate(time) {
  function addZero(num) {
    if (num < 10) return '0' + num;
    return num;
  }
  const d = new Date(time * 1000);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  return `${year}-${month}-${date} ${addZero(hour)}:${addZero(minutes)}`;
}
export function formatTodayDate() {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  return `${year}-${month}-${date}`;
}

export function convertTime(time) {
  let h = Math.floor((time / 60 / 60) % 24);
  let m = Math.floor((time / 60) % 60);
  let s = Math.floor(time % 60);
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  h = h < 10 ? `0${h}` : h;
  return h + ':' + m + ':' + s;
}

// 从本地存储中获取用户信息
export function getLocalUserInfo() {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? JSON.parse(userInfo) : {};
}

// 从本地存储中获取页面样式
export function getLocalStyle() {
  const localStyle = localStorage.getItem('style');
  return localStyle ? JSON.parse(localStyle) : null;
}

// 清空本地缓存的数据
export function clearLocalData() {
  localStorage.clear();
  sessionStorage.clear();
}
