import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Account() {

    const navigate = useNavigate();


    const [account, setAccountData] = useState([]);
    useEffect(() => {
        {
            axios.get('api/get-account').then(
                res => {
                    setAccountData(res.data)
                }
            )
        }
    }, [])

    return (
        <>

            <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Tài Khoản Trong Hệ Thống</h1>
                </div>
                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-4 text-gray-800 text-center">DANH SÁCH TÀI KHOẢN</h1>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4 border-left-info">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Tài Khoản</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID tài khoản</th>
                                        <th>Tên tài khoản</th>
                                        <th>Email</th>
                                        <th>Quyền</th>
                                        <th>Họ tên</th>
                                        <th>Chuyên ngành</th>
                                        <th>Địa chỉ</th>
                                        <th>SĐT</th>
                                        <th>Ngày sinh</th>
                                        <th>Lớp</th>
                                        <th>Khóa</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID tài khoản</th>
                                        <th>Tên tài khoản</th>
                                        <th>Email</th>
                                        <th>Quyền</th>
                                        <th>Họ tên</th>
                                        <th>Chuyên ngành</th>
                                        <th>Địa chỉ</th>
                                        <th>SĐT</th>
                                        <th>Ngày sinh</th>
                                        <th>Lớp</th>
                                        <th>Khóa</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {account.map((item) => <>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.user_name}</td>
                                            <td>{item.email}</td>
                                            {item.user_role == 1 ? <td>Admin</td> : <td>Sinh viên</td>}
                                            <td>{item.user_fullname}</td>
                                            <td>{item.user_major}</td>
                                            <td>{item.user_address}</td>
                                            <td>{item.user_phone}</td>
                                            <td>{item.user_birthday}</td>
                                            <td>{item.user_class}</td>
                                            <td>{item.user_course}</td>
                                        </tr>
                                    </>
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

export default Account;