import React, { Component } from 'react'

export class Profile extends Component {
    constructor (props) {
        super(props);

        this.state = {firstname: " ", lastname: " ", email: "", gender: "", address: " ", bio: " "}
    }

    // handleFirstName = (event) => {
    //     this.setState ({firstname:event.target.value})
        
    // }
    // handleLastName = (event) => {
    //     this.setState ({lastname:event.target.value})
        
    // }
    // handleEmail = (event) => {
    //     this.setState ({email:event.target.value})
        
    // }
    
    // handleSelectGender = (event) => {
    //     this.setState ({gender:event.target.value})
        
    // }

    // handleAddress = (event) => {
    //     this.setState ({address:event.target.value})
        
    // }

    // handleBio = (event) => {
    //     this.setState ({bio:event.target.value})
        
    // }

    handleChange = (event) => {
        let value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }

    handleSubmit = (event) => {
        // console.log(this.state.firstname, this.state.lastname, this.state.email, this.state.gender, this.state.address, this.state.bio )
        event.preventDefault();
        console.log(this.state)
    }



  render() {
    return (
      <>
        
        <div className='form-style ' >
            <h1 className='header'>Profile Registration Page</h1>
            <form onSubmit={this.handleSubmit}  >
                <div className=''>
                    <div >
                        <div className='input-margin'>
                            <label >
                                <div>First Name:</div>
                                <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} className="input-height" />
                            </label>
                        </div>
                        <div className='input-margin'>
                            <label >
                                <div>Last Name:</div>
                                <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} className="input-height"/>
                            </label>
                        </div>
                        <div className='input-margin'>
                            <label >
                                <div>Email:</div>
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="input-height" />
                                
                            </label>
                        </div>
                        <div className='input-margin'>
                            <label >
                                <div>Gender:</div>
                                <select name="gender" value={this.state.gender} onChange={this.handleChange} className="input-height">
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
                                <textarea name="address" value={this.state.address} onChange={this.handleChange}  rows="4"  ></textarea>
                                
                            </label>
                        </div>
                        <div className='input-margin'>
                            <label >
                                <div>Bio:</div>
                                <textarea  name="bio" value={this.state.bio} onChange={this.handleChange}   rows="6" ></textarea>
                                
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