import React, {useEffect, useState} from "react";
import {TableCell, TableRow} from "@material-ui/core";
import{Button} from "@material-ui/core";

const CustomTableRow = ({year, interestRate, deleteRow}) => {

    return(
            <TableRow>
                <TableCell>{year}</TableCell>
                <TableCell>{interestRate}</TableCell>
                <TableCell><Button variant="contained" color="secondary" onClick={() => {deleteRow(year)}}>Delete</Button></TableCell>
            </TableRow>
    );
}

export default CustomTableRow