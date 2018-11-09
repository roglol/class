import React from 'react'

export default class Search extends React.Component {
   render(){
    return (
        <div className="input" >
        <form action="" method="post" onSubmit={(e) =>{
          e.preventDefault()
          this.props.onSubmit(e)
        }}>
          <input 
          name="searchText"
          type="text" 
          placeholder="Search Text"
          />
          <button>OK</button>
        </form>
      </div>
    )

   } 
}