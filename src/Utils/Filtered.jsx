const removeAccents = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .normalize("NFC")
    .toLowerCase();
};
const getFilteredItems = (items, argSearch) => {
  const combi = Object.values(items)
  
  return combi.filter((i) => removeAccents(i.title).includes(removeAccents(argSearch)))
}
export { getFilteredItems }