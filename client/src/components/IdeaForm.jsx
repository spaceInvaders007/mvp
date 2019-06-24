import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class IdeaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideButton: false,
      hideForm: true,
      ideaTitle: '',
      ideaDescription: '',
    };
    this.hideButton = this.hideButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  hideButton () {
    this.setState (() => {
      return {
        hideButton: !this.state.hideButton,
        hideForm: !this.state.hideForm
      }
    })
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit (e) {
    console.log(this, 'hey this is this')
    var self = this;
    console.log('posting')
    //e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3000/addidea',
      // body: JSON.stringify(databody),
      data: {
        title: this.state.ideaTitle,
        description: this.state.ideaDescription
      },
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  render () {
    return (
      <div>
        <IdeaFormDiv
          onSubmit={this.handleSubmit}
        >
          <LabelTitleStyle >
             Idea Title
           <InputTitleStyle
              type="text"
              name="ideaTitle"
              value={this.state.ideaTitle}
              onChange={this.handleInputChange}>
           </InputTitleStyle>
          </LabelTitleStyle>
          <LabelDescStyle>
            Description (500 characters max.)
            <InputDescStyle
                type="text"
                name="ideaDescription"
                maxLength="500"
                value={this.state.ideaDescription}
                onChange={this.handleInputChange}>
            >
            </InputDescStyle>
          </LabelDescStyle>
          <LabelSubmitStyle>
            <InputSubmitStyle
              type="submit"
              value="Submit"
              onSubmit={this.handleSubmit}
            >
            </InputSubmitStyle>
          </LabelSubmitStyle>
        </IdeaFormDiv>
      </div>
    )
  }
}

export default IdeaForm;

const IdeaFormDiv = styled.form`
  background-color : #4CAF50;
  margin: 12% auto 12% 12%;
  border-radius: 20px;
  border: 3px solid #f1f1f1;
  width: 450px;
  grid-template-rows:  25%  100px  auto ;
  grid-template-areas:
    "title"
    "description"
    "submit";
  height: 450px;
`

const LabelStyle = styled.div`
  color:white;
  font-size: 30px;
  padding: 20px;
  backgroundColor: #4CAF50;
  display: grid;
  margin: 10px auto;
`

const LabelTitleStyle = styled(LabelStyle)`
  grid-area: title;
  height: 90px;
`

const LabelDescStyle = styled(LabelStyle)`
  grid-area: description;
`

const LabelSubmitStyle = styled(LabelStyle)`
  grid-area: submit;
`

const InputTitleStyle = styled.input`
  font-size: 20px;
  padding: 10px;
  margin-top: 12px;
  cursor: pointer;
`

const InputDescStyle = styled.textarea`
  height: 100px;
  borderRadius: 6px;
  rows: 10;
  padding: 10px;
  font-size: 20px;
  margin-top: 12px;
  maxlength: 20;
  cursor: pointer;
`

const InputSubmitStyle = styled.input`
  position: relative;
  bottom: 36px;
  font-size: 20px;
  height: 50px;
  background-color: black;
  width: 150px;
  border-radius: 10px;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  `