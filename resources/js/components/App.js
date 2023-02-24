import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderAdmin from './HeaderAdmin';
import MenuAdmin from './MenuAdmin';
import AreaAdd from './AreaAdd';
import AreaList from './AreaList';
import RangeAdd from './RangeAdd';
import RangeList from './RangeList';
import Dashboard from './Dashboard';
import TypeRoomAdd from './TypeRoomAdd';
import RangeEdit from './RangeEdit';
import AreaEdit from './AreaEdit';
import TypeRoomList from './TypeRoomList';
import TypeRoomEdit from './TypeRoomEdit';
import RoomAdd from './RoomAdd';
import RoomList from './RoomList';
import RoomEdit from './RoomEdit';


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="page-top">

                    {/* <!-- Page Wrapper --> */}
                    <div id="wrapper">

                        {/* <!-- Sidebar --> */}
                        <div>
                        <MenuAdmin />
                        <Routes>
                            {/* <Route path="add-area" element={<AreaAdd />} ></Route> */}
                            {/* <Route path="list-area" element={<AreaList />} ></Route> */}
                            {/* <Route path="add-range" element={<RangeAdd />} ></Route> */}
                            {/* <Route path="list-range" element={<RangeList />} ></Route> */}
                        </Routes>
                    </div>
                        {/* <!-- End of Sidebar --> */}

                        {/* <!-- Content Wrapper --> */}
                        <div id="content-wrapper" className="d-flex flex-column">

                            {/* <!-- Main Content --> */}
                            <div id="content">

                                {/* <!-- Topbar --> */}
                                <HeaderAdmin />
                                {/* <!-- End of Topbar --> */}

                                {/* <!-- Begin Page Content --> */}
                                {/* <Dashboard /> */}
                                <Routes>
                                    <Route path="dashboard" element={<Dashboard />} ></Route>
                                    <Route path="add-area" element={<AreaAdd />} ></Route>
                                    <Route path="list-area" element={<AreaList />} ></Route>
                                    <Route path="edit-area/:area_id" element={<AreaEdit />} ></Route>
                                    <Route path="add-range" element={<RangeAdd />} ></Route>
                                    <Route path="list-range" element={<RangeList />} ></Route>
                                    <Route path="edit-range/:range_id" element={<RangeEdit />} ></Route>
                                    <Route path="add-type-room" element={<TypeRoomAdd />} ></Route>
                                    <Route path="list-type-room" element={<TypeRoomList />} ></Route>
                                    <Route path="edit-type-room/:type_id" element={<TypeRoomEdit />} ></Route>
                                    <Route path="add-room" element={<RoomAdd />} ></Route>
                                    <Route path="list-room" element={<RoomList />} ></Route>
                                    <Route path="edit-room/:room_id" element={<RoomEdit />} ></Route>
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
                {/* <div>

                    <div>
                        <HeaderAdmin />
                    </div>
                    <div>
                        <MenuAdmin />
                        <Routes>
                            <Route path="add-area" element={<AreaAdd />} ></Route>
                            <Route path="list-area" element={<AreaList />} ></Route>
                            <Route path="add-range" element={<RangeAdd />} ></Route>
                            <Route path="list-range" element={<RangeList />} ></Route>
                            <Route path="add-type-room" element={<TypeRoomAdd />} ></Route>
                        </Routes>
                    </div>

                </div> */}
            </BrowserRouter>

        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));

