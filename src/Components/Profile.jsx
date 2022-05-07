import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';

export class Profile extends Component {
    constructor (props) {
        super(props);

        this.state = {firstname: " ", lastname: " ", email: "", gender: "", address: " ", bio: " ", show: false}
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
        console.log(this.state);
        this.setState ({show: true});      
    }



  render() {
    return (
      <>
        
        <div className='form-style ' >
            <div>
                <h1 className='header'>Profile Registration Page</h1>
            </div>
            
            <form onSubmit={this.handleSubmit} className="my-5 px-5" >
                <div className=''>
                    <div >
                        <Row className="g-2 mb-3">
                            <Col md>
                                
                                <Form.Floating className="">
                                    <Form.Control
                                    id="floatingInputCustom"
                                    type="text"
                                    placeholder="name@example.com"
                                    name="firstname" value={this.state.firstname} onChange={this.handleChange}
                                    />
                                    <label htmlFor="floatingInputCustom">First Name</label>
                                </Form.Floating>
                            </Col>
                            <Col md>
                                
                                <Form.Floating className="">
                                    <Form.Control
                                    name="lastname" value={this.state.lastname} onChange={this.handleChange}
                                    id="floatingInputCustom"
                                    type="text"
                                    placeholder="name@example.com"
                                    
                                    />
                                    <label htmlFor="floatingInputCustom">Last Name</label>
                                </Form.Floating>
                                
                            </Col>
                        </Row>

                        <Form.Floating className="mb-3">
                            <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                            name="email" value={this.state.email} onChange={this.handleChange}
                            />
                            <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>

                        <FloatingLabel controlId="floatingSelect" label="Gender" className="mb-3">
                            <Form.Select aria-label="Floating label select example" name="gender" value={this.state.gender} onChange={this.handleChange}>
                                <option >Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
            
                            </Form.Select>
                        </FloatingLabel>

                        <Form.Floating className="mb-3">
                            <Form.Control
                            id="floatingInputCustom"
                            type="textarea"
                            name="address" value={this.state.address} onChange={this.handleChange}
                            />
                            <label htmlFor="floatingInputCustom">Address</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                            id="floatingInputCustom"
                            type="textarea"
                            name="bio" value={this.state.bio} onChange={this.handleChange}
                            />
                            <label htmlFor="floatingInputCustom">Bio</label>
                        </Form.Floating>
                        
                        
                        
                        
                    </div>
                    
                </div>
                
                <div className="d-grid gap-2 my-5">
                
                    <Button variant="success" size="lg" type="submit">
                        Register 
                    </Button>
                
                </div>

                
            </form>
            
            
            
            
        </div>

        <div>
            {
            
                this.state.show ? 

                    
                <div className='px-auto text-center my-4'>
                    <Card  border="success" className='mx-auto' style={{ width: '40rem' }} >
                        <Card.Header>
                            <Card.Title className='text-success'>Registration Successful</Card.Title>
                        </Card.Header>
                        
                        <Card.Body>
                            <Card.Text>Full Name: {this.state.firstname} {this.state.lastname}</Card.Text>
                            <Card.Text>Email: {this.state.email}</Card.Text>
                            <Card.Text>Address: {this.state.address}</Card.Text>
                            <Card.Text>Bio: {this.state.bio}</Card.Text>
                        </Card.Body>
                    </Card>
                    
                </div> 
                : 
                <p> Please fill in your information </p>
                

            }
            
        </div>
        


      </>
    )
  }
}

export default Profile