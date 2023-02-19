import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function RangeAdd() {
    const [range_name, setRangeName]=useState('');
    const [range_desc, setRangeDesc]=useState('');
    const [data,setData] = useState({})
    const submit = (e)=>{
        e.preventDefault()
        axios.post('api/post-create-range',{range_name,range_desc}).then(
            res =>{
                setData(res.data);
            }
        )
    }
  return (

    <Form onSubmit={(e) =>{submit(e)}}>
        {/* TÊN DÃY */}
        <Form.Text className="text-muted">
                {data.range_name}
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tên Dãy</Form.Label>
            <Form.Control onChange={e=>{setRangeName(e.target.value)}} type="range_name" placeholder="Điền tên dãy" value={range_name}/>
            <Form.Text className="text-muted">
                Vui lòng kiểm tra trước khi nhấn thêm.
            </Form.Text>
        </Form.Group>
        {/* MÔ TẢ DÃY */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mô tả Dãy</Form.Label>
            <Form.Control onChange={e=>{setRangeDesc(e.target.value)}} type="range_desc" placeholder="Điền mô tả dãy" value={range_desc}/>
            <Form.Text className="text-muted">
                Vui lòng kiểm tra trước khi nhấn thêm.
            </Form.Text>
        </Form.Group>

      
      <Button variant="primary" type='submit'
    //   onClick={()=>{submit}}
      >
        Thêm dãy
      </Button>
    </Form>
  );
}

export default RangeAdd;