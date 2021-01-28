import styled from 'styled-components';

export const InputContainer = styled.div`
    input {
        width: 100%;
        padding: 15px;
        font-size: 14px;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.contrastText};
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: ${({ theme }) => theme.borderRadius};
        outline: 0;
        text-transform: uppercase;
        margin-bottom: 25px;

        &::-webkit-input-placeholder {
            color: ${({ theme }) => theme.colors.contrastText};
            font-weight: bold;
        }

        &:-ms-input-placeholder {
            color: ${({ theme }) => theme.colors.contrastText};
            font-weight: bold;
        }

        &::placeholder {
            color: ${({ theme }) => theme.colors.contrastText};
            font-weight: bold;
        }
    }
`;
