import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>Task 19</h1>
            <h2>Setting up react project with Webpack and Babel</h2>
        </div>
    );
};

//ReactDOM.render(<App />, document.getElementById("root"));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);