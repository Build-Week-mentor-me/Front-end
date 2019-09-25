import React from 'react';
import './QuestionForm.css';

const QuestionList = (props) => {
    return (
        <div className="singleQuestion">
            <div className="questionCard"> 
                <h2 className="questionUsername">{props.username}</h2>
                <p className="questionQuestion">{props.question}</p>
            </div>
        </div>
    )
}

export default QuestionList