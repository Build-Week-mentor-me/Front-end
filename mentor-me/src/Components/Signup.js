import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function SignupForm({ values, errors, touched }) {
  return (
    <Form>
      <div>
        {touched.firstname && errors.firstname && <p>{errors.firstname}</p>}
        <Field type="firstname" name="firstname" placeholder="First Name" />
      </div>
      <div>
        {touched.lastname && errors.lastname && <p>{errors.lastname}</p>}
        <Field type="lastname" name="lastname" placeholder="Last Name" />
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
      <div>
        <label>
          <Field type="checkbox" name="tos" checked={values.tos} />
          Accept Terms of Service
          {errors.tos && <p>{errors.tos}</p>}
        </label>
      </div>
      <button type="submit">Sign me up!</button>
    </Form>
  );
}

const FormikSignupForm = withFormik({
  mapPropsToValues(values) {
    return {
      firstname: values.firstname || "",
      lastname: values.lastname || "",
      tos: values.tos || false,
      position: values.position || "entrepreneur"
    };
  },

  validationSchema: Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    tos: Yup.boolean().oneOf([true], "You must accept the TOS!")
  }),

  handleSubmit(values) {
    console.log(values);
  }
})(SignupForm);

export default FormikSignupForm;
