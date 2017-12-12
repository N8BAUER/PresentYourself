import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

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
          <ListGroup className="futureMenu">
            <ListGroupItem>Friends List</ListGroupItem>
            <ListGroupItem>Improved Chat</ListGroupItem>
            <ListGroupItem>Archived VODS</ListGroupItem>
            <ListGroupItem>Individual Feedback Rating</ListGroupItem>
            <ListGroupItem>Fully Customizable User Pages</ListGroupItem>
            <ListGroupItem>Scheduled Presentations Page</ListGroupItem>
            <ListGroupItem>Video Review Page with Section</ListGroupItem>
            <ListGroupItem>Private Stream via Sharable Link</ListGroupItem>
          </ListGroup>
        </Jumbotron>
      </div>
    );
  }
}
