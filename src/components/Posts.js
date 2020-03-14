import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";

// Components
import AddPost from "./AddPost";
import Login from "./Login";

// Redux
import { connect } from "react-redux";
import { getPosts, deleteItem } from "../actions/post";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    console.log(this.props);
    const allPosts =
      this.props.post.length === 0 ? (
        <div>Loading...</div>
      ) : (
        this.props.post.map(item => {
          return (
            <div className="card my-1" key={item.id}>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-text">{item.body}</p>
                {this.props.auth === false ? (
                  <p> Not Authenticated to Delete </p>
                ) : (
                  <button
                    onClick={() => {
                      this.props.deleteItem(item.id);
                    }}
                    className="btn btn-dark"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          );
        })
      );
    return (
      <Fragment>
        <Container className="py-4">
          <h2 className="text-primary">Posts - {this.props.post.length} </h2>
          <Login />
          <AddPost />
          {allPosts}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPosts, deleteItem })(Posts);
