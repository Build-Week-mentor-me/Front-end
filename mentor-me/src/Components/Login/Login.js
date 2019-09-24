import React, { useState, useEffect } from 'react';
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
        <div className='loginForm'>
            <Form>
                {touched.name && errors.name &&  <p className='error'>{errors.name}</p>}
                <Field className='loginInput' type='text' name='name' placeholder='Name' />
                <br/>
                {touched.password && errors.password &&  <p className='error'>{errors.password}</p>}
                <Field className='loginInput' type='password' name='password' placeholder='Password' />
                <br/>
                <button className='loginInput loginButton' type='submit'>Login</button>
                <p className='loginText'>Or...</p>
                <button className='loginInput loginButton' type='submit'>Register</button>

            </Form>
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
        //https://reqres.in/api/animals
        axios.post('https://reqres.in/api/animals', props)
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
