import React from 'react';
import { Card } from 'semantic-ui-react';
import './QuestionForm.css';

const QuestionList = (props) => {
    return (
        <div className="singleQuestion">
            <Card> 
                <Card.Header>{props.username}</Card.Header>
                <p>{props.question}</p>
            </Card>
        </div>
    )
}

export default QuestionList