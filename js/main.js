// const ham = document.querySelector(".trigger");
// function clickE() {
//   ham.classList.toggle("on");
// }

// ham.addEventListener("click", clickE);

// function click(ham) {
//   ham.classList.toggle("on");
// }

$(".trigger").click(function () {
  $(this).toggleClass("on");
  $("nav").slideToggle(600);
});

$(window).resize(function () {
  let winW = $(window).width();    //브라우저의 가로길이
  console.log('브라우저의 가로길이는/' , winW);
  if (winW >= 768 && $("nav").is(":hidden")) {
    console.log("nav가 안보여요!!!");
    $("nav").removeAttr("style");
  }
});
