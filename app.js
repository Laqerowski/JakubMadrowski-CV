let button = document.querySelector('#button_one')
console.log(button)

let buttonFunction = () => {
    window.print()
}
button.addEventListener('click', buttonFunction)