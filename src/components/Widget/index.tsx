import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import { WidgetContainer, WidgetContent, WidgetHeader, WidgetImage } from './styles';
import QuizLogo from '../../assets/img/logo.png';
const Widget: React.FC = () => {
    const routes = useRouter();
    const [name, setName] = useState('');

    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
        console.log('teste');
        routes.push(`/quiz?name=${name}`);
    }

    return (
        <>
            <WidgetImage src={QuizLogo} />
            <WidgetContainer>
                <WidgetHeader>
                    <h1>O que voce sabe sobre El Dia de los Muertos {name}?</h1>
                </WidgetHeader>
                <WidgetContent>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Entre com seu nome" type="text" onChange={event => setName(event.target.value)} />
                        <button type="submit" disabled={name.length === 0}>
                            Jogar
                        </button>
                    </form>
                </WidgetContent>
            </WidgetContainer>
            <WidgetContainer>
                <WidgetHeader>
                    <h1>Marvel</h1>
                </WidgetHeader>
                <WidgetContent>
                    <p>teste</p>
                </WidgetContent>
            </WidgetContainer>
        </>
    );
};

export default Widget;
