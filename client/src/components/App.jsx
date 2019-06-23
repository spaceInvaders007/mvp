import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import styled from 'styled-components';
import IdeaForm from './IdeaForm.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hideButton: false,
      hideForm: false,
      ideaTitle: '',
      ideaDescription: '',
    };
    this.hideButton = this.hideButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  componentDidMount() {
     var self = this;
     axios.get('http://localhost:3000/addidea')
     .then(function(response) {
       self.setState ({
         data: response.data.ideas
       })
       console.log(self.state.data, 'this is component didmount')
     })


  //     let pictures = response.json();
  //     let ideas = pictures.ideas
  //     let ideaColl = [];
  //     ideas.forEach(function(idea){
  //       ideaColl.push(idea)
  //     })
  //     this.setState ({
  //       data : ideaColl
  //     })
  //   } catch (err) {
  //     console.error('Encountered error fetching ideas', err);
  // }
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

  render () {
    return (
      <div>
        <Logo> We Gov </Logo>
        <Button onClick={this.hideButton} showButton={this.state.hideButton} > Add idea
        </Button>
        { this.state.hideForm && (<div><IdeaForm/></div>) }
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
    :hover {
      opacity: 0.8;
    }
`;



const Logo = styled.p`
    font-size: 44px;
    font-weight: bold;
    background-color: black;
    color: white;
    text-align: center;
    padding: 20px;
`;




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


