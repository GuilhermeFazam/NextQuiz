import styled from 'styled-components';

export const WidgetImage = styled.img`
    width: 120px;
    margin: 0 auto;
    display: block;
`;

export const WidgetContainer = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: 4px;
    overflow: hidden;
    h1,
    h2,
    h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
    }
    h1 {
        text-align: center;
        display: block;
        width: 100%;
        span {
            display: block;
        }
    }
    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
    }
`;

export const WidgetHeader = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 32px;
    background-color: ${({ theme }) => theme.colors.primary};

    * {
        margin: 0;
    }
`;

export const WidgetContent = styled.div`
    padding: 24px 32px 32px 32px;
    & > *:first-child {
        margin-top: 0;
    }
    & > *:last-child {
        margin-bottom: 0;
    }
    ul {
        list-style: none;
        padding: 0;
    }
`;

export const WidgetTopic = styled.a`
    outline: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => `${theme.colors.primary}40`};
    padding: 10px 15px;
    margin-bottom: 8px;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: 0.3s;
    display: block;

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`;

export const FormAlternatives = styled.form`
    label {
        &[data-selected='true'] {
            background-color: ${({ theme }) => theme.colors.primary};

            &[data-status='SUCCESS'] {
                background-color: ${({ theme }) => theme.colors.success};
            }
            &[data-status='ERROR'] {
                background-color: ${({ theme }) => theme.colors.wrong};
            }
        }
        &:focus {
            opacity: 1;
        }
    }
    button {
        margin-top: 24px;
    }
`;
