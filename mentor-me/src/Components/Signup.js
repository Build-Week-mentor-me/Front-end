import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

function SignupForm({ values, errors, touched }) {

  return (
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="firstname" name="firstname" placeholder="First Name" />
      </div>
        <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Create Password" />
        </div>
      <div>
        <label>
          {" "}
          <Field component="select" name="position">
            <option value="entrepreneur">Entrepreneur</option>
            <option value="mentor">Mentor</option>
          </Field>
        </label>
      </div>
      {/*<div>*/}
      {/*  <label>*/}
      {/*    <Field type="checkbox" name="tos" checked={values.tos} />*/}
      {/*    Accept Terms of Service*/}
      {/*    {errors.tos && <p>{errors.tos}</p>}*/}
      {/*  </label>*/}
      {/*</div>*/}
      <button type="submit">Sign me up!</button>
    </Form>
  );
}

const FormikSignupForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || "",
      password: values.password || "",
      // tos: values.tos || false,
      position: values.position || "entrepreneur"
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("First name is required"),
    password: Yup.string().required("Please create a password"),
    // tos: Yup.boolean().oneOf([true], "You must accept the TOS!")
  }),

  handleSubmit(values) {
    console.log(values);
      axios({
          method: ' post',
          url: 'https://bw-unit4-mentor-me.herokuapp.com/api/users/register',
          data: {
              firstName: `${values.firstName}`,
              lastName: `${values.lastname}`,
              password: `${values.password}`
          }
      });
  }
})(SignupForm);

export default FormikSignupForm;
