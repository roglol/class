const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options:[]
}

const onFormSubmit = (e) => {
    e.preventDefault()
    console.log('chairtoo')
    const option = e.target.elements.option.value
    if(option){
        app.options.push(option)
        e.target.elements.option.value = ''
    }
 render()
}
const daachire = () => {
    app.options  .length = 0;
    render()
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}


function render(){
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={daachire}>damachire</button>
            <ol>
               {
                   app.options.map( el=> <li key={el}>{el}</li>)
               } 
            </ol>
             <form onSubmit={onFormSubmit}>
             <input type="text" name="option" />
             <button>Add Option</button>
    
            </form> 
        </div>
    
    )
    ReactDOM.render(template,appRoot)
}
const appRoot = document.getElementById('app')
render()
