const button=document.querySelector(".button")
const headerimg=document.querySelector('.header-img')

const click_me=()=>
{
   headerimg.style.background="red"
}


button.addEventListener('click',click_me)