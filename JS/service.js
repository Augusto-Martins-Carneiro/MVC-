const KEY = "lanches";

export function getLanches() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function setLanches(lanches) {
  localStorage.setItem(KEY, JSON.stringify(lanches));
}