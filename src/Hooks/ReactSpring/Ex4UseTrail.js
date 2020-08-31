import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring';


const items = [
    { title: 'FrontEndOnline', content: 'cyberlearn' },
    { title: 'FrontEndOffline', content: 'cybersoft' },
    { title: 'FrontEndTuXa', content: 'cybersoft' }
]

export default function Ex4UseTrail(props) {

    let [status, setStatus] = useState(true);


    const [propsUseTrail,set,stop] = useTrail(items.length, () => {
        return {
            opacity: status ? 1 : 0,
            x: status ? 0 : 20,
            height: status ? 80 : 0,
            color: 'red',
            from: { opacity: 0, x: 20, height: 0, color: 'green' },
            config: { duration: 1000 }
        }
    })

    console.log(123)
    set({
        opacity: status ? 1 : 0,
        x: status ? 0 : 20,
        height: status ? 80 : 0,
        color: 'red',
        from: { opacity: 0, x: 20, height: 0, color: 'green' },
        config: { duration: 1000 }
    })
    
    stop()

    return (
        <div>
            <button onClick={() => {
                setStatus(!status)
             
            }}>
                setStatus
            </button>

            <button onClick={() => {
                console.log(propsUseTrail);
                set({ color: 'pink' })
            }}>
                setColor
            </button>


            {propsUseTrail.map((propsUseSprings, index) => {
                return <animated.h1
                    key={index}
                    style={propsUseSprings}
                >
                    {items[index].title}
                </animated.h1>
            })}


        </div>
    )
}
