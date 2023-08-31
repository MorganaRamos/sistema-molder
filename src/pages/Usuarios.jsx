import { useEffect, useState } from 'react'
import { Tabela} from '../Components/Tabela'


export const Usuarios = () => {
    const colunas = ['id', 'nome', 'email', 'usuário', 'site', 'endereço']
    const [data, setData] = useState([])


    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <>
            <div className='container'>
                <Tabela
                    colunas={colunas}
                    data={data}
                />
            </div>
        </>
    )
}
