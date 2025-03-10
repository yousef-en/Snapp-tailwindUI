
let dark = document.getElementById("dark")
let light = document.querySelector("html")

dark.addEventListener('click' , ()=>{
if(light.classList.contains('dark')){
    light.classList.remove('dark')
  } else{
    light.classList.add('dark')
  } })

dark.addEventListener('click' , ()=>{
    
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        dark.textContent = '🌙'
    }else{
        dark.textContent = '🔅'
    }
})

let nav_res = document.querySelector('#nav_res');
let hamber_menu = document.querySelector('#hamber_menu');

hamber_menu.addEventListener('click', () => {
    if (nav_res.classList.contains('hidden')) {
        nav_res.classList.remove('hidden')
    } else {
        nav_res.classList.add('hidden')
    }
})
