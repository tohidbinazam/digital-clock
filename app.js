const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const localdate = document.querySelector('.localdate');


setInterval(() => {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hours.innerHTML = `${xero(hour) > 12 ? xero(hour) - 12 : xero(hour)} :`;
    minutes.innerHTML = `${xero(minute)}`;
    seconds.innerHTML = `${xero(second)} ${xero(hour) < 12 ? 'AM' : 'PM'}`;
    localdate.innerHTML = `${date.toLocaleDateString()}`;

}, 1000);



const main_forms = document.querySelector('#main_forms');

main_forms.onsubmit = (e) => {
    e.preventDefault();

    const names = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const Selects = document.querySelector('#Selects').value;
    const birth = document.querySelector('#birth').value;
    const genders = document.querySelector('input[type="radio"]:checked')?.value;
    const numbers = document.querySelector('#numbers').value;
    const skill = document.querySelectorAll('input[type="checkbox"]:checked');
    const result = document.querySelector('.result');

    let skills = '';
    for (let i = 0; i < skill.length; i++) {
        skills += skill[i].value;
    }

    if(names && email && Selects && birth && genders && numbers && skills){
        result.innerHTML = `<p class = 'alert alert-success'>Hi <b>${names}</b>, your email is <b>${email}</b> and you are form <b>${Selects}</b>. You born in <b>${birth}</b> you are a <b>${genders}</b> and your phone number is <b>${numbers}</b>. Your skills is <b>${skills}</b><button type="button" class="btn-close" aria-label="close"></button></p>`;
    }else{
        result.innerHTML = validation('All fields are requird', 'info');
    }
}



const start = document.querySelector('.start');
const stops = document.querySelector('.stop');
const digit = document.querySelector('.digit');
const counter = document.querySelector('.counter');
const progress_bar = document.querySelector('.progress_bar');


let cler_time;
start.onclick = () => {
    let count = digit.value;
    start.style.pointerEvents = 'none';
    digit.style.pointerEvents = 'none';

    cler_time = setInterval(() => {
        counter.innerHTML = count;
        bar_width = loader(digit.value, count);
        progress_bar.style.width = `${bar_width}%`;
        if(bar_width <= 100 && bar_width > 75){
            progress_bar.style.backgroundColor = 'green';
        }else if(bar_width <= 75 && bar_width > 50){
            progress_bar.style.backgroundColor = 'blue';
        }else if(bar_width <= 50 && bar_width > 25){
            progress_bar.style.backgroundColor = 'yellow';
        }else if(bar_width <= 25){
            progress_bar.style.backgroundColor = 'red';
        }
        // count == 0 ? clearInterval(cler_time)  : '' ;
        if(count == 0){
            clearInterval(cler_time);
            start.style.pointerEvents = 'auto';
            digit.style.pointerEvents = 'auto';
        }else{
        }
        count--;
    }, 1000);
    // digit.value = '';

}

stops.onclick = () =>{
    clearInterval(cler_time);
    start.style.pointerEvents = 'auto';
    digit.style.pointerEvents = 'auto';
}



const list_item = document.querySelector('#list_item');
const addbtn = document.querySelector('.addbtn');
const lists = document.querySelector('.lists');


addbtn.onclick = () =>{

    const listitem = document.createElement('li');
    listitem.innerText = list_item.value;
    listitem.className = 'list-group-item';
    lists.appendChild(listitem);
    list_item.value = ''
    
}


const resu_name = document.getElementById('res_name');
const subjects = document.getElementById('subjects');
const sun_number = document.getElementById('sun_number');
const sub_check = document.querySelector('.sub_check');
const sub_result = document.querySelector('.sub_result');


sub_check.onclick = () => {


    // Always .value call into the all addEventListener function it is 
    // const res_name = document.getElementById('res_name').value;   or
    let res_name = resu_name.value;


    let res_subject = subjects.value;
    let marks = sun_number.value;
    let result
    if(marks >= 0 && marks < 33){
        result = `<p class = 'alert alert-danger'>You are fail in this exam</p>`;
    }else if(marks >= 33 && marks < 50){
        result = `<p class = 'alert alert-success'>Hi,${res_name} You get GPA 2.00 in ${res_subject}</p>`;
    }else if(marks >= 50 && marks < 60){
        result = `<p class = 'alert alert-success'>Hi,${res_name} You get GPA 3.00 in ${res_subject}</p>`;
    }else if(marks >= 60 && marks < 70){
        result = `<p class = 'alert alert-success'>Hi,${res_name} You get GPA 3.50 in ${res_subject}</p>`;
    }else if(marks >= 70 && marks < 80){
        result = `<p class = 'alert alert-success'>Hi,${res_name} You get GPA 4.00 in ${res_subject}</p>`;
    }else if(marks >= 80 && marks <= 100){
        result = `<p class = 'alert alert-success'>Hi,${res_name} You get GPA 5.00 in ${res_subject}</p>`;
    }else{
        result = `<p class = 'alert alert-danger'>Hi,${res_name} You input wrong value</p>`;
    }
    sub_result.innerHTML = result;

}

