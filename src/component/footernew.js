import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <hr style={{height:"1px",border:"none",color:"#333",backgroundColor:"#333"}} ></hr>
            <Container>


                <Row>
                    <Col md="12" style={{ marginTop: '2em', marginBottom: '2em' }}>
                        <Row>
                            <Col xs="2">
                                <ul style={{ listStyleType: 'none', marginLeft: '-80px', fontSize: '14px', color: '#909090' }}>
                                    <li>Karir</li>
                                    <li>Blog</li>
                                    <li>Official Store</li>
                                    <li>Tagihan & Top Up</li>
                                </ul>
                            </Col>

                            <Col xs="2">
                                <ul style={{ listStyleType: 'none', marginLeft: '-80px', fontSize: '14px', color: '#909090' }}>
                                    <li>Tiket Kereta</li>
                                    <li>Pusat Penjual</li>
                                    <li>Hotlist</li>
                                    <li>Keuangan</li>
                                </ul>
                            </Col>

                            <Col xs="2">
                                <ul style={{ listStyleType: 'none', marginLeft: '-80px', fontSize: '14px', color: '#909090' }}>
                                    <li>Bantuan Tokopedia</li>
                                    <li>Aplikasi Tokopedia</li>
                                    <li>Mitra Toppers</li>
                                    <li>Daftar Official Store</li>
                                </ul>
                            </Col>

                            <Col xs="2" >
                                <ul style={{ listStyleType: 'none', marginLeft: '-80px', fontSize: '14px', color: '#909090' }}>
                                    <li>Kategori</li>
                                    <li>Kamus Tokopedia</li>
                                    <li>Deals Tokopedia</li>
                                    <li>Tiket Pesawat</li>
                                </ul>
                            </Col>

                            <Col xs="2" style={{ marginLeft: '-20px' }} >
                                <h6>Keamanan</h6>
                                <img src="https://ecs7.tokopedia.net/img/footer/PCI_logo.png" />
                            </Col>

                            <Col md="2" style={{ boxShadow: '5px 4px 0 0 rgba(166,166,166,.1)', border: '1px solid #e0e0e0', paddingTop: '25px', paddingLeft: '15px', textAlign: 'center' }}>
                                <img style={{ float: 'left', paddingRight: '1px' }} src="https://ecs7.tokopedia.net/img/footer/mobile-icon.png" />
                                <h6 style={{ float: 'right', fontSize: '12px', width: '115px', textAlign: 'left' }}>Dapatkan Aplikasi Mobile Tokopedia ></h6>
                                <p style={{ fontSize: '12px', color: 'grey', marginTop: '-15px', textAlign: 'left', paddingLeft: '40px' }}>IOS • Android</p>
                                <h6 style={{ marginTop: '40px', fontSize: '12px' }}>Ikuti Kami di</h6>
                                <ul style={{ listStyleType: 'none', display: 'flex', marginLeft: '-50px', width: '100%' }}>
                                    <li className="sosmed"><i class="fab fa-facebook-square"></i></li>
                                    <li className="sosmed"><i class="fab fa-twitter-square"></i></li>
                                    <li className="sosmed"><i class="fab fa-google-plus"></i></li>
                                    <li className="sosmed"><i class="fab fa-pinterest"></i></li>
                                    <li className="sosmed"><i class="fab fa-instagram"></i></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <hr style={{height:"1px",border:"none",color:"#333",backgroundColor:"#333"}} ></hr>
            <img style={{ width: '100%' }} src="https://a.imge.to/2019/07/11/cZsGw.png"></img>
            <div style={{marginBottom:"60px"}}></div>
        </div>
        );
    }
}