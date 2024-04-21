import React from "react";
import Child from "./components/Child";
import axios from "axios";

export default class App extends React.Component {
  constructor() {
    console.log("constructor called");
    super();
    this.state = {
      count: 0,
      data: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount called");
    this.callApi();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }




  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  callApi = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res);
    console.log(res.data);
    // this.setState({ ...this.state, data: res.data });
  };

  render() {
    return (
      <>
        {this.state.count%2==0 && <Child name="roya ka component" />}
        {/* {this.state.count%2==0 && <Child />} */}

        <h1 className="text-5xl text-green-500">Count: {this.state.count}</h1>
        <button onClick={this.inc}>++</button>

        <br />
        <ul>
          {this.state.data.map((data) => {
            return <li>{data.title}</li>;
          })}
        </ul>
      </>
    );
  }
}
