import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, getProducts} from "../service/productService";
import Swal from 'sweetalert2'

export function List() {
    // gui request
    const dispatch = useDispatch()
    // nhan du lieu gui ve
    const products = useSelector(({products})=>{
        return products.list
    })

    const navigate = useNavigate();
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        dispatch(getProducts());
        setIsLoad(false);
    }, [])


    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProduct(id))
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })


    }


    return (
        <>
            {isLoad ? <>Loading......</> :
                    <>
                        <table border={1} style={{ width: '300px', height: '100px' }}>
                            <tr>
                                <td style={{ textAlign: 'center' }}>Id</td>
                                <td style={{ textAlign: 'center' }}>Name</td>
                                <td style={{ textAlign: 'center' }}>Price</td>
                                <td style={{ textAlign: 'center' }}>Description</td>
                                <td colSpan={2} style={{ textAlign: 'center' }}>Action</td>
                            </tr>
                            {
                                products && products.map(item => (
                                    <tr  key={item.id}>
                                        <td style={{ textAlign: 'center', padding: 30 }}>{item.id}</td>
                                        <td style={{ textAlign: 'center', padding: 30 }}>{item.title}</td>
                                        <td style={{ textAlign: 'center' , padding: 30}}>{item.price}</td>
                                        <td style={{ textAlign: 'center' , padding: 30}}>{item.description}</td>
                                        <td style={{ textAlign: 'center', padding: 30 }}><Link to={`/home/edit/${item.id}`}  style={{backgroundColor: '#007bff', color: '#fff', padding: '5px 18px',borderRadius: '4px',textDecoration: 'none', border: '1px solid #007bff' , margin: '5px 5px 5px 0px'}}>Sửa</Link></td>
                                        <td style={{ textAlign: 'center' , padding: 30}}><button style={{backgroundColor: '#ff0078', color: '#fff', padding: '8px 16px',borderRadius: '4px',textDecoration: 'none', border: '1px solid #007bff' , margin: '5px 5px 5px 0px'}} type='submit' onClick={()=>{handleDelete(item.id)}}>Xóa</button></td>
                                    </tr>
                                ))
                            }
                        </table>
                    </>
            }
        </>
    )
}







