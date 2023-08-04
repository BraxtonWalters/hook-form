import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", firstName);
    	setFirstName("");
    	setLastName("");
    	setEmail("");
    	setPassword("");
    	setConfirmPassword("");
    };
    
    return(
        <form className='container mt-5' onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input className='form-control' type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input className='form-control' type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input className='form-control' type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input className='form-control' type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input className='form-control' type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
            <div>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{email}</p>
                <p>{password}</p>
                <p>{confirmPassword}</p>
            </div>
        </form>
    );
};

export default UserForm;
