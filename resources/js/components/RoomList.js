import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function RoomList() {

    const [room_data, setRoomData] = useState([]);

    useEffect(() => {
        {
            axios.get('api/get-room').then(
                res => {
                    setRoomData(res.data)
                }
            )
        }
    }, [])
    
    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Phòng Trong Hệ Thống</h1>
            </div>
            <div class="container-fluid">

                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Dãy</h1>
                <p class="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Phòng</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID Phòng</th>
                                        <th>Tên Phòng</th>
                                        <th>Thuộc Dãy</th>
                                        <th>Thuộc Loại</th>
                                        <th>Còn trống</th>
                                        <th>Trạng thái</th>
                                        <th>Mô tả phòng</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID Phòng</th>
                                        <th>Tên Phòng</th>
                                        <th>Thuộc Dãy</th>
                                        <th>Thuộc Loại</th>
                                        <th>Còn trống</th>
                                        <th>Trạng thái</th>
                                        <th>Mô tả phòng</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {room_data.map((item) => <>
                                        <tr>
                                            <td>{item.room_id}</td>
                                            <td>{item.room_name}</td>
                                            <td>{item.room_range.range_name}</td>
                                            <td>{item.room_type.type_name}</td>
                                            <td>{item.room_quantity}</td>
                                            <td>{item.room_status}</td>
                                            <td>{item.room_desc}</td>
                                            <td>{item.created_at}</td>
                                            <td>{item.updated_at}</td>
                                            <td>
                                                <Link to={`../edit-room/${item.room_id}`} className="btn btn-sm btn-warning btn-icon-split">
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

export default RoomList;