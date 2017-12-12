import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default class FutureImplementations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="central">
        <Jumbotron className="jumbo mb-0 rounded-0">
          <br />
          <br />
          <h4 className="featuredPresenterFuture">Future Implementations</h4>
          <br />
          <ul className="menu">
            <li>Friends List</li>
            <li>Improved Chat</li>
            <li>Archived VODS</li>
            <li>User Feedback Score</li>
            <li>Fully Customizable User Pages</li>
            <li>Scheduled Presentations Page</li>
            <li>Video Review Page with Section</li>
            <li>Private Stream via Sharable Link</li>
          </ul>
        </Jumbotron>
      </div>
    );
  }
}
