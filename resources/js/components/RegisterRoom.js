import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
function RegisterRoom() {

  const { room_id } = useParams();
  console.log(room_id);
  const [room_init, setRoomInit] = useState([]);

  const navigate = useNavigate();

  const [regis_room, setRegisRoom] = useState(room_id);
  const [regis_status, setRegisStatus] = useState('Đang chờ xử lý');


  const [data, setData] = useState({});
  const [room_data, setRoomData] = useState([]);


  const [regis_student, setUserID] = useState('');
  const [user_name, setUserName] = useState('');
  const [status, setStatus] = useState([]);

  useEffect(() => {
    {
      axios.get('/get-session').then(
        res => {
          setUserID(res.data.user_id)
          setUserName(res.data.user_fullname)
          axios.get(`../api/yes-no-registration/${res.data.user_id}`).then(
            res => {
              console.log(res.data)
              setStatus(res.data)
            }
          )
        }
      )
    }

    {
      axios.get(`../api/get-only-room/${room_id}`).then(
        res => {
          setRoomInit(res.data)
        }
      )
    }

    {
      axios.get('../api/get-room').then(
        res => {
          setRoomData(res.data)
        }
      )
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()
    axios.post('../api/post-registration', { regis_room, regis_student, regis_status }).then(
      res => {
        setData(res.data);
        alert('Gửi yêu cầu đăng ký thành công!');
        navigate('../list-room-student');
      }
    )
  }
  return (
    <>
      <div className='container-fluid'>
        {status.regis_status == "Đang chờ xử lý" ?
          <div className="alert alert-warning" role="alert">
            <h1 className="h3 mb-0 text-gray-800">Đơn đăng ký của bạn đang chờ được xử lý</h1>
          </div>
          : status.regis_status == "Đã duyệt" ?
            <div className="alert alert-success" role="alert">
              <h1 className="h3 mb-0 text-gray-800">Bạn đã đăng ký phòng thành công</h1>
            </div>
            : status.regis_status == "Đã từ chối" ? <>
              <div className="alert alert-danger" role="alert">
                <h1 className="h3 mb-0 text-gray-800">Đơn đăng ký của bạn đã bị từ chối. Bạn có thể đăng ký lại với</h1>
              </div>
              <div className="row">
                {/* <!-- Area Chart --> */}
                <div className="col-xl-2 col-lg-2"></div>
                <div className="col-xl-8 col-lg-8">
                  <div className="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                      className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Phòng Muốn Đăng Ký Vào Form Sau</h6>
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
                        <div class="form-group">
                          <label for="room_name">Sinh viên đăng ký :</label>
                          <input value={user_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readonly />
                        </div>

                        <div class="form-group">
                          <label for="regisroom">Chọn phòng muốn đăng ký</label>
                          <select onChange={e => { setRegisRoom(e.target.value) }} name="regis_room" class="form-control" id="exampleFormControlSelect1">
                            <option value={room_init.room_id}>{room_init.room_name}</option>
                            {room_data.map((item) => <>
                              <option value={item.room_id}>{item.room_name}</option>
                            </>)}
                          </select>
                          <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu đã nhập trước khi xác nhận.</small>
                        </div>

                        <div class="form-group form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                          <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                        </div>
                        <button type="submit" class="btn btn-primary"><i class="fas fa-registered"></i> Đăng Ký Phòng</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2"></div>
              </div></>
              :
              <>
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-center mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Đăng Ký Phòng</h1>
                </div>
                <div className="row">
                  {/* <!-- Area Chart --> */}
                  <div className="col-xl-2 col-lg-2"></div>
                  <div className="col-xl-8 col-lg-8">
                    <div className="card shadow mb-4">
                      {/* <!-- Card Header - Dropdown --> */}
                      <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Phòng Muốn Đăng Ký Vào Form Sau</h6>
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
                          <div class="form-group">
                            <label for="room_name">Sinh viên đăng ký (ID)</label>
                            <input value={user_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readonly />
                          </div>

                          <div class="form-group">
                            <label for="regisroom">Chọn phòng muốn đăng ký</label>
                            <select onChange={e => { setRegisRoom(e.target.value) }} name="regis_room" class="form-control" id="exampleFormControlSelect1">
                              <option value={room_init.room_id}>{room_init.room_name}</option>
                              {room_data.map((item) => <>
                                <option value={item.room_id}>{item.room_name}</option>
                              </>)}
                            </select>
                            <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu đã nhập trước khi xác nhận.</small>
                          </div>

                          <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                          </div>
                          <button type="submit" class="btn btn-primary"><i class="fas fa-registered"></i> Đăng Ký Phòng</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2"></div>
                </div>
              </>
        }
      </div>
    </>
  );
}

export default RegisterRoom;