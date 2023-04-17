import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function RoomAdd() {

  const navigate = useNavigate();

  const [room_name, setRoomName] = useState('');
  const [room_range, setRoomRange] = useState('');
  const [room_type, setRoomType] = useState('');
  const [room_quantity, setRoomQuantity] = useState('');
  const [room_status, setRoomStatus] = useState('');
  const [room_desc, setRoomDesc] = useState('');
  const [data, setData] = useState({});
  const [range_data, setRangeData] = useState([]);
  const [type_room_data, setTypeRoomData] = useState([]);

  useEffect(() => {
    {
      axios.get('api/get-range').then(
        res => {
          setRangeData(res.data)
        }
      )
    }
    {
      axios.get('api/get-type-room').then(
        res => {
          setTypeRoomData(res.data)
        }
      )
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()
    axios.post('api/post-create-room', { room_name, room_range, room_type, room_quantity, room_status, room_desc }).then(
      res => {
        setData(res.data);
        navigate('../list-room');
      }
    )
  }
  return (
    <>
      <div className='container-fluid'>
        {/* <!-- Page Heading --> */}
        <h1 className="h3 M-3 text-gray-800 text-center">THÊM PHÒNG</h1>
        <div className="row">
          {/* <!-- Area Chart --> */}
          <div className="col-xl-2 col-lg-2"></div>
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              {/* <!-- Card Header - Dropdown --> */}
              <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Phòng Muốn Thêm Vào Form Sau</h6>
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
                  {data.range_name}
                  <div class="form-group">
                    <label for="room_name">Tên Phòng</label>
                    <input onChange={e => { setRoomName(e.target.value) }} value={room_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                  </div>
                  <div class="form-group">
                    <label for="room_range">Thuộc Dãy</label>
                    <select onChange={e => { setRoomRange(e.target.value) }} name="room_range" class="form-control" id="exampleFormControlSelect1">
                      <option value="1">-- Chọn Dãy --</option>
                      {range_data.map((item) => <>
                        <option value={item.range_id}>{item.range_name}</option>
                      </>)}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="range_area">Thuộc Loại</label>
                    <select onChange={e => { setRoomType(e.target.value) }} name="range_area" class="form-control" id="exampleFormControlSelect1">
                      <option value="1">-- Chọn Loại Phòng --</option>
                      {type_room_data.map((item) => <>
                        <option value={item.type_id}>{item.type_name}</option>
                      </>)}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="room_quantity">Đã ở (chỗ)</label>
                    <select onChange={e => { setRoomQuantity(e.target.value) }} name="room_quantity" class="form-control" id="exampleFormControlSelect1">
                      <option value="0">-- Số chỗ đã ở của phòng --</option>
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
                      <option value="Còn trống">-- Chọn Loại Phòng --</option>
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
                  <button type="submit" class="btn btn-primary"><i class="fas fa-plus"></i> Thêm Phòng</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2"></div>
        </div>
      </div>
    </>
  );
}

export default RoomAdd;