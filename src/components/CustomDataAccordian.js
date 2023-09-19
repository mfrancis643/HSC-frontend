import React, {useEffect, useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TextField
} from "@mui/material";
import CustomTableRow from "./CustomSection/CustomTableRow";

const CustomDataAccordion = ({setYearValuePairPayload}) => {
    const [yearValuePairPayload, setYearValuePairPayload ] = useState({})
    const [customData, setCustomData] = useState({})
    const [newYear, setNewYear] = useState("1");
    const [newInterestRate, setNewInterestRate] = useState("0")
    const [isFirstRow, setIsFirstRow] = useState(true)
    const [years, setYears] = useState(Object.keys(customData))

    const numTextBoxValidation = (parVal) => {
        return parVal === "" || parVal < 0
    }

    const addRow = (interestRate) => {

        let previousData = {...customData}
        previousData[parseInt(newYear)] = parseFloat(interestRate)
        setCustomData(previousData)

        setIsFirstRow(false);
        setNewYear(parseInt(newYear) + 1)
        setNewInterestRate(interestRate)

    }

    const getLatestYear = () => {
        let years = Object.keys(customData);
        return parseInt(years[years.length -1]);
    }

    const deleteRow = (key) => {
        let revisedCustomData = {...customData}
        delete revisedCustomData[key];
        let latestYear = getLatestYear()

        for (let x = key; x < latestYear; x++){
            let nextIndex = parseInt(x) + 1;
            revisedCustomData[x] = revisedCustomData[nextIndex]
        }
        delete revisedCustomData[latestYear]
        setCustomData(revisedCustomData);
        setNewYear(getLatestYear())
    }


    useEffect(() => {
        setYears(Object.keys(customData))
        setYearValuePairPayload(customData)
    },[customData])

    useEffect(() => {
        years.length === 0? setIsFirstRow(true): setIsFirstRow(false)
    }, [years])

    return(
        <Accordion
            expanded={expanded}
            disabled={disabled}
        >
            <AccordionSummary>Custom Data</AccordionSummary>
            <AccordionDetails>
                <Table>
                    <TableBody>
                        <TableRow>
                            <th>Year</th>
                            <th>Interest Rate</th>
                            <th>Actions</th>
                        </TableRow>
                        {
                            years.map((year, index) => {
                                return (<CustomTableRow
                                    year={year}
                                    interestRate={customData[year]}
                                    key={index}
                                    deleteRow={() => deleteRow(year)}
                                    addFunction={addRow}
                                    showCopy={(year == getLatestYear())}
                                />)
                            })
                        }
                        <TableRow>
                            <TableCell><TextField error={numTextBoxValidation(newYear)} helperText={numTextBoxValidation(newYear)? "Enter Valid Number": ""} type="number" disabled={!isFirstRow} label="Year" value={newYear} onChange={(e) => {setNewYear(e.target.value)}}/></TableCell>
                            <TableCell><TextField error={numTextBoxValidation(newInterestRate)} helperText={numTextBoxValidation(newInterestRate)? "Enter Valid Number": ""} type="number" label="Interest Rate" variant="outlined" value={newInterestRate} onChange={(e) => {setNewInterestRate(parseFloat(e.target.value))}}/></TableCell>
                            <TableCell><Button disabled={numTextBoxValidation(newYear)||numTextBoxValidation(newInterestRate)} variant="contained" color="primary" onClick={() => {addRow(newInterestRate)}}>Add</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </AccordionDetails>
        </Accordion>
    );
};
export default  CustomDataAccordion;
