 // Faylkan waxaa ku jira layliyo kala duwan oo JavaScript ah
// laga soo bilaabo aasaaska ilaa DOM iyo async operations.
console.log("Faylka main.js si sax ah ayuu u shaqeynayaa.");


// Exercise 6: Arrays
let colors = ["Red", "Blue", "Green"];
console.log("Layli 6:", colors);

// Exercise 7: Array Methods (push, shift)
let color = ["Yellow", "Black", "White"];
color.push("Red");
color.shift();
console.log("Layli 7:", color);

// Exercise 8: Objects
let car = {
    make: "Toyota",
    modal: "Corolla",
    Year: 2025
};
console.log("Layli 8:", car.make);

// Exercise 9: Object Methods
let cars = {
    make: "Toyota",
    modal: "Corolla",
    Year: 2025,
    start: function() {
        console.log(`Layli 9: Mishiinka gaariga ${this.make} waa shidan yahay.`);
    }
};
cars.start();

// Exercise 10: Array of Objects
let library = [{
    title: "The Great Gatsby",
    author: "mr Abdirahmaan",
    year: 2025
}, {
    title: "Hano Qalbi",
    author: "mr john",
    year: 2025
}, ];
console.log("Layli 10:", library[0].title, library[1].author);

// Exercise 11: For Loop
console.log("Layli 11: Tirinta 1 ilaa 50");
for (let i = 1; i <= 50; i++) {
    // console.log(i); // Waan ka saaray si uusan console-ka u buuxsamin
}

// Exercise 12: Loop through Array
const Fruits = ["Apple", "Banana", "Cherry"];
console.log("Layli 12:");
for (let i = 0; i < Fruits.length; i++) {
    console.log(Fruits[i]);
}

// Exercise 13: While Loop
console.log("Layli 13:");
let j = 5;
while (j >= 1) {
    console.log("Wareegga lambarkiisu waa: " + j);
    j--;
}

// Exercise 14: Do-While Loop
// Waan ka saaray (commented out) si uusan prompt-ku mar walba u soo bixin
/*
let Password;
do {
    Password = prompt("Geli furaha sirta ah (waa 10):");
} while (Password !== "10");
console.log("Layli 14: Soo dhawaaw, Mudane!");
*/

// Exercise 15: For...of and For...in Loops
const people = [{
    name: "Abdirahmaan",
    age: 30,
    city: "Mogadisho"
}, {
    name: "Mohamed",
    age: 70,
    city: "Afgooye"
}, ];
console.log("Layli 15 (for...of):");
for (const person of people) {
    console.log(`Magaca: ${person.name}, Da'da: ${person.age}`);
}

console.log("Layli 15 (for...in):");
for (const person of people) {
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    console.log('---');
}

// Exercise 16: If/Else Statement
let Score = 49;
if (Score >= 50) {
    console.log("Layli 16: Waa guuleysatay.");
} else {
    console.log("Layli 16: Waa dhacday.");
}

// Exercise 17: Else if Statement
let Temperature = 26;
let weather;
if (Temperature <= 0) {
    weather = "Aad u qabow";
} else if (Temperature < 20) {
    weather = "Qabow";
} else if (Temperature < 25) {
    weather = "Diiran";
} else {
    weather = "Kulul";
}
console.log("Layli 17:", weather);

// Exercise 18: Ternary Operator
let grade = 65;
const message = grade >= 60 ? "Waa gudubtay" : "Waa dhacday";
console.log("Layli 18:", message);

// Exercise 19: forEach Method
const numbers = [1, 2, 3, 4, 5];
console.log("Layli 19:");
numbers.forEach((num) => {
    console.log("Lambarku waa " + num);
});

// Exercise 20: map, filter, reduce Methods
const scores = [70, 80, 90, 100, 99];
const newScores = scores.filter((score) => score >= 90);
console.log("Layli 20 (filter):", newScores);

const numberArray = [1, 2, 3, 4];
const sum = numberArray.reduce((total, num) => total + num, 0);
console.log("Layli 20 (reduce): Wadarta waa " + sum);

// Exercise 21: reduce for multiplication
const multiple = [1, 2, 3, 4, 5];
const mult = multiple.reduce((total, num) => total * num, 1);
console.log("Layli 21 (reduce):", mult);

// Exercise 22: Array Destructuring
const colorz = ["Red", "Green", "Blue"];
const [koowaad, , sedexaad] = colorz;
console.log("Layli 22:", koowaad, sedexaad);

// Exercise 23: Object Destructuring
const carl = { make: "Toyota", modal: "Corolla", Year: 2025 };
const { make, modal } = carl;
console.log("Layli 23:", make, modal);

// Exercise 24: Default Parameters
function calculateArea(length = 8, width = 5) {
    console.log(`Layli 24: Bedka waa: ${length * width}cm²`);
}
calculateArea(10, 20);
calculateArea(); // Isticmaal default values

// Exercise 25: Spread & Rest Operators
const number1 = [1, 2, 3];
const all = [...number1, 4, 5, 6];
console.log("Layli 25 (Spread):", all);

function multiply(...nums) {
    return nums.reduce((total, num) => total * num, 1);
}
console.log("Layli 25 (Rest):", multiply(10, 2, 3, 2));

// Exercise 26: Asynchronous JavaScript (Callback)
function getUserData(callback) {
    setTimeout(() => {
        const user = { id: 1, name: "John Mask" };
        callback(user);
    }, 1000);
}
console.log("Layli 26: Bilaabidda helidda xogta...");
getUserData(function(user) {
    console.log("Xogtii la helay:", user);
});
console.log("Koodhkani ma xannibna.");

// Exercise 27: Promises
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ id: 3, name: "Jaale" });
            } else {
                reject("Cilad baa dhacday markii xogta la raadinayay.");
            }
        }, 1500);
    });
}
console.log("Layli 27 (Promise):");
fetchDataWithPromise()
    .then((data) => { console.log("Xogta la helay:", data); })
    .catch(error => console.log("Cilad:", error));

// Exercise 28: Async/Await
async function displayUserData() {
    try {
        console.log("Layli 28 (Async/Await): Sugidda xogta...");
        const user = await fetchDataWithPromise();
        console.log("Xogta la helay (async/await):", user);
    } catch (err) {
        console.log("Cilad ayaa dhacday:", err);
    }
}
displayUserData();

// Exercise 29-31: Fetch API
async function fetchPosts() {
    try {
        console.log("Layli 29: Bilaabidda soo qaadista xogta (posts)...");
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`Cilad HTTP! heerka: ${response.status}`);
        }
        const data = await response.json();
        console.log("Xogta 2-aad ee la helay (post):", data[1]);
    } catch (error) {
        console.log(error);
    }
}
fetchPosts();

async function postData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Post Cusub',
                body: 'Kani waa post tijaabo ah.',
                userId: 1
            })
        });
        if (!response.ok) {
            throw new Error(`Cilad HTTP! heerka: ${response.status}`);
        }
        const data = await response.json();
        console.log("Layli 30 (POST): Jawaabta server-ka:", data);
    } catch (error) {
        console.log(error);
    }
}
postData();

// --- DOM MANIPULATION & EVENTS ---

// Exercise 32 & 33: Selecting and Modifying Elements
const header1 = document.querySelector('#header1');
const textElements = document.querySelectorAll('.text');

function changeText() {
    header1.textContent = "Hello Eng Abdirahmaan, DOM waa la beddelay!";
}

function changeElement() {
    textElements.forEach(el => {
        el.innerHTML = "<b>Qoraalkan waa la beddelay isagoo la isticmaalayo innerHTML.</b>";
    });
}

const ul1 = document.querySelector('#ul1');
function addItem() {
    const newitem = document.createElement('li');
    newitem.textContent = `Shayga ${ul1.children.length + 1}`;
    ul1.appendChild(newitem);
}

function removeItem() {
    if (ul1.lastChild) {
        ul1.removeChild(ul1.lastChild);
    } else {
        alert('Ma jiro shay la saarayo!');
    }
}

// Exercise 34: More DOM Manipulation
const ul2 = document.querySelector('.ul2');
function addNew() {
    const newItem = document.createElement('li');
    newItem.textContent = "Axmed";
    ul2.appendChild(newItem);
}

function removeLast() {
    if (ul2.lastChild) {
        ul2.removeChild(ul2.lastChild);
    } else {
        alert("Ma jiro magac la saarayo!");
    }
}

function changeImage() {
    const image = document.querySelector('#image');
    image.setAttribute('src', 'https://images.unsplash.com/photo-1747077560968-aa04de91d6f4?w=500&auto=format&fit=crop&q=60');
    image.style.border = '3px solid red';
    image.style.padding = "14px";
    image.style.backgroundColor = "orange";
}

function changeTextStyle() {
    const header2 = document.querySelector('#header2');
    const textStyle = document.querySelector('.textStyle');
    header2.style.color = 'blue';
    textStyle.style.padding = "20px";
    textStyle.style.border = "4px solid black";
    textStyle.style.backgroundColor = '#e3f2fd';
}

function setLightMode() {
    document.body.style.backgroundColor = "white";
    document.body.classList.remove('dark-mode');
}

function setDarkMode() {
    document.body.style.backgroundColor = "black";
    document.body.classList.add('dark-mode');
}

// Exercise 35: Event Listeners
const myButton = document.querySelector('#myButton');
const removeButton = document.querySelector('#removeButton');

function handleClick() {
    console.log("Badhanka waa la gujiyay!");
}
myButton.addEventListener('click', handleClick);
removeButton.addEventListener('click', function() {
    myButton.removeEventListener('click', handleClick);
    console.log("Dhacdadii 'click' waa laga saaray badhanka.");
});

const colorSelect = document.querySelector('#colorSelect');
const selectedColorText = document.querySelector('#selectedColorText');
colorSelect.addEventListener('change', function() {
    selectedColorText.textContent = `Midabka la doortay: ${this.value}`;
    selectedColorText.style.color = this.value;
});

const userNameInput = document.querySelector('#userName');
const currentUserP = document.querySelector('#currentUser');
userNameInput.addEventListener('input', function() {
    currentUserP.textContent = `Isticmaalaha hadda: ${this.value}`;
});

const myForm = document.querySelector('#myForm');
const formMessage = document.querySelector('#formMessage');
const nameInputForMyForm = document.querySelector('#name');
myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    formMessage.textContent = `Xogta la gudbiyay: ${nameInputForMyForm.value}`;
    console.log("Foomka waa la gudbiyay:", nameInputForMyForm.value);
});

// Real-time Form Validation
const registrationForm = document.querySelector('#registrationForm');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const confirmPasswordInput = document.querySelector('#confirmPasswordInput');
const errorP = document.querySelector('#error');
const successP = document.querySelector('#success');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    errorP.textContent = '';
    successP.textContent = '';

    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        successP.textContent = 'Si guul leh ayaa lagu diiwaangeliyay!';
        registrationForm.reset();
        [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(el => el.classList.remove('valid'));
    }
});

function validateUsername() {
    if (nameInput.value.trim() === '') {
        setError(nameInput, 'Fadlan geli magacaaga');
        return false;
    } else {
        setSuccess(nameInput);
        return true;
    }
}

function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailInput.value.match(emailPattern)) {
        setError(emailInput, 'Fadlan geli email sax ah');
        return false;
    } else {
        setSuccess(emailInput);
        return true;
    }
}

function validatePassword() {
    if (passwordInput.value.length < 8) {
        setError(passwordInput, 'Furaha sirta waa inuu ahaadaa ugu yaraan 8 xaraf');
        return false;
    } else {
        setSuccess(passwordInput);
        return true;
    }
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value.trim() === '') {
        setError(confirmPasswordInput, 'Fadlan xaqiiji furaha sirta');
        return false;
    }
    if (passwordInput.value !== confirmPasswordInput.value) {
        setError(confirmPasswordInput, 'Furayaasha sirta isma laha');
        return false;
    } else {
        setSuccess(confirmPasswordInput);
        return true;
    }
}

function setError(element, message) {
    element.classList.add('invalid');
    element.classList.remove('valid');
    errorP.textContent = message;
}

function setSuccess(element) {
    element.classList.add('valid');
    element.classList.remove('invalid');
}

// Exercise 36: Input type="color"
const colorPicker = document.querySelector('#colorPicker');
const colorView = document.querySelector('#color_view');
const selectedColorValue = document.querySelector('#selectedColorValue');

colorPicker.addEventListener('input', function() {
    colorView.style.backgroundColor = this.value;
    selectedColorValue.textContent = `Midabka la doortay: ${this.value}`;
});