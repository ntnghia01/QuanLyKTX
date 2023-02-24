import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function AreaEdit() {

    const {area_id} = useParams();

    console.log(area_id);

    const [area_name, setAreaName] = useState('');
    const [area_desc, setAreaDesc] = useState('');
    const [area, setArea] = useState([]);
    useEffect(() => {
        {
            axios.get(`../api/get-only-area/${area_id}`).then(
                res => {
                    setAreaName(res.data.area_name)
                    setAreaDesc(res.data.area_desc)
                }
            )
        }
        {
            axios.get('../api/get-area').then(
                res => {
                    setArea(res.data)
                }
            )
        }

    }, [])

    const submit = (e) => {
        e.preventDefault()
        axios.put(`../api/update-area/${area_id}`, { area_name, area_desc }).then(
            res => {
                // res.data;
                console.log(res)
            }
        )
    }
    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Cập Nhật Khu ID:{area_id}</h1>
            </div>
            <div className="row">
                {/* <!-- Area Chart --> */}
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Dãy Muốn Thêm Vào Form Sau</h6>
                            <div className="dropdown no-arrow">
                                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div className="card-body">
                            <form onSubmit={(e) => { submit(e) }}>
                                {/* {data.range_name} */}
                                <div class="form-group">
                                    <label for="area_name">Tên Khu</label>
                                    <input onChange={e => { setAreaName(e.target.value) }} value={area_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_desc">Mô Tả Khu</label>
                                    <input onChange={e => { setAreaDesc(e.target.value) }} value={area_desc} type="text" class="form-control" id="area_desc_id" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Thêm Dãy</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AreaEdit;