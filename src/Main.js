import React, {useDebugValue, useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    MenuItem,
    Select,
    Switch,
    TextField,
    Grid
} from "@material-ui/core";
import {getYearInterestRatePair} from "./resources/yearInterestPair";
import {properties} from "./resources/properties/properties.js";
import axios from "axios";
import ResultsModal from "./components/ResultsModal"
import HeadBanner from "./components/HeadBanner";
import HistoricalDataAccordian from "./components/HistoricalDataAccordian";

const Main = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isUserData, setIsUserData] = useState(true);
    const [bankBalance, setBankBalance] = useState(1000);
    const [resultsOpen, setResultsOpen] = useState(false);
    const [results, setResults] = useState({})
    const [yearInterestPair, setYearInterestPair] = useState(getYearInterestRatePair)

    const sendButtonClick = () =>{
        let payload = {
            "bankBalance": bankBalance,
            "yearInterestPair": yearInterestPair
        };
        axios.post(properties.host,payload)
            .then(res => {
                console.log("results");
                console.log(results);
                setResults(res.data);
                setResultsOpen(true);
            });
    };

    return (
        <>
            <HeadBanner/>
            <div className="spacerMargin">
                <div className="main">
                    <div>
                        <h3>Mark Francis</h3>
                        <p>Hello, this is my attempt</p>
                    </div>

                    <div className="row">
                        <span className="label">
                            <TextField id="standard-basic"
                                       label="Bank Balance"
                                       value={bankBalance}
                                       onChange={(e) => setBankBalance(e.target.value)}
                            />
                        </span>
                    </div>

                    <div className="row">
                        <span className="label">Use Historical Data:</span>
                        <span className="subComponent">
                            <Switch checked={isUserData}
                                    onChange={() => setIsUserData(!isUserData)}
                            />
                        </span>
                    </div>

                    <HistoricalDataAccordian
                        expanded={isUserData}
                        disabled={!isUserData}
                        setYearValuePair={() => {setYearInterestPair()}}
                        yearInterestPair={yearInterestPair}
                    />


                    <Accordion
                        expanded={!isUserData}
                        disabled={isUserData}
                    >
                        <AccordionSummary
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            Custom Data
                        </AccordionSummary>
                        <AccordionDetails>
                            <h1>Coming Soon!</h1>
                        </AccordionDetails>
                    </Accordion>

                    {isLoading ? "Loading...": null}
                    <Button onClick={() => sendButtonClick()}>LOAD</Button>
                </div>
                {resultsOpen ? (
                        <ResultsModal open={resultsOpen} closeCall={() => setResultsOpen(false)} content={results}/>
                ):(<div></div>
                )}
            </div>
        </>
    );
};

export default Main;
