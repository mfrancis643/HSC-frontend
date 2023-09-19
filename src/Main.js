import React, {useEffect, useState} from "react";
import {
    Button,
    Switch,
    TextField,
    Grid, ThemeProvider
} from "@mui/material";
import {properties} from "./resources/properties/properties";
import axios from "axios";
import ResultsModal from "./components/ResultsModal"
import HeadBanner from "./components/HeadBanner";
import OrSymbol from "./components/OrSymbol/OrSymbol";
import HistoricalSection from "./components/HistoricalSection/HistoricalSection";
import CustomSection from "./components/CustomSection/CustomSection";
import Description from "./components/Description/Description";
import {themeOptions} from "./resources/themeOptions";
import {calculate} from './common/calculate'

const Main = () => {
    const [bankBalance, setBankBalance] = useState(1000);
    const [resultsOpen, setResultsOpen] = useState(false);
    const [results, setResults] = useState({});

    const sendButtonClick = (yearInterestPayload) => {

        let payload = {
            "bankBalance": bankBalance,
            "yearInterestPair": yearInterestPayload
        };

        if (yearInterestPayload !== {}) {
            let res = calculate(payload);
            setResultsOpen(true);
            setResults(res)
        }
    };

    return (
        <ThemeProvider theme={themeOptions}>
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
                        <Grid item md={5.5} xs = {12}>
                            <HistoricalSection
                                sendRequest={(newPayload) => {sendButtonClick(newPayload)}}
                            />
                        </Grid>
                        <Grid style={{padding: "15px", paddingTop: '40px'}}     item md={1} xs = {12}>
                            <OrSymbol/>
                        </Grid>
                        <Grid item md={5.5} xs = {12}>
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
        </ThemeProvider>
    );
};

export default Main;
