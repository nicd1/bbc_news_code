import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { FeedbackFormWrapper } from './index.jsx';

export function FeedbackForm(){

    // using UseState as a fake POST -> saving the data that would be otherwise post as a local variable.
    const [value, setValue] = useState();

    return(
        <FeedbackFormWrapper>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating 
                        name="article1Rating"
                        size="large"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>         
        </FeedbackFormWrapper>
    );
}