import React from "react";
import {TableCell, TableRow} from "@mui/material";
import{Button} from "@mui/material";

const CustomTableRow = ({year, interestRate, deleteRow, addFunction, showCopy}) => {

    return(
            <TableRow>
                <TableCell>{year}</TableCell>
                <TableCell>{interestRate}</TableCell>
                <TableCell>
                    <Button variant="contained" color="secondary" onClick={() => {deleteRow(year)}}>Delete</Button>
                    {
                        showCopy === true ? (
                            <Button style={{marginLeft:"10px"}} variant="contained" color="primary" onClick={() => {addFunction(interestRate)}}>Copy</Button>
                        ):(
                            <></>
                        )
                    }

                </TableCell>
            </TableRow>
    );
}

export default CustomTableRow
