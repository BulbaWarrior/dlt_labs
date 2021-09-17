import styled from "styled-components"

const PostContainer = styled.div`
    max-width: 100%;
    display: flex;
    margin 1em;
    height: 2.5em;
`

const QuestionInput = styled.input`
    font-size: 1.3em;
    text-align: center;
    border: 4px solid #732083;
    box-sizing: border-box;
    border-radius: 7px;
    outline: none;
    width: 100%;
`

const AnswerInput = styled.input`
    font-size: 1.3em;
    text-align: center;
    border: 4px solid #732083;
    box-sizing: border-box;
    border-radius: 7px;
    outline: none;
    width: 100%;
`

export { PostContainer, QuestionInput, AnswerInput }
