import React from 'react';

function Form({onSubmit}){
        let input = null;

        const handleSubmit = event =>{
            event.preventDefault()
            onSubmit({title:input.value})
            input.value = ''
        }
        return (
            <form onSubmit={handleSubmit}>
            <div className="input-group">
                 <input type="text" className="form-control form-control-sm" ref={ inp => input = inp}/>
                 <span className = "input-group-btn">
                   <button className="btn btn-secondary">Save</button>
                 </span>
            </div>
            </form>
        )
}

export default Form