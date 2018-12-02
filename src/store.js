const STORAGE_KEY = "todos-vuejs";
export default {
  fetch(name) {
    return JSON.parse(window.localStorage.getItem(name) || "[]");
  },
  save(name, items) {
    window.localStorage.setItem(name, JSON.stringify(items));
  }
};
