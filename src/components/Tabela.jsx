
import React from 'react'

export const Tabela = (props) => {
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
                        
                    </tr>
                        )}
            </tbody>
        </table >
        </div >
    )
}
