import React from 'react';
import {Button, col, constainer, form, row} from "React-bootstrap"
import loginicon from '../../Documents/My Videos/123'
import './login.css';
import uiIng from '../../images/login.svg';

const Login = () => {
    return(
        <>
            <container className = "nt-5">
                <row>
                    <col lg={4} md={6} sm={12} className="text-center" nt-5 p-3>
                        <img className="icon1-img" src={loginicon} alt="icon"/>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" btn-block type="submit">Login</Button>
                   <div>
                       <a href="#"><small className="reset">password reset</small></a> II
                       <a href="#"><small className="reset">Quick Recover</small></a>
                   </div>
                    </Form>
                    </col>
                    <img className="w-100" src={uiIng} alt=""/>
                    <col lg={4} md={6} sm={12} ></col>
                </row>
            </container>
        </>
    );
};

export default Login;