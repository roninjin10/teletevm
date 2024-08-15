import { Contract } from 'tevm/contract'
const _abiCounter = ["function count() view returns (uint256)","function dec()","function inc()"] as const;
const _nameCounter = "Counter" as const;
/**
 * Counter Contract
 */
export const Counter: Contract<typeof _nameCounter, typeof _abiCounter, undefined, undefined, undefined, undefined>;