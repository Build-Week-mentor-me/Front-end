import React from 'react';
import { Route } from 'react-router-dom';
import FormikQuestionForm from './Questions/QuestionForm';

const AppRouting = () => {
    return (
        <div>
            <Route exact path="/questionform" component={FormikQuestionForm} />
        </div>
    )
}

export default AppRouting