import * as React from 'react';
import ReactDOM from 'react-dom'
import Container from '@mui/material/Container'
import { QuestionCard } from './components/question_card'
import { QuestionDialog } from './components/question_dialog'

function App() {
  return (
    <Container maxWidth="sm">
      <QuestionDialog/>
      <QuestionCard/>
    </Container>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
