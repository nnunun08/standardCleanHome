const modeBtn = document.querySelector('.myState .modeBtn')
const body = document.querySelector('body')
console.log(modeBtn)
console.log(body)
modeBtn.addEventListener('click', () =>{
    body.className == 'light' ? body.className = 'dark' : body.className = 'light'
    // if(body.className === 'light') {
    //     body.className = 'dark'
    // } else if (body.className = 'dark') {
    //     body.className = 'light'
    // }
})