import './Homepage.css'


function BillingDetails() {
    return (
        <div className='container-md'>
            <div className="row">
                <div className="col-md-7 p-5" style={{ border: "1px solid black" }}>
                    <h3>Billing Details</h3>
                    <div className="row">
                        <div className="col-lg-6 pt-4">
                            <label for="FirstName" class="form-label">First Name*</label>
                            <input type="text" class="form-control" id="FirstName" placeholder='Jonathan' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label for="LastName" class="form-label">Last Name*</label>
                            <input type="text" class="form-control" id="LastName" placeholder='Jonathan' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label for="Country" class="form-label">Country*</label>
                            <input type="text" class="form-control" id="Country" placeholder='Bangladesh' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label for="City" class="form-label">City*</label>
                            <input type="text" class="form-control" id="City" placeholder='Bangladesh' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label for="EmailAddress" class="form-label">EmailAddress*</label>
                            <input type="email" class="form-control" id="EmailAddress" placeholder='user@gmail.com' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label for="EmailAddress" class="form-label">EmailAddress*</label>
                            <input type="email" class="form-control" id="EmailAddress" placeholder='user@gmail.com' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label for="StreetAddress" class="form-label">Street Address*</label>
                            <input type="text" class="form-control" id="StreetAddress" placeholder='user@gmail.com' required />
                        </div>
                        <div className="col-lg-6 pt-4">
                            <label for="StreetAddress" class="form-label">Street Address*</label>
                            <input type="text" class="form-control" id="StreetAddress" placeholder='user@gmail.com' required />
                        </div>
                    </div>
                    <h3 className='pt-4'>Your Orders</h3>
                    <div className="row">
                        <div className="col-md-6 pt-4">
                            <h4>Products</h4>
                        </div>
                        <div className="col-md-6 pt-4" style={{textAlign:"right"}}>
                            <h4>Subtotals</h4>
                        </div>
                        <hr />
                        <div className="col-md-6">
                            <p><b>Apple Macbook</b></p>
                        </div>
                        <div className="col-md-6" style={{textAlign:"right"}}>
                            <p><b>$200</b></p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="col-md-5">

                </div>
            </div>
        </div>
    );
}

export default BillingDetails;
