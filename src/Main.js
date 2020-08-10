import React, {useState} from "react";
import {Button, Switch} from "@material-ui/core";


const Main = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isUserData, setIsUserData] = useState(false);

    return (
        <div className="spacerMargin">
            <div className="main">
                <div>
                    <h3>Mark Francis</h3>
                    <p>Hello, this is my attempt</p>
                </div>
                <Switch checked={isUserData} onChange={() => setIsUserData(!isUserData)} name="antoine" />
                {isLoading ? "Loading...": null}
                <Button className="getResult" onClick={() => setIsLoading(!isLoading)}>LOAD</Button>
            </div>
        </div>
    );
};

export default Main;
