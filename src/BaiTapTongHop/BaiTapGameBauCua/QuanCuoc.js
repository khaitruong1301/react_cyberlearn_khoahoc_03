import React from 'react'
import { useDispatch } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import { set } from 'lodash';

export default function QuanCuoc(props) {

    const dispatch = useDispatch();


    const [propsUseSpringInCrease, setInCrease] = useSpring(() => {
        return {
            to: { scale: 1.25 },
            from: { scale: 1 },
            reset:true
        }
    })

    const [propsUseSpringDeCrease, setDeCrease] = useSpring(() => {
        return {
            to: { scale: 1.25 },
            from: { scale: 1 },
            reset: true
        }
    })


    const { quanCuoc } = props;


    return (
        <div className="mt-3 ">
            <img src={quanCuoc.hinhAnh} style={{ width: 250 }} />

            <div className="bg-success mt-2 pb-2 text-center" style={{ borderRadius: '10px', width: 250 }}>
                <animated.button style={{ transform: propsUseSpringInCrease.scale.interpolate(scale => `scale(${scale})`) }} onClick={() => {

                    setInCrease({ scale: 1 })
                    setInCrease({ scale: 1.25 })
                    

                    dispatch({
                        type: 'DAT_CUOC_BAU_CUA',
                        quanCuoc,
                        tangGiam: true
                    })
                }} className="btn btn-danger mr-3"><i className="fa fa-plus"></i></animated.button>


                <span className="mt-2" style={{ color: 'yellow', fontSize: 25 }}>{quanCuoc.diemCuoc}</span>


                <animated.button style={{ transform: propsUseSpringDeCrease.scale.interpolate(scale => `scale(${scale})`) }} onClick={() => {

                    setDeCrease({ scale: 1 })
                    setDeCrease({ scale: 1.25 })

                    dispatch({
                        type: 'DAT_CUOC_BAU_CUA',
                        quanCuoc,
                        tangGiam: false
                    })
                }} className="btn btn-danger ml-3">-</animated.button>
            </div>
        </div>
    )
}
