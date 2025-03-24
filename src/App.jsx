import React from 'react';
import { ChecklistProvider } from './contexts/ChecklistContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LearningRoadmap from './pages/LearningRoadmap';
import SkillsAssessment from './pages/SkillsAssessment';
import ProjectPlan from './pages/ProjectPlan';
import CareerProgression from './pages/CareerProgression';
import Resources from './pages/Resources';
import './App.css';

function App() {
  return (
    <ChecklistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="learning-roadmap" element={<LearningRoadmap />} />
            <Route path="skills-assessment" element={<SkillsAssessment />} />
            <Route path="project-plan" element={<ProjectPlan />} />
            <Route path="career-progression" element={<CareerProgression />} />
            <Route path="resources" element={<Resources />} />
          </Route>
        </Routes>
      </Router>
    </ChecklistProvider>
  );
}

export default App;
