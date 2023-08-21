
function User({ user }) {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <h3 className="m-0">User Page</h3>
                    </div>
                    <div className="card-body" >
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.data.map((item, index) => (
                                    <tr key={index}>
                                        <th>{index}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <a href="#" className="btn btn-sm btn-primary">Edit</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User