import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Index from "./Index";
import Learning from "./Learning";
import Projects from "./Projects";

class Nav extends React.Component {
  // state = {}

  activePage(link) {
    if (this.props.active === link) {
      return "active";
    } else return "";
  }

  render() {
    return (
      <React.Fragment>
        <div className="navContainer">
          <nav>
            <ul>
              <li>
                <Link
                  className={`navTags home ${this.activePage("Index")}`}
                  to="./"
                  onClick={() => this.props.changePage(<Index />)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`navTags home ${this.activePage("Projects")}`}
                  to="./"
                  onClick={() => this.props.changePage(<Projects />)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={`navTags learning ${this.activePage("Learning")}`}
                  to="./"
                  onClick={() => this.props.changePage(<Learning />)}
                >
                  Learning
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
