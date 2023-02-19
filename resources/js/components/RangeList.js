import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function RangeList() {
    const [range_name, setRangeName]=useState('');
    const [range_desc, setRangeDesc]=useState('');

    const [range, setRange ] = useState([]); 
    const [data,setData] = useState({});
    useEffect(()=>{{
        axios.get('api/get-range').then(
            res=>{
                setRange(res.data)
            }
        )
    }},[])
    const submit = (e)=>{
        e.preventDefault()
        axios.post('api/post-create-range',{range_name,range_desc}).then(
            res =>{
                setData(res.data);
            }
        )
    }
  return (
    <>
    <Form onSubmit={(e) =>{submit(e)}}>
        {/* TÊN Dãy */}
       { range !=''  && <Form.Text className="text-muted">
                {range[0].range_name}
         </Form.Text>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tên Dãy</Form.Label>
            <Form.Control onChange={e=>{setChangeName(e.target.value)}} type="range_name" placeholder="Điền tên dãy" value={range_name}/>
            <Form.Text className="text-muted">
                Vui lòng kiểm tra trước khi nhấn thêm.
            </Form.Text>
        </Form.Group>
        {/* MÔ TẢ dãy */}
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
        Thêm
      </Button>
    </Form>
        {range.map((item) => <><p>{item.range_name}</p>
        <p>{item.range_desc}</p></>
        )}
    </>
  );
}

export default RangeList;