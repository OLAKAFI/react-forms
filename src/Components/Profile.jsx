import React, { Component } from 'react'

export class Profile extends Component {
    constructor (props) {
        super(props);

        this.state = {firstname: " ", lastname: " ", email: "", gender: "", address: " ", bio: " "}
    }

    handleFirstName = (event) => {
        this.setState ({firstname:event.target.value})
        
    }
    handleLastName = (event) => {
        this.setState ({lastname:event.target.value})
        
    }
    handleEmail = (event) => {
        this.setState ({email:event.target.value})
        
    }
    
    handleSelectGender = (event) => {
        this.setState ({gender:event.target.value})
        
    }

    handleAddress = (event) => {
        this.setState ({address:event.target.value})
        
    }

    handleBio = (event) => {
        this.setState ({bio:event.target.value})
        
    }

    handleSubmit = (event) => {
        console.log(this.state.firstname, this.state.lastname, this.state.email, this.state.gender, this.state.address, this.state.bio )
        event.preventDefault();
    }



  render() {
    return (
      <>
        
        <div className='form-style ' >
            <h1 className='header'>Profile Registration Page</h1>
            <form onSubmit={this.handleSubmit}  >
                <div className='form-container'>
                    <div >
                        <div className='input-margin'>
                            <label >
                                <div>First Name:</div>
                                <input type="text" value={this.state.firstname} onChange={this.handleFirstName} className="input-height" />
                            </label>
                        </div>
                        <div className='input-margin'>
                            <label >
                                <div>Last Name:</div>
                                <input type="text" value={this.state.lastname} onChange={this.handleLastName} className="input-height"/>
                            </label>
                        </div>
                        <div className='input-margin'>
                            <label >
                                <div>Email:</div>
                                <input type="email" value={this.state.email} onChange={this.handleEmail} className="input-height" />
                                
                            </label>
                        </div>
                        <div className='input-margin'>
                            <label >
                                <div>Gender:</div>
                                <select  value={this.state.gender} onChange={this.handleSelectGender} className="input-height">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </label>
                        </div>
                        
                    </div>
                    <div>
                        
                        
                        <div className='input-margin'>
                            <label >
                                <div>Address:</div>
                                <textarea value={this.state.address} onChange={this.handleAddress} cols="25" rows="4"  ></textarea>
                                
                            </label>
                        </div>
                        <div className='input-margin'>
                            <label >
                                <div>Bio:</div>
                                <textarea value={this.state.bio} onChange={this.handleBio} cols="25"  rows="6" ></textarea>
                                
                            </label>
                        </div>
                    </div>
                    
                </div>
                <div className='btn-container'>
                    <button type="submit" className='btn-success' >Register</button>
                </div>
                
            </form>
        </div>


      </>
    )
  }
}

export default Profile