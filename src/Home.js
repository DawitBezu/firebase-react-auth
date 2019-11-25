import React from "react";
import app from "./fire";

import Button from '@material-ui/core/Button';

const Home = () => {
  return (
    <>
      <h3>Home</h3>
      <Button
              
              variant="default"
              color="primary"
              type="submit"
              onClick={() => app.auth().signOut()}>
              Sign out
              </Button>
    </>
  );
};

export default Home;