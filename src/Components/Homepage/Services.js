import './Homepage.css'


function Services() {
    return (
        <>
            <h1 className="services_heading text-center">
                Choose your services
            </h1>
            <div className="services_intro_size">
                <div className="services_intro text-center">
                    all of the services come with a 2 month labour warranty, any additional items/services outside of the scope of work are subject to an additional charge.
                </div>
            </div>
            <div className="px-xxl-5 pt-5">
                <div className="row  px-xxl-5">
                    <div className="col-lg-4 col-md-6 col-sm-12 pt-4 flex-container">
                        <div className="card px-3 pt-3 w-100" style={{ border: "none" }}>
                            <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#image not found" width="70px" height="70px" />
                            <div className="card-body">
                                <h5 className="card-title">window maintenance</h5>
                                <p className="card-text">3 windows included, a minimum of 3 window caulking and maintenance on the exterior of the window</p>
                                <br /><button type="button" className="btn btn-danger service_order_btn" style={{ right:"10px", bottom: "10px", position: "absolute" }}>Order Now -$150</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pt-4 flex-container">
                        <div className="card px-3 pt-3 w-100" style={{ border: "none" }}>
                            <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#image not found" width="70px" height="70px" />
                            <div className="card-body">
                                <h5 className="card-title">roof maintenance</h5>
                                <p className="card-text">inspect entire roof for any water leakage penetrations, services includes roof caulkin for any exposed nails, 2 pipe collards, and any waterproofing</p>
                                <br /><button type="button" className="btn btn-danger service_order_btn" style={{ right:"10px", bottom: "10px", position: "absolute" }}>Order Now -$750</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pt-4 flex-container">
                        <div className="card px-3 pt-3 w-100" style={{ border: "none" }}>
                            <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#image not found" width="70px" height="70px" />
                            <div className="card-body">
                                <h5 className="card-title">Gutter Cleaning</h5>
                                <p className="card-text">clean the entire Gutter system, water hose the downspouts, install Gutter Guard Filters, up to 100 Ift of gutters.</p>
                                <br /><button type="button" className="btn btn-danger service_order_btn" style={{ right:"10px", bottom: "10px", position: "absolute" }}>Order Now -$250</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pt-4 flex-container">
                        <div className="card px-3 pt-3 w-100" style={{ border: "none" }}>
                            <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#image not found" width="70px" height="70px" />
                            <div className="card-body">
                                <h5 className="card-title">window screen replacement</h5>
                                <p className="card-text">Replace up to 5 window screens, at a price of $85 per screen, a minimum of 5 window screens.</p>
                                <br /><button type="button" className="btn btn-danger service_order_btn" style={{ right:"10px", bottom: "10px", position: "absolute" }}>Order Now -$425</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pt-4 flex-container">
                        <div className="card px-3 pt-3 w-100" style={{ border: "none" }}>
                            <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#image not found" width="70px" height="70px" />
                            <div className="card-body">
                                <h5 className="card-title">powerwashing</h5>
                                <p className="card-text">powerwash driveways up to 20' * 10' and wood decks 20' * 10' chemicals will be used according to home depot and lowes recommendation</p>
                                <br /><button type="button" className="btn btn-danger service_order_btn" style={{ right:"10px", bottom: "10px", position: "absolute" }}>Order Now -$550</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pt-4 flex-container">
                        <div className="card px-3 pt-3 w-100" style={{ border: "none" }}>
                            <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#image not found" width="70px" height="70px" />
                            <div className="card-body">
                                <h5 className="card-title">alluminum fascia boards (cap)</h5>
                                <p className="card-text">install 30 linear feet of alluminum cap fascia board, a minimum of 30 linear feet $15 per foot after that. color does not determine the price. wood replacement is $8.00 per foot</p>
                                <br /><button type="button" className="btn btn-danger service_order_btn" style={{ right:"10px", bottom: "10px", position: "absolute" }}>Order Now -$540</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-md-6 extra_warranty_div pt-5">
                    <h3>NFT WARRANTY TOKEN</h3>
                    <p style={{ fontSize: "20px" }}>Purchase a 4 month extra warranty. A NFT is sent to your wallet, and will serve as your token to receive a repair to your project for 5 months in total! NFT warranty</p>
                    <button type="button" className="btn btn-danger p-3">My order -$50</button>
                </div>
                <div className="col-md-6 text-center pt-5">
                    <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#image not found" className="img-fluid" style={{ width: "250px" }} />
                </div>
            </div>
        </>
    );
}
export default Services;
