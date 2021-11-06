import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import $ from 'jquery';
import { list } from 'postcss';

const List = () => {
    const dispatch = useDispatch();
    const refresh = useSelector(state => state.refresh);
    const [result,setResult] = useState([]);
    const [id, setId] = useState('');

    useEffect(() => {        
        Axios.get('/api/print/temp_design')
        .then((res) => {
            setResult(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
        return () => {
            
        }
    }, [refresh]);

    const [dataBorder, setDataBorder] = useState({
        border_top: false,
        border_bottom: false,
        border_left: false,
        border_right: false
    });

    const [data, setData] = useState({
        type: 'text',
        title: '',
        contents: ''
    });

    const [dataText, setDataText] = useState({
        font_size: '12',
        font_weight: '',
        font_style: '',
        text_align: 'text-left',
        padding_top: '',
        width: '',
        height: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tempDataText = {...dataText,...dataBorder};

        try{
            await Axios.put(`/api/print/temp_design/${id}`, data);
            if(data.type == "text"){
                await Axios.put(`/api/print/temp_design_text/${id}`,tempDataText)
            }else{
                await Axios.put(`/api/print/temp_design_image/${id}`,tempDataText)
            }
            $("#edit").modal("hide");
            dispatch({type: 'refresh', refresh: !refresh});
            add_success();
        }catch(err){
            add_error();
        }
    }
    
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleChangeText = (e) => {
        setDataText({...dataText, [e.target.name]: e.target.value});
    }

    const handleChangeBorder = (e) => {
        setDataBorder({...dataBorder, [e.target.name]: e.target.checked});
    }

    const showModal = (list) => {
        setId(list.id);
        setData({
            type: list.type,
            title: list.title,
            contents: list.contents
        });
        setDataText({
            font_size: list.font_size,
            font_weight: list.font_weight,
            text_align: list.text_align,
            padding_top: list.padding_top,
            width: list.width,
            height: list.height
        });
        setDataBorder({
            border_top: list.border_top,
            border_bottom: list.border_bottom,
            border_left: list.border_left,
            border_right: list.border_right
        })
        $("#edit").modal("show");
    }

    const viewData = result.length > 0 ? result.map((list,index) => {
        return (
            <div className="border rounded my-1 px-1" style={{cursor:'pointer'}} onClick={() => showModal(list)}>
                <p>{list.title}</p>
            </div>
        )
    }) : null;

    return (
        <div>
            {/* Tambah */}
            <form class="modal fade" id="edit" tabindex="-1" aria-labelledby="edit" aria-hidden="true" onSubmit={handleSubmit}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="form-group">
                                <label for="type">Jenis</label>
                                <select class="form-select" id="type" name="type" onChange = {handleChange}>
                                    <option value="text" selected>Tulisan</option>
                                    <option value="image">Gambar</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Judul</label>
                                <input type="text" value={data.title} id="title" name="title" className="form-control" onChange = {handleChange}/>
                            </div>

                            <div className="form-group">
                                <label>Isi</label>
                                <input type="text" value={data.contents} id="contents" name="contents" className="form-control" onChange = {handleChange}/>
                            </div>

                            {
                                data.type == "text" ? 
                                <>
                                    <div className="form-group">
                                        <label for="font_size">Ukuran Tulisan</label>
                                        <input type="number" id="font_size" name="font_size" className="form-control" value={dataText.font_size} onChange = {handleChangeText}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="font_weight">Tulisan Tebal</label>
                                        <select class="form-select" value={dataText.font_weight} id="font_weight" name="font_weight" onChange = {handleChangeText}>
                                            <option selected value="">Tidak</option>
                                            <option value="bold">Ya</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="font_style">Tulisan Miring</label>
                                        <select class="form-select" value={dataText.font_style} id="font_style" name="font_style" onChange = {handleChangeText}>
                                            <option selected value="">Tidak</option>
                                            <option value="italic">Ya</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="text_align">Peletakan Tulisan</label>
                                        <select class="form-select" value={dataText.text_align} id="text_align" name="text_align" onChange = {handleChangeText}>
                                            <option selected value="left">Kiri</option>
                                            <option value="center">Tengah</option>
                                            <option value="right">Kanan</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Panjang Container</label>
                                        <input type="number" id="width" value={dataText.width} name="width" className="form-control" onChange = {handleChangeText} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Tinggi Container</label>
                                        <input type="number" id="height" value={dataText.height} name="height" className="form-control" onChange = {handleChangeText} required/>
                                    </div>
                                    <div class="form-check row mb-2">
                                        <h4 className="col-12 border-bottom px-0 pb-2">Garis Pembatas</h4>
                                        <label class="col-3 border-bottom pb-2" for="border_top">
                                            <input className="mx-2" checked={dataBorder.border_top}  type="checkbox" id="border_top" name="border_top" onChange={handleChangeBorder}/>
                                            Atas
                                        </label>
                                        
                                        <label class="col-3 border-bottom pb-2" for="border_bottom">
                                            <input className="mx-2" checked={dataBorder.border_bottom} type="checkbox" id="border_bottom" name="border_bottom" onChange={handleChangeBorder}/>
                                            Bawah
                                        </label>

                                        <label class="col-3 border-bottom pb-2" for="border_left">
                                            <input className="mx-2" checked={dataBorder.border_left} type="checkbox" id="border_left" name="border_left" onChange={handleChangeBorder}/>
                                            Kiri
                                        </label>

                                        <label class="col-3 border-bottom pb-2" for="border_right">
                                            <input className="mx-2" checked={dataBorder.border_right} type="checkbox" id="border_right" name="border_right" onChange={handleChangeBorder}/>
                                            Kanan
                                        </label>
                                    </div>
                                    <div className="row">
                                        <h4>Padding</h4>
                                        <div className="form-group col-6">
                                            <label for="padding_top">Atas</label>
                                            <input type="number" value={dataText.padding_top} className="form-control" id="padding_top" name="padding_top" onChange={handleChangeText}/>
                                        </div>
                                    </div>
                                </>:<>
                                
                                    <div className="form-group">
                                        <label>Gambar</label>
                                        <input type="file" className="form-control"/>
                                    </div>
                                </>
                            }
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-outline-info">Update</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Batal</button>
                        </div>
                    </div>
                </div>
            </form>
            {viewData}
        </div>
    )
}

export default List
