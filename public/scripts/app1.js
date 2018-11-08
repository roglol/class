class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.state = {
            options: ['Thing one','Thing two','Thing four'],

        }
    }
    handleDeleteOptions(){
        this.setState({options: []})
    }
    handlePick(){
        let num = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[num])
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) >-1){
            return 'This option already exists'
        }
        this.setState({options:this.state.options.concat([option])})
    }
    render(){
        const title = 'Indecision'
        const subtitle='Put your life in the hands of your computer'

        return (
            <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}/>
        <Options options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOptions handleAddOption = {this.handleAddOption}/>   
            </div>
        )
    }
}

const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
  <button onClick={props.handlePick}
   disabled={!props.hasOptions}
  >
  What should I do?</button>

        </div>

    )
}

const Options = (props) =>{
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
         {props.options.map(el => <Option key={el} optionText={el}/>)}
        </div>
    );
}
const Option = (props) =>{
    return (
        <div>
           {props.optionText}
        </div>
       )
}
class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const err=this.props.handleAddOption(option)
        this.setState({error:err})
        e.target.elements.option.value = ''
    }
     render(){
         return (
             <div>
                 {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
             <input type="text" name="option" />
             <button>Add Option</button>
            </form> 
             </div>
         )
     }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))