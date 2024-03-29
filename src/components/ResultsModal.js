import {IconButton, Table, TableBody, TableRow} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import Iteration from "./ResultsIteration";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Graph from "./Graph/Graph";

const ResultsModal = ({open, closeCall, content}) => {
    let bankBankBalance = content.initialBankBalance;
    let finalBankBalance = content.finalBankBalance;
    let iterations = content.iterations;

    let labels = iterations.map((iter) => {
        return iter.year
    })

    let dataSet = iterations.map((iter) => {
        return iter.newBankBalance
    })

    console.log('iterations')
    console.log(iterations)
    return(

        <Dialog
            fullWidth={true}
            maxWidth={"lg"}
            open={open}
            onClose={closeCall}
        >
            <DialogTitle id="max-width-dialog-title">
                <DialogActions>
                    <h2 style={{width:"100%"}}>Result: {parseFloat(finalBankBalance).toFixed(2)}</h2>
                    <IconButton
                        onClick={() => {closeCall()}}>
                        <CloseIcon/>
                    </IconButton>
                </DialogActions>

            </DialogTitle>
            <DialogContent>
                <Graph labels={labels} dataset={dataSet}/>
                <p>Starting Bank Balance: {bankBankBalance}</p>

                <Table>
                    <TableBody>
                        <TableRow>
                            <th>Year</th>
                            <th>Start Balance</th>
                            <th>Interest Rate</th>
                            <th>Annual Interest</th>
                            <th>End Balance</th>
                        </TableRow>

                    {
                        iterations.map((iteration, index) => {
                            return(
                                <Iteration
                                    key ={index}
                                    year = {iteration.year}
                                    initialBalance={iteration.initialBalance}
                                    interestRate={iteration.interestRate}
                                    annualInterest={iteration.annualInterest}
                                    newBankBalance={iteration.newBankBalance}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </DialogContent>
        </Dialog>
    );
};
export default  ResultsModal;
