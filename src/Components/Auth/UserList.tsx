import React from 'react';
import axios from 'axios';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import { makeStyles, Theme, createStyles, withTheme} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// -----------------------------------------------------------------------------------

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
});

interface UserListState {
  username: any;
  type: any;
}

class UserList extends React.Component<{}, UserListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: {
        name: "",
        id: ""
      },
      type: ""
    }
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
  }

  handleChangeUser(event: React.ChangeEvent<{value: any}>) {
    this.setState({
      username: {
        id: event.target.value
      }
    })
  }

  handleChangeType(event: React.ChangeEvent<{value: any}>) {
    this.setState({
      type: event.target.value
    })
  }

  render() {

    return (
      <div className="form-elements">
        <div className="user-select">
          <FormControl>
              <InputLabel id="controlled-open-select-user-label">Выберите учетную запись</InputLabel>
              <Select
                style={{width: 300}}
                labelId="controlled-open-select-user-label"
                id="controlled-open-select"
                value={this.state.username.id}
                onChange={this.handleChangeUser}
              >
                <MenuItem value={1}>Займанов Айнур Альбертович</MenuItem>
                <MenuItem value={2}>Иванов Иван Иванович</MenuItem>
                <MenuItem value={3}>Сергей Сергеевич Сергеев</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="password">
            <TextField style={{width: 300}} id="password-input" type="password" label="Пароль"/>
          </div>
          <div className="user-type">
            <FormControl>
              <InputLabel id="controlled-open-select-type-label">Войти как?</InputLabel>
              <Select
                style={{width: 300}}
                labelId="controlled-open-select-type-label"
                id="controlled-open-select"
                value={this.state.type}
                onChange={this.handleChangeType}
              >
                <MenuItem value="q">Задающий</MenuItem>
                <MenuItem value="a">Отвечающий</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button variant="contained">
            Войти
          </Button>
      </div>
    );
  }
}

export default UserList;