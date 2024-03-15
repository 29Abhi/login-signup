import React, { useState } from "react";
import { User } from "../auth/types";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, registerUserFailed } from "../auth/authSlice";
import { RootState } from "../app/Store";

const RegistartionScreen: React.FC = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state: RootState) => state.auth);
 
  // const { isLoading, error } = useSelector((state: RootState) => state.auth);
  const [formData, setFormData] = useState<User>({
    name : '',
    email: '',
    password: '',
  })

  const handleChangename = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleChangeemail = (event : React.ChangeEvent<HTMLInputElement>) =>{
    const target = event.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: event.target.value });
  }
  const handleChangepassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const target1 = event.target as HTMLInputElement;
    setFormData({ ...formData, [target1.name]: event.target.value });

  }



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     console.log(formData)
    // Optional validation using a separ   ate utils file
    dispatch(registerUser(formData));        
    }
  return <div>
    <h2>Register Your Self</h2>
    <form onSubmit={handleSubmit}>
  <input
     type="text"
     name="name"
     placeholder="Enter Name"
     value={formData.name}
     onChange={handleChangename}/>
  <input
    type="email"
    name="email"
    placeholder="Enter Email"
    value={formData.email}
    onChange={handleChangeemail}
    />
  <input 
    type="password"
    name="password"
    placeholder="Enter Password"
    value={formData.password}
    onChange={handleChangepassword}
  />
    <button type="submit">Register</button>
    </form>
  </div>;
};

export default RegistartionScreen;
