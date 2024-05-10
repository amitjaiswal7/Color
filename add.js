const getColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomCode = "#" + randomColor.padStart(6, '0');
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener(
    "click", getColor
);

getColor();
