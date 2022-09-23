import React, { useState } from "react";
import "./App.css";
import Header from "./../Header/Header";
import SearchBox from "./../searchBox/searchBox";
import ResultsContainer from "./../ResultsContainer/ResultsContainer";

const name = require("@rstacruz/startup-name-generator");

const App = () => {
  const [headerText, setheaderText] = useState("Name Search!");
  const [headerExpanded, setheaderExpanded] = useState(true);
  const [suggestedNames, setsuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setheaderExpanded(!inputText);
    setsuggestedNames(inputText ? name(inputText) : []);
  };

  return (
    <div>
      <Header headerExpanded={headerExpanded} headTitle={headerText} />
      <SearchBox onInputChange={handleInputChange} />
      <ResultsContainer suggestedNames={suggestedNames} />
    </div>
  );
};

// class App extends Component {
//   state = {
//     headerText: "Name It!",
//     headerExpanded: true,
//     suggestedNames: [],
//   };

//   handleInputChange = (inputText) => {
//
//     this.setState({
//       headerExpanded: !inputText,
//       suggestedNames: inputText ? name(inputText) : [],
//     });
//   };
//   render() {
//     return (
//       <div>
//         <Header
//           headerExpanded={this.state.headerExpanded}
//           headTitle={this.state.headerText}
//         />
//         <SearchBox onInputChange={this.handleInputChange} />
//         <ResultsContainer suggestedNames={this.state.suggestedNames} />
//       </div>
//     );
//   }
// }

export default App;
