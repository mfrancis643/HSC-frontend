import React, {useState} from "react";
import {
    Button,
    Switch,
    TextField,
    Grid
} from "@mui/material";
import {properties} from "./resources/properties/properties-local";
import axios from "axios";
import ResultsModal from "./components/ResultsModal"
import HeadBanner from "./components/HeadBanner";
import HistoricalDataAccordion from "./components/HistoricalDataAccordion";
import CustomDataAccordion from "./components/CustomDataAccordian";
import OrSymbol from "./components/OrSymbol/OrSymbol";
import HistoricalSection from "./components/HistoricalSection/HistoricalSection";
import CustomSection from "./components/CustomSection/CustomSection";
import Description from "./components/Description/Description";

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
                    <Description/>

                    <Grid container>
                        <Grid item xs={5.5}>
                            <HistoricalSection
                                expanded={!isCustomData}
                                disabled={isCustomData}
                                setYearValuePairPayload={(newPayload) => {setHistoricalYearInterestPairData(newPayload)}}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <OrSymbol/>
                        </Grid>
                        <Grid item xs={5.5}>
                            <CustomSection
                                expanded={isCustomData}
                                disabled={!isCustomData}
                                setYearValuePairPayload={(newPayload) => {setCustomYearInterestPairData(newPayload)}}
                            />
                        </Grid>

                    </Grid>
                </div>
                {/*<div className="main">*/}
                {/*    */}
                {/*    <div className="row">*/}
                {/*        <span className="label">*/}
                {/*            <TextField id="standard-basic"*/}
                {/*                       label="Initial Bank Balance"*/}
                {/*                       value={bankBalance}*/}
                {/*                       onChange={(e) => setBankBalance(e.target.value)}*/}
                {/*            />*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*    <div className="row">*/}
                {/*        <span className="label" style={{padding:"10px"}}>Use Custom Data:</span>*/}
                {/*        <span className="subComponent">*/}
                {/*            <Switch checked={isCustomData}*/}
                {/*                    onChange={() => setIsCustomData(!isCustomData)}*/}
                {/*            />*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*    <HistoricalDataAccordion*/}
                {/*        expanded={!isCustomData}*/}
                {/*        disabled={isCustomData}*/}
                {/*        setYearValuePairPayload={(newPayload) => {setHistoricalYearInterestPairData(newPayload)}}*/}
                {/*    />*/}
                {/*    <CustomDataAccordion*/}
                {/*        expanded={isCustomData}*/}
                {/*        disabled={!isCustomData}*/}
                {/*        setYearValuePairPayload={(newPayload) => {setCustomYearInterestPairData(newPayload)}}*/}
                {/*    />*/}

                {/*    {isLoading ? "Loading...": null}*/}
                {/*    <Button style={{margin: "20px", fontSize: "20px"}} variant="contained" size={'large'} onClick={() => sendButtonClick()}>Get Results</Button>*/}
                {/*</div>*/}
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
