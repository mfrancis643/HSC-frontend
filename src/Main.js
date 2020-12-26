import React, {useState} from "react";
import {
    Button,
    Switch,
    TextField,
} from "@material-ui/core";
import {properties} from "./resources/properties/properties";
import axios from "axios";
import ResultsModal from "./components/ResultsModal"
import HeadBanner from "./components/HeadBanner";
import HistoricalDataAccordion from "./components/HistoricalDataAccordion";
import CustomDataAccordion from "./components/CustomDataAccordian";

const Main = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isCustomData, setIsCustomData] = useState(true);
    const [bankBalance, setBankBalance] = useState(1000);
    const [resultsOpen, setResultsOpen] = useState(false);
    const [results, setResults] = useState({});
    const [historicalYearInterestPairData, setHistoricalYearInterestPairData] = useState({})
    const [customYearInterestPairData, setCustomYearInterestPairData] = useState({})

    const sendButtonClick = () => {
        let yearInterestPayload = {}

        isCustomData === true? yearInterestPayload = customYearInterestPairData: yearInterestPayload = historicalYearInterestPairData;
        let payload = {
            "bankBalance": bankBalance,
            "yearInterestPair": yearInterestPayload
        };
        axios.post(properties.host + '/calculate', payload)
            .then(res => {
                setResults(res.data);
                setResultsOpen(true);
            });
    };

    return (
        <>
            <HeadBanner/>
            <div className="spacerMargin">
                <div className="main">
                    <div className="spacedText">
                        <p>At Historical Savings Calculator we utilise historical bank savings account interest rate data and apply them to a compound interest calculator. You can opt to use historical data or else define your own data set with the "Use Custom Data Option"!</p>
                    </div>
                    <div className="row">
                        <span className="label">
                            <TextField id="standard-basic"
                                       label="Initial Bank Balance"
                                       value={bankBalance}
                                       onChange={(e) => setBankBalance(e.target.value)}
                            />
                        </span>
                    </div>
                    <div className="row">
                        <span className="label" style={{padding:"10px"}}>Use Custom Data:</span>
                        <span className="subComponent">
                            <Switch checked={isCustomData}
                                    onChange={() => setIsCustomData(!isCustomData)}
                            />
                        </span>
                    </div>
                    <HistoricalDataAccordion
                        expanded={!isCustomData}
                        disabled={isCustomData}
                        setYearValuePairPayload={(newPayload) => {setHistoricalYearInterestPairData(newPayload)}}
                    />
                    <CustomDataAccordion
                        expanded={isCustomData}
                        disabled={!isCustomData}
                        setYearValuePairPayload={(newPayload) => {setCustomYearInterestPairData(newPayload)}}
                    />

                    {isLoading ? "Loading...": null}
                    <Button style={{margin: "20px", fontSize: "20px"}} variant="contained" size={'large'} onClick={() => sendButtonClick()}>Get Results</Button>
                </div>
                {resultsOpen ? (
                    <ResultsModal open={resultsOpen} closeCall={() => setResultsOpen(false)} content={results}/>
                    ):(
                        <></>
                )}
            </div>
        </>
    );
};

export default Main;