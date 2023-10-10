import {AccordionDetails, IconButton, Table, TableBody, TableCell, TableRow} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Graph from "./Graph/Graph";

const HistoricalDataModal = ({open, closeCall, countryCode, yearInterestPairData}) => {
    console.log('yearInterestPairData')
    console.log(yearInterestPairData)

    let labels = Object.keys(yearInterestPairData)
    let dataset = labels.map((label) => {
        return yearInterestPairData[label]
    })

    return(

        <Dialog
            fullWidth={true}
            maxWidth={"lg"}
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
                <Graph labels={labels} dataset={dataset} header='Interest Rate'/>
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
