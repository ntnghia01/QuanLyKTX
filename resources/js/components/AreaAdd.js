import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
function AreaAdd() {
  const navigate = useNavigate();

  const [area_name, setAreaName] = useState('');
  const [area_desc, setAreaDesc] = useState('');
  const [data, setData] = useState({})
  const submit = (e) => {

    e.preventDefault()
    axios.post('api/post-create-area', { area_name, area_desc }).then(
      res => {
        setData(res.data);
        navigate('../list-area');
      }
    )
  }
  return (
    <div>
      <div className='container-fluid'>
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-0 text-gray-800 text-center m-3">THÊM KHU</h1>
        <div className='row'>
          <div className="col-xl-2 col-lg-2"></div>
          <div className="col-xl-8 col-lg-8">
            {/* <!-- Area Chart --> */}
            <div className="card shadow mb-4">
              {/* <!-- Card Header - Dropdown --> */}
              <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Khu Muốn Thêm Vào Form Sau</h6>
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
                <Form onSubmit={(e) => { submit(e) }}>
                  {/* TÊN KHU */}
                  <Form.Text className="text-muted">
                    {data.area_name}
                  </Form.Text>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tên Khu</Form.Label>
                    <Form.Control onChange={e => { setAreaName(e.target.value) }} type="area_name" placeholder="Điền tên khu" value={area_name} />
                    <Form.Text className="text-muted">
                      Vui lòng kiểm tra trước khi nhấn thêm.
                    </Form.Text>
                  </Form.Group>
                  {/* MÔ TẢ KHU */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mô tả Khu</Form.Label>
                    <Form.Control onChange={e => { setAreaDesc(e.target.value) }} type="area_desc" placeholder="Điền mô tả khu" value={area_desc} />
                    <Form.Text className="text-muted">
                      Vui lòng kiểm tra trước khi nhấn thêm.
                    </Form.Text>
                  </Form.Group>
                  <Button variant="primary" type='submit' class="btn btn-primary btn-icon-split">

                    <span class="text"><i class="fas fa-plus"></i> Thêm khu</span>
                  </Button>
                </Form>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default AreaAdd;