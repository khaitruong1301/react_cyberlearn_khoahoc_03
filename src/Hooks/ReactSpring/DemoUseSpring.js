import React from 'react'

import {useSpring, animated} from 'react-spring'


export default function DemoUseSpring(props) {


    const propsAnim = useSpring({color_text: 'red', from: {color_text: 'green'},config:{duration:1000}})


    return <animated.div style={{
        color:propsAnim.color_text
    }}>I will fade in</animated.div>

}
