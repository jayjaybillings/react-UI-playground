import * as React from 'react';
import './style.css';
import GridLayout from 'react-grid-layout';

export default class App extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a" style={{ backgroundColor: 'yellow' }}>
          a
        </div>
        <div key="b" style={{ backgroundColor: 'red' }}>
          b
        </div>
        <div key="c" style={{ backgroundColor: 'green' }}>
          c
        </div>
      </GridLayout>
    );
  }
}
