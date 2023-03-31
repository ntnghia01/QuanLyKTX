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

    useEffect(() => {
        {
            axios.get('/get-session').then(
                res => {
                    setUserID(res.data.user_id)
                    axios.get(`../api/yes-no-registration/${res.data.user_id}`).then(
                        res => {
                            console.log(res.data);
                            setRegistrationData(res.data)
                            setWithdrawalRegis(res.data.regis_id)
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
                alert('Gửi yêu cầu thành công');
            }
        )
    }
    return (
        <>
            {regis_data.regis_status == "Đã duyệt" ?
                <>
                    
                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Yêu Cầu Rút KTX</h1>
                        </div>
                        {/* <!-- Area Chart --> */}
                        <div className="container-fluid">
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
                                            <label for="room_name">Sinh viên yêu cầu rút (ID)</label>
                                            <input value={regis_student} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readonly />
                                        </div>
                                        <div class="form-group">
                                            <label for="room_name">Phòng sinh viên muốn rút (ID)</label>
                                            <input value={regis_data.regis_room} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readonly />
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
                                        <button type="submit" class="btn btn-primary">Gửi yêu cầu</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div>Bạn chưa tham gia phòng nào nên chưa thể yêu cầu rút KTX</div>
            }
        </>
    );
}

export default Withdrawal;