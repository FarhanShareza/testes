import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss'
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { logoTopcoat } from '../../../../assets';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className="box-footer">
                            <div className="box-logo-footer">
                                <img className="logo-footer" src={logoTopcoat}/>
                            </div>
                            <p className="t-box-footer">TOPCOAT telah teruji serta disertifikasi oleh SGS yaitu badan pengujian No.1 di dunia yang telah diakui dan mempunyai sertifikat</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="box-footer">
                            <div className="tl-box-footer">OUR SERVICE</div>
                            <ul className="t-sub-box t-link-white t-box-footer" type="none">
                                <li><NavLink to="/login" className="t-link-white">Nano Ceramic Coating</NavLink></li>
                                <li><NavLink to="/login" className="t-link-white">Auto Detailing</NavLink></li>
                                <li><NavLink to="/login" className="t-link-white">Glass Coating</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="box-footer">
                            <h2 className="tl-box-footer">OUR OUTLETS</h2>
                            <div className="t-box-footer">
                                <p>Jl. Ring Road No.14, Tj. Sari, Kec. Medan Selayang, Kota Medan, Sumatera Utara 20133</p>
                                <p>Call Center</p>
                                <p>0811-1011-605</p>
                                <span>
                                    <NavLink to="/login" className="icon-smedia">
                                        <FaFacebookSquare />
                                    </NavLink>
                                </span>
                                <span>
                                    <NavLink to="/login" className="icon-smedia">
                                        <FaInstagramSquare />
                                    </NavLink>
                                </span>
                                <span>
                                    <NavLink to="/login" className="icon-smedia">
                                        <FaWhatsappSquare />
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="box-copyright">
                            <div className="t-copyright">
                                <div>© 2023 TOPCOAT, Inc. All Rights Reserved</div>
                                <div>Farhan Syahreza</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div> 
    )
}

export default Footer
