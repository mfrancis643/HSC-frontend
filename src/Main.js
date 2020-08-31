import React, {useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    MenuItem,
    Select,
    Switch,
    TextField
} from "@material-ui/core";
import {getYearInterestRatePair} from "./resources/yearInterestPair";
import {properties} from "./resources/properties/properties.js";
import axios from "axios";

const Main = () => {
    const yearInterestPair = getYearInterestRatePair;
    const [isLoading, setIsLoading] = useState(false);
    const [isUserData, setIsUserData] = useState(true);
    const [bankBalance, setBankBalance] = useState(1000);
    const [country, setCountry] = useState("UK");
    const [startYear, setStartYear] = useState(Object.keys(yearInterestPair)[0]);
    const [endYear, setEndYear] = useState(Object.keys(yearInterestPair).pop());

    const sendButtonClick = () =>{
        let payload = {
            "bankBalance": bankBalance,
            "yearInterestPair": getDataFromRange()
        };
        axios.post(properties.host,payload)
            .then(res => {
            });
    };

    const getDataFromRange = () => {
        let relevantData = {};
        for(let year = startYear; year <= endYear; year++) {
            relevantData[year] = yearInterestPair[year]
        }
        return relevantData;
    };

    return (
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

                <Accordion
                    expanded={isUserData}
                    disabled={!isUserData}
                >
                    <AccordionSummary> Historical Data </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <div className="row padding-10">
                                <span className="label">Country</span>
                                <span className="subComponent dropDown">
                                    <Select
                                        className="dropDown"
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={country}
                                        autoWidth
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                        <MenuItem value={"UK"}>UK</MenuItem>
                                    </Select>
                                </span>
                            </div>
                            <div className="row padding-10">
                                <span className="label">Start Year</span>
                                <span className="subComponent dropDown">
                                    <Select
                                        className="dropDown"
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={startYear}
                                        autoWidth
                                        onChange={(e) => {setStartYear(e.target.value)}}
                                    >
                                        {Object.keys(yearInterestPair).map( (year) => {
                                            return <MenuItem key={year} value={year}>{year}</MenuItem>
                                        })}
                                    </Select>
                                </span>
                            </div>
                            <div className="row padding-10">
                                <span className="label">End Year</span>
                                <span className="subComponent dropDown">
                                    <Select
                                        className="dropDown"
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={endYear}
                                        autoWidth
                                        onChange={(e) => {setEndYear(e.target.value)}}
                                    >
                                        {Object.keys(yearInterestPair).map( (year) => {
                                            return <MenuItem key={year} value={year}>{year}</MenuItem>
                                        })}
                                    </Select>
                                </span>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
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
                <Button className="getResult" onClick={() => sendButtonClick()}>LOAD</Button>
            </div>
        </div>
    );
};

export default Main;
