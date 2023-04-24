import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

function MenuAdmin() {

    const [user_id, setUserID] = useState('');
    const [user_role, setUserRole] = useState('');

    useEffect(() => {
        {
            axios.get('/get-session').then(
                res => {
                    setUserID(res.data.user_id)
                }
            )
        }
    }, [])
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img src="img/LOGOv2.png" width="80" height="80" />
                    </div><br />
                    <div className="sidebar-brand-text mx-3"> Admin <sup>{user_id}</sup></div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item">
                    <Link to='dashboard' className="nav-link"><i className="fas fa-fw fa-tachometer-alt"></i><span>Tổng quan</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Các quản lý
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Quản Lý Khu</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Lựa chọn:</h6>
                            <Link to='add-area' className="collapse-item">Thêm khu</Link>
                            <Link to='list-area' className="collapse-item">Liệt kê khu</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTypeRoom"
                        aria-expanded="true" aria-controls="collapseTypeRoom">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Quản Lý Dãy</span>
                    </a>
                    <div id="collapseTypeRoom" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Lựa chọn:</h6>
                            <Link to='add-range' className="collapse-item">Thêm dãy</Link>
                            <Link to='list-range' className="collapse-item">Liệt kê dãy</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i class="fas fa-yin-yang"></i>
                        <span>Quản Lý Loại Phòng</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Lựa chọn:</h6>
                            <Link to='add-type-room' className="collapse-item">Thêm loại phòng</Link>
                            <Link to='list-type-room' className="collapse-item">Liệt kê loại phòng</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilitiesFour"
                        aria-expanded="true" aria-controls="collapseUtilitiesFour">
                        <i class="fab fa-windows"></i>
                        <span>Quản Lý Phòng</span>
                    </a>
                    <div id="collapseUtilitiesFour" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Lựa chọn:</h6>
                            <Link to='add-room' className="collapse-item">Thêm phòng</Link>
                            <Link to='list-room' className="collapse-item">Liệt kê phòng</Link>
                        </div>
                    </div>
                </li>
                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilitiesFive"
                        aria-expanded="true" aria-controls="collapseUtilitiesFive">
                        <i class="fas fa-money-bill"></i>
                        <span>QL Hóa Đơn Điện Nước</span>
                    </a>
                    <div id="collapseUtilitiesFive" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Lựa chọn:</h6>
                            <Link to='add-elec-water-bill' className="collapse-item">Thêm hóa đơn</Link>
                            <Link to='list-elec-water-bill' className="collapse-item">Liệt kê hóa đơn</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilitiesSix"
                        aria-expanded="true" aria-controls="collapseUtilitiesSix">
                        <i class="fas fa-money-bill"></i>
                        <span>QL Hóa Đơn Tiền Phòng</span>
                    </a>
                    <div id="collapseUtilitiesSix" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Lựa chọn:</h6>
                            <Link to='add-room-bill' className="collapse-item">Thêm hóa đơn</Link>
                            <Link to='list-room-bill' className="collapse-item">Liệt kê hóa đơn</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <Link to='list-registration' className="nav-link">
                        <i class="fas fa-table"></i>
                        <span>Quản Lý Đơn Đăng Ký</span></Link>
                </li>

                <li className="nav-item">
                    <Link to='list-feedback' className="nav-link">
                        <i class="fas fa-table"></i>
                        <span>Quản Lý Ý Kiến Phản Hồi</span></Link>
                </li>

                <li className="nav-item">
                    <Link to='list-withdrawal' className="nav-link">
                        <i class="fas fa-table"></i>
                        <span>Quản Lý Đơn Rút KTX</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to='list-account' className="nav-link">
                        <i class="fas fa-user-alt"></i>
                        <span>Quản Lý Tài Khoản</span></Link>
                </li>


                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Di chuyển
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                {/* <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <a className="collapse-item" href="login.html">Login</a>
                            <a className="collapse-item" href="register.html">Register</a>
                            <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <a className="collapse-item" href="404.html">404 Page</a>
                            <a className="collapse-item" href="blank.html">Blank Page</a>
                        </div>
                    </div>
                </li> */}

                {/* <!-- Nav Item - Charts --> */}
                {/* <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li> */}

                {/* <!-- Nav Item - Tables --> */}
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

                {/* <!-- Sidebar Message --> */}
                {/* <div className="sidebar-card d-none d-lg-flex">
                    <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
                    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                </div> */}

            </ul>
        </>
    );
}

export default MenuAdmin;