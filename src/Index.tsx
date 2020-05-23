import * as React from "react";
import * as ReactDOM from "react-dom";
// import Counter from "./components/Counter";
import Billboard from "./components/Billboard";

interface IndexProps {}
interface IndexState {}

class Index extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        {/* <Counter name="React" /> */}
        <Billboard />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));
