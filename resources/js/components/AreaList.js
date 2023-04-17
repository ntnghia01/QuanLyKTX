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

            setArea(area.filter(area => area.area_id !== area_id))
        )
    }
    return (
        <>

            <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Khu Trong Hệ Thống</h1>
                </div>
                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800 text-center">KHU</h1>
                

                <Link to='../add-area' class="btn btn-primary mb-3"><i class="fas fa-plus"></i> Thêm Khu</Link>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4 border-left-success">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Khu</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                                    {area.map((item) => <>
                                        <tr>
                                            <td>{item.area_id}</td>
                                            <td>{item.area_name}</td>
                                            <td>{item.area_desc}</td>
                                            <td>{item.created_at}</td>
                                            <td>{item.updated_at}</td>
                                            <td>
                                                <Link to={`../edit-area/${item.area_id}`} className="btn btn-sm btn-warning m-1">
                                                    <span class="icon text-white-50">
                                                        <i class="fas fa-edit"></i>
                                                    </span>
                                                    <span class="text"> Cập nhật</span>
                                                </Link>
                                                <a type="button" onClick={() => { setDID(item.area_id) }} data-toggle="modal" data-target="#staticBackdrop" className="btn btn-sm btn-danger m-1" >
                                                    <span class="icon text-white-50">
                                                        <i class="fas fa-trash"></i>
                                                    </span>
                                                    <span class="text"> Xóa</span>
                                                </a>
                                            </td>
                                        </tr>
                                    </>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <p class="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>
            </div>


            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Xóa Khu</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Bạn có chắc muốn xóa Khu ID:{delete_id}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
                            <button type="button" onClick={() => { handleDelete(delete_id) }} class="btn btn-danger" data-dismiss="modal">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AreaList;