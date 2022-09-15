const form = document.querySelector(".regUser");
const warning = document.querySelector(".warning");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    if (data["password"] != data["repeatPassword"]) {
        warning.classList.remove("hidden");
    } else {
        const resolve = await fetch(window.location.href, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const json = await resolve.json();
        if (json.message == "This login already exists") {
            warning.innerHTML = "Этот логин уже занят";
            warning.classList.remove("hidden");
        } else if (json.message == "successfully created user") {
            window.location.href = "/users/auth";
        }
    }
});
// TODO: add inputs validation
