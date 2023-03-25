import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
function RoomBillAdd() {

    const { regis_id } = useParams();

    const navigate = useNavigate();

    console.log(regis_id);

    const [room_bill_name, setRoomBillName] = useState('');
    const [room_bill_regis, setRoomBillRegis] = useState('');
    const [room_bill_semester, setRoomBillSemester] = useState('');
    const [room_bill_money, setRoomBillMoney] = useState('');
    const [room_bill_due, setRoomBillDue] = useState('');
    const [room_bill_pay, setRoomBillPay] = useState('');
    const [room_bill_note, setRoomBillNote] = useState('');
    const [room_bill_status, setRoomBillStatus] = useState('');

    const [student, setStudent] = useState('');
    const [room, setRoom] = useState('');

    const [created, setCreatedData] = useState({});

    useEffect(() => {
        {
            axios.get(`../api/get-only-registration/${regis_id}`).then(
                res => {
                    // setRoomBillName(res.data.room_bill_name)
                    setRoomBillRegis(res.data.regis_id)
                    // setRoomBillSemester(res.data.room_bill_semester)
                    setRoomBillMoney(res.data.type_price)
                    // setRoomBillDue(res.data.room_bill_due)
                    // setRoomBillPay(res.data.room_bill_pay)
                    // setRoomBillNote(res.data.room_bill_note)
                    // setRoomBillStatus(res.data.room_bill_status)

                    setStudent(res.data.user_name)
                    setRoom(res.data.room_name)
                }
            )
        }

    }, [])

    const submit = (e) => {
        e.preventDefault()
        axios.post(`../api/post-room-bill`, {    room_bill_name, 
                                                room_bill_regis, 
                                                room_bill_semester, 
                                                room_bill_money, 
                                                room_bill_due, 
                                                room_bill_pay, 
                                                room_bill_note, 
                                                room_bill_status 
        }).then(
            res => {
                setCreatedData(res.data)
                navigate('../list-room-bill');
            }
        )
    }
    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Thêm Hóa Đơn Phòng ID:{regis_id}</h1>
            </div>
            <div className="row">
                {/* <!-- Area Chart --> */}
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Hóa Đơn Vào Form Sau</h6>
                            <div className="dropdown no-arrow">
                                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div className="card-body">
                            <form onSubmit={(e) => { submit(e) }}>
                                {created.room_bill_name}
                                <div class="form-group">
                                    <label for="room_name">Tên Hóa Đơn</label>
                                    <input onChange={e => { setRoomBillName(e.target.value) }} value={room_bill_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="room_quantity">Học Kỳ</label>
                                    <select onChange={e => { setRoomBillSemester(e.target.value) }} name="room_bill_semester" class="form-control" id="exampleFormControlSelect1">
                                        <option value="1">-- Chọn học kỳ --</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="Hè">3</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="room_name">Sinh Viên</label>
                                    <input value={student} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readonly />
                                </div>
                                <div class="form-group">
                                    <label for="room_name">Phòng</label>
                                    <input value={room} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readonly />
                                </div>
                                <div class="form-group">
                                    <label for="room_name">Đơn giá</label>
                                    <input value={room_bill_money*5} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readonly />
                                </div>
                                <div class="form-group">
                                    <label for="area_name">Ngày Hết Hạn</label>
                                    <input onChange={e => { setRoomBillDue(e.target.value) }} value={room_bill_due} type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="room_bill_semester">Ngày đóng</label>
                                    <select onChange={e => { setRoomBillPay(e.target.value) }} name="room_bill_pay" class="form-control" id="exampleFormControlSelect1">
                                        <option value="Chưa đóng">-- Chọn Trạng Thái Ban Đầu --</option>
                                        <option value="Chưa đóng">Chưa đóng</option>
                                        <option value="Hôm nay">Hôm nay</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="area_desc">Ghi Chú Hóa Đơn</label>
                                    <input onChange={e => { setRoomBillNote(e.target.value) }} value={room_bill_note} type="text" class="form-control" id="area_desc_id" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="room_bill_semester">Trạng Thái Hóa Đơn</label>
                                    <select onChange={e => { setRoomBillStatus(e.target.value) }} name="room_bill_status" class="form-control" id="exampleFormControlSelect1">
                                        <option value="Chưa đóng">-- Chọn Trạng Thái Ban Đầu --</option>
                                        <option value="Chưa đóng">Chưa đóng</option>
                                        <option value="Đã đóng">Đã đóng</option>
                                    </select>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Tạo hóa đơn</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default RoomBillAdd;