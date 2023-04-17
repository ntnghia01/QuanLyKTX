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

    const handleDelete = (elec_water_bill_id) => {
        axios.delete(`api/delete-elec-water-bill/${elec_water_bill_id}`).then(

            res => {
                // console.log(elec_water_bill_id);
                setElecWaterBillData(elec_water_bill_data.filter(elec_water_bill_data => elec_water_bill_data.elec_water_bill_id !== elec_water_bill_id))
            }
        )
    }



    return (
        <>

            <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Hóa Đơn Điện Nước Trong Hệ Thống</h1>
                </div>
                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800 text-center">HÓA ĐƠN ĐIỆN NƯỚC</h1>
                
                <Link to='../add-elec-water-bill' class="btn btn-primary mb-3"><i class="fas fa-plus"></i> Thêm Hóa Đơn</Link>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4 border-left-secondary">
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
                                        {/* <th>Ngày Cập Nhật</th> */}
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
                                        {/* <th>Ngày Cập Nhật</th> */}
                                        <th>Thao Tác</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {elec_water_bill_data.map((item) =>
                                        <ElecWaterBillRow key={item.id}
                                            item={item}
                                            handleDelete={handleDelete}
                                        />
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

function ElecWaterBillRow({ item, handleDelete }) {

    const [elec_water_bill_new, setElecWaterBillNew] = useState(item);
    const handlePay = (elec_water_bill_id, app_ref) => {
        axios.put(`api/pay-elec-water-bill/${elec_water_bill_id}`, { elec_water_bill_status: app_ref }).then(
            res => {
                setElecWaterBillNew(res.data)
            }
        )
    }

    const [delete_id, setDID] = useState(item.elec_water_bill_id);
    console.log(delete_id)


    return (
        <>
            <tr>
                <td>{elec_water_bill_new.elec_water_bill_id}</td>
                <td>{elec_water_bill_new.elec_water_bill_name}</td>
                <td>{elec_water_bill_new.elec_water_bill_room.room_name}</td>
                <td>{elec_water_bill_new.elec_water_bill_month}</td>
                <td>{elec_water_bill_new.elec_water_bill_semester}</td>
                <td>{elec_water_bill_new.elec_water_bill_elec}</td>
                <td>{elec_water_bill_new.elec_water_bill_water}</td>
                <td>{elec_water_bill_new.elec_water_bill_money}</td>
                <td>{elec_water_bill_new.elec_water_bill_due}</td>
                <td>{elec_water_bill_new.elec_water_bill_pay}</td>
                <td>{elec_water_bill_new.elec_water_bill_note}</td>
                {/* <td>{elec_water_bill_new.elec_water_bill_status}</td> */}
                <td>{elec_water_bill_new.elec_water_bill_status}</td>
                <td>{elec_water_bill_new.created_at}</td>
                <td>
                    {elec_water_bill_new.elec_water_bill_status == "Chưa đóng"
                        ?
                        <>
                            <a onClick={() => handlePay(elec_water_bill_new.elec_water_bill_id, "Đã đóng")} className="btn btn-sm btn-success m-1">
                                <span class="icon text-white-50">
                                    <i class="fas fa-check"></i>
                                </span>
                                <span class="text"> Đã đóng</span>
                            </a>
                            <Link to={`../edit-elec-water-bill/${elec_water_bill_new.elec_water_bill_id}`} className="btn btn-sm btn-warning m-1">
                                <span class="icon text-white-50">
                                    <i class="fas fa-edit"></i>
                                </span>
                                <span class="text"> Cập nhật</span>
                            </Link>
                            <a type="button" data-toggle="modal" data-target={"#staticBackdrop" + delete_id} className="btn btn-sm btn-danger m-1" >
                                <span class="icon text-white-50">
                                    <i class="fas fa-trash"></i>
                                </span>
                                <span class="text"> Xóa</span>
                            </a>
                        </>
                        :
                        <span class="text-success">
                            <i class="fas fa-check"></i> Đã đóng
                        </span>

                    }

                </td>
            </tr>
            <div class="modal" id={"staticBackdrop" + delete_id} data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Xóa Hóa Đơn {delete_id}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Bạn có chắc muốn xóa Hóa Đơn ID:{delete_id}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
                            <button type="button" onClick={() => { handleDelete(delete_id) }} class="btn btn-danger" data-dismiss="modal">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ElecWaterBillList;