let list_container = document.getElementsByClassName('list-task');
let newTask = document.getElementById('newTask');
let addBtn = document.getElementById('addBtn');
let hiddenText = document.getElementById('hiddenText');
let cbox = document.getElementsByClassName('cbox');
let isHidden = 0;

// console.log(addBtn);

addBtn.addEventListener('click',()=>{
    let Task = newTask.value;
    if(Task!==''){
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        let cancel = document.createElement('span');
        checkbox.className='cbox';
        checkbox.type='checkbox';
        cancel.innerHTML = '&#128473';
        li.append(checkbox,Task,cancel);
        list_container[0].appendChild(li);
        isHidden = 1;
    }
    if(isHidden){
        hiddenText.style.display = 'none';
    }
    newTask.value = '';
    saveData();
});

list_container[0].addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('cross');
        if(e.target.classList.contains('cross')){
            e.target.firstElementChild.checked = true;
        }else{
            e.target.firstElementChild.checked = false;
        }
        // console.log(e.target.classList.contains('cross'));
        // console.log(e.target.firstElementChild);
        // e.target.style.textDecoration = 'line-through';
    }
    else if(e.target.tagName==='INPUT'){
        e.target.parentNode.classList.toggle('cross');
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentNode.remove();
        saveData();
    } 
});

function saveData(){
    localStorage.setItem('myData',list_container[0].innerHTML);
}

function getData(){
    list_container[0].innerHTML = localStorage.getItem('myData');
}

getData();

if(list_container[0].innerHTML){
    hiddenText.style.display = 'none';
    isHidden = 0;
}