import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      role: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    // if (role)
    const user = {
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
      // roleCheck: user.role
    }

    // let mysql = require('mysql');
    // let config = require('../config');
    // let connection = mysql.getConnection(config.databaseOptions);

    // let email = process.email; // pass argument to query
    // let sql = `SELECT role FROM users WHERE email=` + email ;

    // connection.query(sql, (error, results, fields) => {
    //   if (error) {
    //     return console.error(error.message);
    //   }
    //   console.log(results);
    // });

    // connection.end();


    // const roleCheck;


    // const app = express();

    // Creating a GET route that returns data from the 'users' table.
    
      //   // Connecting to the database.
      // connection.getConnection(function (err, connection) {

      //   // var emailCheck = this.state.email;

      //   var email2 = process.this.state.email;

      //   var sql = `SELECT role FROM users WHERE email=` + email2 ;

      //   // Executing the MySQL query (select all data from the 'users' table).
      //   connection.query(sql, function (error, results, fields) {
      //     // If some error occurs, we throw an error.
      //     if (error) throw error;

      //     // Getting the 'response' from the database and sending it to our route. This is were the data is.
      //     // res.send(results)
      //     setValue(results);
      //   });
      // });
    

    // var someVar;

    // function setValue(value) {
    //   this.someVar = value;
    //   // console.log(someVar);
    // }


    // var roleCheck = user.role

    if (user.role === "user") {
      login(user).then(res => {
        if (res) {
          this.props.history.push(`/profile`)
        }
      });
    } else if (user.role === "admin") {
      login(user).then(res => {
        if (res) {
          this.props.history.push(`/admin`)
        }
      });
    } else {
      alert('one or many empty field')
    }

    // const admin = {
    //   email: this.state.email,
    //   password: this.state.password,
    //   role: this.state.role
    // }

    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <div className="card shadow-lg">
              <form noValidate onSubmit={this.onSubmit} class="form-horizontal">
                <h1 className="h3 mb-3 font-weight-normal card-header">Please sign in</h1>

                <div className="form-group">
                  <div className="col-md-12">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <label htmlFor="email">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      name="role"
                      placeholder="Enter role"
                      value={this.state.role}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="col-md-12">
                    <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Sign in
                  </button>
                  </div>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Login
