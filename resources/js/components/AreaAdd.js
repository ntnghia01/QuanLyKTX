import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function AreaAdd() {
    const [area_name, setAreaName]=useState('');
    const [area_desc, setAreaDesc]=useState('');
    const [data,setData] = useState({})
    const submit = (e)=>{
      e.preventDefault()
      axios.post('api/post-create-area',{area_name,area_desc}).then(
          res =>{
              setData(res.data);
          }
      )
    }
  return (

    <Form onSubmit={(e) =>{submit(e)}}>
        {/* TÊN KHU */}
        <Form.Text className="text-muted">
                {data.area_name}
         </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tên Khu</Form.Label>
            <Form.Control onChange={e=>{setAreaName(e.target.value)}} type="area_name" placeholder="Điền tên khu" value={area_name}/>
            <Form.Text className="text-muted">
                Vui lòng kiểm tra trước khi nhấn thêm.
            </Form.Text>
        </Form.Group>
        {/* MÔ TẢ KHU */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mô tả Khu</Form.Label>
            <Form.Control onChange={e=>{setAreaDesc(e.target.value)}} type="area_desc" placeholder="Điền mô tả khu" value={area_desc}/>
            <Form.Text className="text-muted">
                Vui lòng kiểm tra trước khi nhấn thêm.
            </Form.Text>
        </Form.Group>

      
      <Button variant="primary" type='submit'
    //   onClick={()=>{submit}}
      >
        Thêm
      </Button>
    </Form>
  );
}

export default AreaAdd;