import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false
  };

  componentDidMount = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhZDNkYjY4MzQzMTAwMTRkZWE3YTQiLCJpYXQiOjE2ODA1MjgzNDcsImV4cCI6MTY4MTczNzk0N30.4wHomkCNjTDjpwVWCM1XI-oaJtcAOxQ7uyI2sF7t9WI"
        }
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: comments, isLoading: false, isError: false });
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <div className="text-center">
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
