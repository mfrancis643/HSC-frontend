import React, {useEffect, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import DropDown from "./DropDown";
import countryList from "../resources/countryList";

const HistoricalDataAccordion = ({expanded, disabled, yearInterestPairData, setYearValuePairPayload}) => {

    const [country, setCountry] = useState("UK");
    const [startYear, setStartYear] = useState(Object.keys(yearInterestPairData)[0]);
    const [endYear, setEndYear] = useState(Object.keys(yearInterestPairData).pop());

    useEffect(() => {
        setYearValuePairPayload(getDataFromRange());
    },[startYear, endYear]);

    const getDataFromRange = () => {
        let relevantData = {};
        for(let year = startYear; year <= endYear; year++) {
            relevantData[year] = yearInterestPairData[year]
        }
        return relevantData;
    };

    return(
        <Accordion
            expanded={expanded}
            disabled={disabled}
        >
            <AccordionSummary> Historical Data </AccordionSummary>
            <AccordionDetails >
                <div>
                    <DropDown
                        labelName="Country"
                        items={countryList}
                        value={country}
                        setValue={() => setCountry}
                    />
                    <DropDown
                        labelName="Start Year"
                        items={Object.keys(yearInterestPairData)}
                        value={startYear}
                        setValue={(newValue) => setStartYear(newValue)}
                    />
                    <DropDown
                        labelName="End Year"
                        items={Object.keys(yearInterestPairData)}
                        value={endYear}
                        setValue={(newValue) => setEndYear(newValue)}
                    />
                </div>
            </AccordionDetails>
        </Accordion>
    );
};
export default  HistoricalDataAccordion;