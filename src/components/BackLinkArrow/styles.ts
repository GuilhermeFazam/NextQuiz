import styled from 'styled-components';
import Link from '../Link';

export const StyledLink = styled(Link)`
    transition: 0.3s;
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-right: 10px;

    &:hover {
        opacity: 0.5;
    }
`;

export const SVG = styled.svg`
    vertical-align: middle;
`;
