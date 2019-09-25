import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList';

const Questions = (props) => {
    // setting state for all questions
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios
            .get("https://bw-unit4-mentor-me.herokuapp.com/api/users/questions")
            .then(res => {
                console.log(res.data)
                setQuestions(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <section className="questionsList">
            <h1>Our Complete List of Questions</h1>
            <div>
                {questions.map((question, index) => {
                    return (
                        <QuestionList 
                            key={index}
                            question={question.question}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Questions