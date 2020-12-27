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
                        <h1>Compound Interest Calculator</h1>
                        <p>At HistoricalSavingsCalculator.com we provide a finance utility and service for working with bank accounts and specifically historical savings account data. We apply this to the compound interest formula so that you can see the differences in past rates in the previous decades, and today's rates. This tool can be utilized to expose the effects of events such as the financial crash of 2008 and coronavirus (Covid-19) on global interest rates, and how they have affected savings accounts worldwide.</p>
                        <p>You can either define your own custom data set, or else utilize historical data by selecting the "Use Custom Data" slider.</p>
                        <p>Once you have chosen your data, by either defining it yourself, or choosing a data set between which years you choose and in which country, clicking the "GET RESULTS" button will apply this to a compound interest calculator, and will show you the year-on-year interest gained and the new bank balance for each year post interest.</p>
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