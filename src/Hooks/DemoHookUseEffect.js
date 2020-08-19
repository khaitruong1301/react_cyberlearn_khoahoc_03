import React, { useState, useEffect } from 'react'
import ChildUseEffect from './ChildUseEffect';

export default function DemoHookUseEffect(props) {

    let [number, setNumber] = useState(1);

    let [like, setLike] = useState(1);
    console.log(like);
    //useEffect là hàm chạy sau khi giao diện render thay cho didupdate và didmount trong mọi trường hợp
    // useEffect(()=>{
    //     console.log('didmount');
    //     console.log('didupdate');
    // })

    //Cách viết thay thế cho componentdidmount
    useEffect(()=>{
        console.log('didmount');
      
    },[])


    //Cách viết thay thế componentdidupdate
    useEffect(()=>{
        console.log('didupdate khi number thay đổi');
        return () => {
            console.log('willunmount!')
        }
    },[number]) // number là giá trị nếu bị thay đổi sau render thì useEffect này sẽ chạy


    console.log('render');

    const handleIncrease = () => {
        let newNumber = number + 1;
        setNumber(newNumber);
    }

    return (
        <div className="m-5">
            <button onClick={()=>{
                setLike(like+1);
            }}> Like</button>
            <div className="card text-left" style={{ width: 200, height: 300 }}>
                <img style={{ width: 200, height: 200 }} className="card-img-top" src="https://storage.oxii.vn/Cache/Sites/OXII/Storage/Images/2019/2/26/1920/ke-ni-nang-hotgirl-lanh-lung-khong-bao-gio-nhoen-mieng-cuoi-anh-2_957_651_82.jpg" alt="123" />
                <div className="card-body">
                    <h4 className="card-title text-danger">{number}♥</h4>
                </div>
            </div>
            <button className="btn btn-success" onClick={handleIncrease}>+</button>


            {/* {like ===1? <ChildUseEffect /> : ''} */}
        </div>
    )
}
