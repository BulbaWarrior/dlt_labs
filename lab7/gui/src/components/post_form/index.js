import React from 'react'
import { PostContainer, QuestionInput, AnswerInput } from "./styles"

const New_Question = () => {
  return (
    <PostContainer>
    <div class="flex">
      <label for="question"> Enter your question:</label>
      <QuestionInput type="text"/>
    </div>
    </PostContainer>
  )
}
