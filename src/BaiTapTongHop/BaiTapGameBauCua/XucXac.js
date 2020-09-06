import React, { Fragment } from 'react'

export default function XucXac(props) {

    let { xucXacItem } = props;

    return (
        <Fragment>
            <div className="scene">
                <div className="cube">
                    <img className="ml-3 cube__face front" style={{ width: 50 }} src={xucXacItem.hinhAnh} />
                    <img className="ml-3 cube__face back" style={{ width: 50 }} src="./img/BaiTapGameBauCua/bau.png" />
                    <img className="ml-3 cube__face left" style={{ width: 50 }} src="./img/BaiTapGameBauCua/ga.png" />
                    <img className="ml-3 cube__face right" style={{ width: 50 }} src="./img/BaiTapGameBauCua/ca.png" />
                    <img className="ml-3 cube__face front" style={{ width: 50 }} src="./img/BaiTapGameBauCua/tom.png"/>
                    <img className="ml-3 cube__face front" style={{ width: 50 }} src="./img/BaiTapGameBauCua/nai.png" />
                    <img className="ml-3 cube__face front" style={{ width: 50 }} src="./img/BaiTapGameBauCua/cua.png" />
                </div>
            </div>
        </Fragment>
    )
}
