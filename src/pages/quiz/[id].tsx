import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../screens/Quiz';

interface QuizDaGaleraPageProps {
    dbExterno: {
        questions: [];
        bg: string;
        theme: {};
    };
}

const QuizDaGaleraPage: React.FC<QuizDaGaleraPageProps> = ({ dbExterno }) => {
    console.log(dbExterno);
    // const [db, setDb] = useState({});
    // useEffect(() => {
    //     setDb(dbExterno);
    // }, []);
    // console.log(db);
    return (
        <ThemeProvider theme={dbExterno.theme}>
            <QuizScreen externalQuestions={dbExterno.questions} externalBg={dbExterno.bg} />
        </ThemeProvider>
    );
};

export default QuizDaGaleraPage;

export async function getServerSideProps(context: any): Promise<object> {
    console.log(context.query.id);
    const [projectName, githubUser] = context.query.id.split('&');
    try {
        const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
            .then(respostaDoServer => {
                if (respostaDoServer.ok) {
                    return respostaDoServer.json();
                }
                throw new Error('Falha em pegar os dados');
            })
            .then(respostaConvertidaEmObjeto => respostaConvertidaEmObjeto);
        return {
            props: {
                dbExterno
            }
        };
    } catch (err) {
        throw new Error(err);
    }
}
