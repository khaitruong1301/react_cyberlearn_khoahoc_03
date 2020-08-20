import React,{useState,useMemo} from 'react'
import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo(props) {
    let [like, setLike] = useState(1);
    
    const renderCart = () => {
        let cart = [
            { id: 1, name: 'iphone', price: 1000 },
            { id: 2, name: 'htc phone', price: 2000 },
            { id: 3, name: 'lg phone', price: 3000 }
        ];
        return cart;
    }
    const cartMemo = useMemo(renderCart, [like]);
    return (
        <div className="m-5">
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1);
            }}>♥</span>
            <br />
            <br />
            <ChildUseMemo cart={cartMemo} />
        </div>
    )

}
