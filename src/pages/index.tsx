import React from 'react'
import Head from 'next/head'
import { Widget, WidgetContent, WidgetHeader } from '../components/Widget'
import db from '../../db.json'
import QuizBackground from '../components/QuizBackground'
import Footer from '../components/Footer'
import GitHubCorner from '../components/GitHubCorner'
import { QuizContainer } from '../styles/pages'

const Home: React.FC = () => {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <WidgetHeader>
            <h1>Marvel</h1>
          </WidgetHeader>
          <WidgetContent>
            <p>teste</p>
          </WidgetContent>
        </Widget>
        <Widget>
          <WidgetHeader>
            <h1>Marvel</h1>
          </WidgetHeader>
          <WidgetContent>
            <p>teste</p>
          </WidgetContent>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/GuilhermeFazam/NextQuiz" />
    </QuizBackground>
  )
}

export default Home
