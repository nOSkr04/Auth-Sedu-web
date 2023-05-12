export const getFromStorage = (key) => {
  if (typeof window !== "undefined") {
    return `Bearer ${window.localStorage.getItem(key)}`;
  }
};
