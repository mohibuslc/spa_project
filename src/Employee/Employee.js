import React from 'react';
import  './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Employee = (props) => {
    const handle=props.AddEmployee
    const Name=props.AddEmploye
    
  
    const {name, img, email, salary}=props.pd;
const imgStyle={

    height:'50px'
}

const dataStyle ={

    border: '2px solid greenyellow',
    margin: '10px',
    padding: '12px'

}
    return (
        
    <div style={dataStyle}>
        
            <img style={imgStyle} src={img} alt=" emp_img"></img>
            <h1>Employee name : {name}</h1>
            <p>Employee_Email: {email}</p>
            <h3>Salary: {salary}</h3>
            <button onClick={()=>handle(props.pd)}> <FontAwesomeIcon icon={faCoffee} />Employee_Added</button>
            <button onClick={()=>Name(name)}>Add-Name</button>

            </div>
     
    );
};

export default Employee;