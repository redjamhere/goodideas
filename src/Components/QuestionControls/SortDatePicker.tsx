import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {ru} from 'date-fns/locale';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


interface DatePickerProps {
  variant: string;
}

interface DatePickerState {
  selectedDate: Date;
}

export class SortDatePicker extends React.Component <DatePickerProps, DatePickerState> {
  constructor(props: DatePickerProps) {
    super(props);

    this.state = {
      selectedDate: new Date(),
    }
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  handleDateChange(date:any | null) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    return (
      <MuiPickersUtilsProvider  locale={ru} utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            style={{width: '90%'}}
            disableToolbar
            variant="inline"
            format="MM.dd.yyyy"
            margin="normal"
            id="date-picker-inline"
            label={this.props.variant}
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{'aria-label':'change date'}}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}