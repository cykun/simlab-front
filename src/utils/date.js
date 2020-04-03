export const getNowTime = () => {
  const time = new Date();
  let y = time.getFullYear();
  let m = time.getMonth() + 1;
  let d = time.getDate();
  m = m < 10 ? `0${m}` : m;
  d = d < 10 ? `0${d}` : d;
  return `${y}-${m}-${d}`;
};
