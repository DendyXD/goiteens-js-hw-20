// Завдання 1

const gallery = document.querySelector(".gallery");

const imageItems = [...gallery.querySelectorAll("img")];

const fullImage = document.querySelector(".full-image");

const fullImageContainer = document.querySelector(".full-image-container");

let counterImagesIndex = 0;

document.addEventListener("keydown", imageIndexHandler);

document.addEventListener("keydown", hideImage);

imageItems.forEach((img) => {
    img.addEventListener("click", clickHandler);
})

function imageIndexHandler(event) {

    switch (event.code) {
        case "ArrowLeft":
            counterImagesIndex !== 0 ? counterImagesIndex -= 1 : counterImagesIndex;
            showImage()
            break;
        
            case "ArrowRight":
                counterImagesIndex !== imageItems.length - 1 ? counterImagesIndex += 1 : counterImagesIndex;
            showImage()
            break;
        
        default:
            break;
    }
}

function showImage() {
    fullImage.src = imageItems[counterImagesIndex].src;
    fullImageContainer.style.display = "flex";
}

function hideImage(event) {
    if (event.code === "Escape") {
        fullImageContainer.style.display = "none";
    }
}

function clickHandler(event) {
    counterImagesIndex = imageItems.indexOf(event.target);
    showImage()
}

// Завдання 2

const controls = document.querySelector("#controls");

const renderBoxes = document.querySelector('[data-action="render"]');

const destroyBoxes = document.querySelector('[data-action="destroy"]');

const boxes = document.querySelector("#boxes");

const amountInput = controls.querySelector("input");

renderBoxes.addEventListener("click", createBoxes);

destroyBoxes.addEventListener("click", deleteBoxes);

function createBoxes() {
    let amount = amountInput.value;
    let n = 30;
    for (let i = 0; i < amount; i++) {
        let rgb = randomColourHandler();
        let box = document.createElement("div");
        box.style.width = n + "px";
        box.style.height = n + "px";
        box.style.backgroundColor = rgb;
        
        n += 10;
        boxes.append(box);
    }
}

function deleteBoxes() {
    boxes.innerHTML = "";
}

function randomColourHandler() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}