let textBox=document.querySelector('#txtbox');
let btn1=document.querySelector('#btn1');
let btn2=document.querySelector('#btn2');
let result=document.querySelector('#result');
btn1.addEventListener('click',()=>{

    let ans=(textBox.value * 9/5) + 32;
    result.innerHTML=ans.toFixed(2)+" &degF";
});

btn2.addEventListener('click',()=>{
    let ans=(textBox.value-32) * 5/9;
    result.innerHTML=ans.toFixed(2)+" &degC";
});