import React, {useEffect, useState} from "react";
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
import OrSymbol from "./components/OrSymbol/OrSymbol";
import HistoricalSection from "./components/HistoricalSection/HistoricalSection";
import CustomSection from "./components/CustomSection/CustomSection";
import Description from "./components/Description/Description";

const Main = () => {
    const [bankBalance, setBankBalance] = useState(1000);
    const [resultsOpen, setResultsOpen] = useState(false);
    const [results, setResults] = useState({});

    const sendButtonClick = (yearInterestPayload) => {

        let payload = {
            "bankBalance": bankBalance,
            "yearInterestPair": yearInterestPayload
        };

        yearInterestPayload !== {} && axios.post(properties.host + '/calculate', payload)
            .then(res => {
                setResults(res.data);
                setResultsOpen(true);
            })
    };

    return (
        <>
            <HeadBanner/>
            <div className="spacerMargin">
                <div className="main">
                    <Description/>
                        <div className="row">
                            <span className="label">
                                <TextField id="standard-basic"
                                           label="Initial Bank Balance"
                                           value={bankBalance}
                                           onChange={(e) => setBankBalance(e.target.value)}
                                />
                            </span>
                        </div>

                    <Grid container>
                        <Grid item xs={5.5}>
                            <HistoricalSection
                                sendRequest={(newPayload) => {sendButtonClick(newPayload)}}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <OrSymbol/>
                        </Grid>
                        <Grid item xs={5.5}>
                            <CustomSection
                                sendRequest={(newPayload) => {sendButtonClick(newPayload)}}
                            />
                        </Grid>

                    </Grid>
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
