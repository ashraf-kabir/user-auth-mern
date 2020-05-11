import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
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

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <div class="card shadow-lg">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal card-header">Register</h1>
                <div className="form-group">
                  <div className="col-md-12">
                    <label htmlFor="name">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="Enter your first name"
                      value={this.state.first_name}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <label htmlFor="name">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Enter your lastname name"
                      value={this.state.last_name}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                
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
                    <label htmlFor="role">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      name="role"
                      placeholder="Enter Role"
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
                    Register!
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

export default Register
