import {Modal, Card, CardContent, CardActions, Button, CardHeader, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Iteration from "./Iteration";
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
                    <IconButton
                        onClick={() => {closeCall()}}
                        aria-label="settings">
                        <CloseIcon/>
                    </IconButton>
                </DialogActions>
                Your Result: {finalBankBalance}
            </DialogTitle>
            <DialogContent>
                    Starting Bank Balance: {bankBankBalance}

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

            </DialogContent>
        </Dialog>
    );
};
export default  ResultsModal;