import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Login() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-08-05T00:00:00+07:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / 1000 / 60 / 60) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <Container>
        <Row>
            <Col md={3} xs={3}>
                <div className='box-locations'>
                    <div className='box-timer'>
                        <p className='time-style'>{timeLeft.days}</p>
                        <p className='text-s-sub'>Hari</p>
                    </div>     
                </div>       
            </Col>
            <Col md={3} xs={3}>
                <div className='box-locations'>
                    <div className='box-timer'>
                        <p className='time-style'>{timeLeft.hours}</p>
                        <p className='text-s-sub'>Jam</p>
                    </div>   
                </div>         
            </Col>
            <Col md={3} xs={3}>
                <div className='box-locations'>
                    <div className='box-timer'>
                        <p className='time-style'>{timeLeft.minutes}</p>
                        <p className='text-s-sub'>Menit</p>
                    </div>   
                </div>         
            </Col>
            <Col md={3} xs={3}>
                <div className='box-locations'>
                    <div className='box-timer'>
                        <p className='time-style'>{timeLeft.seconds}</p>
                        <p className='text-s-sub'>Detik</p>
                    </div> 
                </div>           
            </Col>
        </Row>
    </Container>
  );
}

export default Login;