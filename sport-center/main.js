const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", (event) => {
    const scroll = window.scrollY;
    if (scroll > 60) {

        navbar.classList.add("solid-header");

    }else {
        navbar.classList.remove("solid-header");

    }
});

const featHeader = document.querySelector("#feat-cont h2");
const featParag = document.querySelector("#feat-cont p");
const featImg = document.querySelector("#feat-cont img");
const featCont = document.querySelector("#feat-cont");

const yogaFunc = () => {
    featHeader.textContent = "Yoga";
    featParag.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis odio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!";
    featImg.src = "./public/images/yoga.jpg";
};

const groupFunc = () => {
    featHeader.textContent = "Group";
    featParag.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. ";
    featImg.src = "./public/images/group.webp";
};

const soloFunc = () => {
    featHeader.textContent = "Solo";
    featParag.textContent =
        "pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus";
    featImg.src = "./public/images/solo.jpg";
};

const stretchingFunc = () => {
    featHeader.textContent = "Stretching";
    featParag.textContent =
        "pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus";
    featImg.src = "./public/images/stret.webp";
};


const btns = document.querySelector("#btnsDiv");

btns.addEventListener("click", (event) => {
    const btnId = event.target.id;
    switch (btnId) {
        case "yoga":
            yogaFunc();
            break;
        case "group":
            groupFunc();
            break;
        case "solo":
            soloFunc();
            break;
        case "stretching":
            stretchingFunc();
            break;
        default:
            return;
    }
});

const gallery = document.querySelector("#gallery");
const galleryDiv = document.querySelector("#galleryDiv");
const imageArr = [
    "./public/images/yoga.jpg",
    "./public/images/group.webp",
    "./public/images/solo.jpg",
    "./public/images/stret.webp",
];

let index = 0;

galleryDiv.addEventListener("click", (event) => {
    const id = event.target.id;
    if (id === "left") {
        index--;
        if (index < 0) {
            index = imageArr.length - 1;
        }
    } else if (id === "right") {
        index++;
        if (index >= imageArr.length) {
            index = 0;
        }
    }
    gallery.src = imageArr[index];
});

// BMI CALCULATOR

document.getElementById("boy").addEventListener("input", calculateBMI);
document.getElementById("kilo").addEventListener("input", calculateBMI);

function calculateBMI(){
    const weight = document.getElementById("kilo").value;
    const height = document.getElementById("height").value/100;
    const bmi = weight / (height * height);

    moveTriangle(bmi);

}

function moveTriangle(bmi){
    const triangle = document.getElementById("triangle");
    const containerWidth = document.getElementById("triangle-container").offsetWidth;
    const position = (bmi/100)* containerWidth;

    triangle.style.left = `${position}px`;
}