window.addEventListener("scroll", e => {
  // Dealing with Safari difference.
  // look into scrollingElement https://caniuse.com/#feat=document-scrollingelement
  let scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
  let newPos = scrollTop + "px";
  document.documentElement.style.setProperty('--scrollPos', newPos);
});

const sections = [...document.querySelectorAll('section')]

const options = {
  rootMargin: '0px',
  threshold: 0.25
}

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= 0.25) {
      target.classList.add("is-visible");
    } else {
      target.classList.remove("is-visible");
    }
  })
}

const observer = new IntersectionObserver(callback, options)

sections.forEach((section, index) => {
  observer.observe(section)
})
