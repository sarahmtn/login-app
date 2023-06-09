import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Form } from 'react-router-dom'
import Login from './component/login'
import form from './component/form'
function App() {
  return (
    <div style={{width: '50%', height: '80%' ,margin: 'auto' , padding: 10,  }}>
      <form class='form-login'>
      <h3>Login</h3>
      <div className="mb-3">
        <label>Phone Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your Phone Number"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
          </label>
        </div>
      </div>
        <div className="d-grid">
          
          
            <button type="submit" className="btn btn-primary" onClick={form}>
              Submit
            </button>
          
        </div>
      
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  </div>
  )
}
export default App