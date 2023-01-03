import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

 function Footer() {
  return (
    <div className='d-flex flex-column min-vh-100'> 
    <MDBFooter className='text-center text-white mt-auto' style={{ backgroundColor: '#eb6864' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
        <MDBRow>
              <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <a href='https://github.com/zeinabhared' target='_blank' className='text-white'>
                <h5 className='text-uppercase'>GitHub</h5>
            </a>
              </MDBCol>
  
              <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <a href='https://www.linkedin.com/in/zeinab-hared/' target='_blank' className='text-white'>
                <h5 className='text-uppercase'>LinkedIn</h5>
            </a>
              </MDBCol>

              <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <a href='mailto:zeinabhared@gmail.com' target='_blank' className='text-white'>
                <h5 className='text-uppercase'>Email</h5>
            </a>
              </MDBCol>

            </MDBRow>  
        </section>
      </MDBContainer>

      <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright: Portfolio - Zeinab Hared 
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer; 