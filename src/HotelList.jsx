import React from 'react'
import './styles.css'
import './custom.css'

const HotelList = () => {
  return (
    <div className="page-wrapper full-height">
      <header className="header header-fixed style-3">
        <div className="header-content">
          <div className="left-content">
            <a className="back-btn dz-icon icon-sm" href="#/">
              <i className="ri-arrow-left-line fs-2"></i>
            </a>
          </div>
          <div className="mid-content">
            <h5 className="title">Favourite <span className="">(2)</span></h5>
          </div>
        </div>
      </header>
      <main className="page-content pt-3">
        <div className="container py-1">
          <div className="d-flex justify-content-center">
            {/* <button type="button" className="btn btn-primary my-3">
              <i className="ri-qr-scan-2-line pe-2 fs-2"></i>Scan QR
            </button> */}
          </div>
          <a href="https://shekru-labs-india.github.io/digi_resto_app_user/#/751231/1" className="card">
            <div className="card-body py-0">
              <div className="row text-start">
                <div className="col-12">
                  <div className="row mt-2">
                    <div className="col-1 d-flex align-items-center">
                      <i className="ri-store-2-line fs-4"></i>
                    </div>
                    <div className="col-11 d-flex align-items-center">
                      <span className="menu_name fs-3 m-0">Jagdamb</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-1 d-flex align-items-center">
                      <i className="ri-phone-line text-primary fs-4"></i>
                    </div>
                    <div className="col-11 d-flex align-items-center">
                      <span className="text-primary fs-6">+91 8888888888</span>
                    </div>
                  </div>
                  <div className="row mt-2 pb-2">
                    <div className="col-1 d-flex align-items-center">
                      <i className="ri-map-pin-line gray-text fs-4"></i>
                    </div>
                    <div className="col-11 d-flex align-items-center">
                      <span className="gray-text fs-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://shekru-labs-india.github.io/digi_resto_app_user/#/795624/1" className="card">
            <div className="card-body py-0">
              <div className="row text-start">
                <div className="col-12">
                  <div className="row mt-2">
                    <div className="col-1 d-flex align-items-center">
                      <i className="ri-store-2-line fs-4"></i>
                    </div>
                    <div className="col-11 d-flex align-items-center">
                      <span className="menu_name fs-3 m-0">PK Biryani</span>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-1 d-flex align-items-center">
                      <i className="ri-phone-line text-primary fs-4"></i>
                    </div>
                    <div className="col-11 d-flex align-items-center">
                      <span className="text-primary fs-6">+91 8888888888</span>
                    </div>
                  </div>
                  <div className="row mt-2 pb-2">
                    <div className="col-1 d-flex align-items-center">
                      <i className="ri-map-pin-line gray-text fs-4"></i>
                    </div>
                    <div className="col-11 d-flex align-items-center">
                      <span className="gray-text fs-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </main>
      <div className="menubar-area footer-fixed">
        <div className="toolbar-inner menubar-nav">
          <a className="nav-link" href="#/568400/1">
            <i className="ri-home-2-line fs-3"></i><span className="name">Home</span>
          </a>
          <a className="nav-link active" href="#/Wishlist">
            <i className="ri-heart-2-line fs-3"></i><span className="name">Favourite</span>
          </a>
          <a className="nav-link" href="#/Cart">
            <i className="ri-shopping-cart-line fs-3"></i><span className="name">My Cart</span>
          </a>
          <a className="nav-link" href="#/Search">
            <i className="ri-search-line fs-3"></i><span className="name">Search</span>
          </a>
          <a className="nav-link" href="#/Profile">
            <i className="ri-user-3-fill fs-3"></i><span className="name">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HotelList