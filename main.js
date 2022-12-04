const input = document.getElementById("input")
const button = document.getElementById("btn")
const list = document.getElementById("list")

button.addEventListener("click", function () {
    let valor = input.value
    const newElement = document.createElement("li")
    newElement.textContent = valor
    input.value = ""
    list.appendChild(newElement)
    const buttonx = document.createElement("button")
    buttonx.textContent = "X"
    newElement.appendChild(buttonx)
    buttonx.addEventListener("click", function () {
    
    buttonx.parentElement.remove()
})


})


