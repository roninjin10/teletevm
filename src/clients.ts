import { QueryClient } from "@tanstack/react-query";
import { createClient, createTevmTransport } from "tevm";
import { tevmDefault } from "tevm/common";

export const queryClient = new QueryClient();
export const client = createClient({
	chain: tevmDefault,
	transport: createTevmTransport({
		common: tevmDefault,
		miningConfig: {
			type: "auto",
		},
	}),
});
