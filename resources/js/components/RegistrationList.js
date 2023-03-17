import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function RegistrationList() {

    const [registration_data, setRegistrationData] = useState([]);

    useEffect(() => {
        {
            axios.get('api/get-registration').then(
                res => {
                    setRegistrationData(res.data)
                }
            )
        }
    }, [])

    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Đơn Đăng Ký Trong Hệ Thống</h1>
            </div>
            <div class="container-fluid">

                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Dãy</h1>
                <p class="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Đơn Đăng Ký</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID Đơn</th>
                                        <th>Mã Sinh Viên</th>
                                        <th>Tên Sinh Viên</th>
                                        <th>Tên Phòng</th>
                                        <th>Trạng thái</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID Đơn</th>
                                        <th>Mã Sinh Viên</th>
                                        <th>Tên Sinh Viên</th>
                                        <th>Tên Phòng</th>
                                        <th>Trạng thái</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {registration_data.map((item) => <>
                                        <tr>
                                            <td>{item.regis_id}</td>
                                            <td>{item.regis_student.user_name}</td>
                                            <td>{item.regis_student.user_fullname}</td>
                                            <td>{item.regis_room.room_name}</td>
                                            <td>
                                                <div class="form-group">
                                                    <select  name="registration_status" class="form-control" id="exampleFormControlSelect1">
                                                        <option value={item.regis_status}>{item.regis_status}</option>
                                                        {/* <option value="Chưa đóng">Chưa đóng</option> */}
                                                        <option value="Đã duyệt">Đã duyệt</option>
                                                    </select>
                                                </div>
                                            </td>
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
                                                    <span class="text">Hủy</span>
                                                </a>
                                                <Link to={`../add-room-bill/${item.regis_id}`} className="btn btn-sm btn-primary btn-icon-split">
                                                    <span class="icon text-white-50">
                                                        <i class="fas fa-exclamation-triangle"></i>
                                                    </span>
                                                    <span class="text">Tạo hóa đơn</span>
                                                </Link>
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

export default RegistrationList;