import React from 'react';
import AddUser from './AddUser';
import UpdateUserForm from './UpdateUserForm';

function PrintUser ({ users, deleteUser ,updateUser}) {
  return(
    <ul> 
      {/* <button onClick={() => <AddUser />}>Add User</button> */}
      <AddUser />  

        { users && users.users && users.users.map((value,key) => ( 
            <ul key = {key} > 
              <li>   
                Id : {value.id}<br/>
                Name:{value.name}<br />
                Username : {value.username}<br/>
                Email:{value.email}<br/>

                <h4>Address:</h4>
                Street:{value.address && value.address.street}<br/>
                Suite:{value.address && value.address.suite}<br/>
                City:{value.address && value.address.city}<br/>
                Zipcode:{value.address && value.address.zipcode}<br/>
                Latitude:{value.address && value.address.geo && value.address.geo.lat}<br/>
                Longitude:{value.address && value.address.geo && value.address.geo.lng}<br/>
                Phone:{value.phone}<br/>
                Website:{value.website}
                
                <h4>Company:</h4>
                Name:{value.company &&  value.company.name}<br/>
                CatchPhrase:{ value.company && value.company.catchPhrase}<br/>
                Bs:{value.company && value.company.bs}

                <button type='button' onClick = { () => {deleteUser(value.id)} } >
                  Delete
                </button>

                 {/* <button type='button' onClick = { () => { updateUser(value) } } >
                  Update 
                </button> */}
                < UpdateUserForm data= {value} /> 

                <br/><hr />
              </li>  
            </ul>
          ))
        }
    </ul>
 );
};

export default PrintUser;