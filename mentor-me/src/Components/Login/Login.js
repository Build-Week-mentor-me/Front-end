import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as yup from 'yup';
import axios from 'axios';

const LoginForm = ({ errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }},[status]);

    return (
        <div className='loginContainer'>
        <div className='loginForm'>
            <Form className='formLogin'>
                <h2 className='loginHeader'>The secret to success lies here</h2>
                {touched.name && errors.name &&  <p className='error'>{errors.name}</p>}
                <Field className='loginInput' type='text' name='name' placeholder='Username' />
                <br/>
                {touched.password && errors.password &&  <p className='error'>{errors.password}</p>}
                <Field className='loginInput' type='password' name='password' placeholder='Password' />
                <br/>
                <button className='loginInput loginButton' type='submit'>Login</button>
                <p className='loginText'>Or...</p>
                <Link to='/signupform'>
                <button className='loginInput loginButton' type='submit'>Register</button>
                </Link>
            </Form>
        </div>
        </div>
    )
};

const formikLoginFrom = withFormik({
    mapPropsToValues: (props) => {
        return {
            name: props.name || '',
            password: props.password || ''
        }
    },
    validationSchema: yup.object().shape({
        name: yup.string().required('Please enter your user name'),
        password: yup.string().required('Incorrect Password'),
    }),
    handleSubmit: (props, { setStatus }) => {
        axios.post('https://bw-unit4-mentor-me.herokuapp.com/api/users/login', props)
            .then((res) => {
                setStatus(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }
})(LoginForm);

export default formikLoginFrom;
