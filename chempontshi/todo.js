const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]


let par = document.createElement('p')
par.textContent = 'you have 2 todos left'
document.body.appendChild(par)
for(let i = 0; i< todos.length; i++){
    let paragraph = document.createElement('p')
    paragraph.textContent = (todos[i].text)
    document.body.appendChild(paragraph)
}

