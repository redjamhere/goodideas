import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {SortDatePicker} from './SortDatePicker';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


interface QuestionControlsProps {

}

interface QuestionControlsState {

}

class QuestionControls extends React.Component<QuestionControlsProps, QuestionControlsState> {
  constructor(props: QuestionControlsProps) {
    super(props);
  }

  render() {
    return (
      <div className="controls-block">              
        <div className="search-block">
          <TextField id="search-question" label="Поиск по вопросам" variant="outlined"
            style={{width: '100%', backgroundColor: 'white'}}></TextField>
        </div>
        <div className="create-button-block">
            <Button variant="contained" style={{width: '100%'}} color="secondary">Создать вопрос</Button> 
        </div>
        <div className="sort-block">
          <div className="sort-block-header">
            <Typography variant="h6">Фильтр</Typography>
          </div>
          <div className="sort-controls">
            <SortDatePicker variant="от"/>
            <SortDatePicker variant="до"/>
          </div>
          <div className="sort-count-answers">
            <Button variant="contained" style={{width: '100%'}} color="primary">По количеству ответов <ExpandLessIcon/></Button> 
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionControls;