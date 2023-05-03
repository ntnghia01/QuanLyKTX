import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function RoomListStudent() {

    const [student, setUserID] = useState('');
    const [gender, setGender] = useState('');

    const [room_data, setRoomData] = useState([]);

    useEffect(() => {
        {
            axios.get('api/get-room').then(
                res => {
                    setRoomData(res.data)
                }
            )
        }
        {
            axios.get('/get-session').then(
                res => {
                    setUserID(res.data.user_id)
                    setGender(res.data.user_gender)
                }
            )
        }
    }, [])

    return (
        <>

            <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Phòng Trong Hệ Thống</h1>
                </div>
                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-4 text-gray-800 text-center">PHÒNG</h1>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4 border-left-primary">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Phòng</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Tên Phòng</th>
                                        <th>Thuộc Dãy</th>
                                        <th>Phòng Nam/Nữ</th>
                                        <th>Nấu ăn</th>
                                        <th>Sức chứa</th>
                                        <th>Đã ở</th>
                                        <th>Còn trống</th>
                                        <th>Trạng thái</th>
                                        <th>Mô tả phòng</th>
                                        <th>Đơn giá (VNĐ)</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                </tfoot>
                                <tbody>
                                    {room_data.map((item) =>
                                        <tr key={item.room_id}>
                                            <td>{item.room_name}</td>
                                            <td>{item.room_range.range_name}</td>
                                            <td>{item.room_type.type_gender}</td>
                                            <td>{item.room_type.type_cook}</td>
                                            <td>{item.room_type.type_capacity}</td>
                                            <td>{item.room_quantity}</td>
                                            <td>{item.room_type.type_capacity - item.room_quantity}</td>
                                            <td>{item.room_status}</td>
                                            <td>{item.room_desc}</td>
                                            <td>{item.room_type.type_price}</td>
                                            <td>
                                                {item.room_quantity == item.room_type.type_capacity
                                                    ?
                                                    <><span class="text-danger">
                                                        <i class="fas fa-exclamation-triangle"></i> Đã đầy
                                                    </span></>
                                                    : item.room_status == "Đang sửa chữa" ?
                                                        <><span class="text-warning">
                                                            <i class="fas fa-exclamation-triangle"></i> Đang sửa chữa
                                                        </span></>
                                                    : item.room_type.type_gender == gender ?
                                                        <Link to={`../register-room-from-list/${item.room_id}`} className="btn btn-sm btn-success">
                                                            <span class="icon text-white-50">
                                                            <i class="far fa-hand-point-right"></i>
                                                            </span>
                                                            <span class="text"> Đăng ký</span>
                                                        </Link>
                                                    :
                                                    <Link to={`../register-room-from-list/${item.room_id}`} className="btn btn-sm btn-success disabled">
                                                        <span class="icon text-white-50">
                                                        <i class="far fa-hand-point-right"></i>
                                                        </span>
                                                        <span class="text"> Đăng ký (không phù hợp)</span>
                                                    </Link>
                                                }
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <p class="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>
            </div>
        </>
    );
}

export default RoomListStudent;