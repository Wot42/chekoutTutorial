import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    // tags: ["tag1", "tag2", "tag3"],
    // tags: [],
    // imageUrl: "https://picsum.photos/200",
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold",
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  //   // console.log("clicked", this.state.value);
  // };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span style={{ fontSize: 30 }} className="badge bg-primary m-2"> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please make a new tag"}
        {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
