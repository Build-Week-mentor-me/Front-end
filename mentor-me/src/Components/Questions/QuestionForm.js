import React from 'react';

import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './QuestionForm.css';

const QuestionForm = ({ status, errors, touched }) => {
    return (
    <div className="formContainer">
        <h1 className="formHeading">Question Form</h1>
        <Form>
            <div className="inputHeading">
                {touched.title && errors.title && <p>{errors.title}</p>}
                <h2>What is the title of your question?</h2>
                <Field
                    type="text"
                    name="title"
                    placeholder="Title"
                />
            </div>

            <div className="inputHeading">
                <h2>Details about your question</h2>
                <Field 
                    type="text"
                    name="details"
                    placeholder="Details"
                />
            </div>
            <button type="submit" className="qFormSubmitBtn">Submit your question</button>
        </Form>
    </div>
    )
}

const FormikQuestionForm = withFormik({
    mapPropsToValues({ title, details }) {
        return {
            title: title || "",
            details: details || ""
        }
    },

    // VALIDATION SCHEMA
    validationSchema: Yup.object().shape({
        title: Yup.string()
        .required("Question is required"),
        details: Yup.string()
        .required("Details are required")
    }),
    // END VALIDATION SCHEMA

    // submit handler
    handleSubmit(values, { resetForm }) {
        console.log(values)

        axios
            .post("https://bw-unit4-mentor-me.herokuapp.com/api/questions", values)
            .then(res => {
                console.log(res)
                resetForm()
            })
            .catch(err => console.log(err))
    }
})(QuestionForm)

export default FormikQuestionForm;