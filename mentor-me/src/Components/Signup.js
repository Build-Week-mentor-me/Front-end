import React from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import './Signup.css';

function SignupForm({ values, errors, touched }) {

    return (
        <Form className="formContain">
            <div className="formInputContain">
                {touched.username && errors.username && <p>{errors.username}</p>}
                <h2 className="formHeader">Sign Up</h2>
                <Field 
                  type="text"  
                  name="username" 
                  placeholder="User Name"  className="inputField" 
                />
            </div>
            <div className="formInputContain">
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="inputField"
                />
            </div>
            <div>
                <label>
                    {" "}
                    <Field component="select" name="position" className="personalBtn">
                        <option value="entrepreneur">Entrepreneur</option>
                        <option value="mentor">Mentor</option>
                    </Field>
                </label>
            </div>
              <button type="submit" className="submitBtn">
                Sign up
              </button>
        </Form>
    );
}

const FormikSignupForm = withFormik({
    mapPropsToValues(values) {
        return {
            username: values.username || "",
            password: values.password || "",
            position: values.position || "entrepreneur"
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required("First name is required"),
        password: Yup.string().required("Password is required"),
    }),



    handleSubmit(values) {
        console.log(values);
        // Cobrettie begin testing functionality
        axios
            .post("https://bw-unit4-mentor-me.herokuapp.com/api/users/register", values)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.message)
            })
    }
})(SignupForm);

export default FormikSignupForm;

// username, password, position