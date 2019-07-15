import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Learning extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2
          style={{
            marginTop: "5.5vh",
            textAlign: "center",
            alignSelf: "stretch"
          }}
        >
          Seriously the links do nothing
        </h2>
        <div id="sprintTagsContainter">
          <div id="sprintTagsList">
            <Link className="sprintTags" href="blog/sprint1-cultural.html">
              Sprint 1 Cultural
            </Link>
            <Link className="sprintTags" href="blog/sprint1-technical.html">
              Sprint 1 Technical
            </Link>
            <Link className="sprintTags" href="blog/sprint2-cultural.html">
              Sprint 2 Cultural
            </Link>
            <Link className="sprintTags" href="blog/sprint2-technical.html">
              Sprint 2 Technical
            </Link>
            <Link className="sprintTags" href="blog/sprint3-cultural.html">
              Sprint 3 Cultural
            </Link>
            <Link className="sprintTags" href="blog/sprint3-technical.html">
              Sprint 3 Technical
            </Link>
            <Link className="sprintTags" href="blog/sprint4-cultural.html">
              Sprint 4 Cultural
            </Link>
            <Link className="sprintTags" href="blog/sprint4-technical.html">
              Sprint 4 Technical
            </Link>
            <Link className="sprintTags" href="blog/sprint5-cultural.html">
              Sprint 5 Cultural
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Learning;
