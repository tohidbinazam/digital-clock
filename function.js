function xero (time){
    return time < 10 ? '0'+time : time;
}
function validation(mas , alert){
    return `<p class = 'alert alert-${alert}'>${mas}</p>`;
}