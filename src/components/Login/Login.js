import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) =>{
  if(action.type === 'USER_INPUT'){
    return ({value: action.val, isValid: action.val.includes("@")})
  }
  if(state.type === 'USER_BLUR'){
    return ({value: state.val , isValid: state.val.includes("@")})
  }
  return ({value: '', isValid: 'false'})
}

const passwordReducer = (state, action) =>{
  if(action.type === 'PASSWORD_INPUT'){
    return ({value: action.val, isValid: action.val.trim().length > 6 })
  }
  if(state.type === 'PASSWORD_BLUR'){
    return ({value: state.val , isValid: state.val.trim().length > 6 })
  }
  return ({value: '', isValid: 'false'})
}

const Login = (props) => {
  /* const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(); */
  /* const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(); */
  const [enteredCollegeName, setEnteredCollegeName] = useState("");
  const [collegeNameIsValid, setCollegeNameIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'', isValid: 'false' })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value:'', isValid: 'false' })
  useEffect(() => {
    console.log("EFFECT RUNNING");

    return (
      console.log("EFFECT RUNNING")
    )
  },[])
 /*  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking");
      setFormIsValid(
        enteredEmail.includes("@") &&
          enteredPassword.trim().length > 6 &&
          enteredCollegeName.trim().length > 6
      );
    }, 500);

    return () => {
      console.log("clean Up");
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword, enteredCollegeName]);
 */
  const emailChangeHandler = (event) => {
     dispatchEmail({type:'USER_INPUT', val: event.target.value})
 

  setFormIsValid(
    emailState.isValid &&
      passwordState.isValid > 6 &&
      enteredCollegeName.trim().length > 6
  );
 };
  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'PASSWORD_INPUT', val: event.target.value})
 

  setFormIsValid(
    emailState.isValid &&
      passwordState.isValid &&
      enteredCollegeName.trim().length > 6
  );
 };
  const collegeNameChangeHandler = (event) => {
    setEnteredCollegeName(event.target.value);
 
  setFormIsValid(
    emailState.isValid &&
      passwordState.isValid &&
      event.target.value.trim().length > 6
  );
 };
  const validateEmailHandler = () => {
    dispatchEmail({type: 'USER_BLUR' })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'PASSWORD_BLUR' })
  };

  const validateCollegeNameHandler = () => {
    setCollegeNameIsValid(enteredCollegeName.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value, enteredCollegeName);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.val}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.val}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collegeNameIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="collegeName">College Name</label>
          <input
            type="text"
            id="collegeName"
            value={enteredCollegeName}
            onChange={collegeNameChangeHandler}
            onBlur={validateCollegeNameHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
