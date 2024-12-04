const main = () => {
    const growMe = document.getElementById("grow-me");
    growMe.classList.add("big")
    
    const shrinkMe = document.getElementById("shrink-me");
shrinkMe.classList.remove("big");

    const listItems = document.querySelectorAll("li");
listItems.forEach((item) => console.log(item.textContent))

    const link = document.querySelector("a.link");
    link.href = "https://www.example.com";
    link.textContent = "somewhere";

    const hideMe = document.getElementById("hide-me");
showMe.style.display = "block";

    const nameInput = document.getElementById("name").value;
    const welcomeMessage = document.querySelector("h1");
welcomeMessage.textContent = `Welcome ${nameInput || "Guest"}!`
};
