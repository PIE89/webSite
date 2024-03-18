let prxScene = document.querySelector(".contacts");
let prxItem = document.querySelector(".contacts__dots");

prxScene.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  prxItem.style.transform =
    `translate(-` + x * 1000 + `px, -` + y * 100 + `px)`;
});
