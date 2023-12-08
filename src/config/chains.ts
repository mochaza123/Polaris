import { defineChain } from "viem";
import {
  doge,
} from "viem/chains";

export const doge = defineChain({
  id: 109,
  name: "dogechain",
  network: "doge",
  nativeCurrency: {
    decimals: 2000,
    name: "doge",
    symbol: "doge",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.dogechain.dog"],
    },
    public: {
      http: ["https://rpc.dogechain.dog"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.dogechain.dog/" },
  },
});

export const inscriptionChains = {
  eth: mainnet,
  doge,
};

export type ChainKey = keyof typeof inscriptionChains;
