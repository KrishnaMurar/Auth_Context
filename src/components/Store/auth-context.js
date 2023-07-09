import React,  {useState, useEffect} from 'react';

const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout : () => {},
    onLogin : (email, password) => {}
    
 
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedInUserInformation = localStorage.getItem('isLoggedIn');

    if(isLoggedInUserInformation === '1'){
      setIsLoggedIn(true)
    }
  }, [])

  const loggedoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  const loggedinHandler = () =>{
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true)
  }
   
    return (
    <AuthContext.Provider value = {{isLoggedIn : isLoggedIn, onLogout: loggedoutHandler, onLogin: loggedinHandler} }>
        {props.Children} </AuthContext.Provider>

    )}
    export default AuthContext;