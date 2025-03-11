import React from 'react'

const Product = () => {
    return (
        <>
            <div className='container mx-auto mt-5'>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="./images/myimage1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <button className='btn btn-warning'>view Details</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="./images/myimage2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <button className='btn btn-warning'>view Details</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="./images/myimage3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <button className='btn btn-warning'>view Details</button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="./images/myimage4.jpg" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">Card title</h5>
                                <button className='btn btn-warning'>view Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
