import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Welcome() {

    // const [student_id, setStudentID] = useState('');
    // const [room_info_data, setRoomInfoData] = useState([]);
    // const [elec_water_bill_info_data, setElecWaterBillInfoData] = useState([]);
    // const [room_bill_info_data, setRoomBillInfoData] = useState([]);

    // useEffect(() => {
    //     {
    //         axios.get('../get-session').then(
    //             res => {
    //                 setStudentID(res.data.user_id)
    //                 axios.get(`../api/get-registration-by-student/${res.data.user_id}`).then(
    //                     res => {
    //                         setRoomInfoData(res.data)
    //                         axios.get(`../api/elec-water-bill-by-room/${res.data.room_id}`).then(
    //                             res => {
    //                                 setElecWaterBillInfoData(res.data)
    //                             }
    //                         )
    //                         axios.get(`../api/room-bill-by-regis/${res.data.regis_id}`).then(
    //                             res => {
    //                                 setRoomBillInfoData(res.data)
    //                             }
    //                         )
    //                     }
    //                 )
    //             }
    //         )
    //     }

    // }, [])

    return (
        <>
            <h1 className='text-center'>
                <div><img src="img/LOGOblackwhite.png" width="150" height="150" /></div>
                <div>HỆ THỐNG QUẢN LÝ KÝ TÚC XÁ</div>
            </h1>
            <div id="carouselExampleCaptions" class="carousel slide m-3" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <img src="https://www.ctu.edu.vn/images/slideweb2.png" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <img src="https://www.ctu.edu.vn/images/ctuhightechbuilding.png" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.ctu.edu.vn/images/2022/2242023_slideweb.png" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>

            <div className='container-fluid'>
                <div className='row p-3'>
                    <div className='col-5 text-center card p-3'>
                        <h2 className='text-center'>
                            <div>Hướng Dẫn</div>
                        </h2>
                        <div class="alert alert-primary" role="alert">
                            1. Chọn phòng phù hợp từ danh sách phòng
                        </div>
                        <div className='text-center h1'><i class="fas fa-arrow-down"></i></div>
                        <div class="alert alert-secondary" role="alert">
                            2.Nhấn vào đăng ký hoặc đến trang đăng ký
                        </div>
                        <div className='text-center h1'><i class="fas fa-arrow-down"></i>
                        </div>
                        <div class="alert alert-info" role="alert">
                            3. Điền các thông tin cần thiết
                        </div>
                        <div className='text-center h1'><i class="fas fa-arrow-down"></i>
                        </div>
                        <div class="alert alert-success" role="alert">
                            4. Nhấn gửi và đợi phản hồi
                        </div>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-6 card p-3'>
                        <h2 className='text-center'>
                            <div>Giới thiệu</div>
                        </h2>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'><img src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/02/16/img-4076_1676556495.jpg" class="d-block w-100" alt="..." /></div>
                                <div className='col-6'>
                                    <p>Ký túc xá được xây dựng với các thiết bị hiện đại. Cơ sở vật chất đầy đủ giúp hỗ trợ sinh viên có một nơi sinh hoạt tiện nghi nhất</p>
                                    <p>Vật dụng thiết yếu được trang bị sẵn và đội ngũ quản lý thân thiện</p>
                                    <p>An ninh tuyệt đối, đội ngũ bảo vệ trực 24/7</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>





        </>
    );
}

export default Welcome;