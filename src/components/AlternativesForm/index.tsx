import React, { useState, FormHTMLAttributes } from 'react';
import Button from '../Forms/Button';
import { WidgetTopic } from '../Widget/styles';

import { FormAlternatives } from './styles';

interface questionProps {
    answer: number;
    alternatives: [];
}

interface AlternativeFormProps extends FormHTMLAttributes<HTMLFormElement> {
    question: questionProps;
    questionIndex: number;
    onSubmit(): void;
    addResult(): void;
}

const AlternativesForm: React.FC = (question, questionIndex, addResult, onSubmit): AlternativeFormProps => {
    const [selectedAlternative, setSelectedAlternative] = useState(undefined);
    const [isFormSubmited, setIsFormSubmited] = useState(false);
    const questionId = `question__${questionIndex}`;
    const isCorrect = selectedAlternative == question.answer;
    const hasAlternativeSelected = selectedAlternative !== undefined;

    return (
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
    );
};

export default AlternativesForm;
