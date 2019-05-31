import React, { Component } from 'react'

export default class BoxOfchoes extends Component {

    state = {
        category: this.props.ele.category,
        index: this.props.i,
        correct_answer: this.props.ele.correct_answer,
        question: this.props.ele.question,
        incorrect_answers: this.props.ele.incorrect_answers,
        collect: [this.props.ele.incorrect_answers[0], this.props.ele.incorrect_answers[1], this.props.ele.incorrect_answers[2], this.props.ele.correct_answer],
Level :this.props.ele.difficulty,
boxChoose: "box1"
    }    
    changeHandler = () => {
        this.setState({
            boxChoose: "boxChoose"
        })
        this.props.the_question(this.state.question, this.state.collect ,this.correct_answer ,this.state.Level,this.state.index ); 
    }
    boxChoose =(e) =>{

    }
    render() {
        var box = this.state.boxChoose
// console.log(this.state.index )
        return (
            <div className ={box} onClick={this.changeHandler}  >
              <p>{this.state.index + 1}</p>  

            </div>
        )
    }
}






