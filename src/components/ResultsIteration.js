import React from "react";
import {TableCell, TableRow} from "@material-ui/core";

const Iteration = ({year, initialBalance, interestRate, annualInterest, newBankBalance}) => {

    return(
        <TableRow>
            <TableCell>{year}</TableCell>
            <TableCell>{parseFloat(initialBalance).toFixed(2)}</TableCell>
            <TableCell>{parseFloat(interestRate).toFixed(2)}</TableCell>
            <TableCell>{parseFloat(annualInterest).toFixed(2)}</TableCell>
            <TableCell>{parseFloat(newBankBalance).toFixed(2)}</TableCell>
        </TableRow>
    );
};
export default  Iteration;