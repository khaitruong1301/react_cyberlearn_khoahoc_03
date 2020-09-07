import React, { Fragment } from 'react'
import {useSpring, animated} from 'react-spring'


export default function XucXac(props) {

    let { xucXacItem } = props;

    const [propsDice,set] = useSpring(()=> ( {
        to: {
            xyz:[1800,1800,1800]
        },
        from : {
            xyz:[0,0,0]
        },
        config:{
            duration:1000
        },
        reset:true
    }))
    
    set({xyz:[1800,1800,1800]})

    return (
        <Fragment>
              <div className="scene ml-5">
                    <animated.div  className="cube" style={{
                        transform: propsDice.xyz.interpolate((x,y,z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
                    }} >
                        <div className="cube__face front">
                            <img src={xucXacItem.hinhAnh} style={{ width: '100%' }} />
                        </div>
                        <div className="cube__face back">
                            <img src='./img/BaiTapGameBauCua/cua.png' style={{ width: '100%' }} />
                        </div>
                        <div className="cube__face right">
                            <img src='./img/BaiTapGameBauCua/tom.png' style={{ width: '100%' }} />

                        </div>
                        <div className="cube__face left">
                            <img src='./img/BaiTapGameBauCua/ca.png' style={{ width: '100%' }} />

                        </div>
                        <div className="cube__face top">
                            <img src='./img/BaiTapGameBauCua/ga.png' style={{ width: '100%' }} />

                        </div>
                        <div className="cube__face bottom">
                            <img src='./img/BaiTapGameBauCua/nai.png' style={{ width: '100%' }} />

                        </div>
                    </animated.div>

                </div>
        </Fragment>
    )
}
