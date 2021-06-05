// import '../styles/index.scss'

// let btn = document.getElementById('clickMe')
let btn = $('#clickMe')
// let h1 = document.getElementById('my-h1')
let h1 = $('#my-h1')
// console.dir(h1);

let colors = ['red', 'green', 'blue', 'yellow']
let i = 0
btn.addEventListener('click', () => {

    h1.innerText = 'Medul Hasan'

    h1.style.background = colors[i]
    if (i >= colors.length) {
        i = 0
    } else {
        i++
    }
})

function $(selector) {
    return document.querySelector(selector)
}

// ------------------------------------------
// h1.style.color = 'red'
// h1.style.fontSize = '20px'

let h1Style = {
    color: 'blue',
    fontSize: '30px',
    textAlign: 'center'
}

Object.assign(h1.style, h1Style)

// ----------------------------------------------

let btn2 = $('#btn2')
let colaps = $('#colaps')

let isShow = false
btn2.addEventListener('click', () => {
    if (isShow) {
        colaps.style.visibility = "hidden";
        isShow = false;
        btn2.innerHTML = "Show";
    } else {
        colaps.style.visibility = "visible";
        isShow = true;
        btn2.innerHTML = "Hide";
    }
})

// -----------------------------------------------