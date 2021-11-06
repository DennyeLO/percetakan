import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add_error, delete_error, get_error, update_error } from '../../Utils/Notification';

const Form = (props) => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        code_voucher: '',
        code_client: ''
    });

    const [detail, setDetail] = useState(false);
    useEffect(() => {
        if(props.match.params.id){
            setDetail(true);

            Axios.get(`/api/voucher/detail/${props.match.params.id}`)
            .then((res) => {
                setData(res.data.data);
            })
            .catch(() => {
                get_error();
            })
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(detail){
            Axios.put(`/api/voucher/update/${props.match.params.id}`, data)
            .then(() => {
                dispatch({type: 'update_data_success', updateDataSuccess: true});
                props.history.goBack();
            })
            .catch((err) => {
                update_error();
            });
        }else{
            Axios.post("/api/voucher/store", data)
            .then(() => {
                dispatch({type: 'add_data_success', addDataSuccess: true});
                props.history.goBack();
            })
            .catch((err) => {
                add_error();
            });
        }
    }

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleDelete = () => {
        Axios.delete(`/api/voucher/delete/${props.match.params.id}`)
        .then(() => {
            dispatch({type: 'delete_data_success', deleteDataSuccess: true});
            props.history.goBack();
        })
        .catch((err) => {
            delete_error();
        });
    }

    return (
        <div className="card">
            <div className="card-header d-flex">
                <span className="mr-auto mt-2 font-weight-bold">{ detail ? 'Form Detail Pelanggan' : 'Form Tambah ♥' }</span>
                { detail ? <button className="btn btn-danger" onClick={handleDelete}>Hapus</button> : null }
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="code_voucher">Kode Voucher</label>
                        <input type="text" value={data.kode_voucher} className="form-control" id="code_voucher" name="code_voucher" placeholder="Kode Voucher" onChange = {handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label for="code_client">Kode Client</label>
                        <input type="text" value={data.kode_client} className="form-control" id="code_client" name="code_client" placeholder="Kode Client" onChange = {handleChange} required/>
                    </div>
                    {
                        detail ?
                        <button type="submit" className="btn btn-info">Update</button> :
                        <button type="submit" className="btn btn-success">Tambah</button>
                    }             
                </form>
            </div>
        </div>
    )
}

export default Form
