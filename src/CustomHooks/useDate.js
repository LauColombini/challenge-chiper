export const useDate = (dates) => {
  let seconds = Math.floor((new Date() - dates) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) {
    return { fecha: Math.floor(interval) + " years ago" };
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return { fecha: Math.floor(interval) + " months ago" };
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return { fecha: Math.floor(interval) + " days ago" };
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return { fecha: Math.floor(interval) + " hours ago" };
  }
  interval = seconds / 60;
  if (interval > 1) {
    return { fecha: Math.floor(interval) + " minutes ago" };
  }
  return { fecha: Math.floor(seconds) + " seconds ago" };
}