const form = document. querySelector('form')
console.log(form)
form.addEventListener('submit', addTask)
function addTask(event) {
    console.log(event.type)
    event.preventDefault()
}
