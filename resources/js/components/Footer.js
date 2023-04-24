import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Footer () {
    return (
        <div class="container-fluid mt-3 rounded-top">
            <br />
            <br />
            <br />
            <hr />
                <div class="row">
                    <div class="col-3">
                        <p><span><img src="img/LOGOblackwhite.png" width="80" height="80" /></span><span>Hệ Thống Quản Lý Ký Túc Xá</span></p>
                        <p><i class="fas fa-map-marker-alt"></i> Xuân Khánh, Ninh Kiều, Cần Thơ</p>
                        <p><i class="fas fa-phone"></i> 0559 303 471</p>
                        <p><i class="fas fa-mailbox"></i> nghiab1910265@student.ctu.edu.vn</p>
                    </div>
                    <div class="col-3">
                        <p><i class="fas fa-map-signs"></i> Xem hướng dẫn</p>
                        <p><i class="fas fa-list"></i> Xem danh sách phòng</p>
                        <p><i class="fas fa-registered"></i> Đăng ký ở</p>
                        <p><i class="fab fa-facebook"></i> <i class="fab fa-instagram-square"></i> <i class="fab fa-twitter"></i> <i class="fab fa-tiktok"></i> </p>
                    </div>
                    <div class="col-3">
                        <p><i class="fas fa-info-circle"></i> Xem thông tin phòng</p>
                        <p><i class="fas fa-user"></i> Xem thông tin cá nhân</p>
                        <p><i class="fas fa-file-invoice"></i> Xem các hóa đơn</p>
                    </div>
                    <div class="col-3">
                        <p><i class="fas fa-wrench"></i> Sửa chữa cơ sở vật chất</p>
                        <p><i class="fas fa-comments"></i> Ý kiến, phản hồi</p>
                        <p><i class="far fa-hand-paper"></i> Rút đơn ở</p>
                    </div>
                </div>
            </div>
    )
}

export default Footer;