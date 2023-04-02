import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function ElecWaterBillAdd() {

  const navigate = useNavigate();

  const [elec_water_bill_name, setElecWaterBillName] = useState('');
  const [elec_water_bill_room, setElecWaterBillRoom] = useState('');
  const [elec_water_bill_month, setElecWaterBillMonth] = useState('');
  const [elec_water_bill_semester, setElecWaterBillSemester] = useState('');
  const [elec_water_bill_elec, setElecWaterBillElec] = useState('');
  const [elec_water_bill_water, setElecWaterBillWater] = useState('');
  const [elec_water_bill_money, setElecWaterBillMoney] = useState('');
  const [elec_water_bill_due, setElecWaterBillDue] = useState('');
  const [elec_water_bill_pay, setElecWaterBillPay] = useState('');
  const [elec_water_bill_note, setElecWaterBillNote] = useState('');
  const [elec_water_bill_status, setElecWaterBillStatus] = useState('');
  const [data, setData] = useState({});
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

  const submit = (e) => {
    const elec_water_bill_money = (elec_water_bill_elec * 10 + elec_water_bill_water * 5) * 1000;
    e.preventDefault()
    axios.post('api/post-create-elec-water-bill', {
      elec_water_bill_name,
      elec_water_bill_room,
      elec_water_bill_month,
      elec_water_bill_semester,
      elec_water_bill_elec,
      elec_water_bill_water,
      elec_water_bill_money,
      elec_water_bill_due,
      elec_water_bill_pay,
      elec_water_bill_note,
      elec_water_bill_status
    }).then(
      res => {
        setData(res.data);
        navigate('../list-elec-water-bill');
      }
    )
  }
  return (
    <>
      <div className='container-fluid'>
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Thêm Hóa Đơn Điện Nước</h1>
        </div>
        <div className="row">
          {/* <!-- Area Chart --> */}
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              {/* <!-- Card Header - Dropdown --> */}
              <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Hóa Đơn Điện Nước Muốn Thêm Vào Form Sau</h6>
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
                    <label for="area_name">Tên Hóa Đơn</label>
                    <input onChange={e => { setElecWaterBillName(e.target.value) }} value={elec_water_bill_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                  </div>
                  <div class="form-group">
                    <label for="elec_water_bill_room">Phòng</label>
                    <select onChange={e => { setElecWaterBillRoom(e.target.value) }} name="elec_water_bill_room" class="form-control" id="exampleFormControlSelect1">
                      <option value="1">-- Chọn Phòng --</option>
                      {room_data.map((item) => <>
                        <option value={item.room_id}>{item.room_name}</option>
                      </>)}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="elec_water_bill_month">Tháng</label>
                    <select onChange={e => { setElecWaterBillMonth(e.target.value) }} name="elec_water_bill_month" class="form-control" id="exampleFormControlSelect1">
                      <option value="1">-- Chọn Tháng --</option>
                      <option value="1">Tháng 1</option>
                      <option value="2">Tháng 2</option>
                      <option value="3">Tháng 3</option>
                      <option value="4">Tháng 4</option>
                      <option value="5">Tháng 5</option>
                      <option value="6">Tháng 6</option>
                      <option value="7">Tháng 7</option>
                      <option value="8">Tháng 8</option>
                      <option value="9">Tháng 9</option>
                      <option value="10">Tháng 10</option>
                      <option value="11">Tháng 11</option>
                      <option value="12">Tháng 12</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="elec_water_bill_semester">Học kỳ</label>
                    <select onChange={e => { setElecWaterBillSemester(e.target.value) }} name="elec_water_bill_semester" class="form-control" id="exampleFormControlSelect1">
                      <option value="1, 2022-2023">-- Chọn Học Kỳ --</option>
                      <option value="1, 2022-2023">1, 2022-2023</option>
                      <option value="2, 2022-2023">2, 2022-2023</option>
                      <option value="1, 2023-2024">1, 2023-2024</option>
                      <option value="1, 2023-2024">1, 2023-2024</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="area_name">Điện Tiêu Thụ</label>
                    <input onChange={e => {
                      setElecWaterBillElec(e.target.value);
                      // if(elec_water_bill_water!==''){
                      //   setElecWaterBillMoney(elec_water_bill_elec*10 + elec_water_bill_water*5)
                      // };
                    }} value={elec_water_bill_elec} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                  </div>
                  <div class="form-group">
                    <label for="area_name">Nước Tiêu Thụ</label>
                    <input onChange={e => {
                      setElecWaterBillWater(e.target.value)
                      // if(elec_water_bill_elec!==''){
                      //   setElecWaterBillMoney(elec_water_bill_elec*10 + elec_water_bill_water*5)
                      // };
                    }} value={elec_water_bill_water} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                  </div>
                  <div class="form-group">
                    <label for="area_name">Thành Tiền</label>
                    <input onChange={e => { setElecWaterBillMoney(e.target.value) }} value={(elec_water_bill_elec * 10 + elec_water_bill_water * 10) * 1000} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                  </div>
                  <div class="form-group">
                    <label for="area_name">Ngày Hết Hạn</label>
                    <input onChange={e => { setElecWaterBillDue(e.target.value) }} value={elec_water_bill_due} type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                  </div>
                  <div class="form-group">
                    <label for="area_name">Ngày Đóng</label>
                    <input onChange={e => { setElecWaterBillPay(e.target.value) }} value="Chưa đóng" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                  </div>
                  <div class="form-group">
                    <label for="area_desc">Ghi Chú Hóa Đơn</label>
                    <input onChange={e => { setElecWaterBillNote(e.target.value) }} value={elec_water_bill_note} type="text" class="form-control" id="area_desc_id" />
                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                  </div>
                  <div class="form-group">
                    <label for="elec_water_bill_semester">Trạng Thái Hóa Đơn</label>
                    <select onChange={e => { setElecWaterBillStatus(e.target.value) }} name="elec_water_bill_status" class="form-control" id="exampleFormControlSelect1">
                      <option value="Chưa đóng">-- Chọn Trạng Thái Ban Đầu --</option>
                      <option value="Chưa đóng">Chưa đóng</option>
                      <option value="Đã đóng">Đã đóng</option>
                    </select>
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Thêm hóa đơn</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ElecWaterBillAdd;