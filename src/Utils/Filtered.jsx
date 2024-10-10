const removeAccents = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .normalize("NFC")
    .toLowerCase();
};
const getFilteredItems = (items, argSearch) => {
  return items?.filter((i) => removeAccents(i.name_text_es).includes(removeAccents(argSearch)))
}
export { getFilteredItems }