const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const box = document.querySelector(".box")
// const text = document.querySelector('h1')

function Add() {
    if (input.value != "") {
        const newEl = document.createElement("p")

        newEl.innerText = input.value

        box.appendChild(newEl)

        input.value = ""

        newEl.addEventListener("click", () => {
            newEl.remove()
        })
    } 
}

btn.addEventListener("click", Add)

input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        Add()
    }
})
