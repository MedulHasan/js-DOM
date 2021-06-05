// let root = document.querySelector('#root')
// let jumbotron = document.createElement('div')
// jumbotron.className = 'jumbotron text-center'
// jumbotron.setAttribute('id', 'my-jumbotron')

// let h1 = document.createElement('h1')
// h1.className = 'lead display-2'
// h1.innerHTML = '<strong>Medul</strong>'

// jumbotron.appendChild(h1)

// root.appendChild(jumbotron)


// -----------------------------

let nameField = document.querySelector('#nameField')
let ul = document.querySelector('#nameList')

nameField.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        let value = event.target.value
        creatli(ul, value)
        event.target.value = ''
    }
})

function creatli(ul, value) {
    let li = document.createElement('li')
    li.className = 'list-group-item d-flex'
    li.innerHTML = value

    let span = document.createElement('span')
    span.className = 'ml-auto'
    span.innerHTML = 'X'
    span.style.color = 'red'
    span.style.cursor = 'pointer'

    li.appendChild(span)
    ul.appendChild(li)

    span.addEventListener('click', function () {
        ul.removeChild(li)
    })
}