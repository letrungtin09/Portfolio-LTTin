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
navBarActive();
