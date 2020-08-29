import React from 'react'
import { useSpring, useSprings, animated } from 'react-spring'

export default function Ex3UseSprings() {

    let arrOpacity = [
        { opacity: 0.1, color: 'red', content: 'FullStack', num: 100 },
        { opacity: 0.3, color: 'green', content: 'BackEnd', num: 200 },
        { opacity: 0.5, color: 'blue', content: 'FrontEnd', num: 300 },
        { opacity: 0.7, color: 'orange', content: 'Cyberlearn', num: 400 },
        { opacity: 1, color: 'purple', content: 'Cybersoft', num: 500 }
    ];

    let propsAnimationUseSprings = useSprings(arrOpacity.length, arrOpacity.map(item => {
        return {
            opacity: item.opacity,
            color: item.color,
            content: item.content,
            num: item.num,
            from: {
                opacity: 0,
                color: 'black',
                content: item.content,
                num: 0
            },
            config: {
                duration: 3000
            }
        }
    }));

    let renderContent = (propsAnim) => {
        let resultAnimComponent = [];

        for (let key in propsAnim) {
            if (key === 'content' || key === 'num') {
                resultAnimComponent.push(
                    <animated.h1 style={propsAnim}>
                        {propsAnim[key]}
                    </animated.h1>
                )
            }
        }

        return resultAnimComponent;

    }

    return (
        <div>
            {propsAnimationUseSprings.map((propsAnim, index) => {
                return <div>
                    {renderContent(propsAnim)}
                </div>
            })}
        </div>
    )
}
