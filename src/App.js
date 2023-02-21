import React, { useState } from "react";
import Button from "./Components/Button";

const App = () =>{
    const [showMessage, setMessage] = useState(false);

    return (
        <div className="center-col">
            <h1>This is an React app that uses Sass, built without CRA!</h1>
            <Button clickFunc={() => setMessage(!showMessage)} />
            <p className={showMessage ? "message" : "message hidden"}>Horray!</p>
        </div>
    )
}

export default App;
