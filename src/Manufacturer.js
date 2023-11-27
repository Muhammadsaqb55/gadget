import React from 'react';
import logo from './assets/images/logo.png';
import './App.css';

function Manufacturer() {
  return (
    <div className="main-wrapper" style={{paddingLeft: '50px',paddingRight: '50px'}}>
      <section className="section home-banner row-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-7 desktop-view">
              <div className="banner-content aos">
                <h1>
                  Compare and get the best
                  <br />
                  prices for your mobile{' '}
                  <span className="blue-text">devices</span>
                </h1>
                <form className="form" name="store" id="store" method="post" action="#">
                  <div className="form-inner">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="  Search your device.e.g iphone 14"
                      />
                      <button className="btn btn-primary sub-btn" type="submit">
                        Search &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{' '}
                        <span>
                          <img src="assets/images/search.png" alt="" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="browse-btn">
                  <a href="#">Browse Other Brands</a>
                </div>
                <div className="play-btn">
                  <img src="assets/images/play-btn.png" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-7 mobile-view">
          <div className="banner-content-m">
          <h1>Compare and get the best<br/>prices for your mobile <span class="blue-text">devices</span></h1>
    <div className="search-right">
        <form className="form" name="store" id="store" method="post" action="#">
            <div class="form-inner">
            <div class="input-group">
            <input type="email" className="form-controls"  placeholder="  Search your device.e.g iphone 14"/>
            <button class="btn btn-primary sub-btn" type="submit">Search &nbsp; &nbsp; &nbsp;<span><img src="assets/images/search.png" alt=""/></span></button>
            </div>
            </div>
            </form>
    </div>
    <div>&nbsp;</div>

          <div class="browse-btns text-center">
          <a href="#">Browse Other Brands</a>
          </div>
          <div class="play-btns text-center">
          <img src="/assets/images/play-btn.png" alt=""/>
          </div>
          </div>
          </div>

            <div className="col-md-4 col-lg-5">
              <div className="banner-img aos">
                <img
                  src="assets/images/home-banner.png"
                  className="img-fluid"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section compare">
        <div className="container">
          <div
            className="inner-cont"
            style={{
              backgroundColor: 'rgba(255, 238, 205, 0.50)',
              paddingLeft: '50px',
              paddingRight: '50px',
              borderRadius: '30px',
            }}
          >
            <h3 className="text-center pt-3 pb-3 border-left">
              <span>&nbsp; Manufacturers</span>
            </h3>
            <div className="col-xl-12 col-md-12 mx-auto">
              <div className="row mx-auto">
                <div className="col-xl-2 col-md-6 text-center mx-auto">
                  <div
                    className="brand-item freelance-count aos mx-auto"
                  
                  >
                    <div className="feature-icon brands-icon">
                      <img
                        src="assets/images/apple.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="feature-content course-count">
                      <h6 className="text-center">
                        <b>Apple</b>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 text-center mx-auto">
                  <div
                    className="brand-item freelance-count aos mx-auto"
                  
                  >
                    <div className="feature-icon brands-icon">
                      <img
                        src="assets/images/apple.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="feature-content course-count">
                      <h6 className="text-center">
                        <b>Apple</b>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 text-center mx-auto">
                  <div
                    className="brand-item freelance-count aos mx-auto"
                  
                  >
                    <div className="feature-icon brands-icon">
                      <img
                        src="assets/images/apple.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="feature-content course-count">
                      <h6 className="text-center">
                        <b>Apple</b>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 text-center mx-auto">
                  <div
                    className="brand-item freelance-count aos mx-auto"
                  
                  >
                    <div className="feature-icon brands-icon">
                      <img
                        src="assets/images/apple.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="feature-content course-count">
                      <h6 className="text-center">
                        <b>Apple</b>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 text-center mx-auto">
                  <div
                    className="brand-item freelance-count aos mx-auto"
                  
                  >
                    <div className="feature-icon brands-icon">
                      <img
                        src="assets/images/apple.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="feature-content course-count">
                      <h6 className="text-center">
                        <b>Apple</b>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 text-center mx-auto">
                  <div
                    className="brand-item freelance-count aos mx-auto"
                  
                  >
                    <div className="feature-icon brands-icon">
                      <img
                        src="assets/images/apple.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="feature-content course-count">
                      <h6 className="text-center">
                        <b>Apple</b>
                      </h6>
                    </div>
                  </div>
                </div>
                {/* Repeat similar blocks for other manufacturers */}
              </div>
            </div>
          </div>
        </div>
      </section>
   

<section className="section compare">
<div className="container">
  <div
    className="inner-cont"
    style={{
      backgroundColor: 'rgba(255, 238, 205, 0.50)',
      paddingLeft: '50px',
      paddingRight: '50px',
      borderRadius: '30px',
    }}
  >
    <h3 className="text-center pt-3 pb-3 border-left">
      <span>&nbsp; Samsung</span>
    </h3>
    <div className="col-xl-12 col-md-12 mx-auto">
      <div className="row mx-auto">
        {Array(12).fill().map((_, index) => (
          <div
            key={index}
            className="col-xl-2 col-md-6 text-center mx-auto"
          >
            <div
              className="compare-item freelance-count aos mx-auto"
            
            >
              <div
                className="feature-icon"
                style={{ backgroundColor: '#008ED6' }}
              >
                <img
                  src="assets/images/iphone.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="feature-content course-count">
                <h6 className="text-center">
                  <b>Galaxy S22 Ultra</b>
                </h6>
                <p className="inner_p">
                  <span>
                    <a href="">
                      <button className="spec-btn">64GB</button>
                    </a>
                    <a href="">
                      <button className="spec-btn">64GB</button>
                    </a>
                    <a href="">
                      <button className="spec-btn">64GB</button>
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
</section>
<section className="section compare">
<div className="container">
  <div
    className="inner-cont"
    style={{
      backgroundColor: 'rgba(255, 238, 205, 0.50)',
      paddingLeft: '50px',
      paddingRight: '50px',
      borderRadius: '30px',
    }}
  >
    <h3 className="text-center pt-3 pb-3 border-left">
      <span>&nbsp; Compare Other Gadgets</span>
    </h3>
    <div className="col-xl-12 col-md-12 mx-auto">
      <div className="row mx-auto">
        {[
          {
            border: '20px solid rgba(242, 141, 66, 0.4)',
            icon: 'assets/images/tablets.png',
            text: 'Tablets',
          },
          {
            border: '20px solid rgba(66, 154, 242, 0.4)',
            icon: 'assets/images/watches.png',
            text: 'Watches',
          },
          {
            border: '20px solid rgba(242, 141, 66, 0.4)',
            icon: 'assets/images/gaming-consoles.png',
            text: 'Gaming Consoles',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="col-xl-3 col-md-6 text-center mx-auto"
          >
            <div
              className="compare-gadgets freelance-count aos mx-auto"
            
              style={{ border: item.border }}
            >
              <div className="feature-icon" style={{ backgroundColor: '#008ED6' }}>
                <img
                  src={item.icon}
                  className="img-fluid"
                  style={{ height: '180px' }}
                  alt=""
                />
              </div>
              <div className="feature-content course-count">
                <h6 className="text-center">
                  <b>{item.text}</b>
                </h6>
                <p className="inner_p">
                  <span>
                    <a href="">
                      <button className="spec-btn-tabs">View</button>
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
</section>


<div className="section">
      <div className="container">
        <div className="inner-cont" style={{ backgroundColor: 'rgba(255, 238, 205, 0.50)', borderRadius: '30px', paddingBottom: '50px' }}>
          <h3 className="text-center pt-3 pb-3 border-left"><span>&nbsp; Frequently Asked Questions</span></h3>
          <div className="col-xl-12 col-md-12 mx-auto">
            <div className="row mx-auto">
              <div className="accordion" id="accordionExample" style={{ backgroundColor: 'inherit' }}>
                {/* Accordion Item 1 */}
                <div className="accordion-item" style={{ backgroundColor: 'inherit' }}>
                  <h2 className="accordion-header" id="headingOne" style={{ backgroundColor: 'inherit' }}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{ backgroundColor: 'inherit', borderBottom: '5px solid #6ECEFF' }}>
                    Why XYZ.com to trade in my phone?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{ backgroundColor: 'inherit' }}>
                    <div className="accordion-body" style={{ backgroundColor: 'inherit' }}>
                      Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                      interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                      ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                      per inceptos himenaeos.
                    </div>
                  </div>
                </div>


                {/* Accordion Item 2 */}
                <div className="accordion-item" style={{ backgroundColor: 'inherit' }}>
                  <h2 className="accordion-header" id="headingTwo" style={{ backgroundColor: 'inherit' }}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: 'inherit', borderBottom: '5px solid #6ECEFF' }}>
                    Why XYZ.com to trade in my phone?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{ backgroundColor: 'inherit' }}>
                    <div className="accordion-body" style={{ backgroundColor: 'inherit' }}>
                      Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                      interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                      ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                      per inceptos himenaeos.
                    </div>
                  </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="accordion-item" style={{ backgroundColor: 'inherit' }}>
                  <h2 className="accordion-header" id="headingThree" style={{ backgroundColor: 'inherit' }}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: 'inherit', borderBottom: '5px solid #FFB05F' }}>
                    Why XYZ.com to trade in my phone?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                      interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                      ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                      per inceptos himenaeos.
                    </div>
                  </div>
                </div>



                  {/* Accordion Item 4 */}
                  <div className="accordion-item" style={{ backgroundColor: 'inherit' }}>
                  <h2 className="accordion-header" id="headingFourth" style={{ backgroundColor: 'inherit' }}>
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourth" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: 'inherit', borderBottom: '5px solid #6ECEFF' }}>
                  Why XYZ.com to trade in my phone?
                  </button>
                  </h2>
                  <div id="collapseFourth" className="accordion-collapse collapse" aria-labelledby="headingFourth" data-bs-parent="#accordionExample" style={{ backgroundColor: 'inherit' }}>
                  <div className="accordion-body" style={{ backgroundColor: 'inherit' }}>
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                  interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                  ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos.
                  </div>
                  </div>
                  </div>


                {/* Accordion Item 3 */}
                <div className="accordion-item" style={{ backgroundColor: 'inherit' }}>
                <h2 className="accordion-header" id="headingFifth" style={{ backgroundColor: 'inherit' }}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: 'inherit', borderBottom: '5px solid #FFB05F' }}>
                Why XYZ.com to trade in my phone?
                </button>
                </h2>
                <div id="collapseFifth" className="accordion-collapse collapse" aria-labelledby="headingFifth" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos.
                </div>
                </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='desktop-view'>&nbsp;</div>
    <section className="container outer-section footer-top aos">
      <div className="container" style={{ backgroundColor: 'rgba(0, 142, 214, 0.62)', borderRadius: '30px' }}>
        <footer className="footer">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="footer-widget footer-menu" style={{ marginTop: '80px' }}>
                <img src="assets/images/footer-logo.png" alt=""  style={{ width: '200px' }} />
              </div>
            </div>
            <div className="col-xl-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h4 className="footer-titles"><b>Quick Links</b></h4>
                <ul>
                  <li><a href="#">About Our Company</a></li>
                  <li><a href="#">Services WE provide</a></li>
                  <li><a href="#">Career & Opportunity</a></li>
                  <li><a href="#">Privacy & policy</a></li>
                  <li><a href="#">Contact US</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h4 className="footer-titles"><b>Company</b></h4>
                <ul>
                  <li><a href="javascript:;">About Company </a></li>
                  <li><a href="javascript:;">Our Testimonials </a></li>
                  <li><a href="javascript:;">Latest News </a></li>
                  <li><a href="javascript:;">Our mission </a></li>
                  <li><a href="javascript:;">Get a free Quote </a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h4 className="footer-titles"><b>Contact Us</b></h4>
                <ul>
                  <li><a href="#">Sagrada Familia, Herba</a></li>
                  <li><a href="#">Street Front USA</a></li>
                  <li><a href="#">brandoxide@gmail.com</a></li>
                  <li><a href="#">002-568423591</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-6">
              <div className="footer-widget footer-menu">
                <h4 className="footer-titles"><b>Follow Us</b></h4>
                <div className="social-icon d-flex">
                  <ul>
                    <li>
                      <a href="#" className="icon" target="_blank">
                        <img src="assets/images/fb.png" alt="" width="30px" height="30px" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon" target="_blank">
                        <img src="assets/images/twitter.png" alt="" width="30px" height="30px" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon" target="_blank">
                        <img src="assets/images/insta.png" alt="" width="30px" height="30px" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon" target="_blank">
                        <img src="assets/images/linkedin.png" alt="" width="30px" height="30px" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="mb-0 text-center text-dark pt-10" style={{ color: '#646464' }}>
            Copyright @ 2020 Brandoxide. All rights reserved.
          </p>
        </footer>
      </div>
    </section>

</div>



    );
}

export default Manufacturer;