import React, { Component } from 'react'
import { Button,SmallButton } from '../Components/Button'





export default class DemoJSS extends Component {


    render() {
        return (
            <div>
               <Button className="button_style"  bgPrimary fontSize2x>Hello khải</Button> 
                <SmallButton>hello khải</SmallButton>
            </div>
        )
    }
}
