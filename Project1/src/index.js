import './index.css'

window.onload = function () {
    const taskField = document.querySelector('#taskField')
    const addTaskBtn = document.querySelector('#addTaskBtn')
    const allTaskParent = document.querySelector('#allTask')

    taskField.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
            let task = event.target.value
            creatNewTask(allTaskParent, task)
            this.value = ''
        }
    })

    // addTaskBtn.addEventListener('click', function (event) {
    //     let tasks = event.target.value
    //     console.log(tasks);
    //     creatNewTask(allTaskParent, tasks)
    //     this.value = ''
    // })
}

function creatNewTask(parent, task) {
    let col = document.createElement('div')
    col.className = 'col-sm-3'

    let singleTask = document.createElement('div')
    singleTask.className = 'single-task d-flex'

    let singleTaskP = document.createElement('p')
    singleTaskP.innerHTML = task

    singleTask.appendChild(singleTaskP)

    let span = document.createElement('span')
    span.innerHTML = '<i class="fas fa-times-circle"></i>'
    span.className = 'ml-auto'
    span.style.cursor = 'pointer'

    span.addEventListener('click', function () {
        parent.removeChild(col)
    })
    singleTask.appendChild(span)

    let taskController = creatTaskController(singleTask)
    singleTask.appendChild(taskController)

    taskController.style.visibility = 'hidden'
    singleTask.onmouseenter = function () {
        taskController.style.visibility = 'visible'
    }
    singleTask.onmouseleave = function () {
        taskController.style.visibility = 'hidden'
    }

    col.appendChild(singleTask)
    parent.appendChild(col)
}

function creatTaskController(parent) {
    let controlPannel = document.createElement('div')
    controlPannel.className = 'task-control-panel d-flex align-items-center'

    let colorPallete = creatColorPallete(parent)
    controlPannel.appendChild(colorPallete)

    let editBtn = creatEditBtn(parent)
    controlPannel.appendChild(editBtn)

    return controlPannel
}

function creatEditBtn(parent) {
    let span = document.createElement('span')
    span.innerHTML = '<i class="far fa-edit"></i>'
    span.className = 'ml-auto mr-2'
    span.style.color = 'white'
    span.style.cursor = 'pointer'

    span.addEventListener('click', function () {
        let p = parent.querySelector('p')
        let textArea = document.createElement('textarea')
        textArea.className = 'innet-textarea'
        textArea.style.width = parent.offsetWidth + 'px'
        textArea.style.height = parent.offsetHeight + 'px'
        textArea.innerHTML = p.innerHTML

        textArea.addEventListener('keypress', function (event) {
            if (event.keyCode === 13) {
                event.stopPropagation()
                if (this.value) {
                    p.innerHTML = this.value
                    parent.removeChild(this)
                } else {
                    alert('Plese Put Some Data')
                }
            }
        })

        parent.appendChild(textArea)
    })

    return span
}

function creatColorPallete(parent) {
    const colors = ['palegreen', 'skyblue', 'powderblue', 'salmon', 'gray', 'red']
    let colorDiv = document.createElement('div')
    colorDiv.className = 'd-flex'

    colors.forEach(color => {
        let singleColorDiv = document.createElement('div')
        singleColorDiv.className = 'color-cercle ml-1'
        singleColorDiv.style.cursor = 'pointer'
        singleColorDiv.style.background = color
        singleColorDiv.addEventListener('click', function () {
            parent.style.background = color
        })

        colorDiv.appendChild(singleColorDiv)
    })


    return colorDiv
}