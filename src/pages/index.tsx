import React, { FormEvent, useState } from 'react';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import { QuizBackground, QuizContainer } from '../styles/pages';
import db from '../../db.json';
import { useRouter } from 'next/router';
import Button from '../components/Forms/Button';
import Input from '../components/Forms/Input';
import { WidgetContainer, WidgetHeader, WidgetContent, WidgetTopic } from '../components/Widget/styles';
import Link from '../components/Link';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    const routes = useRouter();
    const [username, setUsername] = useState('');
    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
        routes.push(`/quiz?name=${username}`);
    }
    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <WidgetContainer
                    as={motion.section}
                    variants={{
                        hidden: { opacity: 0, scale: 0 },
                        show: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delay: 0,
                                delayChildren: 0.3,
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <WidgetHeader>
                        <h1>
                            <span>&nbsp;{username}</span>I want to play a game! Ready?
                        </h1>
                    </WidgetHeader>
                    <WidgetContent>
                        <motion.form
                            onSubmit={handleSubmit}
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                show: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.2
                                    }
                                }
                            }}
                            initial="hidden"
                            animate="show"
                        >
                            <Input name="Nome" placeholder="Digite seu nome" onChange={event => setUsername(event.target.value)} required />
                            <Button text="Jogar" type="submit" disabled={username.length === 0} />
                        </motion.form>
                    </WidgetContent>
                </WidgetContainer>
                <WidgetContainer
                    as={motion.section}
                    variants={{
                        hidden: { opacity: 0, scale: 0 },
                        show: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delay: 0.5,
                                delayChildren: 0.3,
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <WidgetHeader>
                        <h1>Quizes da galera</h1>
                    </WidgetHeader>
                    <WidgetContent>
                        <ul>
                            {db.external.map(item => {
                                const textLink = item.replace('https://', '').split('.');
                                return (
                                    <motion.li
                                        key={item}
                                        variants={{
                                            hidden: { y: 20, opacity: 0 },
                                            show: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    delay: 0.8
                                                }
                                            }
                                        }}
                                        initial="hidden"
                                        animate="show"
                                    >
                                        <WidgetTopic href={`/quiz/${textLink[0]}&${textLink[1]}`} as={Link}>
                                            {`${textLink[1]}/${textLink[0]}`}
                                        </WidgetTopic>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </WidgetContent>
                </WidgetContainer>
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/GuilhermeFazam/NextQuiz" />
        </QuizBackground>
    );
};

export default Home;
