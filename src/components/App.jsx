import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../App.css";
import Nav from "./Nav";
import Index from "./Index.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <Index />,
      active: "Index"
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(pageHtml) {
    this.setState({
      page: pageHtml,
      active: pageHtml.type.name
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav changePage={this.changePage} active={this.state.active} />
          {this.state.page}
        </div>
      </Router>
    );
  }
}

export default App;
