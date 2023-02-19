import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function AreaList() {
    const [area_name, setAreaName]=useState('');
    const [area_desc, setAreaDesc]=useState('');

    const [area, setArea ] = useState([]); 
    const [data,setData] = useState({});
    useEffect(()=>{{
        axios.get('api/get-area').then(
            res=>{
                setArea(res.data)
            }
        )
    }},[])
    const submit = (e)=>{
        e.preventDefault()
        axios.post('api/area/post-create-area',{area_name,area_desc}).then(
            res =>{
                setData(res.data);
            }
        )
    }
  return (
    <>
    <Form onSubmit={(e) =>{submit(e)}}>
        {/* TÊN KHU */}
       { area !=''  && <Form.Text className="text-muted">
                {area[0].area_name}
         </Form.Text>}
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
        {area.map((item) => <><p>{item.area_name}</p>
        <p>{item.area_desc}</p></>
        )}
    </>
  );
}

export default AreaList;