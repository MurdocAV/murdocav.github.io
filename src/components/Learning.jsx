import React from "react";
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
            <a className="sprintTags" href="blog/sprint1-cultural.html">
              Sprint 1 Cultural
            </a>
            <a className="sprintTags" href="blog/sprint1-technical.html">
              Sprint 1 Technical
            </a>
            <a className="sprintTags" href="blog/sprint2-cultural.html">
              Sprint 2 Cultural
            </a>
            <a className="sprintTags" href="blog/sprint2-technical.html">
              Sprint 2 Technical
            </a>
            <a className="sprintTags" href="blog/sprint3-cultural.html">
              Sprint 3 Cultural
            </a>
            <a className="sprintTags" href="blog/sprint3-technical.html">
              Sprint 3 Technical
            </a>
            <a className="sprintTags" href="blog/sprint4-cultural.html">
              Sprint 4 Cultural
            </a>
            <a className="sprintTags" href="blog/sprint4-technical.html">
              Sprint 4 Technical
            </a>
            <a className="sprintTags" href="blog/sprint5-cultural.html">
              Sprint 5 Cultural
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Learning;
