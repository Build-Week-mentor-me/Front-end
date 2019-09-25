import React from 'react'
import { Card } from 'semantic-ui-react'

const QuestionList = (props) => {
    return (
        <div className="questionListContainer">
            <Card> 
                <Card.Header>{props.question}</Card.Header>
            </Card>
        </div>
    )
}

export default QuestionList