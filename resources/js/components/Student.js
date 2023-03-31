import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderStudent from './HeaderStudent';
import MenuStudent from './MenuStudent';

import RoomListStudent from './RoomListStudent';
import RegisterRoom from './RegisterRoom';
import FeedBack from './FeedBack';
import RoomInfo from './RoomInfo';
import PersonalInfo from './PersonalInfo';
import PersonalEdit from './PersonalInfoEdit';
import Withdrawal from './Withdrawal';


function Student() {
    return (
        <>
            <div id="page-top">

                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/* <!-- Sidebar --> */}
                    <div>
                        <MenuStudent />
                    </div>
                    {/* <!-- End of Sidebar --> */}

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">
                            <div></div>

                            {/* <!-- Topbar --> */}
                            <HeaderStudent />
                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            {/* <Dashboard /> */}
                            <Routes>
                                <Route path="list-room-student" element={<RoomListStudent />} ></Route>
                                <Route path="register-room" element={<RegisterRoom />} ></Route>
                                <Route path="room-infomation" element={<RoomInfo />} ></Route>
                                <Route path="personal-infomation" element={<PersonalInfo />} ></Route>
                                <Route path="edit-personal-info/:id" element={<PersonalEdit />} ></Route>
                                <Route path="feedback" element={<FeedBack />} ></Route>
                                <Route path="withdrawal" element={<Withdrawal />} ></Route>
                            </Routes>
                            {/* <!-- /.container-fluid --> */}

                        </div>
                        {/* <!-- End of Main Content --> */}

                        {/* <!-- Footer --> */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; nguyentrungnghia26112001@gmail.com</span>
                                </div>
                            </div>
                        </footer>
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/* <!-- End of Content Wrapper --> */}

                </div>
                {/* <!-- End of Page Wrapper --> */}

                {/* <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                {/* <!-- Logout Modal--> */}
                <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Student;

// ReactDOM.render(<Student />, document.getElementById('student'));
// const root = ReactDOM.createRoot(document.getElementById('student'));
// root.render(<Student />);

