import React from 'react';
import { Route } from 'react-router-dom';
import FormikQuestionForm from './Questions/QuestionForm';
import MemberList from "./Profiles/MemberList";
import UserPage from "./Profiles/UserPage";
import FormikSignupForm from "./Signup";
import data from "./Profiles/data";
import formikLoginFrom from "./Login/Login";

const AppRouting = () => {
    return (
        <div>
            <Route
                exact path="/questionform"
                component={FormikQuestionForm} 
            />
            <Route exact path='/loginform' component={formikLoginFrom} />
            <Route exact path='/signupform' component={FormikSignupForm} />
            <Route exact path='/profiles' component={MemberList} />
            <Route exact path='/profile/:name' render={props => <UserPage {...props} data={data} />} />
        </div>
    )
};

export default AppRouting;