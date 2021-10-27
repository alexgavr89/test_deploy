import React from "react";
import printResult from "./utils";

const App = () => {
    return (
        <>
            <h1>Test deploy - test start action after merge</h1>

            <hr />

            <p>Result: {printResult(true)}</p>
        </>
    );
}

export default App;
