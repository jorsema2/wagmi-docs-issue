import { useAccount, useEnsName } from "wagmi";

export function Profile() {
    const { address } = useAccount();
    console.log(address);
    const { error, status } = useEnsName({ address });
    if (status === "pending") return <div>Loading ENS name</div>;
    if (status === "error")
        return <div>Error fetching ENS name: {error.message}</div>;
    return <div>ENS name: {address}</div>;
}
