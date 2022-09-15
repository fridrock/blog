const form = document.querySelector(".userForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    const result = await fetch("http://localhost:5000/users/createUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const json = await result.json();
    if (json) {
        console.log(json);
        window.location.href = window.location.href;
    }
});
