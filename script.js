const h2 = document.createElement("h2");
h2.textContent = "My name is Manuel Avila, I am hoping to become a Software Engineer.";
document.querySelector("body").appendChild(h2);
const headingOne = document.querySelector('h1');
headingOne.addEventListener('mouseover', () => {
    headingOne.style.color = 'green';
    headingOne.style.cursor = 'pointer';
});
