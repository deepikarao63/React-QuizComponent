import React,{Component} from 'react'

class QuizQuestion extends Component{
render()
{
    return(
    <button>{this.props.buttontext}</button>
    )
}
}
export default QuizQuestion