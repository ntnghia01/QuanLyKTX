import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function FeedBackList() {

    const [feedback_data, setFeedbackData] = useState([]);

    useEffect(() => {
        {
            axios.get('api/get-feedback').then(
                res => {
                    setFeedbackData(res.data)
                }
            )
        }
    }, [])

    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Đơn Ý Kiến Phản Hồi Trong Hệ Thống</h1>
            </div>
            <div class="container-fluid">

                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Ý kiến, phản hồi, sửa chữa CSVC</h1>
                <p class="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Đơn Ý Kiến Phản Hồi</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID Đơn</th>
                                        <th>Mã Sinh Viên</th>
                                        <th>Tên Sinh Viên</th>
                                        <th>Tiêu Đề</th>
                                        <th>Nội dung</th>
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
                                        <th>Tiêu Đề</th>
                                        <th>Nội dung</th>
                                        <th>Trạng thái</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {feedback_data.map((item) => <>
                                        <tr>
                                            <td>{item.feedback_id}</td>
                                            <td>{item.feedback_user.user_name}</td>
                                            <td>{item.feedback_user.user_fullname}</td>
                                            <td>{item.feedback_title}</td>
                                            <td>{item.feedback_content}</td>
                                            <td>
                                                <div class="form-group">
                                                    <select name="feedback_status" class="form-control" id="exampleFormControlSelect1">
                                                        <option value={item.feedback_status}>{item.feedback_status}</option>
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

export default FeedBackList;