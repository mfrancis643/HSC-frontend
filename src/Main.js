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

const Main = () => {
    const yearInterestPair = getYearInterestRatePair;
    const [isLoading, setIsLoading] = useState(false);
    const [isUserData, setIsUserData] = useState(true);
    const [country, setCountry] = useState("UK");
    const [startYear, setStartYear] = useState(Object.keys(yearInterestPair)[0]);
    const [endYear, setEndYear] = useState(Object.keys(yearInterestPair).pop());

    const handleChange = (event) => {
        setCountry(event.target.value)
    };

    return (
        <div className="spacerMargin">
            <div className="main">
                <div>
                    <h3>Mark Francis</h3>
                    <p>Hello, this is my attempt</p>
                </div>

                <div>
                    <TextField id="standard-basic" label="Bank Balance" size="large" />
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
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"UK"}>UK</MenuItem>
                                        <MenuItem value={"USA"}>USA</MenuItem>
                                        <MenuItem value={"NZ"}>NZ</MenuItem>
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
                                            console.log(year);
                                            return <MenuItem value={year}>{year}</MenuItem>
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
                                            console.log(year);
                                            return <MenuItem value={year}>{year}</MenuItem>
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
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        Custom Data
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>

                {isLoading ? "Loading...": null}
                <Button className="getResult" onClick={() => setIsLoading(!isLoading)}>LOAD</Button>
            </div>
        </div>
    );
};

export default Main;
