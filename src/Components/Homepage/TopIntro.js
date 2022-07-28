import './Homepage.css'
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../Redux/Web3CartReducer';


function TopInto() {

    const dispatch = useDispatch()
    
    return (
        <div>
            {/* <img src="https://secureservercdn.net/198.71.233.69/e3n.efa.myftpupload.com/wp-content/uploads/2020/02/logo.png?time=1657726581" alt="#Img not found" style={{ width: "300px", height: "200px" }} /> */}
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h1 className='top_heading_fontsize'>Real life services at your fingertip</h1><br />
                    <div className="px-md-5 top_heading">
                        <i style={{ fontSize: "24px" }} className="fa fa-check">&emsp;100% Local Workers.</i><br />
                        <i style={{ fontSize: "24px" }} className="fa fa-check">&emsp;1 month labor warranty is included on all services.</i><br />
                        <i style={{ fontSize: "24px" }} className="fa fa-check">&emsp;100% satisfaction gurranteed.</i><br />
                        <button type="button" className="btn btn-danger p-md-3" style={{ marginTop: "50px", fontSize: "18px" }}>Service areas</button>
                    </div>
                </div>
                <div className="text-center col-12 col-lg-6 top_right_side">
                    <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#image not found" className="img-fluid" style={{ width: "250px" }} />
                </div>
            </div>

            <br className='br_till_md' />
            <br className='br_till_md' />
            <br className='br_till_md' />
            <br className='br_till_md' />

            <div className="px-2 px-md-5">
                <div className="second_div_container">
                    <div className="row">
                        <div className="col-lg-6" style={{ paddingTop: "120px" }}>
                            <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="#image not found" className="img-fluid" style={{ width: "250px" }} />
                        </div>
                        <div className="pt-5 col-lg-6">
                            <h1 className='second_div_container_top_heading_fontsize'>Sleep Calm with a warrantied home</h1>
                            <br />
                            <h2>WARRANTY your project for 6 months</h2>
                            <br />
                            <p className='second_div_para_fontsize'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi nostrum modi, magni at totam repellat quasi ducimus saepe accusantium, similique, rerum ab commodi cumque consequatur? Quas saepe placeat quod nihil laborum dolorem est eos, quidem, cum voluptatem nulla unde iusto adipisci doloribus? Aut nobis, facilis unde fuga ut aliquam.
                            </p>
                            <button type="button" className="btn btn-danger p-md-3" style={{ marginTop: "50px", fontSize: "20px" }} onClick={() => dispatch(AddToCart([{productTitle: "WARRANTY your project for 6 months", productPrice: '100', productImage: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheXxlbnwwfHwwfHw%3D&w=1000&q=80'}]))}>Labour warranty - $100</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopInto;
