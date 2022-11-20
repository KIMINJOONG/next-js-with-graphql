
import { TextField, TextFieldProps, BaseTextFieldProps } from '@mui/material';
import styled from 'styled-components';
import { color } from 'styles/theme';

interface ITextFieldProps extends BaseTextFieldProps {

}

export const CustomTextFiled = styled(TextField) <ITextFieldProps>`
    .MuiInputBase-root {
        border-radius: 0;
        .MuiOutlinedInput-notchedOutline {
            border-color: ${color.N10};
        }
        
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${color.brand};
    }
    & ::placeholder {
        font-size: 15px;
        font-weight: 500;
        color: ${color.N15};
    }
`;