import React, {useEffect} from 'react'
import DataTable from "../../Utils/DataTable";
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { add_success, update_success, delete_success } from '../../Utils/Notification';

const Index = (props) => {
    const statusAddData = useSelector(state => state.addDataSuccess);
    const statusUpdateData = useSelector(state => state.updateDataSuccess);
    const statusDeleteData = useSelector(state => state.deleteDataSuccess);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(statusAddData){
            dispatch({type: 'add_data_success', addDataSuccess: false});
            add_success();
        }else if(statusUpdateData){
            dispatch({type: 'update_data_success', updateDataSuccess: false});
            update_success();
        }else if(statusDeleteData){
            dispatch({type: 'delete_data_success', deleteDataSuccess: false});
            delete_success();
        }
    }, []);

    return (
        <div className="card">
            <div className="card-header d-flex">
                <span className="mr-auto mt-2 font-weight-bold">Index Voucher</span>
                <Link className="btn btn-success" to="/master/voucher/add">Tambah</Link>
            </div>
            <div className="card-body">
                <DataTable
                    fetchUrl="/api/voucher"
                    columns={["kode_voucher", "kode_client"]}
                    history={props.history}
                    linkDetail="/master/voucher/detail"
                    linkPagination="/master/voucher/page"
                ></DataTable>
            </div>
        </div>
    )
}

export default Index
