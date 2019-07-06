/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

let React;
let ReactDOM;

describe('ReactSmoosh', () => {
  beforeEach(() => {
    jest.resetModules();
    React = require('react');
    ReactDOM = require('react-dom');
  });

  it('works', () => {
    function Dialog({children}) {
      return (
        <div>
          <div>
            <div />
            <p>Dialog</p>
          </div>
          <div>{children}</div>
        </div>
      );
    }

    function Button({children}) {
      return <button>{children}</button>;
    }

    function App() {
      return (
        <div>
          <div>
            <Dialog>
              <Button>Click me</Button>
            </Dialog>
          </div>
        </div>
      );
    }

    const container = document.createElement('div');
    ReactDOM.render(
      <div>
        <div>This is a div</div>
        <React.SmooshMode>
          <App />
        </React.SmooshMode>
      </div>,
      container,
    );

    const expectedResult =
      '<div><div>This is a div</div><p>Dialog</p><button>Click me</button></div>';

    console.log(expectedResult);

    expect(container.innerHTML).toBe(expectedResult);
  });
});
