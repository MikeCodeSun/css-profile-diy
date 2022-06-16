const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Error with ${selector}`);
};

const selectAllElement = (selector) => {
  const element = document.querySelectorAll(selector);
  if (element) return element;
  throw new Error(`Error with ${selector}`);
};

const controlBtns = selectAllElement(".control");
const sections = selectAllElement(".section");

controlBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(1);
    // console.log(e.target.dataset.id);
    console.log(this.dataset.id);

    const id = this.dataset.id;
    if (id) {
      controlBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      this.classList.add("active");
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = selectElement(`#${id}`);
      element.classList.add("active");
    }
  });
});
// change theme btn
const themeBtn = selectElement(".theme-btn");
const body = document.body;

if (localStorage.getItem("theme")) {
  body.classList.add("theme");
}

themeBtn.addEventListener("click", function () {
  themeBtn.classList.toggle("theme-btn-active");
  body.classList.toggle("theme");
  if (body.classList.contains("theme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.removeItem("theme");
  }
});
