import './Homepage.css'


function BillingDetails() {
    return (
        <div className='container-md'>
            <div className="row">
                <div className="col-lg-7 p-5" style={{ border: "1px solid black", background:"white" }}>
                    <h3>Billing Details</h3>
                    <div className="row">
                        <div className="col-lg-6 pt-4">
                            <label htmlFor="FirstName" className="form-label">First Name*</label>
                            <input type="text" className="form-control" id="FirstName" placeholder='Jonathan' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label htmlFor="LastName" className="form-label">Last Name*</label>
                            <input type="text" className="form-control" id="LastName" placeholder='Jonathan' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label htmlFor="Country" className="form-label">Country*</label>
                            <input type="text" className="form-control" id="Country" placeholder='Bangladesh' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label htmlFor="City" className="form-label">City*</label>
                            <input type="text" className="form-control" id="City" placeholder='Bangladesh' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label htmlFor="EmailAddress" className="form-label">EmailAddress*</label>
                            <input type="email" className="form-control" id="EmailAddress" placeholder='user@gmail.com' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label htmlFor="EmailAddress" className="form-label">EmailAddress*</label>
                            <input type="email" className="form-control" id="EmailAddress" placeholder='user@gmail.com' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label htmlFor="StreetAddress" className="form-label">Street Address*</label>
                            <input type="text" className="form-control" id="StreetAddress" placeholder='user@gmail.com' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label htmlFor="StreetAddress" className="form-label">Street Address*</label>
                            <input type="text" className="form-control" id="StreetAddress" placeholder='user@gmail.com' required />
                        </div>
                    </div>
                    <h3 className='pt-4'>Your Orders</h3>
                    <div className="row">
                        <div className="col pt-4">
                            <h4>Products</h4>
                        </div>
                        <div className="col pt-4" style={{ textAlign: "right" }}>
                            <h4>Subtotals</h4>
                        </div>
                        <hr />
                        <div className="col">
                            <p className='text-secondary'><b>Apple Macbook</b></p>
                        </div>
                        <div className="col" style={{ textAlign: "right" }}>
                            <p className='text-secondary'><b>$200</b></p>
                        </div>
                        <hr />
                        <div className="col">
                            <p className='text-secondary'><b>Subtotal</b></p>
                        </div>
                        <div className="col" style={{ textAlign: "right" }}>
                            <p className='text-secondary'><b>$200</b></p>
                        </div>
                        <hr />
                        <div className="col">
                            <p><b>Total</b></p>
                        </div>
                        <div className="col" style={{ textAlign: "right" }}>
                            <p><b>$400</b></p>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "100px", background: "#F2F2F2" }}></div>
                    <p className='py-3' style={{ fontSize: "15px" }}>Your personal data will be used to process your order, support your expreience throughtout this website, and for other purpose described in our privacy policy.</p>
                    <button type="button" className="btn btn-dark w-100 p-3">connect to wallet</button>
                    <button type="button" className="btn btn-dark w-100 p-3" style={{ marginTop: "10px" }}>place order</button>
                </div>
                <div className="col-lg-5 px-5">
                    <img className='mt-5' src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png" alt="#image not found" width="100px" height="100px" />
                    <div className="card mt-5">
                        <div className="card-body text-center">
                            <i className="fa fa-500px" style={{fontSize:"40px"}}></i>
                            <h5>Your Information is secured</h5>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body text-center">
                            <i className="fa fa-500px" style={{fontSize:"40px"}}></i>
                            <h5>100% Satisfaction Guaranteed</h5>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body text-center">
                            <i className="fa fa-500px" style={{fontSize:"40px"}}></i>
                            <h5>We Protext your privacy</h5>
                        </div>
                    </div>
                    <h2 className='pt-5'>Join Over 10,000 Lovers</h2>
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3 col-xl-2"><img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#" width='50px' height='50px' /></div>
                                <div className="col-9 col-xl-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde magnam tempore nisi</div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3 col-xl-2"><img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#" width='50px' height='50px' /></div>
                                <div className="col-9 col-xl-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde magnam tempore nisi</div>
                                <p className='px-3 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim ad repudiandae obcaecati blanditiis magni ullam et illum, quaerat fugit non vitae repellendus, veritatis sunt ut. Facilis veniam consequuntur officia?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillingDetails;
