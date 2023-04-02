import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function TypeRoomAdd() {

  const navigate = useNavigate();

  const [type_name, setNameType] = useState('');
  const [type_gender, setGenderType] = useState('');
  const [type_cook, setCookType] = useState('');
  const [type_capacity, setCapacityType] = useState('');
  const [type_desc, setDescType] = useState('');
  const [type_price, setPriceType] = useState('');

  const [data, setData] = useState({});
  const [area, setArea] = useState([]);


  const submit = (e) => {
    e.preventDefault()
    axios.post('api/post-create-type-room', { type_name, type_gender, type_cook, type_capacity, type_desc, type_price }).then(
      res => {
        setData(res.data);
        navigate('../list-type-room');
      }
    )
  }
  return (
    <>
      <div className='container-fluid'>
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Thêm Loại Phòng</h1>
        </div>
        <div className="container-fluid">
          {/* <!-- Area Chart --> */}
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div
              className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Loại Phòng Muốn Thêm Vào Form Sau</h6>
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
                {data.type_name}
                <div class="form-group">
                  <label for="type_name">Tên Loại Phòng</label>
                  <input onChange={e => { setNameType(e.target.value) }} value={type_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                </div>
                <div class="form-group">
                  <label for="type_gender">Nam / Nữ</label>
                  <select onChange={e => { setGenderType(e.target.value) }} name="type_gender" class="form-control" id="exampleFormControlSelect1">
                    <option value="Nam">-- Chọn giới tính cho loại phòng --</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="type_cook">Khả năng nấu ăn</label>
                  <select onChange={e => { setCookType(e.target.value) }} name="type_cook" class="form-control" id="exampleFormControlSelect1">
                    <option value="Nấu ăn">-- Cho phép nấu ăn hay không --</option>
                    <option value="Nấu ăn">Nấu ăn</option>
                    <option value="Không nấu ăn">Không nấu ăn</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="type_capacity">Sức chứa của phòng</label>
                  <select onChange={e => { setCapacityType(e.target.value) }} name="type_capacity" class="form-control" id="exampleFormControlSelect1">
                    <option value="4">-- Chọn sức chứa cho loại phòng --</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="area_desc">Mô Tả Loại Phòng</label>
                  <input onChange={e => { setDescType(e.target.value) }} value={type_desc} type="text" class="form-control" id="area_desc_id" />
                  <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                </div>
                <div class="form-group">
                  <label for="type_price">Đơn giá của phòng</label>
                  <select onChange={e => { setPriceType(e.target.value) }} name="type_price" class="form-control" id="exampleFormControlSelect1">
                    <option value="500000">-- Chọn đơn giá cho loại phòng --</option>
                    <option value="500000">500000</option>
                    <option value="400000">400000</option>
                    <option value="300000">300000</option>
                    <option value="200000">200000</option>
                    <option value="100000">100000</option>
                  </select>
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                </div>
                <button type="submit" class="btn btn-primary">Thêm Loại Phòng</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Form onSubmit={(e) => { submit(e) }}>
        <Form.Text className="text-muted">
          {data.type_name}
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tên Dãy</Form.Label>
          <Form.Control onChange={e => { setRangeName(e.target.value) }} type="range_name" placeholder="Điền tên dãy" value={range_name} />
          <Form.Text className="text-muted">
            Vui lòng kiểm tra trước khi nhấn thêm.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Thuộc khu</Form.Label>
          <Form.Control onChange={e => { setRangeArea(e.target.value) }} type="range_area" placeholder="Điền mô tả dãy" value={range_area} />
          <Form.Text className="text-muted">
            Vui lòng kiểm tra trước khi nhấn thêm.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mô tả Dãy</Form.Label>
          <Form.Control onChange={e => { setRangeDesc(e.target.value) }} type="range_desc" placeholder="Điền mô tả dãy" value={range_desc} />
          <Form.Text className="text-muted">
            Vui lòng kiểm tra trước khi nhấn thêm.
          </Form.Text>
        </Form.Group>


        <Button variant="primary" type='submit'
        >
          Thêm dãy
        </Button>
      </Form> */}
    </>
  );
}

export default TypeRoomAdd;