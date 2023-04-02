import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function RoomList() {

    const [room_data, setRoomData] = useState([]);

    useEffect(() => {
        {
            axios.get('api/get-room').then(
                res => {
                    setRoomData(res.data)
                }
            )
        }
    }, [])

    const [delete_id, setDID] = useState('');
    const handleDelete = (room_id) => {
        axios.delete(`api/delete-room/${room_id}`).then(
            res => {
                setRoomData(room_data.filter(room_data => room_data.room_id !== room_id))

            }

        )
    }

    return (
        <>

            <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Phòng Trong Hệ Thống</h1>
                </div>
                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Dãy</h1>
                <p class="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Phòng</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID Phòng</th>
                                        <th>Tên Phòng</th>
                                        <th>Thuộc Dãy</th>
                                        <th>Thuộc Loại</th>
                                        <th>Đã ở</th>
                                        <th>Trạng thái</th>
                                        <th>Mô tả phòng</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID Phòng</th>
                                        <th>Tên Phòng</th>
                                        <th>Thuộc Dãy</th>
                                        <th>Thuộc Loại</th>
                                        <th>Đã ở</th>
                                        <th>Trạng thái</th>
                                        <th>Mô tả phòng</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {room_data.map((item) => <>
                                        <tr>
                                            <td>{item.room_id}</td>
                                            <td>{item.room_name}</td>
                                            <td>{item.room_range.range_name}</td>
                                            <td>{item.room_type.type_name}</td>
                                            <td>{item.room_quantity}</td>
                                            <td>
                                                <div class="form-group">
                                                    <select name="room_status" class="form-control" id="exampleFormControlSelect1">
                                                        <option value={item.room_status}>{item.room_status}</option>
                                                        {/* <option value="Chưa đóng">Chưa đóng</option> */}
                                                        <option value="Còn trống">Còn trống</option>
                                                        <option value="Đã đầy">Đã đầy</option>
                                                        <option value="Đang sửa chữa">Đang sửa chữa</option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td>{item.room_desc}</td>
                                            <td>{item.created_at}</td>
                                            <td>{item.updated_at}</td>
                                            <td>
                                                <Link to={`../edit-room/${item.room_id}`} className="btn btn-sm btn-warning">
                                                    <span class="icon text-white-50">
                                                        <i class="fas fa-exclamation-triangle"></i>
                                                    </span>
                                                    <span class="text"> Cập nhật</span>
                                                </Link>
                                                <a type="button" onClick={() => { setDID(item.room_id) }} data-toggle="modal" data-target="#staticBackdrop" className="btn btn-sm btn-danger m-1" >
                                                    <span class="icon text-white-50">
                                                        <i class="fas fa-trash"></i>
                                                    </span>
                                                    <span class="text"> Xóa</span>
                                                </a>
                                                { item.room_quantity > 0 ?
                                                    <Link to={`../add-elec-water-bill-from-room/${item.room_id}`} className="btn btn-sm btn-primary">
                                                        <span class="icon text-white-50">
                                                            <i class="fas fa-plus"></i>
                                                        </span>
                                                        <span class="text"> Tạo điện nước</span>
                                                    </Link>
                                                : <></>
                                            }
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

            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Xóa Phòng</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Bạn có chắc muốn xóa PHÒNG ID:{delete_id}
                            <p>Hãy chắc rằng không có dữ liệu nào khác liên quan đến dữ liệu bạn sắp xóa. Nếu không, việc xóa sẽ thất bại!</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
                            <button type="button" onClick={() => { handleDelete(delete_id) }} class="btn btn-danger" data-dismiss="modal">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomList;