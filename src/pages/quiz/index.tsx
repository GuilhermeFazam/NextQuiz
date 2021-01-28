import React, { useEffect, useState } from 'react';
import { QuizBackground, QuizContainer, SuccessMessage } from '../../styles/pages';
import db from '../../../db.json';
import { WidgetContainer, WidgetContent, WidgetHeader, WidgetTopic } from '../../components/Widget/styles';
import Button from '../../components/Forms/Button';
import { useRouter } from 'next/router';

const QuizPage: React.FC = () => {
  const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT'
  };

  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function LoadingWidget(): JSX.Element {
    const router = useRouter();
    const { name } = router.query;
    return (
      <SuccessMessage>
        <h1>{name}, vamos jogar!</h1>
      </SuccessMessage>
    );
  }

  function QuestionWidget({ question, questionIndex, totalQuestions, onSubmit }): JSX.Element {
    const questionId = `question__${questionIndex}`;
    return (
      <WidgetContainer>
        <WidgetHeader>
          <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
        </WidgetHeader>

        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover'
          }}
          src={question.image}
        />
        <WidgetContent>
          <h2>{question.title}</h2>
          <p>{question.description}</p>

          <form
            onSubmit={event => {
              event.preventDefault();
              onSubmit();
            }}
          >
            {question.alternatives.map(
              (alternative, alternativeIndex): JSX.Element => {
                const alternativeId = `alternative__${alternativeIndex}`;
                return (
                  <WidgetTopic key={alternativeIndex} as="label" htmlFor={alternativeId}>
                    <input id={alternativeId} name={questionId} type="radio" />
                    {alternative}
                  </WidgetTopic>
                );
              }
            )}
            <Button type="submit" text="Confirmar" />
          </form>
        </WidgetContent>
      </WidgetContainer>
    );
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 2000);
  }, []);

  function handleSubmitQuiz(): void {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>{screenState === screenStates.QUIZ && <QuestionWidget question={question} questionIndex={questionIndex} totalQuestions={totalQuestions} onSubmit={handleSubmitQuiz} />}</QuizContainer>
      {screenState === screenStates.LOADING && <LoadingWidget />}
      {screenState === screenStates.RESULT && (
        <SuccessMessage>
          <h1>Você acertou X questões, parabéns!</h1>
        </SuccessMessage>
      )}
    </QuizBackground>
  );
};

export default QuizPage;
