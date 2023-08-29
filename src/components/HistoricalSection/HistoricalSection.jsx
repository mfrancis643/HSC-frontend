import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import DropDown from "../common/DropDown/DropDown";
import countryList from "../../resources/countryList";
import HistoricalDataModal from "../HistoricalDataModal";
import getDataSet from "../../resources/data/dataSet";
import "./styles.css"


const HistoricalSection = ({sendRequest}) =>{

    const getEarliestYear = (dataSet) => {
        return Object.keys(dataSet)[0]
    }

    const getLatestYear = (dataSet) => {
        return Object.keys(dataSet)[Object.keys(dataSet).length-1]
    }

    const [country, setCountry] = useState("UK");
    const [historicalDataSet, setHistoricalDataSet] = useState(getDataSet(country))
    const [startYear, setStartYear] = useState(getEarliestYear(historicalDataSet));
    const [endYear, setEndYear] = useState(getLatestYear(historicalDataSet));
    const [historicalDataModalOpen, setHistoricalDataModalOpen] = useState(false);
    const [yearValuePairPayload, setYearValuePairPayload ] = useState({})

    useEffect(() => {
        setStartYear(getEarliestYear(historicalDataSet))
        setEndYear(getLatestYear(historicalDataSet))
    },[historicalDataSet])

    useEffect(() => {
        setHistoricalDataSet(getDataSet(country))
        setYearValuePairPayload(getDataFromRange(historicalDataSet));
    }, [country])

    useEffect(() => {
        setYearValuePairPayload(getDataFromRange(historicalDataSet));
    },[startYear, endYear]);

    const getDataFromRange = (dataSet) => {
        let relevantData = {};
        for(let year = startYear; year <= endYear; year++) {
            relevantData[year] = dataSet[year]
        }
        return relevantData;
    };

    return(
        <>
            <div className="sectionContainer">
                <div className="sectionPadding">
                    <DropDown
                        labelName="Country"
                        items={countryList}
                        value={country}
                        setValue={(newValue) => setCountry(newValue)}
                    />
                    <DropDown
                        labelName="Start Year"
                        items={Object.keys(historicalDataSet)}
                        value={startYear}
                        setValue={(newValue) => setStartYear(newValue)}
                    />
                    <DropDown
                        labelName="End Year"
                        items={Object.keys(historicalDataSet)}
                        value={endYear}
                        setValue={(newValue) => setEndYear(newValue)}
                    />
                    <div>
                        <Button style={{marginTop: 20}} color={"secondary"} size={'small'} onClick={() => {setHistoricalDataModalOpen(true)}}>
                            <span style={{fontSize: 16}}>Show This Historical Data</span>
                        </Button>
                    </div>
                    <Button variant="contained" size={'large'} onClick={() => sendRequest(yearValuePairPayload)}>Get Results</Button>
                </div>
            </div>
            {historicalDataModalOpen ? (
                <HistoricalDataModal open={historicalDataModalOpen} closeCall={() => {setHistoricalDataModalOpen(false)}} countryCode={country} yearInterestPairData={historicalDataSet}/>
            ):(
                <></>
            )}
    </>
    );
}

export default HistoricalSection
