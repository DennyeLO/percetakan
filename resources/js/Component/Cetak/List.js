import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import $ from 'jquery';
import { add_error, add_success, delete_error, get_error, update_error } from '../Utils/Notification';
import noImage from '../../public/image/no_image.png'

const List = () => {
    const dispatch = useDispatch();
    const refresh = useSelector(state => state.refresh);
    const [result,setResult] = useState([]);
    const [tempDesignId, setTempDesignId] = useState('');
    const [foreignTempDesignId, setForeignTempDesignId] = useState('');

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

    const [dataBase64, setDataBase64] = useState({
        file: null,
        base64URL: ""
    });

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

    const [dataImage, setDataImage] = useState({
        position: '',
        top: '',
        bottom: '',
        left: '',
        right: '',
        width: '',
        height: '',
        padding_top: '',
        padding_bottom: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const tempDataText = {...dataText,...dataBorder};

        try{
            await Axios.put(`/api/print/temp_design/${tempDesignId}`, data);
            if(data.type == "text"){
                await Axios.put(`/api/print/temp_design_text/${foreignTempDesignId}`,tempDataText)
            }else{
                await Axios.put(`/api/print/temp_design_image/${foreignTempDesignId}`,dataImage)
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

    const handleChangeImage = (e) => {
        setDataImage({...dataImage, [e.target.name]: e.target.value});
    }

    const getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            baseURL = reader.result;
            resolve(baseURL);
          };
        });
    };

    const handleFileInputChange = e => {
        let { file } = dataBase64;
    
        file = e.target.files[0];
    
        getBase64(file)
          .then(result => {
            file["base64"] = result;
            setDataBase64({
                file,
                base64URL: result
            });
            setData({
                ...data,
                contents: result
            })
          })
          .catch(err => {
            console.log(err);
          });
    };


    const showModal = (list) => {
        setTempDesignId(list.id);
        setForeignTempDesignId(list.texts_id ? list.texts_id : list.images_id);

        setDataBase64({
            base64URL: list.contents
        });

        setData({
            type: list.type,
            title: list.title,
            contents: list.contents
        });
        setDataImage({
            position: list.position,
            top: list.top,
            bottom: list.bottom,
            left: list.left,
            right: list.right,
            width: list.images_width,
            height: list.images_height,
            padding_top: list.padding_top,
            padding_bottom: list.padding_bottom
        })
        setDataText({
            font_size: list.font_size,
            font_weight: list.font_weight,
            text_align: list.text_align,
            padding_top: list.padding_top,
            width: list.texts_width,
            height: list.texts_height
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
                                <select class="form-select" value={data.type} id="type" name="type" onChange = {handleChange}>
                                    <option value="text" selected>Tulisan</option>
                                    <option value="image">Gambar</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Judul</label>
                                <input type="text" value={data.title} id="title" name="title" className="form-control" onChange = {handleChange}/>
                            </div>

                            {
                                data.type == "text" ? 
                                <div className="form-group">
                                    <label>Isi</label>
                                    <input type="text" id="contents" value={data.contents} name="contents" className="form-control" onChange = {handleChange}/>
                                </div> : null
                            }

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
                                </>:
                                <>
                                <div className="text-center">
                                    <img src = {dataBase64.base64URL ? dataBase64.base64URL : noImage} style={{ width: '100%', height: '100%' }}/>
                                </div>
                                <div className="form-group">
                                    <label>Gambar</label>
                                    <input type="file" className="form-control" name="file" onChange={(e) => handleFileInputChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <label for="position">Posisi Bebas</label>
                                    <select class="form-select" id="position" name="position" onChange = {handleChangeImage}>
                                        <option selected value="">Tidak</option>
                                        <option value="absolute">Ya</option>
                                    </select>
                                </div>
                                {/* Position Absolute */}
                                {
                                    dataImage.position == "absolute" ? <>
                                        <div className="row">
                                            <h4>Posisi</h4>
                                            <div className="form-group col-3">
                                                <label for="top">Atas</label>
                                                <input type="number" className="form-control" id="top" name="top" onChange={handleChangeImage}/>
                                            </div>
                                            <div className="form-group col-3">
                                                <label for="bottom">Bawah</label>
                                                <input type="number" className="form-control" id="bottom" name="bottom" onChange={handleChangeImage}/>
                                            </div>
                                            <div className="form-group col-3">
                                                <label for="left">Kiri</label>
                                                <input type="number" className="form-control" id="left" name="left" onChange={handleChangeImage}/>
                                            </div>
                                            <div className="form-group col-3">
                                                <label for="right">Kanan</label>
                                                <input type="number" className="form-control" id="right" name="right" onChange={handleChangeImage}/>
                                            </div>
                                        </div>
                                    </> : null
                                }
                                <div className="form-group">
                                    <label>Panjang Gambar</label>
                                    <input type="number" id="width" value={dataImage.width} name="width" className="form-control" onChange = {handleChangeImage} required/>
                                </div>
                                <div className="form-group">
                                    <label>Tinggi Gambar</label>
                                    <input type="number" id="height" value={dataImage.height} name="height" className="form-control" onChange = {handleChangeImage} required/>
                                </div>
                                <div className="row">
                                    <h4>Padding</h4>
                                    <div className="form-group col-3">
                                        <label for="padding_top">Atas</label>
                                        <input type="number" className="form-control" id="padding_top" name="padding_top" onChange={handleChangeImage}/>
                                    </div>
                                    <div className="form-group col-3">
                                        <label for="padding_bottom">Bawah</label>
                                        <input type="number" className="form-control" id="padding_bottom" name="padding_bottom" onChange={handleChangeImage}/>
                                    </div>
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
