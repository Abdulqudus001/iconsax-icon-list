const list = document.querySelector('.icon-list');

let start = 0;
let end = 100;
let perPage = 100;

const loadIcons = () => {
  const currentIcons = iconsaxIcons.slice(start, end);
  const fragment = document.createDocumentFragment();

  currentIcons.forEach((icon) => {
    const listItemContainer = document.createElement('li');
    listItemContainer.classList.add('col-6', 'col-md-3', 'col-lg-2');

    const listItem = document.createElement('div');
    listItem.classList.add('list-item', 'my-3');

    const listItemIcon = document.createElement('i');
    const iconClass = icon.split(' ')[0];
    listItemIcon.classList.add('list-item__icon', 'isax', `isax-${iconClass}`);

    listItem.appendChild(listItemIcon);

    listItemContainer.appendChild(listItem);

    fragment.appendChild(listItemContainer);
  });

  list.appendChild(fragment);
};

let timeout;
const debounce = (fn, params) => {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    fn(params);
  }, 500);
};

const loadMoreDocuments = () => {};

const handleScroll = (event) => {
  const documentHeight = list.clientHeight;
  console.log(window.scrollY + window.innerHeight, documentHeight);
  if (window.scrollY + window.innerHeight >= documentHeight - 200) {
    console.log('At end');
    start += perPage;
    end += perPage;
    loadIcons();
  }
};

// Show more icons when you get to the bottom of the page
window.addEventListener('scroll', (e) => {
  debounce(handleScroll, e);
});

// Initially load the icons with first 100 icons
loadIcons();
