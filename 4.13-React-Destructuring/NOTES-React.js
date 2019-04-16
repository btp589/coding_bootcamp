// REACT is a JS library: https://reactjs.org/docs/getting-started.html
// Component-based architecture. Elements of the UI are broken into self-contained components.
// React will handle the update to DOM and render it.
// Enforces a standard system of building UI so that anyone coming in that knows React can understand it
// Scaffolding tool: sets up all config and directories needed to start writing app in React.

// Webpack bundles files similar to npm
// Babel

// In your directory, perform the following:
// You create a new React project with the command create-react-app, followed by the name of your project. For example: create-react-app my-app.
// https://blog.teamtreehouse.com/getting-started-create-react-app-tool
npm install -g create-react-app

// Example of how to create a component in regular JS
// Define component
var Header = function(props) {
  return `<h1>${props.text}</h1>`;
}

// Render component
var header = Header({text: "New header"});
document
.querySelector("body")
.innerHTML = header;