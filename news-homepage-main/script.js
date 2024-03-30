const navMobile = document.getElementsByClassName('nav_mobile');
const navList = document.querySelector('.nav_menu');
const mobile = navMobile[0];
console.log(navList);
let mobileToggle = false

mobile.addEventListener("click", function () {
    mobileToggle = !mobileToggle

    if (mobileToggle) {
        mobile.innerHTML = `<svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>`
        navList.classList.add("active")
    } else {
        mobile.innerHTML = `<svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>`
        navList.classList.remove("active");
    }
})

window.addEventListener("scroll", function () {
    navList.classList.remove("active");
    mobileToggle = false;
    mobile.innerHTML = `<svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>`
})
