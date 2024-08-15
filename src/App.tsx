import reactLogo from "./assets/react.svg";
import twaLogo from "./assets/tapps.png";
import viteLogo from "/vite.svg";
import "./App.css";

import WebApp from "@twa-dev/sdk";
import { useQuery } from "@tanstack/react-query";
import { client } from "./clients";
import { createAddress } from "tevm/address";
import { tevmContract, tevmSetAccount } from "tevm";
import { Counter } from "./Counter.s.sol";

const contractAddress = createAddress(420);
const contract = Counter.withAddress(contractAddress.toString());

export function App() {
	const { data: isDeployed } = useQuery({
		queryKey: ["deployed"],
		queryFn: () => tevmSetAccount(client, contract).then(() => true),
	});

	const { data: count, refetch } = useQuery({
		enabled: isDeployed,
		queryKey: ["count"],
		queryFn: () =>
			tevmContract(client, contract.read.count()).then(
				({ data }) => data ?? 0n,
			),
	});

	return (
		<>
			<div>
				<a href="https://ton.org/dev" target="_blank">
					<img src={twaLogo} className="logo" alt="TWA logo" />
				</a>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>TWA + Vite + React + Tevm</h1>
			<div className="card">
				<button
					onClick={() =>
						tevmContract(client, {
							createTransaction: true,
							...contract.write.inc(),
						}).then(() => refetch())
					}
				>
					count is {count?.toString() ?? 0}
				</button>
			</div>
		</>
	);
}
