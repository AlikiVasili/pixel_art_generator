const container = document.querySelector('.container')
const sizeElement = document.querySelector('.size')
let size = sizeElement.value
const color = document.querySelector('.color')
const resetBtn = document.querySelector('.btn')
let draw = false

function grid(size){
    container.style.setProperty('--size',size)
    for(let i = 0; i < size * size; i++){
        const div = document.createElement('div')
        div.classList.add('pixel')

        div.addEventListener('mouseover', function(){
            if(!draw) return
            div.style.backgroundColor = color
        })

        div.addEventListener('mousedown', function(){
            div.style.backgroundColor = color.value
        })

        container.appendChild(div)
    }
}

grid(size)

window.addEventListener("mousedown",function(){
    draw = true
})
window.addEventListener("mouseup",function(){
    draw = false
})

resetBtn.addEventListener('click',function(){
    container.innerHTML = ''
    grid(size)
})

sizeElement.addEventListener('change',function(){
    size = sizeElement.value
    container.innerHTML = ''
    grid(size)
})

