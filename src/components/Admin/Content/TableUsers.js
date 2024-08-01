import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
const TableUser = (pros) => {
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUser(res.DT);
        }
    };
    return (
        <>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Email</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser &&
                        listUser.length > 0 &&
                        listUser.map((user, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="btn btn-info">
                                            View
                                        </button>
                                        <button className="btn btn-warning mx-3">
                                            Update
                                        </button>
                                        <button className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    {listUser && listUser.length === 0 && (
                        <tr>
                            <td colSpan={4}>Not found data...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default TableUser;
