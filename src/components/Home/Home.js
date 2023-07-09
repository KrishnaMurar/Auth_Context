import React ,{ useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from '../Store/auth-context';

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  
  return (
    <Card className={classes.home}>
      <h1>Welcome to my Page! Now, Go Back !</h1>
      <button onClick ={authCtx.onLogout}>Log Out</button>
    </Card>
  );
};

export default Home;
