import React, {useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, MenuItem, Select} from "@material-ui/core";


const HistoricalDataAccordian = ({expanded, disabled, setYearInterestPair, yearInterestPair}) => {
    const [country, setCountry] = useState("UK");
    const [startYear, setStartYear] = useState(Object.keys(yearInterestPair)[0]);
    const [endYear, setEndYear] = useState(Object.keys(yearInterestPair).pop());

    const getDataFromRange = () => {
        let relevantData = {};
        for(let year = startYear; year <= endYear; year++) {
            relevantData[year] = yearInterestPair[year]
        }
        return relevantData;
    };

    const labelStyle = {
        marginLeft: '50px'
    }


    return(
        <Accordion
            expanded={expanded}
            disabled={disabled}
        >
            <AccordionSummary> Historical Data </AccordionSummary>
            <AccordionDetails >
                <div>
                    <div className={"fullWidth"}>
                        <span>Country</span>
                        <span style={labelStyle}>
                            <Select
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
                    <div className={"fullWidth"}>
                        <span>Start Year</span>
                        <span style={labelStyle}>
                            <Select
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
                    <div>
                        <span>End Year</span>
                        <span style={labelStyle}>
                            <Select
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
    );
}
export default  HistoricalDataAccordian;