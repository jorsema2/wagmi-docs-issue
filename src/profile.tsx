import { useAccount, useEnsName } from 'wagmi'

export function Profile() {
    const { address } = useAccount()
    const { data, error, status } = useEnsName({ address })
    console.log('before', status)
    if (status === 'pending') return <div>Loading ENS name</div>
    if (status === 'error')
        return <div>Error fetching ENS name: {error.message}</div>
    console.log('after' , status)
    if(status === 'success') console.log('data', data)

    return <div>ENS name: {data}</div>
}