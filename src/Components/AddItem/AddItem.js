import React , { Component } from 'react';
import './AddItem.css'


class AddItem extends Component {
    state = {
        username : '',
        password : ''
    }

    handleChange = (e) => {
       this.setState({
           [e.target.id]: e.target.value
       })
    }

    handlSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            username: '',
            password: ''
        })     
    }

    render() {
        return (
              <div className="ListItems">
               <form onSubmit={this.handlSubmit}>
                   <input type="username" placeholder="Enter name ..." id="username" onChange={this.handleChange} value={this.state.username} />
                   <input type="password" placeholder="Enter age ..." id="password" onChange={this.handleChange} value={this.state.password} />
                   <input type="submit" value="Add" />
               </form>
              </div>
        );
    }
}
export default AddItem;
