import React, {useEffect, useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Switch,
    TextField,
} from "@material-ui/core";
import {getYearInterestRatePairUK} from "./resources/data/yearInterestPairUK";
import {getYearInterestRatePairUSA} from "./resources/data/yearInterestPairUSA";
import {properties} from "./resources/properties/properties";
import axios from "axios";
import ResultsModal from "./components/ResultsModal"
import HeadBanner from "./components/HeadBanner";
import HistoricalDataAccordion from "./components/HistoricalDataAccordion";
import CustomDataAccordion from "./components/CustomDataAccordian";

const Main = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isCustomData, setIsCustomData] = useState(false);
    const [country, setCountry] = useState("USA");
    const [bankBalance, setBankBalance] = useState(1000);
    const [resultsOpen, setResultsOpen] = useState(false);
    const [results, setResults] = useState({});
    const [yearInterestPairData, setYearInterestPairData] = useState(getYearInterestRatePairUSA);
    const [yearInterestPairPayload, setYearInterestPairPayload] = useState(yearInterestPairData);

    const sendButtonClick = () =>{
        let payload = {
            "bankBalance": bankBalance,
            "yearInterestPair": yearInterestPairPayload
        };
        axios.post(properties.host + '/calculate', payload)
            .then(res => {
                setResults(res.data);
                setResultsOpen(true);
            });
    };

    useEffect(() => {

    })

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
                                       label="Bank Balance"
                                       value={bankBalance}
                                       onChange={(e) => setBankBalance(e.target.value)}
                            />
                        </span>
                    </div>
                    <div className="row">
                        <span className="label">Use Custom Data:</span>
                        <span className="subComponent">
                            <Switch checked={!isCustomData}
                                    onChange={() => setIsCustomData(!isCustomData)}
                            />
                        </span>
                    </div>
                    <HistoricalDataAccordion
                        expanded={isCustomData}
                        disabled={!isCustomData}
                        setYearValuePairPayload={(newPayload) => {setYearInterestPairPayload(newPayload)}}
                        yearInterestPairData={yearInterestPairData}
                    />
                    <Accordion
                        expanded={!isCustomData}
                        disabled={isCustomData}
                    >
                        <AccordionSummary
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            Custom Data
                        </AccordionSummary>
                        <AccordionDetails>
                            <CustomDataAccordion/>
                        </AccordionDetails>
                    </Accordion>

                    {isLoading ? "Loading...": null}
                    <Button variant="contained" size={'large'} onClick={() => sendButtonClick()}>Get Savings Results</Button>
                </div>
                {resultsOpen ? (
                    <ResultsModal open={resultsOpen} closeCall={() => setResultsOpen(false)} content={results}/>
                    ):(
                        <div></div>
                )}
            </div>
        </>
    );
};

export default Main;