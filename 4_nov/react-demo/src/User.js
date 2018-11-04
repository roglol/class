import React, { Component } from 'react';


class User extends Component {
        render(){
            return (
                <div>
                    <div>
                 {console.log(this.props.arr)}
                 {this.props.arr.map(user => <li key={user.id}>{user.name} {user.surname} {user.phone} {user.email}</li>)}
                  </div>
                </div>
            )
        }
}


export default User