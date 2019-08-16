import React,{Component} from 'react'
let quizQuestion=require('./quiz_data.json')

export default class Quiz extends Component{
constructor(props)
{
super(props)
this.state={quiz_position:1}
}
render()
{
    return(
        <div>{quizQuestion.quiz_questions[0].instruction_text}</div>
    )
}
}