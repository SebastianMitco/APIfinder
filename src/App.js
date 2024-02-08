import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import axios from "axios";
import Users from "./components/users/Users";
import { Search } from "./components/users/Search";
import { Alert } from "./components/layout/Alert";
class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  // Function for fetching all Users at begining
  // async componentDidMount(){
  //   this.setState({loading:true});
  //   const res = await axios.get(`https://api.github.com/users?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //    this.setState({users:res.data ,loading:false});
  // }

  // async normal function is putted in front of function declaration
  // async componentDidMount(){}
  // async in arrow function is written in front of parameter
  // searchUsers= async (text)=>{}

  //Search Github users -> getting param from children component throw props
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  //Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Search
              searchUsers={this.searchUsers}
              clearUsers={this.clearUsers}
              showClear={this.state.users.length > 0 ? true : false}
              setAlert={this.setAlert}
            />
            <Users loading={this.state.loading} users={this.state.users} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
