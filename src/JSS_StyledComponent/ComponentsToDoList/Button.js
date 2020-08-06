import styled from 'styled-components'
//----------------button-------------------
export const Button = styled.button`
    apperance:none;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    border: ${props => props.theme.borderButton};
    padding: .25em .5em;
    transition: all .5s;
    font-size:17px;
    &:hover {
        color: ${props => props.theme.hoverTextColor};
        background-color:${props => props.bgColor};
        border: ${props => props.theme.borderButton};
    };
`;






