let slides = document.getElementsByClassName("fade");
let n = 0;

slides[n].classList.toggle("slides");

const hienThiSlideTruocDo = () => {
  n--;
  let m = n + 1;
  if (m > 2) m = 0;
  if (n < 0) n = 2;
  slides[n].classList.toggle("slides");
  slides[m].classList.toggle("slides");
};

const hienThiSlideKeTiep = () => {
  n++;
  let m = n - 1;
  if (m < 0) m = 3;
  if (n > 2) n = 0;
  slides[n].classList.toggle("slides");
  slides[m].classList.toggle("slides")
};
