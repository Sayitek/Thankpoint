import * as React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';


export const SimpleInput = React.forwardRef(function CustomInput(props, ref) {
  return <TextField slots={{ input: InputElement }} {...props} ref={ref}   fullWidth/>;
});

const InputElement = styled('TextField')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 10px;
  border-radius: 5px;
  color: black;
  background: #FAFAFA;
  border: 1px solid #EAEAEA;
  

  &:hover {
    border: 1px solid #EAEAEA;
  }

  &:focus {
    border: 1px solid #EAEAEA;
  }

  & .MuiInputBase-multiline: {
    padding: 0,
    border: 1px solid #EAEAEA;
  },

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);


