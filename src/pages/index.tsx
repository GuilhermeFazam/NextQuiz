import React from 'react';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import { QuizBackground, QuizContainer } from '../styles/pages';
import db from '../../db.json';

const Home: React.FC = () => {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget />
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/GuilhermeFazam/NextQuiz" />
    </QuizBackground>
  );
};

export default Home;
