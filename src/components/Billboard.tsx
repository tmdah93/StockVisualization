import * as React from "react";
import { bb } from "billboard.js";

interface BillboardProps {}
interface BillboardState {}

class Billboard extends React.Component<BillboardProps, BillboardState> {
  constructor(props: BillboardProps) {
    super(props);
  }

  componentDidMount() {
    this.billboard();
  }

  render() {
    return (
      <React.Fragment>
        <div id="areaChart"></div>
      </React.Fragment>
    );
  }

  billboard() {
    bb.generate({
      data: {
        columns: [
          ["data1", 300, 350, 300, 0, 0, 0],
          ["data2", 130, 100, 140, 200, 150, 50]
        ],
        types: {
          data1: "area",
          data2: "area-spline"
        }
      },
      bindto: "#areaChart"
    });
  }
}

export default Billboard;

// const Counter: React.FC<{ name: string }> = props => {
//     const { name } = props;
//     return <p>{name} counter</p>;
// };
