import React, { Component } from 'react';
import { ReactDOM } from 'react';
import members from "./members";


function delete_members(){
    delete members.phone;
    delete members.password;
}



console.log("hello");

class Form extends Component{
    state={
        members:[
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
        ],
    };
   render(){
        return(
            <div style={{width: '50%', height: '80%' , backgroundColor: 'skyblue' ,margin: 'auto' , padding: 10}}>
                <h1>Members List</h1>
                
                {this.state.members.map((member) => {
                    return <members phone={member.phone} password={member.password}/>;
                   <button type="button" class="btn btn-danger" onClick={delete_members}>Delete</button>
                })}
               {/* //<button type="button" class="btn btn-primary" onClick={this.add_members}>Add Member</button> */}
            </div>
           
        );
    }
}

export default Form;



