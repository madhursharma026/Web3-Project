import './Homepage.css'
import HeaderLogo from '../../Assets/HeaderLogo/HeaderLogo.jpeg';
import { useSelector } from 'react-redux';


function BillingDetails() {

    const TotalProduct = useSelector(state => state.TotalProduct)
    const TotalPrice = useSelector(state => state.TotalPrice)
    const CartItem = useSelector(state => state.CartItem)

    return (
        <div className='container-md'>
            <div className="row">
                <div className="p-5 col-lg-7" style={{ border: "1px solid black", background: "white" }}>
                    <h3>Billing Details</h3>
                    <div className="row">
                        <div className="pt-4 col-lg-6">
                            <label htmlFor="FirstName" className="form-label">First Name*</label>
                            <input type="text" className="form-control" id="FirstName" placeholder='Jonathan' required />
                        </div>
                        <div className="pt-4 col-lg-6">
                            <label htmlFor="LastName" className="form-label">Last Name*</label>
                            <input type="text" className="form-control" id="LastName" placeholder='Jonathan' required />
                        </div>
                        <div className="pt-4 col-lg-6">
                            <label htmlFor="Country" className="form-label">Country*</label>
                            <input type="text" className="form-control" id="Country" placeholder='Bangladesh' required />
                        </div>
                        <div className="pt-4 col-lg-6">
                            <label htmlFor="City" className="form-label">City*</label>
                            <input type="text" className="form-control" id="City" placeholder='Bangladesh' required />
                        </div>
                        <div className="pt-4 col-lg-6">
                            <label htmlFor="Postcode" className="form-label">Postcode*</label>
                            <input type="text" className="form-control" id="Postcode" placeholder='Bangladesh' required />
                        </div>
                        <div className="pt-4 col-lg-6">
                            <label htmlFor="Phone" className="form-label">Phone*</label>
                            <input type="text" className="form-control" id="Phone" placeholder='Bangladesh' required />
                        </div>
                        <div className="pt-4 col-lg-6">
                            <label htmlFor="EmailAddress" className="form-label">EmailAddress*</label>
                            <input type="email" className="form-control" id="EmailAddress" placeholder='user@gmail.com' required />
                        </div>
                        <div className="pt-4 col-lg-6">
                            <label htmlFor="ConformEmailAddress" className="form-label">Confirm Email Address*</label>
                            <input type="email" className="form-control" id="ConformEmailAddress" placeholder='user@gmail.com' required />
                        </div>
                        <div className="pt-4 col-lg-6">
                            <label htmlFor="StreetAddress" className="form-label">Street Address*</label>
                            <input type="text" className="form-control" id="StreetAddress" placeholder='user@gmail.com' required />
                        </div>
                        <div className="pt-4 col-lg-6">
                            <label htmlFor="StreetAddress" className="form-label"><b>Service</b> Street Address*</label>
                            <input type="text" className="form-control" id="StreetAddress" placeholder='user@gmail.com' required />
                        </div>
                    </div>
                    {CartItem.length !== 0 ?
                        <>
                            <h3 className='pt-4'>Your Orders</h3>
                            <div className="row">
                                <div className="pt-4 col">
                                    <h4>Products ({TotalProduct})</h4>
                                </div>
                                <div className="pt-4 col" style={{ textAlign: "right" }}>
                                    <h4>Subtotals</h4>
                                </div>
                                <hr />
                                {
                                    (CartItem).map((TotalProduct, i) =>
                                        <>
                                            {
                                                (TotalProduct).map((TotalProduct, i) =>
                                                    <>
                                                        <div className="col">
                                                            <p className='text-secondary'><b>{TotalProduct.productTitle}</b></p>
                                                        </div>
                                                        <div className="col" style={{ textAlign: "right" }}>
                                                            <p className='text-secondary'><b>$ {TotalProduct.productPrice}</b></p>
                                                        </div>
                                                        <hr />
                                                    </>
                                                )
                                            }
                                        </>
                                    )
                                }
                                <div className="col">
                                    <p><b>Total</b></p>
                                </div>
                                <div className="col" style={{ textAlign: "right" }}>
                                    <p><b>$ {TotalPrice}</b></p>
                                </div>
                            </div>
                        </>
                        :
                        <></>
                    }
                    {/* <div style={{ width: "100%", height: "100px", background: "#F2F2F2" }}></div> */}
                    <div className="pt-5 row">
                        <div className="pb-3 col-3">
                            <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#ImgNotFound" style={{ maxWidth: "100px", width: "100%", maxHeight: "100px", height: "100p%" }} />
                        </div>
                        <div className="pb-3 col-9">
                            <h5>Pay with HNT (helium) the peoples network token, crypto currency</h5>
                        </div>
                        <div className="pb-3 col-3">
                            <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#ImgNotFound" style={{ maxWidth: "100px", width: "100%", maxHeight: "100px", height: "100p%" }} />
                        </div>
                        <div className="pb-3 col-9">
                            <h5>Pay with USDC coin</h5>
                        </div>
                    </div>
                    <p className='py-3' style={{ fontSize: "15px" }}>Your personal data will be used to process your order, support your expreience throughtout this website, and for other purpose described in our privacy policy.</p>
                    <button type="button" className="p-3 btn btn-dark w-100">connect to wallet</button>
                    <button type="button" className="p-3 btn btn-dark w-100" style={{ marginTop: "10px" }}>Schedule Yourself</button>
                </div>
                <div className="col-lg-5 px-md-5">
                    {/* <img className='mt-5' src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png" alt="#image not found" width="100px" height="100px" /> */}
                    <div className="mt-5 card flex-container">
                        <div className="text-center card-body">
                            <i className="mb-3 fa fa-500px" style={{ fontSize: "40px" }}></i>
                            {/* <h5>Your Information is secured</h5> */}
                        </div>
                    </div>
                    <div className="mt-3 card flex-container">
                        <div className="text-center card-body">
                            <i className="mb-3 fa fa-500px" style={{ fontSize: "40px" }}></i>
                            <h5>NFT WARRANTY</h5>
                        </div>
                    </div>
                    <div className="mt-3 card flex-container">
                        <div className="text-center card-body">
                            <i className="mb-3 fa fa-500px" style={{ fontSize: "40px" }}></i>
                            <h5>Contact us: https://ebenezer-gc.com/contact-us/</h5>
                        </div>
                    </div>
                    <h2 className='pt-5'>Join Over 10,000 Lovers</h2>
                    <div className="mt-3 card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3 col-xl-2"><img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#" width='50px' height='50px' /></div>
                                <div className="col-9 col-xl-10">
                                    <h6>GOOGLE REVIEWS</h6>
                                    https://www.google.com/
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3 col-xl-2"><img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#" width='50px' height='50px' /></div>
                                <div className="col-9 col-xl-10">
                                    <h6>Finance your project</h6>
                                    https://app.gethearth.com/financing/21841/32543/prequali
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3 col-xl-2"><img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#" width='50px' height='50px' /></div>
                                <div className="col-9 col-xl-10">
                                    Purchase HNT toekn <br />
                                    https://crypto.com/app/gecphbfrxn
                                </div>
                                <p className='px-3 pt-2'>
                                    purchase your HNT token to purchase our services
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillingDetails;
