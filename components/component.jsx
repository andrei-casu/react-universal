module.exports = (() => {
  'use strict';
  const React = require('react');

  class Component extends React.Component{
    handleClick(){
      console.log("click");
      alert();
    }
    render() {
      return (
        <html>
            <head>
                <title>universal app with react</title>
                <link rel='stylesheet' href='/style.css' />
            </head>
            <body>
                <div>
                    <h1>hello world!</h1>
                    <p>isn't server-side rendering remarkable?</p>
                    <button onClick={this.handleClick}>click me</button>
                </div>
                <script src='/bundle.js' />
            </body>
        </html>
      );
    }
  };

  return Component;
})();
