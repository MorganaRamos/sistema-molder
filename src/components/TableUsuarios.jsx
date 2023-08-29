export const TableUsuarios = (props) => {
    console.log(props.data);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        {props.colunas.map((coluna, index) =>
                            <th key={index} scope="col">{coluna}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(user =>
                    <tr>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.website}</td>
                        <td>{`${user.address.street}, ${user.address.suite}, ${user.address.zipcode} `}</td>
                    </tr>
                        )}
            </tbody>
        </table >
        </div >
    )
}
