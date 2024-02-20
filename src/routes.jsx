import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FirstQuestion } from './components/steps/FirstQuestion';
import { SecondQuestion } from './components/steps/SecondQuestion';
import { ThirdQuestion } from './components/steps/ThirdQuestion'
import { FourthQuestion } from './components/steps/FourthQuestion'
import { FifthQuestion } from './components/steps/FifthQuestion'
import { EmailPage } from './components/steps/EmailPage'
import { Loader } from './components/steps/Loader'
import { FinishPage } from './components/steps/FinishPage'
import { ExternalRedirect } from './components/redirect';

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<FirstQuestion />} />
      <Route path="/question1" element={<FirstQuestion />} />
      <Route path="/question2" element={<SecondQuestion />} />
      <Route path="/question3" element={<ThirdQuestion />} />
      <Route path="/question4" element={<FourthQuestion />} />
      <Route path="/question5" element={<FifthQuestion />} />
      <Route path="/email" element={<EmailPage />} />
      <Route path="/loader" element={<Loader />} />
      <Route path="/finishPage" element={<FinishPage />} />
      <Route path="/*" element={<ExternalRedirect />} />
    </Routes>
  );
};

export default RoutesComponent;
