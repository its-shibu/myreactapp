import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <h3 className='text-center'>Cart Items</h3>
                <hr />

                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Product Image</th>
                            <th>Product Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src="https://imgs.search.brave.com/zN3fxKj3_EIRcLZRsgKdwMzxnL7I2p-oU3OVBX38WlA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3M1LmFwcGxlaW5z/aWRlci5jb20vZ2Fs/bGVyeS82MjkzMy0x/MzA2NjAtVmFjdXVt/LURyaXZpbmctQXdh/eS1IZXJvLTItbS5q/cGc" alt="product" />
                            </td>
                            <td>
                                <h4>Real Me GT Neo 2</h4>
                                <h5>Price: $ 200</h5>
                                <p>6inch Display, Iphone latest lunch in Nepali Market</p>
                            </td>
                            <td>
                                <button className="btn btn-warning">update</button> &nbsp;
                                <button className="btn btn-danger">Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <img src="https://photos5.appleinsider.com/gallery/62954-130696-62905-130564-17_pro_max_r5-xl-xl.jpg" alt="product" width={'150'} />
                            </td>
                            <td>
                                <h4>Real Me GT Neo 2</h4>
                                <h5>Price: $ 200</h5>
                                <p>6inch Display, Iphone latest lunch in Nepali Market</p>
                            </td>
                            <td>
                                <button className="btn btn-warning">update</button> &nbsp;
                                <button className="btn btn-danger">Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <img src="https://imgs.search.brave.com/78HGXVLNZjpPa5BKJh_Vi91W97oRiGwlNdgTcSop9ec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTExLmpwZw" alt="product" width={'150'} />
                            </td>
                            <td>
                                <h4>Real Me GT Neo 2</h4>
                                <h5>Price: $ 200</h5>
                                <p>6inch Display, Iphone latest lunch in Nepali Market</p>
                            </td>
                            <td>
                                <button className="btn btn-warning">update</button> &nbsp;
                                <button className="btn btn-danger">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}

export default Cart