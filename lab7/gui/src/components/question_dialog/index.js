import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

export const QuestionDialog = () => {
  const [answer_id, setAnswer] = React.useState("1");
  const handleChange = (event) => {
    setAnswer(event.target.value)
  }

  return (
    <Box component="form">
      <Container maxWidth="sm">
        <Box sx={{ mb: 1.5 }}>
          <TextField variant="outlined" label="your question" id="question"/>
        </Box>
        <Box sx={{ mb: 1.5 }}>
          <TextField variant="outlined" label="answer 1" id="answer1"/>
          <TextField variant="outlined" label="answer 2" id="answer2"/>
        </Box>
        <Box sx={{ mb: 1.5, minWidth: "60px" }}>
          <TextField id="answer_id" select label="Correct answer" value={answer_id} onChange={handleChange}>
            <MenuItem key="1" value="1">1</MenuItem>
            <MenuItem key="2" value="2">2</MenuItem>
          </TextField>
        </Box>
        <Box sx={{ mb: 1.5 }}>
          <TextField id="price" label="price" type="number"/>
        </Box>
        <Button>Submit</Button>
      </Container>
    </Box>
  )
}
