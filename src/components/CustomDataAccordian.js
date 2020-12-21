import React, {useEffect, useState} from "react";
import {Button, Table, TableBody, TableCell, TableRow, TextField} from "@material-ui/core";
import CustomTableRow from "./CustomTableRow";

const CustomDataAccordion = () => {

    const [customData, setCustomData] = useState({})
    const [newYear, setNewYear] = useState(1);
    const [newInterestRate, setNewInterestRate] = useState("")
    const [isFirstRow, setIsFirstRow] = useState(true)

    let years = Object.keys(customData);

    const addRow = () => {

        let previousData = {...customData}
        previousData[newYear] = newInterestRate
        setCustomData(previousData)

        setIsFirstRow(false);
        setNewYear(parseInt(newYear) + 1)
        setNewInterestRate("")

    }

    const getLatestYear = () => {
        return parseInt(years[years.length -1]);
    }

    const deleteRow = (key) => {

        console.log('key to be deleted:')
        console.log(key)

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
        console.log("customData")
        console.log(customData)
    },[customData])

    return(
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
                    />)
                })
            }
            <TableRow>
                <TableCell><TextField disabled={!isFirstRow} value={newYear} onChange={(e) => {setNewYear(e.target.value)}}/></TableCell>
                <TableCell><TextField value={newInterestRate} onChange={(e) => {setNewInterestRate(e.target.value)}}/></TableCell>
                <TableCell><Button variant="contained" color="primary" onClick={() => {addRow()}}>Add</Button></TableCell>
            </TableRow>
            </TableBody>
        </Table>
    );
};
export default  CustomDataAccordion;