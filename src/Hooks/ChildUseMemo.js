import React, { memo } from 'react'

 function ChildUseMemo(props) {
    console.log('cart')
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
)}
export default memo(ChildUseMemo)