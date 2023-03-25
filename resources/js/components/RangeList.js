import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
function RangeList() {
    const [range_name, setRangeName] = useState('');
    const [range_desc, setRangeDesc] = useState('');

    const [range, setRange] = useState([]);
    const [data, setData] = useState({});
    useEffect(() => {
        {
            axios.get('api/get-range').then(
                res => {
                    setRange(res.data)
                }
            )
        }
    }, [])
    const submit = (e) => {
        e.preventDefault()
        axios.post('api/post-create-range', { range_name, range_desc }).then(
            res => {
                setData(res.data);
            }
        )
    }

    const [delete_id, setDID] = useState('');

    const handleDelete = (range_id) => {
        axios.delete(`api/delete-range/${range_id}`).then(
            setRange(range.filter(range => range.range_id !== range_id))
            
        )
    }

    return (
        <>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Danh Sách Các Dãy Trong Hệ Thống</h1>
            </div>
            <div class="container-fluid">

                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Dãy</h1>
                <p class="mb-4">Bảng dữ liệu dựa vào kho dữ liệu trên hệ thống, nếu có vấn đề không mong muốn xảy ra vui lòng <a target="_blank"
                    href="https://datatables.net">liên hệ với nhà phát triển</a>.</p>

                {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bảng Dữ Liệu Dãy</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>ID Dãy</th>
                                        <th>Tên Dãy</th>
                                        <th>Thuộc Khu</th>
                                        <th>Mô Tả Dãy</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID Dãy</th>
                                        <th>Tên Dãy</th>
                                        <th>Thuộc Khu</th>
                                        <th>Mô Tả Dãy</th>
                                        <th>Ngày Tạo</th>
                                        <th>Ngày Cập Nhật</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {range.map((item) => <>
                                        <tr>
                                            <td>{item.range_id}</td>
                                            <td>{item.range_name}</td>
                                            <td>{item.range_area.area_name}</td>
                                            <td>{item.range_desc}</td>
                                            <td>{item.created_at}</td>
                                            <td>{item.updated_at}</td>
                                            <td>
                                                <Link to={`../edit-range/${item.range_id}`} className="btn btn-sm btn-warning btn-icon-split">
                                                    <span class="icon text-white-50">
                                                        <i class="fas fa-exclamation-triangle"></i>
                                                    </span>
                                                    <span class="text">Cập nhật</span>
                                                </Link>
                                                <a type="button" onClick={() => { setDID(item.range_id) }} data-toggle="modal" data-target="#staticBackdrop" className="btn btn-sm btn-danger btn-icon-split" >
                                                    <span class="icon text-white-50">
                                                        <i class="fas fa-trash"></i>
                                                    </span>
                                                    <span class="text">Xóa</span>
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
            </div>

            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Bạn có chắc muốn xóa Dãy ID:{delete_id}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
                            <button type="button" onClick={() => { handleDelete(delete_id) }} class="btn btn-danger" data-dismiss="modal">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* {range.map((item) => <><p>{item.range_name}</p>
                <p>{item.range_desc}</p></>
            )} */}
        </>
    );
}

export default RangeList;