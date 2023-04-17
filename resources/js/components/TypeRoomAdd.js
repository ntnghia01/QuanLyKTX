import React, { useEffect, useState } from 'react';
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
        <h1 className="h3 text-gray-800 text-center m-3">THÊM LOẠI PHÒNG</h1>
        <div className="container-fluid">
          <div className='row'>
            <div className="col-xl-2 col-lg-2"></div>
            {/* <!-- Area Chart --> */}
            <div className="col-xl-8 col-lg-8">
              <div className="card shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
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
                      <input onChange={e => { setNameType(e.target.value) }} value={type_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Nhập tên' />
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
                      <input onChange={e => { setDescType(e.target.value) }} value={type_desc} type="text" class="form-control" id="area_desc_id" placeholder='Nhập mô tả' />
                      <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                    </div>
                    <div class="form-group">
                      <label for="type_price">Đơn giá của phòng</label>
                      <select onChange={e => { setPriceType(e.target.value) }} name="type_price" class="form-control" id="exampleFormControlSelect1">
                        <option value="500000">-- Chọn đơn giá cho loại phòng --</option>
                        <option value="500000">500.000</option>
                        <option value="400000">400.000</option>
                        <option value="300000">300.000</option>
                        <option value="200000">200.000</option>
                        <option value="100000">100.000</option>
                      </select>
                    </div>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                      <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                    </div>
                    <button type="submit" class="btn btn-primary"><i class="fas fa-plus"></i> Thêm Loại Phòng</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TypeRoomAdd;