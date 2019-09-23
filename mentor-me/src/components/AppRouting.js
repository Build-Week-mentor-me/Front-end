import React from 'react';
import { Route } from 'react-router-dom';
import FormikQuestionForm from '../Components/Questions/QuestionForm';
import FormikSignupForm from './Signup';

const AppRouting = () => {
    return (
        <div>
            <Route 
                exact path="/questionform" 
                component={FormikQuestionForm} 
            />
            <Route 
                exact path="/signup"
                component={FormikSignupForm}
            />
        </div>
    )
}

export default AppRouting;