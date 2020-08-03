import React, { Component } from 'react'
import { Button,SmallButton } from '../Components/Button'
import { StyledLink, Link } from '../Components/Link'
import {TextField} from '../Components/TextField'




export default class DemoJSS extends Component {


    render() {
        return (
            <div>
               <Button className="button_style"  bgPrimary fontSize2x>Hello khải</Button> 
               <SmallButton>hello khải</SmallButton>
               <StyledLink id="abc" name="abc123">ahi hi </StyledLink>
               <TextField inputColor="purple"/>
            </div>
        )
    }
}
