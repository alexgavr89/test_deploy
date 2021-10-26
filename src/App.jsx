import React from "react";
import printResult from "./utils";

const App = () => {
    return (
        <>
            <h1>Test deploy - bad test</h1>

            <hr />

            <p>Result: {printResult('good')}</p>
        </>
    );
}

export default App;
