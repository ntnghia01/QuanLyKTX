import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function AreaList() {

    const navigate = useNavigate();


    const [area, setArea] = useState([]);
    useEffect(() => {
        {
            axios.get('api/get-area').then(
                res => {
                    setArea(res.data)
                }
            )
        }
    }, [])

    const [delete_id, setDID] = useState('');
    const handleDelete = (area_id) => {
        axios.delete(`api/delete-area/${area_id}`).then(
            setArea(area.filter(area => area.area_id !== area_id)),
            alert('Xóa thành công')
        )
    }
    return (
        <>

            <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Khu Trong Hệ Thống</h1>
                </div>
                {/* <!-- Page Heading --> */}
                <h1 className="h3 mb-2 text-gray-800 text-center">KHU</h1>
                

                <Link to='../add-area' className="btn btn-primary mb-3"><i className="fas fa-plus"></i> Thêm Khu</Link>

                {/* <!-- DataTales Example --> */}
                <div className="card shadow mb-4 border-left-success">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Khu</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID Khu</th>
                                        <th>Tên Khu</th>
                                        <th>Mô Tả Khu</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID Khu</th>
                                        <th>Tên Khu</th>
                                        <th>Mô Tả Khu</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {area.map((item) => 
                                        <tr  key={item.area_id}>
                                            <td>{item.area_id}</td>
                                            <td>{item.area_name}</td>
                                            <td>{item.area_desc}</td>
                                            <td>{item.created_at}</td>
                                            <td>{item.updated_at}</td>
                                            <td>
                                                <Link to={`../edit-area/${item.area_id}`} className="btn btn-sm btn-warning m-1">
                                                    <span className="icon text-white-50">
                                                        <i className="fas fa-edit"></i>
                                                    </span>
                                                    <span className="text"> Cập nhật</span>
                                                </Link>
                                                <a type="button" onClick={() => { setDID(item.area_id) }} data-toggle="modal" data-target="#staticBackdrop" className="btn btn-sm btn-danger m-1" >
                                                    <span className="icon text-white-50">
                                                        <i className="fas fa-trash"></i>
                                                    </span>
                                                    <span className="text"> Xóa</span>
                                                </a>
                                            </td>
                                        </tr>
                                    
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <p className="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>
            </div>


            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Xóa Khu</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc muốn xóa Khu ID:{delete_id}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Thoát</button>
                            <button type="button" onClick={() => { handleDelete(delete_id) }} className="btn btn-danger" data-dismiss="modal">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AreaList;