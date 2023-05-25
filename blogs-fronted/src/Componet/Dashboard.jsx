

import React, { useEffect, useState } from 'react'

import BlogBox from './BlogBox'


const Dashboard = () => {
    const [blogDatas, setBlogDatas] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            fetch(`http://localhost:1031/api/getAllBlogs`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then((res) => res.json())
                .then((data) => {
                    setBlogDatas(data.dataAdd)
                })
                .catch((error) => console.log('error::: ', error))
        }
        fetchApi();
    }, [])
    return (
        <>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://zone-ui.vercel.app/assets/images/home/home_hero.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3" style={ { color: "#212B36" } }>Create Your Website Today with <span style={ { color: "#FA541C" } }>ZONE</span></h1>
                        <p className="lead">The ZONE is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-2 me-md-2">Submit</button>

                        </div>
                    </div>
                </div>
                <div style={ { display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" } }>
                    {
                        blogDatas.slice(0, 20).map((data, index) => (
                            <div style={ { margin: "10px 0" } } key={ index }>
                                <BlogBox data={ data } />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard 