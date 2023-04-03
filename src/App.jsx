import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./Components/navbar.component"
import ExercisesList from "./Components/exercises-list.component";
import EditExercise from "./Components/edit-exercise.component";
import CreateExercise from "./Components/create-exercise.component";
import CreateUser from "./Components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact Components={ExercisesList} />
      <Route path="/edit/:id" Component={EditExercise} />
      <Route path="/create" Components={CreateExercise} />
      <Route path="/user" Components={CreateUser} />
      </div>
    </Router>
  );
}

export default App;