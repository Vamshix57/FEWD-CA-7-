import React, { useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"

export default function RegistrationPage(props) {
  const { FormSubmit, setFormSubmit } = props.check;
  const[Storage,setStorage]=useState([])
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitted },
  } = useForm();

  const password = watch("password"); 
 const setLocalStorage = (data) => {
  
   setStorage([...Storage, data]);

   // Converting Storage to JSON before storing in localStorage
   localStorage.setItem("Data", JSON.stringify([...Storage, data]));
 };

 const formSubmitHandler = (data) => {
   console.log("data:", data);
   setFormSubmit(true);
   setLocalStorage(data);
   alert("You have scucessfully loggedin")
 };
  console.log(FormSubmit);

  return (
    <div className="box1">
      <fieldset>
        <legend>Login form</legend>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {isSubmitSuccessful && (
            <div className="done">
              <p>Login Successful</p>
            </div>
          )}

          <label style={{ color: "black" }}>First Name:</label>
          <input
            type="text"
            name="firstName"
            {...register("firstName", {
              required: "Please provide the name",
              minLength: {
                value: 3,
                message: "Minimum Three characters required",
              },
              maxLength: {
                value: 30,
                message: "Maximum Thirty characters allowed",
              },
            })}
          />
          {errors.firstName && (
            <p className="NameError">{errors.firstName.message}</p>
          )}

          <label style={{ color: "black" }}>Last Name:</label>
          <input
            type="text"
            name="lastName"
            {...register("lastName", {
              required: "Fill last name",
              minLength: {
                value: 3,
                message: "Minimum Three characters are required.",
              },
              maxLength: {
                value: 30,
                message: "Maximum Thirty characters allowed",
              },
            })}
          />
          {errors.lastName && (
            <p className="LastNameError">{errors.lastName.message}</p>
          )}

          <label style={{ color: "black" }}>Email:</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Enter email",
              minLength: {
                value: 5,
                message: "Type valid email",
              },
            })}
          />
          {errors.email && <p className="EmailError">{errors.email.message}</p>}

          <label style={{ color: "black" }}>Password:</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Enter password",
              minLength: {
                value: 10,
                message: "Minimum Ten characters are required",
              },
              pattern: {
                value: /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/, // At least one special character
                message: "Password must contain at least one special character",
              },
            })}
          />
          {errors.password && (
            <p className="PasswordError">{errors.password.message}</p>
          )}

          <label style={{ color: "black" }}>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="ConfirmPasswordError">
              {errors.confirmPassword.message}
            </p>
          )}

          <input type="submit" value={"Login"} />
        </form>
      </fieldset>
      <Link to={"/"}>
        {isSubmitSuccessful && (
          <div className="back">
            <button>back</button>
          </div>
        )}
      </Link>
    </div>
  );
}
