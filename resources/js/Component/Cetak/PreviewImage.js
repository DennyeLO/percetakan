import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Axios from 'axios';

const PreviewImage = () => {
    const refresh = useSelector(state => state.refresh);
    const [data,setData] = useState([]);

    useEffect(() => {        
        Axios.get('/api/print/temp_design')
        .then((res) => {
            setData(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
        return () => {
            
        }
    }, [refresh]);

    const viewData = data.length > 0 ? data.map((list,index) => {
        var px = 37.79527559055;
        console.log(list)
        if(list.type == "text"){
            return (
                <div style={{
                    textAlign: `${list.text_align}`,
                    fontWeight: `${list.font_weight}`,
                    fontSize: `${list.font_size}px`,
                    width: `${list.texts_width * px}px`,
                    height: `${list.texts_height * px}px`,
                    borderTop: list.border_top ? `1px solid black` : null,
                    borderBottom: list.border_bottom ? `1px solid black` : null,
                    borderLeft: list.border_left ? `1px solid black` : null,
                    borderRight: list.border_right ? `1px solid black` : null,
                    paddingTop: `${list.padding_top * px}px`
                }}>
                    {list.contents}
                </div>
            )
        }else{
            return (
                <div style={{
                    position: `${list.position}`
                }}>
                    <img src={list.contents} style={{ width: `${list.images_width * px}px`, height: `${list.height_height * px}px` }}/>
                </div>
            )
        }
    }):null;

    return (
        <div className="container-fluid py-5 w-50 mx-auto px-0">
            <div className="position-relative">
                {viewData}
            </div>
        </div>
    )
}

export default PreviewImage
