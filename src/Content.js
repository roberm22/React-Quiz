import React from 'react';
import Image from './Image';
import Question from './Question';
import Answer from './Answer';
import Author from "./Author";
export default class Content extends React.Component {

    componentDidMount(){

        document.getElementById("answerUser").addEventListener("keyup", function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                document.getElementById("enterButton").click();
            }
        });

    }

    render() {
        return (
            <div className={"contentContainer"} style={{display: this.props.isFinished ? 'none' : 'flex'}}>

                <div className={"quizContainer"}>

                    <Question
                        question={this.props.quiz.question}
                    />

                    <Answer
                        userAnswer = {this.props.quiz.userAnswer}
                        onQuestionAnswer = {this.props.onQuestionAnswer}
                    />

                    <button style={{display:  'none' }}
                            id="enterButton"
                            onClick ={(this.props.Quiz9) ?
                                (this.props.submitFunction)
                                :
                                (() => {this.props.onChangeQuiz(this.props.currentQuiz+1);})
                            }
                    >
                    </button>

                    <Author
                        author={this.props.quiz.author}
                        isFinished={this.props.finished}
                    />


                </div>

                <div className={"imageContainer"}>
                    <Image att={this.props.quiz.attachment}
                           question={this.props.quiz.question}
                    />
                </div>

            </div>
        );
    }
}
