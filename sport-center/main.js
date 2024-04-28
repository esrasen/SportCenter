//Navbar scroll effect
//Değerlendirme kriteri 9
const navbar = document.querySelector("#navbar");
window.addEventListener("scroll", (event) => {
    const scroll = window.scrollY;
    if (scroll > 60) {
        navbar.classList.add("solid-header");

    }else {
        navbar.classList.remove("solid-header");
    }
});

//Function to change the content of #feat-cont according to the button clicked.
//Değerlendirme kriteri 11
const featHeader = document.querySelector("#feat-cont h2");
const featParag = document.querySelector("#feat-cont p");
const featImg = document.querySelector("#feat-cont img");
const featSubTitle = document.querySelector("#feat-cont #subtitle");
const featList = document.querySelector("#feat-cont ul");
const featCont = document.querySelector("#feat-cont");

const yogaFunc = () => {
    featHeader.textContent = "Why Are You Yoga ?";
    featParag.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis odio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!";
    featSubTitle.textContent = "When comes Yoga Your Time.";
    featImg.src = "./public/images/yoga.jpg";
};

const groupFunc = () => {
    featHeader.textContent = "Why Are You Group ?";
    featParag.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. ";
    featSubTitle.textContent = "When comes Group Your Time.";
    featList.innerHTML =
        "Saturday-Sunday: 9:00-10:00 am<br><br>" +
        "Monday-Tuesday: 12:00-14:00 pm<br><br>" +
        "Wednesday-Friday: 5:00-6:00 pm";

    featImg.src = "./public/images/group.webp";
};

const soloFunc = () => {
    featHeader.textContent = "Why Are You Solo ?";
    featParag.textContent =
        "pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus";
    featSubTitle.textContent = "When comes Solo Your Time.";
    featList.innerHTML =
        "Saturday-Sunday: 5:00-7:00 pm<br><br>" +
        "Monday-Tuesday: 10:00-11:00 pm<br><br>" +
        "Wednesday-Friday: 8:00-9:00 am";
    featImg.src = "./public/images/solo.jpg";
};

const stretchingFunc = () => {
    featHeader.textContent = "Why Are You Stretching ?";
    featParag.textContent =
        "pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus";
    featSubTitle.textContent = "When comes Stretching Your Time.";
    featList.innerHTML =
        "Saturday-Sunday: 8:30-9:45 am<br><br>" +
        "Monday-Tuesday: 11:00-12:30 pm<br><br>" +
        "Wednesday-Friday: 5:00-6:00 pm";
    featImg.src = "./public/images/stret.webp";
};

//Event listener to change the content of #feat-cont according to the button clicked.
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