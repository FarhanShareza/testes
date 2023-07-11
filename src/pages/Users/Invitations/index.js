import { React, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import { CModal, CButton } from '@coreui/react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoLocationSharp } from 'react-icons/io5';
import { FaLocationArrow } from "react-icons/fa";
import { Gallery, Item } from 'react-photoswipe-gallery'
import { musicInv, mgAnggun, mgIqbal, gallery3, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12} from '../../../assets';
import ReactAudioPlayer from 'react-audio-player';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'photoswipe/dist/photoswipe.css';
import './invitation.scss';
import Login from '../Login';
import Comment from '../Comment';
import Axios from 'axios'
import Form from '../Form';


const Invitations = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const [visible, setVisible] = useState(true)

    const [dataProduct, setDataProduct] = useState([]);

    
    let playMusic = new Audio("../../../assets/musics/musicInv.mp3")
    const playMp3 = () =>{
        playMusic.play()
    }


    useEffect(() => {
        Axios.get('https://apiku.topcoatmedan.com/inv/invitation')
        .then(result => {
            console.log('Data API : ', result)
            const resAPI = result.data;
            setDataProduct(resAPI.data)
        })
        .catch(err => {
            console.log('error: ', err)
        })
    }, [])
    
    return (
        <>
            <ReactAudioPlayer src={musicInv} autoPlay/>

            <CModal fullscreen visible={visible} onClose={() => setVisible(false)}>
                <div className='content-cover'>
                    <div className='content-center-main'>
                        <p className='t-28-main'>PERNIKAHAN</p>
                        <p className='t-38'>Anggun & Iqbal</p>
                        <p className='t-cover-m t-cover-margin'>Yth. Bapak/Ibu/Saudara/i</p>
                        <p className='t-cover t-cover-margin'>{params.get("to")}</p>
                        <p className='t-cover-m'>Tanpa mengurangi rasa hormat,</p>
                        <p className='t-cover-m'>Kami mengundang Bapak/Ibu/Saudara/i</p>
                        <p className='t-cover-m t-cover-margin-bottom'>untuk hadir di acara pernikahan kami.</p>
                        <CButton className='btn-cover' onClick={() => {setVisible(false); playMp3()}}>Buka Undangan</CButton>
                    </div>
                </div>
            </CModal>

            <div className="content-wrapper-home">
                <div className="box-home">  
                    <div className='content-center-main'>
                        <p className='t-28-main'>PERNIKAHAN</p>
                        <p className='t-38'>Anggun & Iqbal</p>
                        <p className='t-28'>05 . 08 . 23</p>
                    </div>
                </div>
            </div>
        
            <div className='content-wrapper-invitation'>
                <div className='box-content'>
                    <div className='title-main'>
                        <p className='text-t-m-s'>Pasangan</p>
                        <p className='text-t-m rmv-m-top'>Mempelai</p>
                        <p className='text-t-m-s-sub center-content'>Maha Suci Allah Subhanahu wa Ta'ala yang telah menciptakan makhluk-Nya berpasangan-pasangan. Ya allah, perkenankanlah dan Ridhoilah Perhikahan Kami.</p>
                    </div>
                    <Container> 
                        <Row>
                            <Col md>
                                <div className='profile-pic'>
                                    <img className="profile-pic-img" src={ mgAnggun } alt="First slide"/>
                                </div>            
                            </Col>
                            <Col md>
                                <div className='profile-main'> 
                                    <p className='text-p-name'>Anggun</p>
                                    <p className='text-p-f-name'>Miftah Anggun Winanda, S.H.</p>
                                    <hr/>
                                    <p className='text-s'>Putri dari</p>
                                    <div className='text-s-sub'>
                                        <p>Bapak H. Irza Winanda, S.E.</p>
                                        <p>&</p>
                                        <p>Ibu Dr. Hj. Sakwanah Pulungan, S.Ag., S.H., M.H.</p>
                                    </div>
                                </div>          
                            </Col>
                        </Row>
                        <Row>
                            <Col md>
                                <div className='profile-main'>
                                    <p className='text-p-name'>Iqbal</p>
                                    <p className='text-p-f-name'>Muhammad Iqbal, S.H., M.Kn.</p>
                                    <hr/>
                                    <p className='text-s'>Putra dari</p>
                                    <div className='text-s-sub'>
                                        <p>Bapak H. Riza Ahady Romly., S.H., M.Hum. (Alm)</p>
                                        <p>&</p>
                                        <p>Ibu Hj. Yusni</p>
                                    </div>
                                </div>        
                            </Col>
                            <Col md>
                                <div className='profile-pic'>
                                    <img className="profile-pic-img" src={ mgIqbal } alt="First slide"/>
                                </div>            
                            </Col>
                        </Row>
                    </Container> 
                </div>
            </div>

            <div className='brown'>
                <div className='content-wrapper-invitation'>
                    <div className='box-content'>
                        <div className='title-main'>
                            <p className='text-t-m-time rmv-m-top'>Waktu & Tempat</p>
                            <div className='box-timer-main'>
                                <Login/> 
                            </div>
                            <p className='text-t-m-s-sub center-content'>"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir"</p>
                            <p className='text-p-f-name'>- Q.S. Ar-Rum:21 -</p>
                
                            <Container>
                                <Row>
                                    <Col md={6} xs={12}>
                                        <div className='box-locations'>
                                            <div className="content-box-locations">
                                                <p className='text-t-m-s border-btm'>Akad</p>
                                                <p className='text-loc-time margin-t'>Sabtu</p>
                                                <p className='text-p-f-name'>5 Agustus 2023</p>
                                                <p className='text-loc-time'>08.00 - 10.00 WIB</p>
                                                <IoLocationSharp className='text-p-f-name margin-t-b' />
                                                <p className='text-loc'>Griya Benn</p>
                                                <p className='text-s-sub'>Jl. T. Amir Hamzah, Helvetia Tim., Medan, Kota Medan, Sumatera Utara</p>
                                                <button className='btn-loc'><FaLocationArrow className='icon-btn-loc'/><a href='https://goo.gl/maps/FQoxoiNcfSSoQ9EP8'>Lihat Lokasi</a></button>
                                            </div>
                                        </div>   
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <div className='box-locations'>
                                            <div className="content-box-locations">
                                                <p className='text-t-m-s border-btm'>Resepsi</p>
                                                <p className='text-loc-time margin-t'>Sabtu</p>
                                                <p className='text-p-f-name'>5 Agustus 2023</p>
                                                <p className='text-loc-time'>10.00 - 17.00 WIB</p>
                                                <IoLocationSharp className='text-p-f-name margin-t-b' />
                                                <p className='text-loc'>Griya Benn</p>
                                                <p className='text-s-sub'>Jl. T. Amir Hamzah, Helvetia Tim., Medan, Kota Medan, Sumatera Utara</p>
                                                <button className='btn-loc'><FaLocationArrow className='icon-btn-loc'/><a href='https://goo.gl/maps/FQoxoiNcfSSoQ9EP8'>Lihat Lokasi</a></button>
                                            </div>
                                        </div>              
                                    </Col>
                                </Row>
                            </Container> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-wrapper-invitation'>
                <div className='box-content'>
                    <div className='title-main'>
                        <p className='text-t-m-s'>Momen</p>
                        <p className='text-t-m rmv-m-top'>Bahagia Kami</p>
                        <p className='text-t-m-s-sub center-content'>"Kamu adalah sahabat dan kekasihku, dan aku tidak tahu sisi mana darimu yang paling aku nikmati. Aku menghargai setiap sisi, sama seperti aku telah menghargai hidup kita bersama"</p>
                        <div className='galery-margin'>
                            <Container className='galery-center'> 
                                <Gallery>
                                    <Item original={ gallery10 } thumbnail={ gallery10 } height="1024" width="683">
                                        {({ ref, open }) => (
                                            <img className="img-gallery-i" ref={ref} onClick={open} src={ gallery10 } />
                                        )}
                                    </Item>
                                    <Item original={ gallery11 } thumbnail={ gallery11 } height="1024" width="683">
                                        {({ ref, open }) => (
                                            <img className="img-gallery-i" ref={ref} onClick={open} src={ gallery11 } />
                                        )}
                                    </Item>
                                    <Item original={ gallery3 } thumbnail={ gallery3 } height="1024" width="683">
                                        {({ ref, open }) => (
                                            <img className="img-gallery-i" ref={ref} onClick={open} src={ gallery3 } />
                                        )}
                                    </Item>
                                    <Item original={ gallery9 } thumbnail={ gallery9 } height="1024" width="683">
                                        {({ ref, open }) => (
                                            <img className="img-gallery-i" ref={ref} onClick={open} src={ gallery9 } />
                                        )}
                                    </Item>
                                    <Item original={ gallery12 } thumbnail={ gallery12 } height="1024" width="683">
                                        {({ ref, open }) => (
                                            <img className="img-gallery-i" ref={ref} onClick={open} src={ gallery12 } />
                                        )}
                                    </Item>
                                    <Item original={ gallery5 } thumbnail={ gallery5 } height="1024" width="683">
                                        {({ ref, open }) => (
                                            <img className="img-gallery-i" ref={ref} onClick={open} src={ gallery5 } />
                                        )}
                                    </Item>
                                    <Item original={ gallery6 } thumbnail={ gallery6 } height="1024" width="818">
                                        {({ ref, open }) => (
                                            <img className="img-gallery-i" ref={ref} onClick={open} src={ gallery6 } />
                                        )}
                                    </Item>
                                    <Item original={ gallery8 } thumbnail={ gallery8 } height="1024" width="818">
                                        {({ ref, open }) => (
                                            <img className="img-gallery-i" ref={ref} onClick={open} src={ gallery8 } />
                                        )}
                                    </Item>
                                    <Item original={ gallery7 } thumbnail={ gallery7 } height="1024" width="818">
                                        {({ ref, open }) => (
                                            <img className="img-gallery-i" ref={ref} onClick={open} src={ gallery7 } />
                                        )}
                                    </Item>
                                </Gallery>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
            <div className='brown'>
                <div className='content-wrapper-invitation'>
                    <div className='box-content'>
                        <div className='title-main'>
                            <p className='text-t-m rmv-m-top'>Doa & Ucapan</p>
                            <p className='text-t-m-s-sub center-content'>Merupakan suatu kehormatan dan kebahagiaan bagi Kami apabila Bapak/ Ibu / Saudara/ i berkenan hadir untuk memberikan doa restu kepada kedua mempelai</p>
            
                            <div className='box-form'>
                                <div className='box-form-m'>
                                    <div className="content-box-form">
                                        <Form/>
                                        <div className='content-box-ucapan'>
                                            {dataProduct.map(comment => {
                                                return <Comment
                                                    fullName={comment.fullName}
                                                    description={comment.description}
                                                    create={comment.created}
                                                    />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='margin-t-100'>
                                <p className='text-t-m-s-sub center-content'>"Semoga Allah memberkahimu dan memberikan apa yang menjadi tanggung jawabmu, serta menyatukan kalian berdua dalam kebaikan."</p>
                                <p className='text-p-f-name'>(HR. Ahmad, at-Tirmidzi, an-Nasa'i, Abu Dawud, dan Ibnu Majah)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-wrapper-invitation'>
                <div className='box-content'>
                    <div className='title-main'>
                        <p className='text-close'>Terima Kasih</p>
                        <p className='text-t-m-close'>Anggun & Iqbal</p>
                        <p className='text-close margin-t-b'>Keluarga Besar</p>
                        <div className='text-s-sub-close'>
                            <p className='text-s-sub-close-font'>Mempelai Perempuan</p>
                            <p>Bapak H. Irza Winanda, S.E.</p>
                            <p>& Ibu Dr. Hj. Sakwanah Pulungan, S.Ag., S.H., M.H.</p>
                        </div>
                        <div className='text-s-sub-close margin-t-b'>
                            <p className='text-s-sub-close-font'>Mempelai Laki-Laki</p>
                            <p>Bapak H. Riza Ahady Romly., S.H., M.Hum. (Alm)</p>
                            <p>& Ibu Hj. Yusni</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Invitations