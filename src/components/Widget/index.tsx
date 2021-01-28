import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import { WidgetContainer, WidgetContent, WidgetHeader } from './styles';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

interface WidgetsProps {
    title: string;
}

const Widget: React.FC = () => {
    const routes = useRouter();
    const [username, setUsername] = useState('');
    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
        console.log('teste');
        routes.push(`/quiz?name=${username}`);
    }

    return (
        <>
            <WidgetContainer>
                <WidgetHeader>
                    <h1>
                        <span>&nbsp;{username}</span>Do you want to play a game?
                    </h1>
                </WidgetHeader>
                <WidgetContent>
                    <form onSubmit={handleSubmit}>
                        <Input name="Nome" placeholder="Digite seu nome" onChange={event => setUsername(event.target.value)} required />
                        <Button text="Jogar" type="submit" disabled={username.length === 0} />
                    </form>
                </WidgetContent>
            </WidgetContainer>
        </>
    );
};

export default Widget;
