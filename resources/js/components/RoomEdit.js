import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
function RoomEdit() {

    const navigate = useNavigate();

    const [success, setS] = useState(false);
    const [loading, setLoading] = useState(false);
    const { room_id } = useParams();

    console.log(room_id);

    const [room_name, setRoomName] = useState('');
    const [room_range, setRoomRange] = useState('');
    const [room_type, setRoomType] = useState('');
    const [room_quantity, setRoomQuantity] = useState('');
    const [room_status, setRoomStatus] = useState('');
    const [room_desc, setRoomDesc] = useState('');
    const [range_name, setRangeName] = useState('');
    const [type_name, setTypeName] = useState('');
    const [range_data, setRangeData] = useState([]);
    const [type_room_data, setTypeData] = useState([]);
    useEffect(() => {
        {
            axios.get(`../api/get-only-room/${room_id}`).then(
                res => {
                    setRoomName(res.data.room_name)
                    setRoomRange(res.data.room_range.range_id)
                    setRangeName(res.data.room_range.range_name)
                    setRoomType(res.data.room_type.area_name)
                    setTypeName(res.data.room_type.type_name)
                    setRoomQuantity(res.data.room_quantity)
                    setRoomStatus(res.data.room_status)
                    setRoomDesc(res.data.room_desc)
                }
            )
        }
        {
            axios.get('../api/get-range').then(
                res => {
                    setRangeData(res.data)
                }
            )
        }
        {
            axios.get('../api/get-type-room').then(
                res => {
                    setTypeData(res.data)
                }
            )
        }

    }, [])

    const submit = (e) => {
        e.preventDefault()
        // console.log( { room_name, room_range, room_type, room_quantity, room_status, room_desc });
        setLoading(true)
        axios.put(`../api/update-room/${room_id}`, { room_name, room_range, room_type, room_quantity, room_status, room_desc }).then(
            res => {
                setLoading(false)
                setS(true)
                console.log(res.data)
                // navigate('../list-room');
            }
        ).catch(e => {
            setS(false)
            setLoading(false)
        })
    }
    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Cập Nhật Phòng ID:{room_id}</h1>
            </div>
            <div className="row">
                {/* <!-- Area Chart --> */}
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Phòng Muốn Cập Nhật Vào Form Sau</h6>
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
                                {/* {data.range_name} */}
                                <div class="form-group">
                                    <label for="room_name">Tên Phòng</label>
                                    <input onChange={e => { setRoomName(e.target.value) }} value={room_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="room_range">Thuộc Dãy</label>
                                    <select onChange={e => { setRoomRange(e.target.value) }} name="room_range" class="form-control" id="exampleFormControlSelect1">
                                        <option value={room_range}>{range_name}</option>
                                        {range_data.map((item) => <>
                                            <option value={item.range_id}>{item.range_name}</option>
                                        </>)}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="range_area">Thuộc Loại</label>
                                    <select onChange={e => { setRoomType(e.target.value) }} name="range_area" class="form-control" id="exampleFormControlSelect1">
                                        <option value={room_type}>{type_name}</option>
                                        {type_room_data.map((item) => <>
                                            <option value={item.type_id}>{item.type_name}</option>
                                        </>)}
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="room_quantity">Còn Trống (chỗ)</label>
                                    <select onChange={e => { setRoomQuantity(e.target.value) }} name="room_quantity" class="form-control" id="exampleFormControlSelect1">
                                        <option value={room_quantity}>{room_quantity}</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="room_status">Trạng Thái Phòng</label>
                                    <select onChange={e => { setRoomStatus(e.target.value) }} name="room_status" class="form-control" id="exampleFormControlSelect1">
                                        <option value={room_status}>{room_status}</option>
                                        <option value="Còn trống">Còn trống</option>
                                        <option value="Đã đầy">Đã đầy</option>
                                        <option value="Đang sửa chữa">Đang sửa chữa</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="room_desc">Mô Tả Phòng</label>
                                    <input onChange={e => { setRoomDesc(e.target.value) }} value={room_desc} type="text" class="form-control" id="area_desc_id" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                                </div>
                                <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">Cập Nhật Phòng</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {loading ? (<div class="modal-body">
                            <p>loading...</p>
                        </div>) :
                            (success ? (<div class="modal-body">
                                <p>thanh cong</p>
                            </div>) : (<div class="modal-body">
                                <p>that bai</p>
                            </div>))}

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={() => { navigate('../list-room'); }} class="btn btn-primary" data-dismiss="modal">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomEdit;