import React from 'react';
import { Route } from 'react-router-dom';
import FormikQuestionForm from '../Components/Questions/QuestionForm';
import FormikSignupForm from './Signup';

const AppRouting = () => {
    return (
        <div>
            <Route 
                exact path="/signup"
                component={FormikSignupForm}
            />
            
            <Route 
                exact path="/questionform" 
                component={FormikQuestionForm} 
            />
        </div>
    )
}

export default AppRouting;