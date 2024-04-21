import React from "react";

export default class Child extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "vivek",
      inter:undefined,
    };
  }

  componentDidMount() {
    let c = 0;
    const abc = setInterval(() => {
      console.log(c++);
    }, 1000);

    this.setState({ ...this.state, inter: abc });
  }

  componentWillUnmount() {
    clearInterval(this.state.inter);
    console.log("componentWillUnmount called");
  }

  render() {
    return (
      <>
        <h1 className="text-5xl text-pink-500">Count: {this.props.name}</h1>
      </>
    );
  }
}

// const Child = ({name,age}) => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Child
