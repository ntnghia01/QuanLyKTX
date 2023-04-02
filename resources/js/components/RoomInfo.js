import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function RoomInfo() {

    const [student_id, setStudentID] = useState('');
    const [room_info_data, setRoomInfoData] = useState([]);
    const [elec_water_bill_info_data, setElecWaterBillInfoData] = useState([]);
    const [room_bill_info_data, setRoomBillInfoData] = useState([]);

    useEffect(() => {
        {
            axios.get('../get-session').then(
                res => {
                    setStudentID(res.data.user_id)
                    axios.get(`../api/get-registration-by-student/${res.data.user_id}`).then(
                        res => {
                            setRoomInfoData(res.data)
                            axios.get(`../api/elec-water-bill-by-room/${res.data.room_id}`).then(
                                res => {
                                    setElecWaterBillInfoData(res.data)
                                }
                            )
                            axios.get(`../api/room-bill-by-regis/${res.data.regis_id}`).then(
                                res => {
                                    setRoomBillInfoData(res.data)
                                }
                            )
                        }
                    )
                }
            )
        }

    }, [])

    return (
        <>

            { room_info_data.regis_status == 'Đã duyệt' ?

            <>
            
            <div class="container-fluid">
{/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Thông Tin Phòng Sinh Viên Đã Đăng Ký</h1>
            </div>
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

                {/* Các hóa đơn điện nước */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Các Hóa Đơn Điện Nước</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Học kỳ</th>
                                        <th>Tháng</th>
                                        <th>Tên hóa đơn</th>
                                        <th>Điện</th>
                                        <th>Nước</th>
                                        <th>Phải đóng</th>
                                        <th>Hạn đóng</th>
                                        <th>Ngày đóng</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                </tfoot>
                                <tbody>
                                    {elec_water_bill_info_data.map((i) => <>
                                        <tr>
                                            <td>{i.elec_water_bill_semester}</td>
                                            <td>{i.elec_water_bill_month}</td>
                                            <td>{i.elec_water_bill_name}</td>
                                            <td>{i.elec_water_bill_elec}</td>
                                            <td>{i.elec_water_bill_water}</td>
                                            <td>{i.elec_water_bill_money}</td>
                                            <td>{i.elec_water_bill_due}</td>
                                            <td>{i.elec_water_bill_pay}</td>
                                            <td>{i.elec_water_bill_status}</td>
                                        </tr>
                                    </>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Hóa đơn tiền phòng */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Hóa Đơn Tiền Phòng</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Học kỳ</th>
                                        <th>Tên hóa đơn</th>
                                        <th>Phải đóng</th>
                                        <th>Hạn đóng</th>
                                        <th>Ngày đóng</th>
                                        <th>Ghi chú</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                </tfoot>
                                <tbody>
                                    {room_bill_info_data.map((i) => <>
                                        <tr>
                                            <td>{i.room_bill_semester}</td>
                                            <td>{i.room_bill_name}</td>
                                            <td>{i.room_bill_money}</td>
                                            <td>{i.room_bill_due}</td>
                                            <td>{i.room_bill_pay}</td>
                                            <td>{i.room_bill_note}</td>
                                            <td>{i.room_bill_status}</td>
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
            :
            <div className="container-fluid d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Bạn chưa đăng ký phòng</h1>
            </div>
            
        }


        </>
    );
}

export default RoomInfo;