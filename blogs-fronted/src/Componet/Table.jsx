
import React, { useEffect, useState } from 'react'
import '../Componet/table.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Table = () => {

    const [blogDatas, setBlogDatas] = useState([]);
    console.log('blogdatas:::', blogDatas);


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



    const deleteData = async (id) => {
        console.log('id::: ', id);
        fetch(`http://localhost:1031/api/delete/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "The blogs data was removed") {
                    const delete_data = blogDatas.filter((ele, index) => ele._id !== id);
                    setBlogDatas(delete_data)
                    toast.error("blogdata is deleted!", {
                        position: toast.POSITION.TOP_LEFT,
                        autoClose: 2000
                    });
                }
            }
            ).catch((err) => {
                console.log('err::: ', err)
            })
    }


    return (
        <>
            <div>
                <center>
                    <table>
                        <thead>

                            <tr>
                                <th>INDEX</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Image</th>
                                <th colSpan={ 2 }>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                blogDatas.slice(0, 20).map((data, index) => {
                                    return (
                                        <tr key={ index } style={ { width: "200px" } }>
                                            <td>{ index + 1 }</td>
                                            <td>{ data.title }</td>
                                            <td>{ data.type }</td>
                                            <td>{ data.Description }</td>

                                            <td><img src={ `http://localhost:1031/public/${data.fileprth}` } height={ 30 } width={ 30 } /></td>
                                            <td>
                                                <button class="button-24" role="button" onClick={ () => deleteData(data._id) }> Delete</button>
                                            </td>

                                            <td>
                                                <Link to={ `/add-blog?${data._id}` }>
                                                    <button>edit</button>
                                                </Link>
                                            </td>



                                        </tr>


                                    )


                                }
                                )
                            }

                        </tbody>

                    </table>
                </center>
            </div >

        </>
    )
}

export default Table