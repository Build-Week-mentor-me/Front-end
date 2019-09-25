import React from 'react'
import { Card } from 'semantic-ui-react'

const QuestionList = (props) => {
    return (
        <div className="questionListContainer">
            <Card> 
                <Card.Header>{props.username}</Card.Header>
                <p>{props.question}</p>
            </Card>
        </div>
    )
}

export default QuestionList