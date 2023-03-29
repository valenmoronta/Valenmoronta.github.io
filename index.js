const addinput = document.querySelector('.addinput');
const addbutton = document.querySelector('#addbutton');
const Newdata = document.querySelector('.Newdata');

let tasksArr;
let getTasks = JSON.parse(localStorage.getItem('tasks'));
getTasks ? tasksArr = getTasks : tasksArr = [];

let todoItems = []

function tasks(item) {
    this.item = item;
    this.completed = false;
}

addbutton.addEventListener('click', () => {
    if(addinput.value !== "") {
        tasksArr.push(new tasks(addinput.value));
        addinput.value = "";
        update();
    }
})


const updateStorage = () => {
    localStorgame.setItem('tasks', JSON.strinify(tasksArr))
}



function update() {
    updateStorage();
    fillTasks();
}

