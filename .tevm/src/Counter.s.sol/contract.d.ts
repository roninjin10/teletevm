import { Contract } from 'tevm/contract'
const _nameCounter = "Counter" as const;
const _abiCounter = [
  "function count() view returns (uint256)",
  "function dec()",
  "function inc()"
] as const;
// type _Address = undefined
// type _Bytecode = `0x${string}`
// type _DeployedBytecode = `0x${string}`
// type _Code = undefined
/**
 * Counter Contract+Script
 */
export const Counter: Contract<
  typeof _nameCounter,
  typeof _abiCounter,
  undefined,
  `0x${string}`,
  `0x${string}`,
  undefined,
>;