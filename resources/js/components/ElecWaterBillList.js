import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function ElecWaterBillList() {

    const [elec_water_bill_data, setElecWaterBillData] = useState([]);

    useEffect(() => {
        {
            axios.get('api/get-elec-water-bill').then(
                res => {
                    setElecWaterBillData(res.data)
                }
            )
        }
    }, [])
    
    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Hóa Đơn Điện Nước Trong Hệ Thống</h1>
            </div>
            <div class="container-fluid">

                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Dãy</h1>
                <p class="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Hóa Đơn Điện Nước</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID hóa đơn</th>
                                        <th>Tên hóa đơn</th>
                                        <th>Của phòng</th>
                                        <th>Vào tháng</th>
                                        <th>Vào học kỳ</th>
                                        <th>Điện</th>
                                        <th>Nước</th>
                                        <th>Thành tiền</th>
                                        <th>Hạn đóng</th>
                                        <th>Ngày đóng</th>
                                        <th>Ghi chú</th>
                                        <th>Trạng thái</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                    <th>ID hóa đơn</th>
                                        <th>Tên hóa đơn</th>
                                        <th>Của phòng</th>
                                        <th>Vào tháng</th>
                                        <th>Vào học kỳ</th>
                                        <th>Điện</th>
                                        <th>Nước</th>
                                        <th>Thành tiền</th>
                                        <th>Hạn đóng</th>
                                        <th>Ngày đóng</th>
                                        <th>Ghi chú</th>
                                        <th>Trạng thái</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {elec_water_bill_data.map((item) => <>
                                        <tr>
                                            <td>{item.elec_water_bill_id}</td>
                                            <td>{item.elec_water_bill_name}</td>
                                            <td>{item.elec_water_bill_room.room_name}</td>
                                            <td>{item.elec_water_bill_month}</td>
                                            <td>{item.elec_water_bill_semester}</td>
                                            <td>{item.elec_water_bill_elec}</td>
                                            <td>{item.elec_water_bill_water}</td>
                                            <td>{item.elec_water_bill_money}</td>
                                            <td>{item.elec_water_bill_due}</td>
                                            <td>{item.elec_water_bill_pay}</td>
                                            <td>{item.elec_water_bill_note}</td>
                                            {/* <td>{item.elec_water_bill_status}</td> */}
                                            <td>
                                                <div class="form-group">
                                                    <select onChange={e => { setElecWaterBillStatus(e.target.value) }} name="elec_water_bill_status" class="form-control" id="exampleFormControlSelect1">
                                                        <option value={item.elec_water_bill_status}>{item.elec_water_bill_status}</option>
                                                        {/* <option value="Chưa đóng">Chưa đóng</option> */}
                                                        <option value="Đã đóng">Đã đóng</option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td>{item.created_at}</td>
                                            <td>{item.updated_at}</td>
                                            <td>
                                                <Link to={`../edit-elec-water-bill/${item.elec_water_bill_id}`} className="btn btn-sm btn-warning btn-icon-split">
                                                    <span class="icon text-white-50">
                                                        <i class="fas fa-exclamation-triangle"></i>
                                                    </span>
                                                    <span class="text">Cập nhật</span>
                                                </Link>
                                                <a class="btn btn-sm btn-danger btn-icon-split">
                                                    <span class="icon text-white-50">
                                                        <i class="fas fa-trash"></i>
                                                    </span>
                                                    <span class="text">Xóa</span>
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

export default ElecWaterBillList;