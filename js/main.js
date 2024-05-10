// navBar active
function navBarActive() {
  let mainNav = document.getElementById("mainNav");
  let listNav = mainNav.querySelectorAll(".nav-link");
  for (let i = 0; i < listNav.length; i++) {
    listNav[i].addEventListener("click", function () {
      let current = document.querySelector("#mainNav .active");
      current.className = current.className.replace("active", "");
      // Cộng thêm class active cho thẻ li được click
      listNav[i].className += " active";
    });
  }
}

// progressBar active
window.onscroll = function (event) {
  let progressBars = document.getElementsByClassName("progressBar");
  Array.from(progressBars).forEach((bar) => {
    let windowTop = window.scrollY;
    let windowBot = windowTop + window.innerHeight;
    let eleTop = bar.offsetTop;
    let eleBot = eleTop + bar.clientHeight;
    if (eleBot <= windowBot && eleTop >= windowTop) {
      bar.classList.add("active");
    }
  });
};

navBarActive();
