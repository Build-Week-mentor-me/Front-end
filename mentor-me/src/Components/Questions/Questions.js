import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import api from '../../Configuration/axiosconfig';
import QuestionList from './QuestionList';
import './QuestionForm.css';

const Questions = (props) => {
    // setting state for all questions
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        // creating variable, allowing access to token from local storage, way to communicate with server
        // const headers = { authorization: localStorage.getItem("token") }

        api
            .get("https://bw-unit4-mentor-me.herokuapp.com/api/users/questions")
            .then(res => {
                console.log(res.data)
                setQuestions(res.data)
            })
            .catch(err => console.dir(err))
    }, []);

    return (
        <section className="questionListContainer">
            <h1 className="questionsMainHeader">All Questions</h1>
            <div className="askQuestBtnContain">
                <Link to="/questionform">
                    <button className="askQuestBtn">Ask your own question</button>
                </Link>
            </div>
            <div className="questionList">
                {questions.map((question, index) => {
                    return (
                        <QuestionList 
                            key={index}
                            username={question.username}
                            question={question.question}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Questions