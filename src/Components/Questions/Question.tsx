import React from 'react';
import {Link} from 'react-router-dom';

import { Typography, makeStyles, createStyles, Theme } from '@material-ui/core';

// styles
import './Questions.css';

function Question (props: any) {  

  return(
    <li key={props.key} className="question-block">
      <Link className="question-link" to="/answers/?id=1">
        <div className="main-info">
          <div className="question-name">
            <Typography variant="h6">{props.qname + props.qnum}</Typography>
          </div>
          <div className="question-desc">
            <em className="desc">Автор: {props.qauthor}</em>
            <em className="time">{props.qtime}</em>
          </div>
        </div>
        <div className="topics">
          <div className="answers-count">
            <span className="count">100</span>
            <span className="count-desc">Ответы</span>
          </div>
        </div>
        <div className="best-answers">
          <div className="link-wrap">
            <Link className="link" to={'/goodideas?id=1'}>
              Лучшие идеи
            </Link>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Question;