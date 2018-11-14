import React from 'react';

function Form ({ onSubmit }){
    let input = null;

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit({title: input.value })
        input.value = ''
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" className="form-control form-control-sm"  ref={ inp => input = inp } />
<<<<<<< HEAD
                <span className="input-group-btn">
                    <button className="btn btn-secondary">Save</button>
=======
                <span>&nbsp;</span>
                <span className="input-group-btn">
                    <button className="btn btn-success">Save</button>
>>>>>>> f18f9440540c43c841420b6fafd3d6d7325120cc
                </span>
            </div>
        </form>
    )
}

export default Form;