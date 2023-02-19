import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import {Link} from 'react-router-dom';

function MenuAdmin() {
  return (
    <>
      <div>
        <DropdownButton
          align={{ lg: 'start' }}
          title="Quản lý khu"
          id="dropdown-menu-align-responsive-1"
        >
          <Dropdown.Item eventKey="1"><Link to='add-area'>Thêm khu</Link></Dropdown.Item>
          <Dropdown.Item eventKey="2"><Link to='list-area'>Liệt kê khu</Link></Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="mt-2">
        <SplitButton
          align={{ lg: 'start' }}
          title="Quản lý dãy"
          id="dropdown-menu-align-responsive-2"
        >
          <Dropdown.Item eventKey="1"><Link to='add-range'>Thêm dãy</Link></Dropdown.Item>
          <Dropdown.Item eventKey="2"><Link to='list-range'>Liệt kê dãy</Link></Dropdown.Item>
        </SplitButton>
      </div>
    </>
  );
}

export default MenuAdmin;