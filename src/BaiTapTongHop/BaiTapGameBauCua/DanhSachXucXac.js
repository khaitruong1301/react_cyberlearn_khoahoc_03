import React from 'react'
import { head } from 'lodash'

export default function DanhSachXucXac() {
    return (
        <div className="mt-5 ml-5" >
            <div className="bg-white" style={{ width: 300, height: 300, borderRadius: 150 }}>
                <div className="row">
                    <div className="col-12 text-center" style={{ marginTop: '75px' }}>
                        <img style={{ width: 50 }} src="./img/BaiTapGameBauCua/Bau.png" />
                    </div>
                    <div className="col-6 text-right mt-5">
                        <img className="mr-3" style={{ width: 50 }} src="./img/BaiTapGameBauCua/Bau.png" />
                    </div>
                    <div className="col-6 mt-5">
                        <img className="ml-3" style={{ width: 50 }} src="./img/BaiTapGameBauCua/Bau.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
