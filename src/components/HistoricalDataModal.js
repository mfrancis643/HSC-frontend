import {AccordionDetails, IconButton, Table, TableBody, TableCell, TableRow} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const HistoricalDataModal = ({open, closeCall, countryCode, yearInterestPairData}) => {

    return(

        <Dialog
            fullWidth={true}
            open={open}
            onClose={closeCall}

        >
            <DialogTitle id="max-width-dialog-title">
                <DialogActions>
                    <h2 style={{width:"100%"}}>Historical Data: {countryCode}</h2>
                    <IconButton
                        onClick={() => {closeCall()}}
                    >
                        <CloseIcon/>
                    </IconButton>
                </DialogActions>

            </DialogTitle>
            <DialogContent>

                <Table>
                    <TableBody>
                        <TableRow>
                            <th>Year</th>
                            <th>Interest Rate</th>
                        </TableRow>
                    {
                        Object.keys(yearInterestPairData).map((key) => {
                            return(<TableRow key={key}><TableCell>{key}</TableCell><TableCell>{yearInterestPairData[key]}</TableCell></TableRow>)
                    })
                    }
                    <tr>
                    </tr>
                    </TableBody>
                </Table>
            </DialogContent>
        </Dialog>
    );
};
export default  HistoricalDataModal;