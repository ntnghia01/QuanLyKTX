import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function TypeRoomList() {
    const [type_name, setTypeName] = useState('');
    const [type_gender, setTypeGender] = useState('');
    const [type_cook, setTypeCook] = useState('');
    const [type_capacity, setTypeCapacity] = useState('');
    const [type_desc, setTypeDesc] = useState('');
    const [type_price, setTypePrice] = useState('');

    const [type, setType] = useState([]);
    const [data, setData] = useState({});
    useEffect(() => {
        {
            axios.get('api/get-type-room').then(
                res => {
                    setType(res.data)
                }
            )
        }
    }, [])
    // const submit = (e) => {
    //     e.preventDefault()
    //     axios.post('api/area/post-create-area', { area_name, area_desc }).then(
    //         res => {
    //             setData(res.data);
    //         }
    //     )
    // }
    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Loại Phòng Trong Hệ Thống</h1>
            </div>
            <div class="container-fluid">

                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Khu</h1>
                <p class="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                        href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Loại Phòng</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID Khu</th>
                                        <th>Tên Loại</th>
                                        <th>Giới tính</th>
                                        <th>Nấu ăn</th>
                                        <th>Sức chứa</th>
                                        <th>Mô tả loại phòng</th>
                                        <th>Đơn giá phòng</th>
                                        <th>Ngày tạo</th>
                                        <th>Ngày cập nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID Khu</th>
                                        <th>Tên Loại</th>
                                        <th>Giới tính</th>
                                        <th>Nấu ăn</th>
                                        <th>Sức chứa</th>
                                        <th>Mô tả loại phòng</th>
                                        <th>Đơn giá phòng</th>
                                        <th>Ngày tạo</th>
                                        <th>Ngày cập nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                {type.map((item) => <>
                                    <tr>
                                        <td>{item.type_id}</td>
                                        <td>{item.type_name}</td>
                                        <td>{item.type_gender}</td>
                                        <td>{item.type_cook}</td>
                                        <td>{item.type_capacity}</td>
                                        <td>{item.type_desc}</td>
                                        <td>{item.type_price}</td>
                                        <td>{item.created_at}</td>
                                        <td>{item.updated_at}</td>
                                        <td>
                                            <Link to={`../edit-type-room/${item.type_id}`} className="btn btn-sm btn-warning btn-icon-split">
                                                <span class="icon text-white-50">
                                                    <i class="fas fa-exclamation-triangle"></i>
                                                </span>
                                                <span class="text">Cập nhật</span>
                                            </Link>
                                            <a class="btn btn-sm btn-danger btn-icon-split">
                                                <span class="icon text-white-50">
                                                    <i class="fas fa-trash"></i>
                                                </span>
                                                <span class="text">Xóa</span>
                                            </a>
                                        </td>
                                    </tr>
                                    </>
                                )}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TypeRoomList;