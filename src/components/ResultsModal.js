import {Modal, Card, CardContent, CardActions, Button, CardHeader, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Iteration from "./Iteration";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles({

})

const ResultsModal = ({open, closeCall, content}) => {
    console.log(content.initialBankBalance)
    console.log(open)
    let bankBankBalance = content.initialBankBalance;
    let iterations = content.iterations;
    console.log("iterations")
    console.log(iterations)
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
                Your Results
            </DialogTitle>
            <DialogContent>
                    {bankBankBalance}

                    {
                        iterations.map((iteration, index) => {
                            console.log(iteration)
                            console.log("iteration")
                            return(
                                <Iteration
                                    key ={index}
                                    interestRate={iteration.interestRate}
                                    annualInterest={iteration.annualInterest}
                                    newBankBalance={iteration.newBankBalance}
                                />
                            )
                        })}

            </DialogContent>
        </Dialog>
    );
}
export default  ResultsModal;