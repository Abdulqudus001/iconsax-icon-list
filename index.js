const list = document.querySelector('.icon-list');

let start = 0;
let end = 100;

const currentIcon = iconsaxIcons.slice(start, end);

const fragment = document.createDocumentFragment();

currentIcon.forEach((icon) => {
  const listItemContainer = document.createElement('li');
  listItemContainer.classList.add('col-6', 'col-md-3', 'col-lg-2');

  const listItem = document.createElement('div');
  listItem.classList.add('list-item', 'my-3');

  const listItemIcon = document.createElement('i');
  listItemIcon.classList.add('list-item__icon', 'isax', `isax-${icon}`);

  listItem.appendChild(listItemIcon);

  listItemContainer.appendChild(listItem);

  fragment.appendChild(listItemContainer);
});

list.appendChild(fragment);
