import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [main, set_main]= useState('Login')
  return (
    <div style={{width: '100%' , height: '100%'}}>
    {main == 'Login' ?
      <Login changeMain={(value) => set_main(value)} />
    :
      <Form />
    }
    </div>
  )
}

function Login({changeMain}) {
  return(
      <div style={{width: '50%', height: '80%' ,margin: 'auto' , padding: 10 }}>
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
            
            
              <button type="submit" className="btn btn-primary" onClick={() => changeMain('Form')}>
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

function Form() {
  const[members, setMembers] = useState([
      {phone:"09121311111", password:"abcd"},
      {phone:"09121312222", password:"abcde"},
      {phone:"09121313333", password:"abcdef"},
      {phone:"09121314444", password:"abcdefg"},
      {phone:"09121315555", password:"abcdefgh"},
      {phone:"09121316666", password:"abcdefghi"},
      {phone:"09121317777", password:"abcdefghij"},
      {phone:"09121318888", password:"abcdefghijk"},
      {phone:"09121319999", password:"abcdefghijkl"},
      {phone:"09121310000", password:"abcdefghijklm"},
    ])


  function delete_members(phone){
    setMembers(members.filter(x => x.phone !== phone))
  }
      return(
        <div class="main-wrapper" >
          <h1 class='memebre-title'>Members List</h1>
          {members.map((member) => {
                return <div style={{width: '95%' , height: 60, justifyContent: 'center' , alignItems: 'center' , marginTop: 8 , marginLeft: 10}}>
                  <div style={{width: '100%' , height:'100%', flexDirection: 'row' }} className='user_item'>
                    <div style={{width: '30%' , height:'100%' ,justifyContent: 'center' , alignItems: 'center' , textAlign: 'center'}} className='xxx' >
                      <p >{member.phone}</p>
                    </div>
                    <div style={{width: '30%' , height: '100%' ,justifyContent: 'center' , alignItems: 'center'  }} className='xxx'>
                      <p >{member.password}</p>
                    </div>
                    <div style={{width: '30%' , height: '100%' ,display: 'flex' , justifyContent: 'flex-end' }} className='xxx'>
                      <button type="button"  className="btn btn-danger" onClick={() => delete_members(member.phone)}>Delete</button>
                    </div>
                  </div>
                  
                </div>
              })} 
      </div>
    

          
      );
}
export default App