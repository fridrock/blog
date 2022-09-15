const form = document.querySelector(".authUser");
const warning = document.querySelector(".warning");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    const resolve = await fetch(window.location.href, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const json = await resolve.json();
    if (json.message == "no such user") {
        warning.innerHTML = "Нет пользователя с таким логином";
        warning.classList.remove("hidden");
    } else if (json.message == "wrong password") {
        warning.innerHTML = "Неправильный пароль";
        warning.classList.remove("hidden");
    } else {
        window.location.href = "/users/";
    }
});
