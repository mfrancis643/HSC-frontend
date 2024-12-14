import React from "react";
import {Button, Step, StepLabel, Stepper} from "@mui/material";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { HiMiniCog6Tooth } from "react-icons/hi2";
import { ImStatsDots } from "react-icons/im";
import { styled } from '@mui/system';
import Grid2 from "@mui/material/Unstable_Grid2";

const CircularBackground = styled('div')(({ bgColor }) => ({
    backgroundColor: bgColor,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40
}));

const CustomStepIcon = ({ active, completed, icon }) => {
    const bgColor = active || completed ? '#3f51b5' : '#e0e0e0';

    const icons = [
        <FaCircleDollarToSlot style={{ color: '#fff' }} />,
        <HiMiniCog6Tooth style={{ color: '#fff' }} />,
        <ImStatsDots style={{ color: '#fff' }} />
    ];

    return (
        <CircularBackground bgColor={bgColor}>
            {icons[icon - 1]}
        </CircularBackground>
    );
};

const CustomStepper = ({ steps, setCurrentStep, currentStep, children }) => {

    return (
        <>
        <br/>
    <br/>
    <br/>
        <div className="spacedText">
            <Stepper connector={<></>} activeStep={currentStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step style={{ transform: 'scale(1.5)' }} key={label}>
                        <StepLabel StepIconComponent={CustomStepIcon}>
                            <span style={{fontSize:"12px"}}>{label}</span>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <br/>

            <div>
                {children}
            </div>
            <br/>
            <Grid2 container style={{textAlign: 'center', position: 'relative', height: '100px' }} columns={10}>
                <Grid2 item style={{ position: 'absolute', left: 0 }}>
                    <Button   variant="outlined" onClick={() => setCurrentStep( currentStep - 1)}>
                        Previous
                    </Button>
                </Grid2>
                <Grid2 item style={{ width: "80%", margin: 'auto' }}>
                    {/* Your main content goes here */}
                </Grid2>
                <Grid2 item style={{ position: 'absolute', right: 0 }}>
                    <Button variant="contained" onClick={() => setCurrentStep( currentStep + 1)}>
                        Next
                    </Button>
                </Grid2>
            </Grid2>
        </div>
        </>
    );
};

export default CustomStepper;
