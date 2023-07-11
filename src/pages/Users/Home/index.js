import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { iconWa, coatingTopcoat  } from '../../../assets';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user_home.scss'
import { Helmet } from "react-helmet"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { RiStarFill } from "react-icons/ri";



const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="content-testi" data-value="1">
        <div className='content-left'>
            <img className="img-profile" src="https://scuto.co.id/wp-content/uploads/2023/01/Page-Image-Nano-Ceramic.jpg" alt="First slide"/>
        </div>
        <div className='content-right'>
            <p className='content-testi-name'>Windayana Putri Sitorus</p>
            <p className='content-testi-star'><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/></p>
        </div>
        <p className='content-testi-text'>"Hasil Pekerjaannya bagus banget, Karyawannya ramah, dan ada ruang tunggu yang nyaman. Jadi Rekomendasi buat kita kalau mau coating Nano Ceramic di sini aja di Topcoat Medan Ringroad"</p>
    </div>,
    <div className="content-testi" data-value="2">
        <div className='content-left'>
            <img className="img-profile" src="https://scuto.co.id/wp-content/uploads/2023/01/Page-Image-Nano-Ceramic.jpg" alt="First slide"/>
        </div>
        <div className='content-right'>
            <p className='content-testi-name'>Rian Putra</p>
            <p className='content-testi-star'><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/></p>
        </div>
        <p className='content-testi-text'>"Hasilnya sangat memuaskan sesuai yang saya harapkan,  pekerja nya sangat ramah. setelah di coating di Topcoat Medan Ringroad mobil saya terlihat seperti baru lagi dan lebih mengkilap"</p>
    </div>,
    <div className="content-testi" data-value="3">
        <div className='content-left'>
            <img className="img-profile" src="https://scuto.co.id/wp-content/uploads/2023/01/Page-Image-Nano-Ceramic.jpg" alt="First slide"/>
        </div>
        <div className='content-right'>
            <p className='content-testi-name'>Agus Surianto</p>
            <p className='content-testi-star'><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/></p>
        </div>
        <p className='content-testi-text'>"Saya merasa puas, karena Hasilnya bagus sesui dengan yang diharapkan. Semoga Topcoat makin sukses. Terimakasih"</p>
    </div>,
    <div className="content-testi" data-value="4">
        <div className='content-left'>
            <img className="img-profile" src="https://scuto.co.id/wp-content/uploads/2023/01/Page-Image-Nano-Ceramic.jpg" alt="First slide"/>
        </div>
        <div className='content-right'>
            <p className='content-testi-name'>Irwan Fahrudan</p>
            <p className='content-testi-star'><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/></p>
        </div>
        <p className='content-testi-text'>"Saya puas sekali menggunakan Nano Ceramic dari Topcoat karena selain banyak manfaat yang saya dapatkan, memberikan garansi hingga 2 tahun. recommended sekali!!"</p>
    </div>,
    <div className="content-testi" data-value="1">
        <div className='content-left'>
            <img className="img-profile" src="https://scuto.co.id/wp-content/uploads/2023/01/Page-Image-Nano-Ceramic.jpg" alt="First slide"/>
        </div>
        <div className='content-right'>
            <p className='content-testi-name'>Hirfan Arifin</p>
            <p className='content-testi-star'><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/></p>
        </div>
        <p className='content-testi-text'>"Saya sudah mampir di sini pelayanan sangat bagus dan ramah. Untuk hasilnya juga sangat memuaskan dan untuk jasanya sangat terjangkau."</p>
    </div>,
];

const Home = () => {
    return (
        <>  
            <div className="content-wrapper-brand-img">
                <div className="box-container box-container-img">  
                    <div className='box-b-txt'>
                        <p className='box-container-txt'>NANO CERAMIC COATING</p>
                        <p className='box-container-txt-sub'>SAPPHIRE AND QUART SERUM COATING</p>
                        <center><Button className='btn-container margin-20' size="lg" active>Booking Sekarang</Button></center>
                    </div>
                </div>
            </div>
            <div className='box-menu'>
                <div className='content-wrapper-menu'>
                    <Container> 
                        <Row>
                            <Col md>
                                <div className='box-img-menu'>
                                    <img className="img-menu" src="https://scuto.co.id/wp-content/uploads/2023/01/Page-Image-Nano-Ceramic.jpg" alt="First slide"/>
                                </div>            
                            </Col>
                            <Col md>
                                <div className='box-img-menu'>
                                    <img className="img-menu" src="https://scuto.co.id/wp-content/uploads/2023/02/Page-Image-Karpet-Comfort.jpg" alt="First slide"/>
                                </div>            
                            </Col>
                            <Col md>
                                <div className='box-img-menu'>
                                    <img className="img-menu" src="https://scuto.co.id/wp-content/uploads/2023/01/Page-Image-Glass-Coating.jpg" alt="First slide"/>
                                </div>          
                            </Col>
                        </Row>
                    </Container>   
                </div>
            </div>
            <div className="icon-whatsapp">
                <a href="">
                    <img className="img-menu" src={iconWa} alt="First slide"/>      
                </a>   
            </div>
            <div className='content-wrapper m-top-bottom-25'>
                <div className='content'>
                    <Container> 
                        <Row>
                            <Col md={4}>
                                <div className='content-box'>
                                    <img className="content-img-product" src={coatingTopcoat} alt="First slide"/>
                                </div>            
                            </Col>
                            <Col md={8}>
                                <div className='content-box'>
                                    <p className='main-text'>QUARTZ | SAPPHIRE</p>
                                    <p className='heading-title red'>PILIHAN TERBAIK UNTUK</p>
                                    <p className='heading-title size-main'>COATING MOBIL ANDA</p>
                                    <p className='main-text'>Laminating Mobil Nano Ceramic adalah paint protection system yag berguna untuk melindungi cat mobil Anda serta memberikan garansi Nasional hingga 3 Tahun. Selain mencegah dari debu, kotoran, jamur, polusi dan hujan asam. Dengan menggunakan Scuto nano Ceramic, cat mobil Anda kedap udara sehingga tidak akan berubah warna, terlihat wetlook dan mudah dibersihkan.</p>
                                </div>        
                            </Col>
                        </Row>
                    </Container> 
                </div>
                
                <div className='content'>
                    <div className='content-box'>
                        <p className='heading-title red center'>KENAPA MOBIL ANDA PERLU</p>
                        <p className='heading-title size-main center'>COATING NANO CERAMIC?</p>
                        <p className='heading-title-sub center'>Berikut ini adalah 6 manfaat setelah Anda melindungi exterior mobil Anda dengan lapisan Nano Ceramic dari Topcoat</p>
                    
                    

                        <div className='content-width'>
                            <Container> 
                                <Row>
                                    <Col md={4}>
                                        <div className='content-qa'>
                                            <div className=''>
                                                <div className='content-left'>
                                                    <img className="img-profile" src="https://scuto.co.id/wp-content/uploads/2023/01/Page-Image-Nano-Ceramic.jpg" alt="First slide"/>
                                                </div>
                                                <div className='content-right'>
                                                    <p className='content-testi-name'>Windayana Putri Sitorus</p>
                                                    <p className='content-testi-star'><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/></p>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className='content-left'>
                                                    <img className="img-profile" src="https://scuto.co.id/wp-content/uploads/2023/01/Page-Image-Nano-Ceramic.jpg" alt="First slide"/>
                                                </div>
                                                <div className='content-right'>
                                                    <p className='content-testi-name'>Windayana Putri Sitorus</p>
                                                    <p className='content-testi-star'><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/></p>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className='content-left'>
                                                    <img className="img-profile" src="https://scuto.co.id/wp-content/uploads/2023/01/Page-Image-Nano-Ceramic.jpg" alt="First slide"/>
                                                </div>
                                                <div className='content-right'>
                                                    <p className='content-testi-name'>Windayana Putri Sitorus</p>
                                                    <p className='content-testi-star'><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/></p>
                                                </div>
                                            </div>
                                        </div>         
                                    </Col>
                                    <Col md={4}>
                                        <div className='content-qa'>
                                            <p className='text-qa'>Apakah setelah Nano Ceramic masih bisa baret?</p>
                                            <p className='text-qa-m'>Tidak mencegah baret. Tapi mengurangi resiko goresan halus/swirl contohnya dari proses cuci mobil. Kenapa tidak anti baret? karena karakter nano ceramic itu sendiri yang lebih terfokus di mengubah karakter pernis menjadi lebih keras, walaupun terlihat baret, yang baret itu hanya di permukaan lapisan Nano Ceramic dan tidak sampai merusak permukaan pernis dari cat asli.</p>
                                        </div> 
                                    </Col>
                                    <Col md={4}>
                                        <div className='content-qa'>
                                            <p className='text-qa'>Apakah baret bisa hilang?</p>
                                            <p className='text-qa-m'>Baret bisa kita hilangkan saat proses paint correction (polishing). Namun tidak semua baret atau luka bisa dihilangkan. Kalau baret atau lukanya hanya merusak lapisan pernis dapat dihilangkan saat proses paint correction. Ciri-ciri baret yang sudah tidak bisa hilang yaitu kalau dipegang terasa cekung atau masuk ke dalam.</p>
                                        </div> 
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className='content-box'>
                            <img className="content-img-product" src="https://scuto.co.id/wp-content/uploads/2023/01/Page-Gambar-Mobil-Manfaat-Coating-di-Scuto-2-1024x449.jpg"/>
                        </div>
                    </div>
                </div>
            

                <div className='content'>
                    <div className='content-box'>
                        <p className='heading-title red center'>ILUSTRASI BODY KENDARAAN</p>
                        <p className='heading-title size-main center'>DENGAN TOPCOAT NANO CERAMIC</p>
                        <div className='content-box'>
                            <img className="content-img-product" src="https://scuto.co.id/wp-content/uploads/2023/02/Illustrasi-Nano-Ceramic.png"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-wrapper-brand-img">
                <div className='content-img-book'>
                    <p className='txt-book'>BOOKING SEKARANG</p>
                    <p className='txt-book-m'>BOOKING ONLINE JADI LEBIH MUDAH. TINGGAL KLIK DAN LANGSUNG DATANG SAJA</p>
                </div>  
            </div>

            <div className='content-wrapper m-top-bottom-25'>
                <div className='content'>
                    <div className='content-box'>
                        <p className='heading-title size-main center'>BEFORE & AFTER NANO CERAMIC</p>
                        <p className='heading-title-sub center'>Geser Untuk Melihat Perbedaan Mobil</p>
                        <p className='heading-title-sub center'>Sebelum dan Sesudah di Aplikasikan Nano Ceramic Coating</p>
                        <div className='content-box'>
                            <img className="content-img-product" src="https://scuto.co.id/wp-content/uploads/2023/02/Illustrasi-Nano-Ceramic.png"/>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='content-box'>
                        <p className='heading-title size-main center'>FAQ</p>
                        <p className='heading-title-sub center'>PERTANYAAN YANG SERING DITANYAKAN</p>
                        <div className='content-width'>
                            <Container> 
                                <Row>
                                    <Col md={6}>
                                        <div className='content-qa'>
                                            <p className='text-qa'>Apa Fungsi Topcoat Nano Ceramic?</p>
                                            <p className='text-qa-m'>Nano Ceramic Coating memiliki fungsi untuk menjaga tampilan mobil agar tetap mengkilap seperti baru. Lapisan nano coating ini memiliki kemampuan melindungi cat pada bodi mobil dari paparan polusi, goresan halus, oksidasi, dan juga memberikan efek kilau yang lebih tahan lama.</p>
                                        </div>         
                                    </Col>
                                    <Col md={6}>
                                        <div className='content-qa'>
                                            <p className='text-qa'>Apakah setelah Nano Ceramic masih bisa baret?</p>
                                            <p className='text-qa-m'>Tidak mencegah baret. Tapi mengurangi resiko goresan halus/swirl contohnya dari proses cuci mobil. Kenapa tidak anti baret? karena karakter nano ceramic itu sendiri yang lebih terfokus di mengubah karakter pernis menjadi lebih keras, walaupun terlihat baret, yang baret itu hanya di permukaan lapisan Nano Ceramic dan tidak sampai merusak permukaan pernis dari cat asli.</p>
                                        </div> 
                                    </Col>
                                    <Col md={6}>
                                        <div className='content-qa'>
                                            <p className='text-qa'>Apakah baret bisa hilang?</p>
                                            <p className='text-qa-m'>Baret bisa kita hilangkan saat proses paint correction (polishing). Namun tidak semua baret atau luka bisa dihilangkan. Kalau baret atau lukanya hanya merusak lapisan pernis dapat dihilangkan saat proses paint correction. Ciri-ciri baret yang sudah tidak bisa hilang yaitu kalau dipegang terasa cekung atau masuk ke dalam.</p>
                                        </div> 
                                    </Col>
                                    <Col md={6}>
                                        <div className='content-qa'>
                                            <p className='text-qa'>Apakah ada Garansi?</p>
                                            <p className='text-qa-m'>Anda akan mendapatkan garansi Topcoat hinggal 3 tahun di seluruh cabang Topcoat yang berada di Indonesia. Garansi ini mencakup pengerjaan interior, exterior, dan ruang mesin.</p>
                                        </div>         
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='content-box'>
                        <p className='heading-title size-main center'>TESTIMONI</p>
                        <div className=''>
                            <AliceCarousel disableButtonsControls mouseTracking items={items} responsive={responsive} controlsStrategy="alternate"/>
                        </div>
                    </div>
                </div>
                
                <div className='box-service-instagram'>
                    <div className='content-box'>
                        <p className='heading-title size-main center'>Our Instagram</p>
                        <div className='css-6kluu6 element style' loading="lazy" data-mc-src="dfa3d52a-1e14-4dac-a8cb-92996313bd5a#instagram"></div>
                        <Helmet><script src="https://cdn2.woxo.tech/a.js#640a18414cc5edd0e5b1a371" async data-usrc></script></Helmet>  
                    </div>    
                </div>
            </div>  
        </>
    )
}
export default Home
