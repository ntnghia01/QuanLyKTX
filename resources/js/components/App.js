import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderAdmin from './HeaderAdmin';
import MenuAdmin from './MenuAdmin';
import AddArea from './AddArea';

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
                            <Route path="create" element={<AddArea />} ></Route>
                        </Routes>
                    </div>
                    
                </div>
            </BrowserRouter>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));

