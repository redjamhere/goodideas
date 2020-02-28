import React from 'react';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import { green } from '@material-ui/core/colors';

// styles
import './Auth.css';

// components
import UserList from './UserList';

class Auth extends React.Component<{}, {}> {
  render() {
    return(
      <div className="auth-wrap">
        <div className="form-block">
          <div className="left-side">
            <div className="icon">
              <DirectionsBoatIcon style={{fontSize: 150, color: "#1abc9c"}}/>
            </div>
            <div className="logo-text">
              <span className="text">Goodideas</span>
            </div>
            <div className="watermark">
              <span className="water-text">by Займанов Айнур</span>
            </div>
          </div>
          <div className="right-side">
            <UserList/>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;