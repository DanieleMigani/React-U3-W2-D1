import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
class SingleBook extends Component {
  state = {
    selected: false
  };

  render() {
    return (
      <Card className="m-2">
        <Card.Img
          onClick={() => this.setState({ selected: !this.state.selected })}
          variant="top"
          src={this.props.book.img}
          style={{
            objectFit: "cover",
            width: "100%",
            aspectRatio: "1/1.5",
            border: this.state.selected ? "3px solid red" : "none"
          }}
        />
        <Card.Body>
          <Card.Title className="text-truncate" style={{ color: "black" }}>
            {this.props.book.title}
          </Card.Title>
          {this.state.selected && <CommentArea />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
