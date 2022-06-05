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
