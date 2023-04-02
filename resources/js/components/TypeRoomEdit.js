import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
function TypeRoomEdit() {

    const navigate = useNavigate();

    const { type_id } = useParams();

    console.log(type_id);

    const [type_name, setTypeName] = useState('');
    const [type_gender, setTypeGender] = useState('');
    const [type_cook, setTypeCook] = useState('');
    const [type_capacity, setTypeCapacity] = useState('');
    const [type_desc, setTypeDesc] = useState('');
    const [type_price, setTypePrice] = useState('');
    useEffect(() => {
        {
            axios.get(`../api/get-only-type-room/${type_id}`).then(
                res => {
                    setTypeName(res.data.type_name)
                    setTypeGender(res.data.type_gender)
                    setTypeCook(res.data.type_cook)
                    setTypeCapacity(res.data.type_capacity)
                    setTypeDesc(res.data.type_desc)
                    setTypePrice(res.data.type_price)
                }
            )
        }
        // {
        //     axios.get('../api/get-area').then(
        //         res => {
        //             // setArea(res.data)
        //         }
        //     )
        // }

    }, [])

    const submit = (e) => {
        e.preventDefault()
        axios.put(`../api/update-type-room/${type_id}`, { type_name, type_gender, type_cook, type_capacity, type_desc, type_price }).then(
            res => {
                // res.data;
                console.log(res)
                navigate('../list-type-room');
            }
        )
    }
    return (
        <>
            <div className='container-fluid'>
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Cập Nhật Loại Phòng ID:{type_id}</h1>
                </div>
                <div className="row">
                    {/* <!-- Area Chart --> */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Loại Phòng Muốn Cập Nhật Vào Form Sau</h6>
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
                                        <label for="type_name">Tên Loại Phòng</label>
                                        <input onChange={e => { setTypeName(e.target.value) }} value={type_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="type_gender">Nam / Nữ</label>
                                        <select onChange={e => { setTypeGender(e.target.value) }} name="type_gender" class="form-control" id="exampleFormControlSelect1">
                                            <option value={type_gender}>{type_gender}</option>
                                            <option value="Nam">Nam</option>
                                            <option value="Nữ">Nữ</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="type_cook">Khả năng nấu ăn</label>
                                        <select onChange={e => { setTypeCook(e.target.value) }} name="type_cook" class="form-control" id="exampleFormControlSelect1">
                                            <option value={type_name}>{type_cook}</option>
                                            <option value="Nấu ăn">Nấu ăn</option>
                                            <option value="Không nấu ăn">Không nấu ăn</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="type_capacity">Sức chứa của phòng</label>
                                        <select onChange={e => { setTypeCapacity(e.target.value) }} name="type_capacity" class="form-control" id="exampleFormControlSelect1">
                                            <option value={type_capacity}>{type_capacity}</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="type_desc">Mô Tả Loại Phòng</label>
                                        <input onChange={e => { setTypeDesc(e.target.value) }} value={type_desc} type="text" class="form-control" id="type_desc_id" />
                                        <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="type_price">Đơn giá của phòng</label>
                                        <select onChange={e => { setTypePrice(e.target.value) }} name="type_price" class="form-control" id="exampleFormControlSelect1">
                                            <option value={type_price}>{type_price}</option>
                                            <option value="500000">500000</option>
                                            <option value="400000">400000</option>
                                            <option value="300000">300000</option>
                                            <option value="200000">200000</option>
                                            <option value="100000">100000</option>
                                        </select>
                                    </div>
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Cập nhật loại phòng</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TypeRoomEdit;