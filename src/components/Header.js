import {Link} from "react-router-dom";

export function Header() {
    return (
        <>
            <hr/>
            <h3>Danh Sách Sản Phẩm</h3>
            <Link to={'/home/create'} style={{backgroundColor: '#7fff8a', color: '#fff', padding: '8px 16px',borderRadius: '4px',textDecoration: 'none', border: '1px solid #007bff' , margin: '5px 5px 5px 0px'}}>Thêm mới</Link>
            <br/>
        </>
    )
}
