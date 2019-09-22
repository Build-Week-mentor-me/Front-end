import React from 'react';

import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const QuestionForm = ({ status, errors, touched }) => {
    return (
    <div>
        <h1>Question Form</h1>
        <Form>
            <div>
                {touched.title && errors.title && <p>{errors.title}</p>}
                <h2>What is the title of your question?</h2>
                <Field
                    type="text"
                    name="title"
                    placeholder="Title"
                />
            </div>

            <div>
                <h2>Details about your question, please</h2>
                <Field 
                    type="text"
                    name="details"
                    placeholder="Details"
                />
            </div>
            <button type="submit">Submit your question</button>
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
            .post("https://reqres.in/api/users", values)
            .then(res => {
                console.log(res)
                resetForm()
            })
            .catch(err => console.log(err))
    }
})(QuestionForm)

export default FormikQuestionForm;