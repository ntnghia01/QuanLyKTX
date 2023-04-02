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

            <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Đơn Đăng Ký Trong Hệ Thống</h1>
                </div>
                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Danh Sách Đơn Đăng Ký</h1>
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
                                    {registration_data.map((item) =>
                                        <RegistrationRow
                                            item={item}
                                        // handleApprove= {handleApprove}
                                        />
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

function RegistrationRow({ item }) {
    const [regis, setRegis] = useState(item);
    const handleApprove = (approve_id, room_id, app_ref) => {
        axios.put(`api/register-approve/${approve_id}`, { regis_status: app_ref, room_id: room_id }).then(
            res => {
                setRegis(res.data)
            }
        )
    }
    return (
        <>
            <tr>
                <td>{regis.regis_id}</td>
                <td>{regis.regis_student.user_name}</td>
                <td>{regis.regis_student.user_fullname}</td>
                <td>{regis.regis_room.room_name}</td>
                <td>
                    <div class="form-group">
                        <select name="registration_status" class="form-control" id="exampleFormControlSelect1">
                            <option value={regis.regis_status}>{regis.regis_status}</option>
                            <option value="Đã duyệt">Đã duyệt</option>
                        </select>
                    </div>
                </td>
                <td>{regis.created_at}</td>
                <td>{regis.updated_at}</td>
                <td>
                    {regis.regis_status == 'Đang chờ xử lý'
                        ?
                        <><a onClick={() => handleApprove(regis.regis_id, regis.regis_room.room_id, "Đã duyệt")} className="btn btn-sm btn-success btn-icon-split">
                            <span class="icon text-white-50">
                                <i class="fas fa-check"></i>
                            </span>
                            <span class="text">Duyệt</span>
                        </a>
                            <a onClick={() => handleApprove(regis.regis_id, regis.regis_room.room_id, "Đã từ chối")} class="btn btn-sm btn-danger btn-icon-split">
                                <span class="icon text-white-50">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </span>
                                <span class="text">Từ chối</span>
                            </a></>
                        : regis.regis_status == 'Đã duyệt' ?
                            <Link to={`../add-room-bill/${regis.regis_id}`} className="btn btn-sm btn-primary btn-icon-split">
                                <span class="icon text-white-50">
                                    <i class="fas fa-arrow-right"></i>
                                </span>
                                <span class="text">Tạo hóa đơn</span>
                            </Link>
                            : regis.regis_status == 'Đã rút' ?
                                <span class="text-warning">
                                    <i class="fas fa-check"></i> Đã rút
                                </span>
                                :
                                <span class="text-warning">
                                    <i class="fas fa-check"></i> Đã từ chối
                                </span>

                    }


                </td>
            </tr>
        </>
    )
}

export default RegistrationList;