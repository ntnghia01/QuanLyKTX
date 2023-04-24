import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

function Dashboard() {
    return (
        <>
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Tổng Quan</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-download fa-sm text-white-50"></i> Tạo báo cáo</a>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Tổng số phòng</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">30</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            Tổng số sinh viên đang ở</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">98</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-clipboard-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            Tổng số hóa đơn hiện tại</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">66</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Pending Requests Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            Ý kiến từ sinh viên</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Content Row --> */}

                <div className="row">

                    {/* <!-- Area Chart --> */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Tổng quan về lượng sinh viên đăng ký qua từng tháng</h6>
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
                                <div className="chart-area">
                                    <canvas id="myAreaChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Pie Chart --> */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Thống kê nam/nữ</h6>
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
                                <div className="chart-pie pt-4 pb-2">
                                    <canvas id="myPieChart"></canvas>
                                </div>
                                <div className="mt-4 text-center small">
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-primary"></i> Nam
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-success"></i> Nữ
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-info"></i> Khác
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">

                    {/* <!-- Content Column --> */}
                    <div className="col-lg-6 mb-4">

                        {/* <!-- Project Card Example --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="small font-weight-bold">Khu <span
                                    className="float-right">10</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-danger a2" role="progressbar"></div>
                                </div>
                                <h4 className="small font-weight-bold">Dãy <span
                                    className="float-right">20</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-warning a3" role="progressbar"></div>
                                </div>
                                <h4 className="small font-weight-bold">Loại phòng <span
                                    className="float-right">30</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar a4" role="progressbar"></div>
                                </div>
                                <h4 className="small font-weight-bold">Phòng <span
                                    className="float-right">40</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-info a5" role="progressbar"></div>
                                </div>
                                <h4 className="small font-weight-bold">Đơn đăng ký <span
                                    className="float-right">40</span></h4>
                                <div className="progress">
                                    <div className="progress-bar bg-success a6" role="progressbar"></div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Color System --> */}
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-primary text-white shadow">
                                    <div className="card-body">
                                        Primary
                                        <div className="text-white-50 small">#4e73df</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-success text-white shadow">
                                    <div className="card-body">
                                        Success
                                        <div className="text-white-50 small">#1cc88a</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body">
                                        Info
                                        <div className="text-white-50 small">#36b9cc</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-warning text-white shadow">
                                    <div className="card-body">
                                        Warning
                                        <div className="text-white-50 small">#f6c23e</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-danger text-white shadow">
                                    <div className="card-body">
                                        Danger
                                        <div className="text-white-50 small">#e74a3b</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-secondary text-white shadow">
                                    <div className="card-body">
                                        Secondary
                                        <div className="text-white-50 small">#858796</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-light text-black shadow">
                                    <div className="card-body">
                                        Light
                                        <div className="text-black-50 small">#f8f9fc</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-dark text-white shadow">
                                    <div className="card-body">
                                        Dark
                                        <div className="text-white-50 small">#5a5c69</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6 mb-4">

                        {/* <!-- Illustrations --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Mô tả hệ thống</h6>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 a7"
                                        src="img/undraw_posting_photo.svg" alt="..." />
                                </div>
                                <p>Hệ thống được xây dựng dựa trên nền web có thể truy cập mọi lúc mọi nơi, phù hợp với nhiều loại thiết bị từ trình duyệt máy tính đến tablet và điện thoại thông minh <a
                                    target="_blank" rel="nofollow" href="https://undraw.co/">Hệ thống</a>, a
                                    cam kết an toàn và tiện dụng cho người dùng</p>
                                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                    unDraw &rarr;</a>
                            </div>
                        </div>

                        {/* <!-- Approach --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                            </div>
                            <div className="card-body">
                                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                                    CSS bloat and poor page performance. Custom CSS classNamees are used to create
                                    custom components and custom utility classNamees.</p>
                                <p className="mb-0">Before working with this theme, you should become familiar with the
                                    Bootstrap framework, especially the utility classNamees.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Dashboard;