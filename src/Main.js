import React, {useEffect, useState} from "react";
import {
    TextField,
    // Accordion,
    Grid, ThemeProvider,
    // Stepper, Step, StepLabel, AccordionSummary, AccordionDetails
} from "@mui/material";
import ResultsModal from "./components/ResultsModal"
import HeadBanner from "./components/HeadBanner";
import OrSymbol from "./components/OrSymbol/OrSymbol";
import HistoricalSection from "./components/HistoricalSection/HistoricalSection";
import CustomSection from "./components/CustomSection/CustomSection";
import Description from "./components/Description/Description";
import {themeOptions} from "./resources/themeOptions";
import {calculate} from './common/calculate'
import CustomStepper from "./components/CustomStepper/CustomStepper";
import {ExpandMore} from "@mui/icons-material";

const Main = () => {

    const steps = [
        "1. Balance",
        "2. Parameters",
        "3. Results"
    ]

    const [bankBalance, setBankBalance] = useState(1000);
    const [resultsOpen, setResultsOpen] = useState(false);
    const [results, setResults] = useState({});
    const [currentStep, setCurrentStep] = useState(0);

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


    useEffect(() =>{
        console.log("currentStep")
        console.log(currentStep)
    },[currentStep])





    return (
        <ThemeProvider theme={themeOptions}>
            <HeadBanner/>
            <div className="spacerMargin">
                <div className="main">

                    <CustomStepper
                        setCurrentStep={(newVal) => setCurrentStep(newVal)}
                        steps={steps}
                        currentStep={currentStep}
                    >

                        {
                            currentStep === 0 && (

                                <div>
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
                                </div>

                            )
                        }

                        {
                            currentStep === 1 && (
                                <Grid container>

                                    {/*<Accordion>*/}
                                    {/*    <AccordionSummary*/}
                                    {/*        expandIcon={<ExpandMore />}*/}
                                    {/*        aria-controls="panel1-content"*/}
                                    {/*        id="panel1-header"*/}
                                    {/*    >*/}
                                    {/*        Accordion 1*/}
                                    {/*    </AccordionSummary>*/}
                                    {/*    <AccordionDetails>*/}
                                    {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
                                    {/*        malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
                                    {/*    </AccordionDetails>*/}
                                    {/*</Accordion>*/}
                                    {/*<Accordion>*/}
                                    {/*    <AccordionSummary*/}
                                    {/*        expandIcon={<ExpandMore />}*/}
                                    {/*        aria-controls="panel2-content"*/}
                                    {/*        id="panel2-header"*/}
                                    {/*    >*/}
                                    {/*        Accordion 2*/}
                                    {/*    </AccordionSummary>*/}
                                    {/*    <AccordionDetails>*/}
                                    {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
                                    {/*        malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
                                    {/*    </AccordionDetails>*/}
                                    {/*</Accordion>*/}
                                    {/*<Accordion defaultExpanded>*/}
                                    {/*    <AccordionSummary*/}
                                    {/*        expandIcon={<ExpandMore />}*/}
                                    {/*        aria-controls="panel3-content"*/}
                                    {/*        id="panel3-header"*/}
                                    {/*    >*/}
                                    {/*        Accordion Actions*/}
                                    {/*    </AccordionSummary>*/}
                                    {/*</Accordion>*/}
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
                            )
                        }

                        {
                            currentStep === 2 && (
                                <div className="row">
                                    <CustomSection
                                        sendRequest={(newPayload) => {sendButtonClick(newPayload)}}
                                    />
                                </div>
                            )
                        }
                    </CustomStepper>

                </div>
                {resultsOpen ? (
                    <ResultsModal open={resultsOpen} closeCall={() => setResultsOpen(false)} content={results}/>
                    ):(
                        <></>
                )}
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </ThemeProvider>
    );
};

export default Main;
