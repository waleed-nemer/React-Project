import React , { Component } from 'react';
import TodoItems from './Components/TodoItems/TodoItems'
import AddItem from './Components/AddItem/AddItem'

class App extends Component {

    state = {
        items : [
            {id:1, username:'waleed', password:2398765676},
            {id:2, username:'ali', password:2768985438},
            {id:3, username:'ahmed', password:2009843119}
        ]
    }

    deleteItem = (id) => {
      let items = this.state.items.filter(item => {
          return item.id !== id
      })
      this.setState({items})
    }

    addItem = (item) => {
        item.id = Math.random();
         let items = this.state.items;
         items.push(item);
         this.setState({items})
    }

    render() {
        return (
              <div className="App container">
                 <h1 className="text-center"> Todo List</h1>
                  <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
                  <AddItem addItem={this.addItem}/>
              </div>
        );
    }
}
export default App;
