import { useQuery } from '@apollo/client'
import ClientRow from './ClientRow';
import { GET_CLIENTS } from '../queries/clientQueries';
import Spinner from './Spinner';



function Clients() {

    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return <Spinner />
    if (error) return <p>Something went wrong!!</p>

    return (
        <>
            {!loading && !error && (
                <table className='table table-hover mt-3'>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.clients.map(client => (
                            <ClientRow key={client.name} client={client} />
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Clients