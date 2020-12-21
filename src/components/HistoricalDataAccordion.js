import React, {useEffect, useState} from "react";
import {Button, Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import DropDown from "./DropDown";
import countryList from "../resources/countryList";
import HistoricalDataModal from "./HistoricalDataModal";

const HistoricalDataAccordion = ({expanded, disabled, yearInterestPairData, setYearValuePairPayload}) => {

    const [country, setCountry] = useState("UK");
    const [startYear, setStartYear] = useState(Object.keys(yearInterestPairData)[0]);
    const [endYear, setEndYear] = useState(Object.keys(yearInterestPairData).pop());
    const [historicalDataModalOpen, setHistoricalDataModalOpen] = useState(false);

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
                    <Button style={{marginTop: 20}} color={"secondary"} size={'small'} onClick={() => {setHistoricalDataModalOpen(true)}}>
                        <span style={{fontSize: 16}}>Show This Historical Data</span>
                    </Button>
                </div>
                {historicalDataModalOpen ? (
                    <HistoricalDataModal open={historicalDataModalOpen} closeCall={() => {setHistoricalDataModalOpen(false)}} countryCode={country} yearInterestPairData={yearInterestPairData}/>
                ):(
                    <></>
                )}
            </AccordionDetails>
        </Accordion>
    );
};
export default  HistoricalDataAccordion;