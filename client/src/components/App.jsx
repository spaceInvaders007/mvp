import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import styled from 'styled-components';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideButton: false,
      ideaTitle: '',
      ideaDescription: '',
    };
    this.hideButton = this.hideButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  hideButton () {
    this.setState (() => {
      return {
        hideButton: !this.state.hideButton
      }
    })
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  render () {
    return (
      <div>
        <Logo>
          We Gov
        </Logo>
        <Button onClick={this.hideButton} showButton={this.state.hideButton}>
        Add idea
        </Button>
        <IdeaForm>
        <form onSubmit={this.onSubmit}>
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
            Description
            <InputDescStyle
                type="text"
                name="ideaDescription"
                maxlength="20" >
            </InputDescStyle>
          </LabelDescStyle>
          <LabelSubmitStyle>
            <InputSubmitStyle
              type="submit"
              value="Submit">
            </InputSubmitStyle>
          </LabelSubmitStyle>
          </form>
        </IdeaForm>
      </div>
    )
  }
}



const Button = styled.button`
    ${p => p.showButton && `display: none;`}
    width: 150px;
    margin-left: 50px;
    font-size: 24px;
    border-radius: 6px;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 14px 20px;
    cursor: pointer;
`;



const Logo = styled.p`
    font-size: 44px;
    font-weight: bold;
    background-color: black;
    color: white;
    text-align: center;
    padding: 20px;
`;

const IdeaForm = styled.form`
  background-color : #4CAF50;
  margin: 12% auto;

  border-radius: 20px;
  border: 3px solid #f1f1f1;
  width: 450px;
  display: grid | inline-grid;
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
  height: 40px;
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
`

const InputDescStyle = styled.textarea`
  height: 100px;
  borderRadius: 6px;
  rows: 10;
  padding: 10px;
  font-size: 20px;
  margin-top: 12px;
  maxlength: 20;
`
const InputSubmitStyle = styled.input`
  position: relative;
  bottom: -120px;
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

export default App;

// min-width: 80%;


// render() {
//   return (

//     <form onSubmit={this.onSubmit}>
//       <label>
//         First Name:
//         <input
//           type="text"
//           name="firstName"
//           value={this.state.firstName}
//           onChange={this.handleInputChange} />
//       </label>
//       <label>
//         Last Name:
//         <input
//           type="text"
//           name="lastName"
//           value={this.state.lastName}
//           onChange={this.handleInputChange} />
//       </label>
//       <label>
//         Email Address:
//         <input
//           type="text"
//           name="emailAddress"
//           value={this.state.emailAddress}
//           onChange={this.handleInputChange} />
//       </label>
//       <label>
//         Number of Guests:
//         <input
//           type="text"
//           name="numberOfGuests"
//           value={this.state.numberOfGuests}
//           onChange={this.handleInputChange} />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   )
// }
// }