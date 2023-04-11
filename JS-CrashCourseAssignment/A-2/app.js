// ! Task-01

function sum(num) {
    return function (n) {
        return num + n;
    };
}

const addNums = sum(8);
console.log(addNums(10));

// ! Task-02

function searchInArr(arr, val) {
    if (arr.length === 0) {
        return false;
    } else if (arr[0] === val) {
        return true;
    } else {
        return searchInArr(arr.slice(1), val);
    }
}

const arr = [4, 7, 3, 2, 5];
console.log(searchInArr(arr, 7));

// ! Task-03

function addPara(text) {
    const para = document.createElement("p");
    const node = document.createTextNode(text);
    para.appendChild(node);
    document.body.appendChild(para);
}

addPara("This paragraph is created through javascript");

// ! Task-04

function addListItem(text) {
    const list = document.getElementById("myList");
    const item = document.createElement("li");
    const node = document.createTextNode(text);
    item.appendChild(node);
    list.appendChild(item);
}

addListItem("JavaScript");


// ! Task-05

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

let myElement = document.getElementById("colorMe");
changeBackgroundColor(myElement, "lightgreen");

// ! Task-06

function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}

const myObjectStore = {
    name: "Zubair Ahmed",
    age: 30
};
saveObjectToLocalStorage("userData", myObjectStore);

// ! Task-07

function getObjectFromLocalStorage(key) {
    const object = localStorage.getItem(key);
    return JSON.parse(object);
}

const myObjectGet = getObjectFromLocalStorage("userData");

// ! Task-08
function saveObjectToLocalStorage(object) {
    for (const [key, value] of Object.entries(object)) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

function getObjectFromLocalStorage() {
    const object = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        object[key] = value;
    }
    return object;
}

const myObject = {
    name: "Zubair Ahmed",
    age: 22
};
saveObjectToLocalStorage(myObject);
const retrievedObject = getObjectFromLocalStorage();