import React from 'react';
import { Checkbox } from '@material-ui/core';

// components
import CheckBox from './CheckBox';

const authors: Array<any> = [
  {
    name: 'author1',
    key: 'author1',
    label: 'Займанов А. А.'
  },
  {
    name: 'author2',
    key: 'author2',
    label: 'Иванов И. И.'
  },
  {
    name: 'author3',
    key: 'author3',
    label: 'Куприянов Д. А.'
  }
]

interface DateFilterProps {
  
}

interface DateFilterState {
  checkedAuthors: any;
}

export class DateFilter extends React.Component<DateFilterProps, DateFilterState> {
  constructor(props:DateFilterProps) {
    super(props);
    
    this.state = {
      checkedAuthors: new Map() 
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    const item = e.target.name;
    const isChecked = e.target.checked;
  }

  render() {
    return(
      <div className="author-list">
        {/* {
          authors.map(item => (
            <label key={item.key}>
              {item.name}
              <CheckBox name={item.name} checked={this.state.checkedAuthors.get(item.name)} onChange={this.handleChange}/>
            </label>
          ))
        } */}
      </div>
    );
  }
}