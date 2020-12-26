import {IconButton, Table, TableBody, TableRow} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import React from "react";
import Iteration from "./ResultsIteration";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const ResultsModal = ({open, closeCall, content}) => {
    let bankBankBalance = content.initialBankBalance;
    let finalBankBalance = content.finalBankBalance;
    let iterations = content.iterations;
    return(

        <Dialog
            fullWidth={true}
            open={open}
            onClose={closeCall}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle id="max-width-dialog-title">
                <DialogActions>
                    <h2 style={{width:"100%"}}>Result: {parseFloat(finalBankBalance).toFixed(2)}</h2>
                    <IconButton
                        onClick={() => {closeCall()}}
                        aria-label="settings">
                        <CloseIcon/>
                    </IconButton>
                </DialogActions>

            </DialogTitle>
            <DialogContent>
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