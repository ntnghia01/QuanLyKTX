import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function WithdrawalList() {

    const [withdrawal_data, setWithdrawalData] = useState([]);

    useEffect(() => {
        {
            axios.get('api/get-withdrawal').then(
                res => {
                    setWithdrawalData(res.data)
                }
            )
        }
    }, [])

    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Đơn Yêu Cầu Rút KTX Trong Hệ Thống</h1>
            </div>
            <div class="container-fluid">

                {/* <!-- Page Heading --> */}
                
                <p class="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4 border-left-primary">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Đơn Yêu Cầu Rút</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID đơn yêu cầu</th>
                                        <th>ID đơn đăng ký</th>
                                        <th>Sinh viên</th>
                                        <th>Phòng</th>
                                        <th>Lý do</th>
                                        <th>Trạng thái</th>
                                        <th>Ngày gửi</th>
                                        <th>Ngày phản hồi</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    
                                </tfoot>
                                <tbody>
                                
                                    {withdrawal_data.map((item) =>
                                        <WithdrawalRow
                                            key={item.id}
                                            item={item}
                                        // handleDelete={handleDelete}
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

function WithdrawalRow({ item }) {

    const [withdrawal_new, setWithdrawalNew] = useState(item);
    const handleApprove = (withdrawal_id, room_id, app_ref) => {
        axios.put(`api/approve-withdrawal/${withdrawal_id}`, { room_id: room_id, withdrawal_status: app_ref }).then(
            res => {
                setWithdrawalNew(res.data)
            }
        )
    }
    const handleRefuse = (withdrawal_id, app_ref) => {
        axios.put(`api/refuse-withdrawal/${withdrawal_id}`, { withdrawal_status: app_ref }).then(
            res => {
                setWithdrawalNew(res.data)
            }
        )
    }

    return (
        <>
            <tr>
                <td>{withdrawal_new.withdrawal_id}</td>
                <td>{withdrawal_new.withdrawal_regis.regis_id}</td>
                <td>{withdrawal_new.user_name}</td>
                <td>{withdrawal_new.room_name}</td>
                <td>{withdrawal_new.withdrawal_reason}</td>
                <td>{withdrawal_new.withdrawal_status}</td>
                <td>{withdrawal_new.created_at}</td>
                <td>{withdrawal_new.withdrawal_approve}</td>
                <td>
                    {withdrawal_new.withdrawal_status == "Đang chờ xử lý" ?
                        <>
                            <a onClick={() => handleApprove(withdrawal_new.withdrawal_id, withdrawal_new.room_id, "Đã duyệt")} className="btn btn-sm btn-primary btn-icon-split">
                                <span class="icon text-white-50">
                                    <i class="fas fa-check"></i>
                                </span>
                                <span class="text">Duyệt</span>
                            </a>
                            <a onClick={() => handleRefuse(withdrawal_new.withdrawal_id, "Đã từ chối")} className="btn btn-sm btn-danger btn-icon-split" >
                                <span class="icon text-white-50">
                                    <i class="fas fa-trash"></i>
                                </span>
                                <span class="text">Từ chối</span>
                            </a>
                        </>
                        : withdrawal_new.withdrawal_status == "Đã duyệt" ?
                        <span class="text-success">
                            <i class="fas fa-check"></i> Đã duyệt
                        </span>
                        :
                        <span class="text-danger">
                            <i class="fas fa-check"></i> Đã từ chối
                        </span>
                    }
                </td>
            </tr>

        </>
    )
}

export default WithdrawalList;