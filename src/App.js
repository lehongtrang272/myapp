import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import 'react-table/react-table.css';
import DatePicker from 'material-ui/DatePicker';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: '', description: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  dateChanged=(event,date) =>{
    this.setState({date: date})
  }

  addTodo = (event) => {
    event.preventDefault();
    const strDate = this.state.date.getDate() + "." + (this.state.date.getMonth()+1) + "."+this.state.date.getFullYear();
    const newTodo =  {description: this.state.description, date: strDate};
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">To do list</h1>
        </div>
        <div>
        Date:
          <DatePicker name="date" hintText="Date"  onChange={this.dateChanged} value = {this.state.date}/>
        Description:
          <TextField name="description" hintText="Description"  onChange={this.inputChanged} 
          value = {this.state.description} />
          <RaisedButton primary={true} label="Add" onClick={this.addTodo}/>
        </div>
        <div>
        <Table>
          
            <TableHeader displaySelectAll={false}><TableRow><TableHeaderColumn>Description</TableHeaderColumn><TableHeaderColumn>Date</TableHeaderColumn></TableRow></TableHeader>
            <TableBody displayRowCheckbox={false}>
            {this.state.todos.map((item, index)=><TableRow key={index}><TableRowColumn>{item.description}</TableRowColumn><TableRowColumn>{item.date}</TableRowColumn></TableRow>)}
            </TableBody>
            </Table>
        </div>
      </div>
    );
  }
}

export default App;
