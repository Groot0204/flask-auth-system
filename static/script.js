const container = document.getElementById('container');

const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const mobileRegister = document.getElementById('mobile-register');
const mobileLogin = document.getElementById('mobile-login');

if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
}

/* Mobile toggle */
if (mobileRegister) {
    mobileRegister.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add("active");
    });
}

if (mobileLogin) {
    mobileLogin.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove("active");
    });
}

setTimeout(() => {
    const flash = document.querySelector('.flash-container');
    if (flash) {
        flash.style.transition = "opacity 0.5s ease";
        flash.style.opacity = "0";
        setTimeout(() => flash.remove(), 500);
    }
}, 3000);

document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function (e) {
        const btn = this.querySelector("button[type='submit']");
        if (btn) {
            btn.innerText = "Please wait...";

            // disable AFTER small delay so submit still works
            setTimeout(() => {
                btn.disabled = true;
            }, 100);
        }
    });
});