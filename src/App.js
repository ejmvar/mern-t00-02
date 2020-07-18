import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    todoList: []
  };

  doSubmit = ev => {
    // console.log("doSubmit ev:", ev);
    // alert("preventDefault");
    ev.preventDefault();

    var descLst = ev.target.elements.todoTask.value;
    if (descLst.length > 0) {
      this.setState({
        todoList: [...this.state.todoList, descLst]
      });
      ev.target.reset();
    }
    // alert("preventDefault")
    // ev.preventDefault();
  };

  doDelete = (ev, idx) => {
    ev.preventDefault();
    var taskList = [...this.state.todoList];
    taskList.splice(idx, 1);
    this.setState({ todoList: taskList });
  };

  // doDelete(ev, idx) {
  //   ev.preventDefault();
  //   var taskList = [...this.state.todoList];
  //   taskList.splice(idx, 1);
  //   this.setState({ todoList: taskList });
  // }


  render() {
    return (
      <div className="App" >
        <header className="App-header">

          <p className="App-link">
            Calendario de Feriados
        </p>
        </header>
        <div className="App-body">
          App-body h

        <form className="App-form" onSubmit={this.doSubmit} >
            <div className="input-group">

              <input type="text" className="form-control"
                name="todoTask"
                placeholder="Enter your task" autoComplete="off"
              ></input>
            </div>
            <div className="input-buttons" >
              buttons
            <button type="submit" className="input-button"> General </button>
              <button type="submit" className="input-button"> Anual </button>
            </div>
          </form>
          <div>
            App-body f

            <ul className="list-group">
              {this.state.todoList.map((itm, idx) => {
                return (
                  <li className="list-row" key={idx} >
                    idx: {idx} -- itm: {itm}
                    <button className="del-btn" onClick={(ev) => this.doDelete(ev, idx)}> [x] </button>
                    <button className="del-btn" onClick={(ev) => { this.doDelete(ev, idx); }}> [x] </button>
                  </li>
                );
              })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }


};

export default App;
