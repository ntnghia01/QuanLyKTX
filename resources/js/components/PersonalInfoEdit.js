import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
function PersonalEdit() {

    const navigate = useNavigate();

    const { id } = useParams();

    console.log(id);

    const [user_id, setStudentID] = useState('');

    const [personal_mssv, setPersonalMSSV] = useState('');
    const [personal_name, setPersonalName] = useState('');
    const [personal_email, setPersonalEmail] = useState('');
    const [personal_major, setPersonalMajor] = useState('');
    const [personal_address, setPersonalAddress] = useState('');
    const [personal_phone, setPersonalPhone] = useState('');
    const [personal_birthday, setPersonalBirthday] = useState('');
    const [personal_class, setPersonalClass] = useState('');
    const [personal_course, setPersonalCourse] = useState('');

    const [personal_data, setPersonalInfoData] = useState([]);

    useEffect(() => {
        {
            axios.get('../get-session').then(
                res => {
                    setStudentID(res.data.user_id)
                    axios.get(`../api/personal-infomation/${res.data.user_id}`).then(
                        res => {
                            setPersonalInfoData(res.data)

                            setPersonalMSSV(res.data.user_name)
                            setPersonalName(res.data.user_fullname)
                            setPersonalEmail(res.data.email)
                            setPersonalMajor(res.data.user_major)
                            setPersonalAddress(res.data.user_address)
                            setPersonalPhone(res.data.user_phone)
                            setPersonalBirthday(res.data.user_birthday)
                            setPersonalClass(res.data.user_class)
                            setPersonalCourse(res.data.user_course)
                        }
                    )
                }
            )
        }
        // {
        //     axios.get(`../api/personal-infomation/${id}`).then(
        //         res => {
        //             setPersonalInfoData(res.data)
        //         }
        //     )
        // }

    }, [])

    const submit = (e) => {
        e.preventDefault()
        axios.put(`../api/update-personal-infomation/${user_id}`, {  
            personal_mssv, 
            personal_name, 
            personal_email, 
            personal_major, 
            personal_address, 
            personal_phone,
            personal_birthday,
            personal_class,
            personal_course
        }).then(
            res => {
                console.log(res)
                navigate('../personal-infomation');
            }
        )
    }
    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Cập Nhật Thông Tin Cá Nhân ID:{user_id}</h1>
            </div>
            <div className="row">
                {/* <!-- Area Chart --> */}
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Nhập Thông Tin Thông Tin Cá Nhân Muốn Cập Nhật Vào Form Sau</h6>
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
                                    <label for="area_name">MSSV</label>
                                    <input onChange={e => { setPersonalMSSV(e.target.value) }} value={personal_mssv} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_name">Họ tên</label>
                                    <input onChange={e => { setPersonalName(e.target.value) }} value={personal_name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_name">Email</label>
                                    <input onChange={e => { setPersonalEmail(e.target.value) }} value={personal_email} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_name">Ngành học</label>
                                    <input onChange={e => { setPersonalMajor(e.target.value) }} value={personal_major} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_name">Hộ khẩu</label>
                                    <input onChange={e => { setPersonalAddress(e.target.value) }} value={personal_address} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_name">Số điện thoại</label>
                                    <input onChange={e => { setPersonalPhone(e.target.value) }} value={personal_phone} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_desc">Ngày sinh</label>
                                    <input onChange={e => { setPersonalBirthday(e.target.value) }} value={personal_birthday} type="text" class="form-control" id="area_desc_id" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_desc">Lớp chuyên ngành</label>
                                    <input onChange={e => { setPersonalClass(e.target.value) }} value={personal_class} type="text" class="form-control" id="area_desc_id" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                <div class="form-group">
                                    <label for="area_desc">Khóa</label>
                                    <input onChange={e => { setPersonalCourse(e.target.value) }} value={personal_course} type="text" class="form-control" id="area_desc_id" />
                                    <small id="emailHelp" class="form-text text-muted">Vui lòng kiểm tra dữ liệu nhập trước khi xác nhận.</small>
                                </div>
                                
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Xác nhận dữ liệu đã nhập</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Cập Nhật Thông Tin</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default PersonalEdit;