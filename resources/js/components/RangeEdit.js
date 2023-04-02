import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
function RangeEdit() {

    const navigate = useNavigate();

    const { range_id } = useParams();

    console.log(range_id);

    const [range_name, setRangeName] = useState('');
    const [range_desc, setRangeDesc] = useState('');
    const [range_area, setRangeArea] = useState('');
    const [area_name, setAreaName] = useState('')
    // const [data, setData] = useState({});
    const [area, setArea] = useState([]);
    // const [range, setRange]
    useEffect(() => {
        {
            axios.get(`../api/get-only-range/${range_id}`).then(
                res => {
                    setRangeName(res.data.range_name)
                    setRangeDesc(res.data.range_desc)
                    setRangeArea(res.data.range_area.area_id)
                    setAreaName(res.data.range_area.area_name)
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
        axios.put(`../api/update-range/${range_id}`, { range_name, range_area, range_desc }).then(
            res => {
                navigate('../list-range');
                console.log(res)
            }
        )
    }
    return (
        <>
            <div className='container-fluid'>
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Cập Nhật Dãy ID:{range_id}</h1>
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
                                        <label for="area_name">Tên Dãy</label>
                                        <input onChange={e => { setRangeName(e.target.value) }} value={range_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="range_area">Thuộc Khu</label>
                                        <select onChange={e => { setRangeArea(e.target.value) }} name="range_area" class="form-control" id="exampleFormControlSelect1">
                                            <option value={range_area}>{area_name}</option>
                                            {area.map((item) => <>
                                                <option value={item.area_id}>{item.area_name}</option>
                                            </>)}
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="area_desc">Mô Tả Dãy</label>
                                        <input onChange={e => { setRangeDesc(e.target.value) }} value={range_desc} type="text" class="form-control" id="area_desc_id" />
                                        <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                    </div>
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Cập Nhật Dãy</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default RangeEdit;