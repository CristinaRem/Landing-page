
const st = document.querySelectorAll(".step");
const removeShow = () => {
  st.forEach(el => {

    if (el.classList.contains('show')) {
      el.classList.remove('show');
    }
  })
}
st.forEach(el => {

  el.addEventListener('click', e => {
    const item = e.currentTarget;
    removeShow();
    item.classList.add("show");
  })
})


const scrollToTopButton = document.querySelector('.scroll-top');

const scrollFunc = () => {
  let y = window.scrollY;
  if (y > 500) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
scrollToTopButton.addEventListener('click', scrollToTop);

// =================


const items = document.querySelector('.items');
const elem = Array.from(document.querySelectorAll('.item'));
const removeClass = () => {
  elem.forEach(i => {
    i.classList.remove('item--active');
    i.classList.remove('item--next');
    i.classList.remove('item--prev');
  })
}
items.addEventListener('click', e => {
  const currentItem = e.target.closest('.item') || "";
  if (!currentItem) {
    return
  } else {
    removeClass();
    currentItem.classList.add('item--active');
    const prev = (elem.indexOf(currentItem) === 0) ? elem[elem.length - 1] : currentItem.previousElementSibling;
    const next = (elem.indexOf(currentItem) === elem.length - 1) ? elem[0] : currentItem.nextElementSibling;
    next.classList.add('item--next');
    prev.classList.add('item--prev');

  }
}
)
