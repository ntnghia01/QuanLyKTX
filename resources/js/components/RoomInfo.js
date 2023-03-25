import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function RoomInfo() {

    const [student_id, setStudentID] = useState('');
    const [room_info_data, setRoomInfoData] = useState([]);

    useEffect(() => {
        {
            axios.get('../get-session').then(
                res => {
                    setStudentID(res.data.user_id)
                    axios.get(`../api/get-student-registration/${res.data.user_id}`).then(
                        res => {
                            console.log(res.data)
                            setRoomInfoData(res.data)
                        }
                    )
                    console.log(res.data.user_id)
                }
            )
        }

    }, [])




    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Thông Tin Phòng Sinh Viên Đã Đăng Ký</h1>
            </div>
            <div class="container-fluid">

                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Thông Tin Phòng </h1>
                <p class="mb-4">Dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>
                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Thông tin phòng</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        {/* <th>Loại</th>
                                        <th>Thông tin</th> */}
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        {/* <th>Loại</th>
                                        <th>Thông tin</th> */}
                                    </tr>
                                </tfoot>
                                <tbody>
                                    
                                            <tr>
                                                <td>Phòng đăng ký</td>
                                                <td>{room_info_data.room_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Khu</td>
                                                <td>{room_info_data.area_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Dãy</td>
                                                <td>{room_info_data.range_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Loại phòng</td>
                                                <td>{room_info_data.type_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Tình trạng hiện tại</td>
                                                <td>{room_info_data.room_status}</td>
                                            </tr>
                                            <tr>
                                                <td>Ngày đăng ký</td>
                                                <td>{room_info_data.created_at}</td>
                                            </tr>
                                            <tr>
                                                <td>Ngày duyệt</td>
                                                <td>{room_info_data.updated_at}</td>
                                            </tr>
                                            <tr>
                                                <td>Mã đơn đăng ký</td>
                                                <td>{room_info_data.regis_id}</td>
                                            </tr>
                                        
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default RoomInfo;