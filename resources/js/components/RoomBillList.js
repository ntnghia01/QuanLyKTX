import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function RoomBillList() {

    const [room_bill_data, setRoomBillData] = useState([]);

    useEffect(() => {
        {
            axios.get('api/get-room-bill').then(
                res => {
                    setRoomBillData(res.data)
                }
            )
        }
    }, [])


    const handleDelete = (room_bill_id) => {
        axios.delete(`api/delete-room-bill/${room_bill_id}`).then(
            
            setRoomBillData(room_bill_data.filter(room_bill_data => room_bill_data.room_bill_id !== room_bill_id)),
            alert('Xóa hóa đơn tiền phòng thành công')
        )
    }


    return (
        <>

            <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Hóa Đơn Tiền Phòng Trong Hệ Thống</h1>
                </div>
                {/* <!-- Page Heading --> */}
                <h1 className="h3 mb-2 text-gray-800 text-center">HÓA ĐƠN TIỀN PHÒNG</h1>
                
                <Link to='' className="btn btn-primary mb-3"><i className="fas fa-plus"></i> Thêm Hóa Đơn</Link>

                {/* <!-- DataTales Example --> */}
                <div className="card shadow mb-4 border-left-primary">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Hóa Đơn Tiền Phòng Của Mỗi Sinh Viên</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID hóa đơn</th>
                                        <th>Tên hóa đơn</th>
                                        <th>Đơn Đăng Ký</th>
                                        <th>Sinh viên</th>
                                        <th>Phòng</th>
                                        <th>Vào học kỳ</th>
                                        <th>Phải đóng</th>
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
                                        <th>Đơn Đăng Ký</th>
                                        <th>Sinh viên</th>
                                        <th>Phòng</th>
                                        <th>Vào học kỳ</th>
                                        <th>Phải đóng</th>
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
                                    {room_bill_data.map((item) =>
                                        <RoomBillRow
                                            key={item.room_bill_id}
                                            item={item}
                                            handleDelete={handleDelete}
                                        />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <p className="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>
            </div>


        </>
    );
}

function RoomBillRow({ item, handleDelete }) {

    const [room_bill_new, setRoomBillNew] = useState(item);
    const handlePay = (room_bill_id, app_ref) => {
        axios.put(`api/pay-room-bill/${room_bill_id}`, { room_bill_status: app_ref }).then(
            res => {
                setRoomBillNew(res.data)
                alert('Xác nhận đã đóng')
            }
        )
    }

    const [delete_id, setDID] = useState(item.room_bill_id);

    return (
        <>
            <tr>
                <td>{room_bill_new.room_bill_id}</td>
                <td>{room_bill_new.room_bill_name}</td>
                <td>{room_bill_new.room_bill_regis.regis_id}</td>
                <td>{room_bill_new.user_name}</td>
                <td>{room_bill_new.room_name}</td>
                <td>{room_bill_new.room_bill_semester}</td>
                <td>{room_bill_new.room_bill_money}</td>
                <td>{room_bill_new.room_bill_due}</td>
                <td>{room_bill_new.room_bill_pay}</td>
                <td>{room_bill_new.room_bill_note}</td>
                <td>{room_bill_new.room_bill_status}</td>
                <td>{room_bill_new.created_at}</td>
                {/* <td>{room_bill_new.updated_at}</td> */}
                <td>
                    {room_bill_new.room_bill_status == "Chưa đóng"
                        ?
                        <>
                            <a onClick={() => handlePay(room_bill_new.room_bill_id, "Đã đóng")} className="btn btn-sm btn-success m-1">
                                <span className="icon text-white-50">
                                    <i className="fas fa-check"></i>
                                </span>
                                <span className="text"> Đã đóng</span>
                            </a>
                            {/* <Link to={`../edit-elec-water-bill/${room_bill_new.room_bill_id}`} className="btn btn-sm btn-warning btn-icon-split">
                                <span className="icon text-white-50">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                                <span className="text">Cập nhật</span>
                            </Link> */}
                            <a type="button" data-toggle="modal" data-target={"#staticBackdrop" + delete_id} className="btn btn-sm btn-danger m-1" >
                                <span className="icon text-white-50">
                                    <i className="fas fa-trash"></i>
                                </span>
                                <span className="text"> Xóa</span>
                            </a>
                        </>
                        :
                        <span className="text-success">
                            <i className="fas fa-check"></i> Đã đóng
                        </span>

                    }

                </td>
                
            </tr>
            <div className="modal" id={"staticBackdrop" + delete_id} data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Xóa Hóa Đơn {delete_id}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc muốn xóa Hóa Đơn ID:{delete_id}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Thoát</button>
                            <button type="button" onClick={() => { handleDelete(delete_id) }} className="btn btn-danger" data-dismiss="modal">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomBillList;