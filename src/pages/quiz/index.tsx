import React from 'react';
import { QuizBackground, QuizContainer } from '../../styles/pages';
import db from '../../../db.json';

const QuizPage: React.FC = () => {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer></QuizContainer>
    </QuizBackground>
  );
};

export default QuizPage;
