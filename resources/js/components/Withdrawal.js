import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
function Withdrawal() {

    const navigate = useNavigate();

    const [regis_room, setRegisRoom] = useState('');
    const [regis_status, setRegisStatus] = useState('Đang chờ xử lý');


    const [data, setData] = useState({});
    const [room_data, setRoomData] = useState([]);


    const [regis_student, setUserID] = useState('');
    const [regis_data, setRegistrationData] = useState([]);

    const [withdrawal_regis, setWithdrawalRegis] = useState('');
    const [withdrawal_reason, setWithdrawalReason] = useState('');
    const [withdrawal_status, setWithdrawalStatus] = useState('Đang chờ xử lý');
    const [withdrawal_approve, setWithdrawalApprove] = useState('Đang chờ');

    const [withdrawal_data, setWithdrawalData] = useState([]);

    useEffect(() => {
        {
            axios.get('/get-session').then(
                res => {
                    setUserID(res.data.user_id)
                    axios.get(`../api/get-registration-by-student/${res.data.user_id}`).then(
                        res => {
                            console.log(res.data);
                            setRegistrationData(res.data)
                            setWithdrawalRegis(res.data.regis_id)
                        }
                    )
                    axios.get(`../api/get-withdrawal-by-student/${res.data.user_id}`).then(
                        res => {
                            console.log(res.data);
                            setWithdrawalData(res.data)
                        }
                    )
                }
            )
        }
    }, [])

    const submit = (e) => {
        e.preventDefault()
        axios.post('api/post-withdrawal', { withdrawal_regis, withdrawal_reason, withdrawal_status, withdrawal_approve }).then(
            res => {
                setData(res.data);
                alert('Gửi yêu cầu thành công!');
            }
        )
    }
    return (
        <>
            {regis_data.regis_status == "Đã duyệt" ?
                <>

                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-center mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Yêu Cầu Rút Ký Túc Xá</h1>
                        </div>
                        <div className='row'>
                            {/* <!-- Area Chart --> */}
                            <div className='col-xl-2 col-lg-2'></div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="card shadow mb-4">
                                    {/* <!-- Card Header - Dropdown --> */}
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Muốn Yêu Cầu Vào Form Sau</h6>
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
                                                <label for="room_name">Sinh viên yêu cầu rút (Họ tên - Mã số sinh viên)</label>
                                                <input value={regis_data.user_fullname + ' - ' + regis_data.user_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readonly />
                                            </div>
                                            <div class="form-group">
                                                <label for="room_name">Phòng sinh viên muốn rút (ID)</label>
                                                <input value={regis_data.room_name + ' ' + '(ID: ' + regis_data.room_id + ')'} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readonly />
                                            </div>
                                            <div class="form-group">
                                                <label for="room_name">Mã đơn đăng ký (ID)</label>
                                                <input onChange={e => { setWithdrawalRegis(e.target.value) }} value={regis_data.regis_id} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readonly />
                                            </div>

                                            <div class="form-group">
                                                <label for="room_name">Lý do rút</label>
                                                <input onChange={e => { setWithdrawalReason(e.target.value) }} value={withdrawal_reason} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>

                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                                            </div>
                                            <button type="submit" class="btn btn-primary"><i class="far fa-envelope"></i> Gửi yêu cầu</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-2'></div>
                        </div>
                    </div>
                </>
                :
                <div className='container-fluid h1'>Bạn chưa tham gia phòng nào nên chưa thể yêu cầu rút KTX</div>
            }
            <div className='container-fluid'>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Các Yêu Cầu Rút Của Bạn</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID đơn yêu cầu</th>
                                        <th>ID đơn đăng ký</th>
                                        <th>Sinh viên</th>
                                        <th>Phòng</th>
                                        <th>Lý do</th>
                                        <th>Ngày gửi</th>
                                        <th>Ngày phản hồi</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                </tfoot>
                                <tbody>
                                    {withdrawal_data.map((item) => <>
                                        <tr>
                                            <td>{item.withdrawal_id}</td>
                                            <td>{item.withdrawal_regis}</td>
                                            <td>{item.user_name}</td>
                                            <td>{item.room_name}</td>
                                            <td>{item.withdrawal_reason}</td>
                                            <td>{item.created_at}</td>
                                            <td>{item.withdrawal_approve}</td>
                                            <td>
                                                {item.withdrawal_status}
                                            </td>
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

export default Withdrawal;