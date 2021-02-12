import React from 'react'
import {useState} from 'react';

const BookAnApointment = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [phoneNr, setPhoneNr] = useState('')
    const [customer, setCustomer] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName + lastName + Email + phoneNr ){
            const person = {id: new Date().getTime().toString(), firstName, lastName, Email, phoneNr};                 // specific syntax must equal same Key: Name and same Value: Name
            console.log(person);
            setCustomer((customer)=>{
              return[...customer, person]
           });
           setFirstName('');
           setLastName('');
           setEmail('');
           setPhoneNr('');
        }
        else{
            console.log('empty value');
        }
        
    }                                                            // access State with 'value' on 'form' and add event(onchange for Set the state with new(input value))

    return (
        <div className="container content py-4">
            <h1>Book</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="firstName">Firstname: </label>
                    <input type="text" id="firstName" name='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label htmlFor="lastName">Lastname: </label>
                    <input type="text" id="lastName" name='lastName' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label htmlFor="Email">Email: </label>
                    <input type="text" id="Email" name='Email' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label htmlFor="phoneNr">Phone nr: </label>
                    <input type="text" id="phoneNr" name='phoneNr' value={phoneNr} onChange={(e)=>setPhoneNr(e.target.value)} />
                </div>
                <button className="btnSub" type="submit" onClick={handleSubmit}>SUBMIT</button>
            </form>
            <br/>
            {
                customer.map((person, index)=>{
                    const {id, firstName, lastName} = person;
                    return <div className="person" key={id}>
                           <h4 className="h4Sub">Thank you! {firstName} {lastName} for your applied booking</h4>
                           <p className="pSub">We are happy for your interest in our services and we'll get back to you with more information</p>
                    </div>
                    
                })
            }
        </div>
    )
}

export default BookAnApointment
