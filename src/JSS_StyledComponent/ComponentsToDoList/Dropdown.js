import styled from 'styled-components';


export const Dropdown = styled.select`
    width: 100%;
    height: 50px;
    font-size: 100%;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background-color: ${props=>props.theme.bgColor};
    border: 2px solid ${props => props.theme.color};
    color: ${props => props.theme.color};
    padding: 10px;
    padding-right: 38px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    /* Adding transition effect */
    transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;
    &:hover {
        color: ${props => props.theme.hoverTextColor};
        background-color: ${props=>props.theme.hoverBgColor};
        border-bottom-color: #DCDCDC;
    }
`