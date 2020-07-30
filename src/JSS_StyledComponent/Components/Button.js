import styled from 'styled-components';


export const Button = styled.button`
            background:linear-gradient(red,blue);
            color:#fff;
            border:none;
            border-radius:0.5rem;
            font-weight:bold;   
            padding:1rem;
            opacity:1;
                &:hover{ 
                    opacity:0.7;
                    transition: all 1s;
                }
                &.button_style{
                    font-size:25px;
                }
`