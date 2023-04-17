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

  const [feedback_data, setFeedbackData] = useState([]);

  useEffect(() => {
    {
      axios.get('/get-session').then(
        res => {
          setUserID(res.data.user_id)
          axios.get(`../api/get-feedback-by-student/${res.data.user_id}`).then(
            res => {
                console.log(res.data);
                setFeedbackData(res.data)
            }
          )
        }
      )
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()
    axios.post('api/post-feedback', { feedback_user, feedback_type, feedback_title, feedback_content, feedback_status }).then(
      res => {
        // setFeedbackData(res.data);
        alert('Gửi ý kiến thành công!');
      }
    )
  }
  return (
    <>
      <div className='container-fluid'>
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4 text-center">
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
                  <button type="submit" class="btn btn-primary"><i class="far fa-envelope"></i> Gửi</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Các Ý Kiến, Phản Hồi Của Bạn</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID đơn</th>
                                        <th>Sinh viên</th>
                                        <th>Loại</th>
                                        <th>Tiêu đề</th>
                                        <th>Nội dung</th>
                                        <th>Ngày gửi</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                </tfoot>
                                <tbody>
                                    {feedback_data.map((item) => <>
                                        <tr>
                                            <td>{item.feedback_id}</td>
                                            <td>{item.feedback_user.user_name}</td>
                                            <td>{item.feedback_type}</td>
                                            <td>{item.feedback_title}</td>
                                            <td>{item.feedback_content}</td>
                                            <td>{item.created_at}</td>
                                            <td>{item.feedback_status}</td>
                                        </tr>
                                    </>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
}

export default FeedBack;