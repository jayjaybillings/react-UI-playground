import * as React from 'react';
import Card from "./components/Card";
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class App extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = { lg : [
      { i: 'a', x: 0, y: 0, w: 4, h: 1 },
      { i: 'b', x: 4, y: 0, w: 4, h: 1 },
      { i: 'c', x: 8, y: 0, w: 4, h: 1 },
    ]};
    return (
      <div>
        <ResponsiveGridLayout
          className="layout"
          layouts={layout}
          breakpoints={{ lg: 1200 }}
          cols={{ lg: 12 }}
          rowHeight={281}
          width={1200}
        >
          <div key="a" style={{ backgroundColor: 'yellow' }}>
            <Card label="a"/>
          </div>
          <div key="b" style={{ backgroundColor: 'red' }}>
            <Card label="b"/>
          </div>
          <div key="c" style={{ backgroundColor: 'green' }}>
            <Card label="c"/>
          </div>
        </ResponsiveGridLayout>
      </div>
    );
  }
}
