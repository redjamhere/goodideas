import React from 'react';
import { Checkbox } from '@material-ui/core';

interface CheckBoxProps {
  type: string;
  name: string;
  checked: boolean;
  onChange: any;
}

class CheckBox extends React.Component<CheckBoxProps, {}> {
  constructor(props:CheckBoxProps) {
    super(props);
  }

  render() {
    return(
      <input type={this.props.type} name={this.props.name} checked={this.props.checked} onChange={this.props.onChange}/>
    );
  }
}

export default Checkbox;