window.onload = () => {
  navBarActive();
  backToTop();
};

window.onscroll = () => {
  activeProgress();
  scrollNavBarActive();
};

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
function activeProgress() {
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
}

//active navbar on scroll
function scrollNavBarActive() {
  let sections = document.querySelectorAll("section");
  let links = document.querySelectorAll(".nav-link");
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let idSection = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      links.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".nav-link[href*=" + idSection + "]")
          .classList.add("active");
      });
    }
  });
}

// back-to-top
function backToTop() {
  let btnToTop = document.querySelector("#backToTop");
  window.addEventListener("scroll", function () {
    if (this.scrollY > 500) {
      btnToTop.style.opacity = "1";
      btnToTop.style.visibility = "visible";
    } else {
      btnToTop.style.opacity = "0";
      btnToTop.style.visibility = "hidden";
    }
  });
  btnToTop.onclick = function () {
    window.scrollTo(0, 0);
  };
}

// light mode
function switchMode() {
  let btnLight = document.querySelector(".btn-light");
  let btnDark = document.querySelector(".btn-dark");
  btnLight.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("lightMode");
  });

  btnDark.addEventListener("click", function () {
    document.querySelector("body").classList.remove("lightMode");
  });
}

// fancybox
Fancybox.bind("[data-fancybox='gallery-fpoly']", {});
Fancybox.bind("[data-fancybox='gallery-cyber']", {});
