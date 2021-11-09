const list = document.querySelector('.icon-list');

let start = 0;
let end = 100;

const currentIcon = iconsaxIcons.slice(start, end);

const fragment = document.createDocumentFragment();

currentIcon.forEach((icon) => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');

  const listItemIcon = document.createElement('i');
  listItemIcon.classList.add('list-item__icon', 'isax', `isax-${icon}`);

  listItem.appendChild(listItemIcon);

  fragment.appendChild(listItem);
});

list.appendChild(fragment);
