import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './QuestionForm.css';

const QuestionForm = ({ status, errors, touched }) => {
    const [user_id, setUser_id] = useState();
    
    useEffect(() => {
        axios
            .get("https://bw-unit4-mentor-me.herokuapp.com/api/users")
            .then(res => {
                console.log(res.data)
                setUser_id(res.data)
                // console.log(status)
            })
            .catch(err => console.log(err))
    }, [status])

    return (
    <div className="formContainer">
        <h1 className="formHeading">Post Question</h1>
        <Form>
            <div className="inputHeading">
                {touched.question && errors.question && <p>{errors.question}</p>}
                {/* <h2>What is your question?</h2> */}
                <Field
                    type="text"
                    name="question"
                    placeholder="Ask your question"
                    className="inputField"
                />
            </div>

            {/* <div className="inputHeading">
                <h2>Details about your question</h2>
                <Field 
                    type="text"
                    name="details"
                    placeholder="Details"
                />
            </div> */}
            <div className="qFormSubmitBtnContain">
                <button 
                    type="submit"       
                    className="qFormSubmitBtn">
                    Post
                </button>
            </div>
        </Form>
    </div>
    )
}

const FormikQuestionForm = withFormik({
    mapPropsToValues({ question, user_id, details }) {
        return {
            question: question || "",
            user_id: user_id || 3,
            // details: details || ""
        }
    },

    // VALIDATION SCHEMA
    validationSchema: Yup.object().shape({
        question: Yup.string()
        .required("Question is required"),
        // details: Yup.string()
        // .required("Details are required")
    }),
    // END VALIDATION SCHEMA

    // submit handler
    handleSubmit(values, { resetForm }) {
        console.log(values)

        axios
            .post("https://bw-unit4-mentor-me.herokuapp.com/api/users/questions", values)
            .then(res => {
                console.log(res)
                resetForm()
            })
            .catch(err => console.log(err))
    }
})(QuestionForm)

export default FormikQuestionForm;