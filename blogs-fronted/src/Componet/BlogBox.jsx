/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const BlogBox = ({ data }) => {
    return (
        <>
            <div className="card" style={ { width: "20rem" } }>
                <img
                    src={ `http://localhost:1031/public/${data.fileprth}` }

                    className="d-block mx-lg-auto img-fluid"
                    lt="Bootstrap Themes"
                    loading="lazy" />
                <div className="card-body">
                    <h5 className="card-title">{ data.title }</h5>
                    <p className="card-text">{ data.type }</p>
                    <p className="card-text">{ data.Description }</p>
                    <a href="#" className="btn btn-primary">Submit data</a>

                </div>
            </div>


        </>
    )
}

export default BlogBox