import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

function MenuStudent() {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3"> Student <sup>ID</sup></div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item">
                    <Link to='dashboard' className="nav-link"><i className="fas fa-fw fa-tachometer-alt"></i><span>Trang chủ</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Interface
                </div>
                <li className="nav-item">
                    <Link to='/list-room-student' className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Danh sách phòng</span></Link>
                </li>
                <li className="nav-item">
                    <Link to='/register-room' className="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Đăng ký ở</span></Link>
                </li>
                <li className="nav-item">
                    <Link to='' className="nav-link" href="charts.html">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Xem thông tin phòng</span></Link>
                </li>
                <li className="nav-item">
                    <Link to='' className="nav-link" href="charts.html">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Sửa chữa CSVC</span></Link>
                </li>
                

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Addons
                </div>

                

                

                

            </ul>
            
        </>
    );
}

export default MenuStudent;