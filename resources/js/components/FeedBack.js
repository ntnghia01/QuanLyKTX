import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function FeedBack() {

  const [feedback_user, setUserID] = useState('');
  const [feedback_type, setFeedbackType] = useState('');
  const [feedback_title, setFeedbackTitle] = useState('');
  const [feedback_content, setFeedbackContent] = useState('');
  const [feedback_status, setFeedbackStatus] = useState('Đang chờ xử lý');
  const [data, setData] = useState({});

  useEffect(() => {
    {
      axios.get('/get-session').then(
        res => {
          setUserID(res.data.user_id)
        }
      )
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()
    axios.post('api/post-feedback', { feedback_user, feedback_type, feedback_title, feedback_content, feedback_status }).then(
      res => {
        setData(res.data);
      }
    )
  }
  return (
    <>
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Ý Kiến, Phản Hồi</h1>
      </div>
      <div className="row">
        {/* <!-- Area Chart --> */}
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div
              className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Muốn Phản Hồi Vào Form Sau</h6>
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
              {data.feedback_title}
                <div class="form-group">
                  <label for="range_area">Loại phản hồi</label>
                  <select onChange={e => { setFeedbackType(e.target.value) }} name="range_area" class="form-control" id="exampleFormControlSelect1">
                    <option value="Ý kiến, phản hồi">-- Chọn loại phản hồi --</option>
                    <option value="Ý kiến, phản hồi">Ý kiến, phản hồi</option>
                    <option value="Sửa chữa CSVC">Sửa chữa CSVC</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="area_name">Tiêu đề</label>
                  <input onChange={e => { setFeedbackTitle(e.target.value) }} value={feedback_title} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                </div>
                <div class="form-group">
                  <label for="area_desc">Nội dung</label>
                  <input onChange={e => { setFeedbackContent(e.target.value) }} value={feedback_content} type="text" class="form-control" id="area_desc_id" />
                  <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                </div>
                <button type="submit" class="btn btn-primary">Gửi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedBack;