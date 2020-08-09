import React, {useState} from "react";
import {Button} from "@material-ui/core";


const Main = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="spacerMargin">
            <div className="main">
                <div>
                    <h3>Mark Francis</h3>
                    <p>Hello, this is my attempt</p>
                </div>
                {isLoading ? "loading" : "notLoading"}
                <Button onClick={() => setIsLoading(true)}>LOAD</Button>
            </div>
        </div>
    );
};

export default Main;
