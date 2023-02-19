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

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
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
                        </Routes>
                    </div>
                    
                </div>
            </BrowserRouter>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));

