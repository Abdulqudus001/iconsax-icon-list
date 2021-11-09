const filterIcons = (value) => {
  return iconsaxIcons.filter((el) => {
    return el.includes(value) && el.split(' ').length < 2;
  });
};
const list = document.querySelector('.icon-list');
const searchField = document.querySelector('.search');
let availableIcons = filterIcons(searchField.value);

let start = 0;
let end = 100;
let perPage = 100;

const loadIcons = () => {
  const currentIcons = availableIcons.slice(start, end);
  const fragment = document.createDocumentFragment();

  currentIcons.forEach((icon) => {
    const listItemContainer = document.createElement('li');
    listItemContainer.classList.add('col-6', 'col-md-3', 'col-lg-2');

    const listItem = document.createElement('div');
    listItem.classList.add('list-item', 'my-3');

    const listItemIcon = document.createElement('i');
    const iconClass = icon.split(' ')[0];
    if (icon.split(' ').length < 2) {
      listItemIcon.classList.add(
        'list-item__icon',
        'isax',
        `isax-${iconClass}`
      );
    }

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

const handleScroll = (event) => {
  const documentHeight = list.clientHeight;
  if (window.scrollY + window.innerHeight >= documentHeight - 200) {
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

// Search event listener
searchField.addEventListener('input', (e) => {
  // Clear list
  list.innerHTML = '';
  availableIcons = filterIcons(e.target.value);
  console.log(availableIcons);
  loadIcons();
});
