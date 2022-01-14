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
    const genders = document.querySelector('input[type="radio"]:checked').value;
    const numbers = document.querySelector('#numbers').value;
    const skill = document.querySelectorAll('input[type="checkbox"]:checked');
    const result = document.querySelector('.result');

    let skills = '';
    for (let i = 0; i < skill.length; i++) {
        skills += skill[i].value;
    }

    if(names && email && Selects && birth && genders && numbers && skills){
        result.innerHTML = `<p class = 'alert alert-success'>Hi <b>${names}</b>, your email is <b>${email}</b> and you are form <b>${Selects}</b>. You born in <b>${birth}</b> you are a <b>${genders}</b> and your phone number is <b>${numbers}</b>. Your skills is <b>${skills}</b><button class = 'close' data-dismiss = 'alert'>&times;<button></p>`;
    }else{
        result.innerHTML = validation('All fields are requird', 'danger');
    }

}



