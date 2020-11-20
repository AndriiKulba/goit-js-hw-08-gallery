const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");
const createLinksRef = (ingredient) => {
  const linkRef = document.createElement("li");
  linkRef.textContent = ingredient;
  return linkRef;
};
const linksRef = (arr) => arr.map((ingredient) => createLinksRef(ingredient));
listRef.append(...linksRef(ingredients));
