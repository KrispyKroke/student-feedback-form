import React from 'react';
import './App.css';
import FeelingForm from '../FeelingForm/FeelingForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Review from '../Review/Review';
import SuccessPage from '../SuccessPage/SuccessPage';
import AdminPage from '../AdminPage/AdminPage';
import { HashRouter as Router, Route } from 'react-router-dom';


function App() {
 


// This is the structure of the app. Routes are set up to guide the user from page to page.
  return (
    <Router>
      <div className='App'>
        <WelcomeScreen />
        <Route path="/feeling">
          <FeelingForm />
        </Route>
        <Route path="/understanding">
          <UnderstandingForm />
        </Route>
        <Route path="/support">
          <SupportForm />
        </Route>
        <Route path="/comments">
          <CommentsForm />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
