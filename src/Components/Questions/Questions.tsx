//# Quesitons list component

import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

// styles
import './Questions.css';
import Navigation from '../Navigation/Navigation';
import Question from './Question';
import QuestionControls from '../QuestionControls/QuestionControls';


interface questionsProps {
  classes: any;
}

interface questionsStates {
  questions: Array<object>;
  searches: string;
}

class Questions extends React.Component<questionsProps, questionsStates> {
  constructor(props: questionsProps) {
    super(props);
    this.state = {
      questions: [],
      searches: ''
    }
  }
  
  componentDidMount() {

    let data: Array<object> = [];

    for(let i: number = 0; i < 40; i++) {
      data.push({
        qname: "Вопрос вопрос вопрос ",
        qauthor: "Займанов А.А.",
        qtime: "10.10.2020 10:23"
      })
    }

    this.setState({
      questions: this.state.questions.concat(data)
    });
  }

  render() {
    const list: any = this.state.questions.map((item: any, index: number) => {
      return <Question key={index} qnum={index + 1} qname={item.qname} qauthor={item.qauthor} qtime={item.qtime}/>
    });

    return(
      <div className="questions-wrap">
        <div className="navbar-place">
          <Navigation pageName="Вопросы"/>
        </div>
        <div className="content-wrap">
            <div className="questions">
              <ul className="questions-list">
                {list}
              </ul>
            </div>
          <div className="controls">
            <QuestionControls/>
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;