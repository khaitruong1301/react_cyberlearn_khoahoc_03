import React from 'react'

export default function QuanCuoc() {
    return (
        <div className="mt-3 ">
            <img src="./img/BaiTapGameBauCua/Bau.png" style={{ width: 250 }} />

            <div className="bg-success mt-2 pb-2 text-center" style={{borderRadius:'10px',width:250}}>
                <button className="btn btn-danger mr-3"><i className="fa fa-plus"></i></button>
                <span className="mt-2" style={{ color: 'yellow',fontSize:25 }}>100</span>
                <button  className="btn btn-danger ml-3">-</button>
            </div>
        </div>
    )
}
