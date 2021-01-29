import React, { useEffect, useState } from 'react';
import db from '../../../db.json';
import Button from '../../components/Forms/Button';
import { QuizBackground, QuizContainer, SuccessMessage } from '../../styles/pages';
import { WidgetContainer, WidgetContent, WidgetHeader, WidgetTopic, FormAlternatives } from '../../components/Widget/styles';
import { useRouter } from 'next/router';

const QuizPage: React.FC = () => {
    const screenStates = {
        QUIZ: 'QUIZ',
        LOADING: 'LOADING',
        RESULT: 'RESULT'
    };

    const [screenState, setScreenState] = useState(screenStates.LOADING);
    const totalQuestions = db.questions.length;
    const [results, setResults] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];

    function addResult(result: boolean): void {
        setResults([...results, result]);
    }

    function LoadingWidget(): JSX.Element {
        const router = useRouter();
        const { name } = router.query;
        return (
            <SuccessMessage>
                <h1>{name}, vamos jogar!</h1>
            </SuccessMessage>
        );
    }

    function QuestionWidget({ question, questionIndex, totalQuestions, onSubmit, addResult }): JSX.Element {
        const [selectedAlternative, setSelectedAlternative] = useState(undefined);
        const [isFormSubmited, setIsFormSubmited] = useState(false);
        const questionId = `question__${questionIndex}`;
        const isCorrect = selectedAlternative == question.answer;
        const hasAlternativeSelected = selectedAlternative !== undefined;
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

                    <FormAlternatives
                        onSubmit={event => {
                            event.preventDefault();
                            setIsFormSubmited(true);
                            setTimeout(() => {
                                addResult(isCorrect);
                                onSubmit();
                                setIsFormSubmited(false);
                                setSelectedAlternative(undefined);
                            }, 2 * 1000);
                        }}
                    >
                        {question.alternatives.map(
                            (alternative: string, alternativeIndex: number): JSX.Element => {
                                const alternativeId = `alternative__${alternativeIndex}`;
                                const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
                                const isSelected = selectedAlternative === alternativeIndex;
                                return (
                                    <WidgetTopic key={alternativeId} as="label" htmlFor={alternativeId} data-selected={isSelected} data-status={isFormSubmited && alternativeStatus}>
                                        <input id={alternativeId} name={questionId} onChange={() => setSelectedAlternative(alternativeIndex)} type="radio" />
                                        {alternative}
                                    </WidgetTopic>
                                );
                            }
                        )}
                        <Button type="submit" text="Confirmar" disabled={!hasAlternativeSelected} />
                        {isFormSubmited && isCorrect && <p>Você acertou!</p>}
                        {isFormSubmited && !isCorrect && <p>Você errou!</p>}
                    </FormAlternatives>
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
            <QuizContainer>{screenState === screenStates.QUIZ && <QuestionWidget question={question} questionIndex={questionIndex} totalQuestions={totalQuestions} onSubmit={handleSubmitQuiz} addResult={addResult} />}</QuizContainer>
            {screenState === screenStates.LOADING && <LoadingWidget />}
            {screenState === screenStates.RESULT && (
                <SuccessMessage>
                    <h1>
                        Você acertou{' '}
                        {results.reduce((soma, resultAtual) => {
                            const isTrue = resultAtual === true;
                            if (isTrue) {
                                return soma + 1;
                            }
                            return soma;
                        })}{' '}
                        questões, parabéns!
                    </h1>
                </SuccessMessage>
            )}
        </QuizBackground>
    );
};

export default QuizPage;
