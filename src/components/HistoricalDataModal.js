import {IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const HistoricalDataModal = ({open, closeCall, countryCode, yearInterestPairData}) => {
    console.log("yearInterestPair");
    console.log(yearInterestPairData);
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

            </DialogTitle>
            <DialogContent>
                Historical Data: {countryCode}
                <table>
                    <tbody>
                    <tr>
                        <th>Year</th>
                        <th>Interest Rate</th>
                    </tr>
                    {
                        Object.keys(yearInterestPairData).map((key) => {
                            return(<tr key={key}><td><p>{key}</p></td><td><p key={key}>{yearInterestPairData[key]}</p></td></tr>)
                    })
                    }
                    <tr>
                    </tr>
                    </tbody>
                </table>
            </DialogContent>
        </Dialog>
    );
};
export default  HistoricalDataModal;