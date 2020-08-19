import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateUser , fetchUser} from '../actions/index'

class UpdateUserForm extends Component {
  constructor(props){
    super(props);
    this.state = ({
      showForm: false,
      newUser :{
        id: this.props.data.id,
        name: this.props.data.name,
        username: this.props.data.username,
        email: this.props.data.email,
        address: {
          street: this.props.data.address.street,
          suite: this.props.data.address.suite,
          city: this.props.data.address.city,
          zipcode: this.props.data.address.zipcode,
          geo: {
            lat: this.props.data.address && this.props.data.address.geo && this.props.data.address.geo.lat,
            lng: this.props.data.address && this.props.data.address.geo && this.props.data.address.geo.lng,
          }
        },
        phone: this.props.data.phone,
        website: this.props.data.website,
        company: {
          name: this.props.data.company.name,
          catchPhrase: this.props.data.company.catchPhrase,
          bs: this.props.data.company.bs,
        }
      },
    });
    
  this.onClick = this.onClick.bind(this);
  }

  onClick () {  this.setState({ showForm: true }); }
  
  handleChange = (e) =>{
    // this.setState({[e.target.name]: e.target.value});
  
    if (e.target.name === 'name') {
      this.setState({newUser :{
        ...this.state.newUser ,name: e.target.value} });
      
    } else if (e.target.name === 'username') {
      this.setState({ newUser :{
        ...this.state.newUser ,username: e.target.value} });
  
    } else if (e.target.name === 'email') {
      this.setState({ newUser :{
        ...this.state.newUser ,email: e.target.value  || '' }});
  
    } else if (e.target.name === 'street') {
      this.setState({
        newUser :{
          ...this.state.newUser ,address:{ ...this.state.address, street: e.target.value || ''}}
      });
  
    } else if (e.target.name === 'suite') {
      this.setState({
        newUser :{
          ...this.state.newUser ,address:{ ...this.state.address , suite: e.target.value }}
      });
  
    } else if (e.target.name === 'city') {
      this.setState({
        newUser :{
          ...this.state.newUser ,address:{  ...this.state.address, city: e.target.value} }
      });
  
    } else if (e.target.name === 'zipcode') {
      this.setState({
        newUser :{
          ...this.state.newUser,address:{...this.state.address ,zipcode: e.target.value }}
      });
  
    } else if (e.target.name === 'lat') {
      this.setState({
        newUser :{ ...this.state.newUser, address: {
            ...this.state.address, geo:{...this.state.geo, lat: e.target.value} 
        }}
      });
  
    } else if (e.target.name === 'lng') {
      this.setState({ 
        newUser :{ ...this.state.newUser, address:{
          ...this.state.address, geo:{...this.state.geo, lng: e.target.value}
        }}
      });
  
    } else if (e.target.name === 'phone') {
      this.setState({  newUser :{...this.state.newUser ,phone: e.target.value }});
  
    } else if (e.target.name === 'website') {
      this.setState({ newUser :{...this.state.newUser ,website: e.target.value }});
  
    } else if (e.target.name === 'cname') {
      this.setState({
        newUser :{
          ...this.state.newUser,company:{ ...this.state.company ,cname: e.target.value} }
      });
  
    } else if (e.target.name === 'catchPhrase') {
      this.setState({
        newUser :{
          ...this.state.newUser, company:{ ...this.state.company ,catchPhrase: e.target.value }}
      });
  
    } else if (e.target.name === 'bs') {
      this.setState({
        newUser :{
          ...this.state.newUser, company:{...this.state.company , bs: e.target.value }
        }
      });
    }
  }
  
  handleSubmit = async(e) => {
    e.preventDefault();
    console.log(this.state.newUser,this.props.data.id)
    await this.props.updateUser(this.state.newUser,this.props.data.id)
    await this.props.fetchUser();
  }

  renderForm(){
    const lat = (this.state.newUser.address.geo ? this.state.newUser.address.geo.lat:'')      
    const lng = (this.state.newUser.address.geo ? this.state.newUser.address.geo.lng:'')
  
    return (
        <div> 
            <form id= "add-app" onSubmit ={this.handleSubmit}>
              <h2>form</h2>
                <label>Name: </label>
                <input type="text" placeholder ='name'
                  name = 'name'
                  value = { this.state.newUser.name}
                  onChange ={ this.handleChange}
                  required
                />
  
                <label>User Name : </label>
                <input type="text" placeholder ='username'
                  name ='username'
                  value = { this.state.newUser.username}
                  onChange ={ this.handleChange}
                />
  
                <label>Email : </label>
                <input type="email" placeholder ='email'
                  name = 'email'
                  value = { this.state.newUser.email }
                  onChange ={ this.handleChange}
                />
  
                 <h4>Address</h4>
                <label>Street: </label>
                <input type="text" placeholder ='input'
                  name = 'street'
                  value = { this.state.newUser.address.street || ''}
                  onChange = { this.handleChange}
                />
  
                <label>Suite: </label>
                <input type="text" 
                  name = 'suite'
                  value = { this.state.newUser.address.suite}
                  onChange ={ this.handleChange}
                />
  
                <label>City </label>
                <input type="text" 
                  name = 'city'
                  value = { this.state.newUser.address.city}
                  onChange = { this.handleChange}
                />
  
                <label>Zipcode: </label>
                <input type="text" placeholder ='zipcode'
                  name = 'zipcode'
                  value = { this.state.newUser.address.zipcode}
                  onChange = { this.handleChange}
                /><br/>
  
                <label>Latitude: </label>
                <input type="text" placeholder ='latitude'
                  name = 'lat'
                  value = {lat}
                  onChange = { this.handleChange}
                />
  
                <label>Longitude: </label>
                <input type="text" placeholder ='longitude'
                  name = 'lng'
                  value = {lng}
                  onChange = { this.handleChange}
                />
  
                <label>Phone: </label>
                <input type="text" placeholder ='phone'
                  name = 'phone'
                  value = { this.state.newUser.phone}
                  onChange = { this.handleChange}
                />
  
                <label>Website: </label>
                <input type="text" placeholder ='input'
                  name = 'website'
                  value = { this.state.newUser.website}
                  onChange = { this.handleChange}
                />
  
                <h4>Company</h4>
                <label>Company Name: </label>
                <input type="text" placeholder ='input'
                  name = 'name'
                  value = { this.state.newUser.company.name}
                  onChange = { this.handleChange}
                />
  
                <label>CatchPhrase: </label>
                <input type="text" placeholder ='input'
                  name = 'catchPhrase'
                  value = { this.state.newUser.company.catchPhrase}
                  onChange = { this.handleChange}
                />
  
                <label>Bs: </label>
                <input type="text" placeholder ='input'
                  name = 'bs'
                  value = { this.state.newUser.company.bs}
                  onChange = { this.handleChange}
                />
                <button>submit</button>
           </form>
       </div>
    );
  }
  render() {
    const { showForm } = this.state;
    return (
      <div>
        <button onClick = { this.onClick } >EDIT</button>
        { showForm && this.renderForm() }
      </div>
    )
  }
}

export default connect(null,{updateUser,fetchUser})(UpdateUserForm)
