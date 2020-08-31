import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'



export default function Ex5UseTransition(props) {

    let [arrItem, setArrayItem] = useState([
        { id: 1, title: 'FrontEndOnline', content: 'cyberlearn' },
        { id: 2, title: 'FrontEndOffline', content: 'cybersoft' },
        { id: 3, title: 'FrontEndTuXa', content: 'cybersoft' }
    ]);

    const [article,setArticle] = useState({
        id:'',
        title:'',
        content: ''
    })

    const propsUseTransition = useTransition(arrItem, item => item.id, {
        from: { transform: 'translate3d(0,-40px,0)' }, //Component từ vị trí trước khi render
        enter: { transform: 'translate3d(0,0px,0)' }, //Component tại thời điểm render
        leave: { transform: 'translate3d(0,-40px,0)' }, 
        config: { duration:500}
    })

    let renderItem = () => {

        return propsUseTransition.map(({props,item,key}, index) => {
           return <animated.div style={props} key={index} className="bg-dark text-white p-3 mt-2">
                <div className="text-right">
                    <button className="btn btn-danger" onClick={()=>{
                        deleteItem(item.id)
                    }}>X</button>
                </div>
                <h1>{item.title}</h1>
                <p>
                    {item.content}
                </p>
            </animated.div>
        })


    }

    const deleteItem = (id) => {
        //set lại arrItem mới = bằng cách lấy những phần tử != id đó => giống như tìm index xóa và cập lại 
        setArrayItem([...arrItem.filter(item => item.id !== id)]);
    }

    console.log(article)
    const handleChange = (e)=>{
        let {value,name} = e.target;
        setArticle({
            ...article,
            [name]:value
        })
    }

    const handleSubmit = () => {
        let item = {...article,id:Date.now()};


        setArrayItem([...arrItem,item])
    }

    return (
        <div className="container">
            {renderItem()}
            <div className="form-group">
                <h3>Title</h3>
                <input className="form-control" name="title" onChange={handleChange} />
            </div>
            <div className="form-group">
                <h3>Content</h3>
                <input className="form-control" name="content" onChange={handleChange} />
            </div>
            <div className="form-group">
                <button onClick={handleSubmit}>Add article</button>
            </div>

        </div>
    )
}
