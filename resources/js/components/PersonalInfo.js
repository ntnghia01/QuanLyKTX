import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function PersonalInfo() {

    const [personal_info_data, setPersonalInfoData] = useState([]);

    useEffect(() => {
        {
            axios.get('../get-session').then(
                res => {
                    axios.get(`../api/personal-infomation/${res.data.user_id}`).then(
                        res => {
                            setPersonalInfoData(res.data)
                        }
                    )
                }
            )
        }

    }, [])

    return (
        <>

            <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Thông Tin Sinh Viên</h1>
                </div>
                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800 text-center">Thông Tin Sinh Viên </h1>
                <p class="mb-4">Dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>
                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4 border-left-info">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Thông tin sinh viên</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                    </tr>
                                </thead>
                                <tfoot>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <td>MSSV</td>
                                        <td>{personal_info_data.user_name}</td>
                                    </tr>
                                    <tr>
                                        <td>Họ tên</td>
                                        <td>{personal_info_data.user_fullname}</td>
                                    </tr>
                                    <tr>
                                        <td>Giới tính</td>
                                        <td>{personal_info_data.user_gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{personal_info_data.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Ngành học</td>
                                        <td>{personal_info_data.user_major}</td>
                                    </tr>
                                    <tr>
                                        <td>Hộ khẩu</td>
                                        <td>{personal_info_data.user_address}</td>
                                    </tr>
                                    <tr>
                                        <td>Số điện thoại</td>
                                        <td>{personal_info_data.user_phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Ngày sinh</td>
                                        <td>{personal_info_data.user_birthday}</td>
                                    </tr>
                                    <tr>
                                        <td>Lớp ngành</td>
                                        <td>{personal_info_data.user_class}</td>
                                    </tr>
                                    <tr>
                                        <td>Khóa</td>
                                        <td>{personal_info_data.user_course}</td>
                                    </tr>
                                    <Link to={`../edit-personal-info/${personal_info_data.id}`} className="btn btn-sm btn-primary  m-2">
                                        <span class="icon text-white-50">
                                            <i class="fas fa-info"></i>
                                        </span>
                                        <span class="text"> Chỉnh sửa</span>
                                    </Link>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



            </div>


        </>
    );
}

export default PersonalInfo;