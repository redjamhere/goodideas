import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { Button, makeStyles, createStyles, Theme, fade, InputBase } from '@material-ui/core';

import './Navigation.css';

function Navigation(props: any) {
  return(
    <AppBar className="navbar">
    <Toolbar>
      <div>
        <Typography variant="h6">{props.pageName}</Typography>
      </div>
      <Button color="inherit">Выход</Button>
    </Toolbar>
  </AppBar>
  );
}

export default Navigation;