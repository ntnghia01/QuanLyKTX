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

            <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Đơn Ý Kiến Phản Hồi Trong Hệ Thống</h1>
                </div>
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
                                    {feedback_data.map((item) =>
                                        <FeedBackRow
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

function FeedBackRow({ item }) {

    const [feedback, setFeedBack] = useState(item);
    const handleApprove = (feedback_id, app_ref) => {
        axios.put(`api/approve-feedback/${feedback_id}`, { feedback_status: app_ref }).then(
            res => {
                setFeedBack(res.data)
            }
        )
    }

    return (
        <>
            <tr>
                <td>{feedback.feedback_id}</td>
                <td>{feedback.feedback_user.user_name}</td>
                <td>{feedback.feedback_user.user_fullname}</td>
                <td>{feedback.feedback_title}</td>
                <td>{feedback.feedback_content}</td>
                <td>{feedback.feedback_status}</td>
                <td>{feedback.created_at}</td>
                <td>{feedback.updated_at}</td>
                <td>
                    {feedback.feedback_status == 'Đang chờ xử lý'
                        ?
                        <><a onClick={() => handleApprove(feedback.feedback_id, "Đã duyệt")} className="btn btn-sm btn-success btn-icon-split">
                            <span class="icon text-white-50">
                                <i class="fas fa-check"></i>
                            </span>
                            <span class="text">Duyệt</span>
                        </a>
                            <a onClick={() => handleApprove(feedback.feedback_id, "Đã từ chối")} class="btn btn-sm btn-danger btn-icon-split">
                                <span class="icon text-white-50">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </span>
                                <span class="text">Từ chối</span>
                            </a></>
                        : feedback.feedback_status == 'Đã duyệt' ?
                            <span class="text-success">
                                <i class="fas fa-check"></i> Đã duyệt
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

export default FeedBackList;