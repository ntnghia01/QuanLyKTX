import React, { useEffect, useState, useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

function MenuStudent() {
    const [user_id, setUserID] = useState('');
    const isMountedRef = useRef(true);
    useEffect(() => {
        {
            axios.get('/get-session').then(
                res => {
                    if(isMountedRef.current){
                        setUserID(res.data.user_id)
                    }
                }
            )
        }
        return () => {
            // set the flag to false when component is unmounting
            isMountedRef.current = false;
          };
    }, [])
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img src="img/LOGOv2.png" width="80" height="80" />
                    </div>
                    <div className="sidebar-brand-text mx-3"> Student <sup>{user_id}</sup></div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item">
                    <Link to='welcome' className="nav-link"><i className="fas fa-fw fa-tachometer-alt"></i><span>Trang chủ</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Interface
                </div>
                <li className="nav-item">
                    <Link to='/list-room-student' className="nav-link">
                    <i class="fas fa-home"></i>
                        <span>Danh sách phòng</span></Link>
                </li>
                <li className="nav-item">
                    <Link to='/register-room' className="nav-link">
                    <i class="fas fa-registered"></i>
                        <span>Đăng ký ở</span></Link>
                </li>
                <li className="nav-item">
                    <Link to='/room-infomation' className="nav-link">
                    <i class="fas fa-info-circle"></i>
                        <span>Xem thông tin phòng</span></Link>
                </li>
                <li className="nav-item">
                    <Link to='/personal-information' className="nav-link">
                    <i class="fas fa-users-cog"></i>
                        <span>Xem thông tin cá nhân</span></Link>
                </li>
                <li className="nav-item">
                    <Link to='/feedback' className="nav-link">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Sửa chữa CSVC</span></Link>
                </li>
                <li className="nav-item">
                    <Link to='/withdrawal' className="nav-link">
                    <i class="fas fa-minus-circle"></i>
                        <span>Rút đơn ở KTX</span></Link>
                </li>


                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Addons
                </div>
                <li className="nav-item">
                    <a className="nav-link" href="/logout/user">
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Đăng xuất</span></a>
                </li>


                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>



            </ul>

        </>
    );
}

export default MenuStudent;