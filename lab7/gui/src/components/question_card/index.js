import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export const QuestionCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          #32
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 18 }}>
          question body
        </Typography>
        <Typography variant="h8" sx={{ mb: 0.1 }} color="text.secondary">
          price: 0,0000032
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">option 1</Button>
        <Button size="small">option 2</Button>
      </CardActions>
    </Card>
  )
}
