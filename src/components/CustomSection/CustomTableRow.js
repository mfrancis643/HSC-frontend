import React from "react";
import {TableCell, TableRow} from "@mui/material";
import{Button} from "@mui/material";
import "./styles.css"
import DeleteIcon from '@mui/icons-material/Delete';


const CustomTableRow = ({year, interestRate, deleteRow, addFunction, showCopy}) => {

    return(
            <TableRow className="customTableRow">
                <TableCell classes="customTableRow">{year}</TableCell>
                <TableCell className="customTableRow">{interestRate}</TableCell>
                <TableCell>
                    <Button variant="contained" color="secondary" onClick={() => {deleteRow(year)}}><DeleteIcon/></Button>
                    {
                        // showCopy &&
                        //     <Button style={{marginLeft:"10px"}} variant="contained" color="primary" onClick={() => {addFunction(interestRate)}}>Copy</Button>

                    }

                </TableCell>
            </TableRow>
    );
}

export default CustomTableRow
