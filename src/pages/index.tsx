import React from 'react';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';

import bg from '../assets/img/background.jpg';

import { QuizBackground, QuizContainer } from '../styles/pages';

const Home: React.FC = () => {
  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <Widget />
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/GuilhermeFazam/NextQuiz" />
    </QuizBackground>
  );
};

export default Home;
