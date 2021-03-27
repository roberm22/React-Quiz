import React from 'react';

export default class Answer extends React.Component {

    //para que al pasar de pregunta se ubique el cursor en el input de dicha pregunta
    componentDidUpdate(){
        document.getElementById("answerUser").focus();
    }

    render() {
        return (
            <div>
                <input
                    autoFocus={true}
                    title={'Escriba aqui su respuesta'}
                    placeholder={"Respuesta..."}
                    id={"answerUser"}
                    type={"text"} value={this.props.userAnswer || ''}
                    onChange={(e) => {
                        this.props.onQuestionAnswer(e.target.value);
                    }}
                />
            </div>
        );
    }
}