//Hamburger menu
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const menuList = document.querySelectorAll('#menu a');
menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
menuList.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});


// BMI CALCULATOR
//Değerlendirm kriteri 8
document.getElementById("height").addEventListener("input", calculateBMI);
document.getElementById("weight").addEventListener("input", calculateBMI);

function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = weight / ((height / 100) ** 2);

    moveTriangle(bmi);
}

function moveTriangle(bmi) {
    const triangle = document.getElementById("triangle");
    const containerWidth = document.getElementById("triangle-container").offsetWidth;
    let position;

    if (bmi > 13.5 && bmi < 18.5) {
        position = (7 + (bmi - 13.5) * 16 / 5) * containerWidth / 100;
    } else if (bmi > 25 && bmi < 30 || bmi >= 30 && bmi < 35 || bmi >= 35 && bmi < 40) {
        position = (40 + (bmi - 24.5) * 16 / 5) * containerWidth / 100;
    } else if (bmi >= 18.5 && bmi < 25) {
        position = (23 + (bmi - 18.5) * 16 / 7) * containerWidth / 100;
    }

    if (position > 0 && position < containerWidth) {
        triangle.style.left = `${position}px`;
    }
}
