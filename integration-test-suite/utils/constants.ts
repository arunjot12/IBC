import { Keyring } from "@polkadot/api";
import type { KeyringPair } from "@polkadot/keyring/types";

export const SECONDS = 1000;
export const MINUTES = 60 * SECONDS;
export const BLOCK_TIME = 3 * SECONDS;
export const ACC1_PK =
  "0x0000000000000000000000000000000000000000000000000000000000000001";
export const ACC2_PK =
  "0x0000000000000000000000000000000000000000000000000000000000000002";

export const ETH_BLOCK_GAS_LIMIT = 30000000; // The same configuration as runtime
export const ETH_BLOCK_POV_LIMIT = 5 * 1024 * 1024; // The same configuration as runtime

export const GENESIS_ACCOUNT_BALANCE = "19342813113834066795298815";
export const EXISTENTIAL_DEPOSIT = 1; // The minimum amount required to keep an account open

export const GENESIS_ACCOUNTS: string[] = [
  "0x48Df7B35247786418a7e279e508325952B9Fc92F",
  "0x74E4214c9C3D9726E1A0B57357C4dd117641c536",
  "0xFE31f14425993A3d9aeDEd195C56999eBE097d92",
]; //Genesis account addresses

export const CHAIN_ID = 997;

export const TEST_ACCOUNT = "0xdd33Af49c851553841E94066B54Fd28612522901";
export const TEST_ACCOUNT_PRIVATE_KEY =
  "0x4ca933bffe83185dda76e7913fc96e5c97cdb7ca1fbfcc085d6376e6f564ef71";
export const TEST_CONTRACT_ADDRESS =
  "0xc2bf5f29a4384b1ab0c063e1c666f02121b6084a";
export const GENESIS_ACCOUNT_0_PRIVATE_KEY =
  "0xc52db56e56fb6e827add1192dd0d78d336e0d41f8bcc481784486372759c9f46";
export const INVALID_OPCODE_BYTECODE =
  "0x6080604052348015600e575f80fd5b5060d280601a5f395ff3fe6080604052348015600e575f80fd5b50600436106030575f3560e01c806328b5e32b1460345780638381f58a14603c575b5f80fd5b603a6056565b005b6042606a565b604051604d91906085565b60405180910390f35b60015f81905550619c405a1015606857fe5b565b5f5481565b5f819050919050565b607f81606f565b82525050565b5f60208201905060965f8301846078565b9291505056fea2646970667358221220c90ea075cc08a2f562e56a5efb0b01c9c98c36541bf26b5f5b11d2336ceb3b0864736f6c63430008190033";

const keyringEth = new Keyring({ type: "ethereum" });

export const ALITH_ADDRESS: `0x${string}` =
  "0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac";
export const ALITH_PRIVATE_KEY: `0x${string}` =
  "0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133";

export const BALTATHAR_ADDRESS: `0x${string}` =
  "0x3Cd0A705a2DC65e5b1E1205896BaA2be8A07c6e0";
export const BALTATHAR_PRIVATE_KEY: `0x${string}` =
  "0x8075991ce870b93a8870eca0c0f91913d12f47948ca0fd25b49c6fa7cdbeee8b";
export const BALTATHAR_SESSION_ADDRESS: `0x${string}` =
  "0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48";

export const CHARLETH_ADDRESS: `0x${string}` =
  "0x798d4Ba9baf0064Ec19eB4F0a1a45785ae9D6DFc";
export const CHARLETH_PRIVATE_KEY: `0x${string}` =
  "0x0b6e18cafb6ed99687ec547bd28139cafdd2bffe70e6b688025de6b445aa5c5b";
export const CHARLETH_SESSION_ADDRESS: `0x${string}` =
  "0x90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22";

export const DOROTHY_ADDRESS: `0x${string}` =
  "0x773539d4Ac0e786233D90A233654ccEE26a613D9";
export const DOROTHY_PRIVATE_KEY: `0x${string}` =
  "0x39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68";

// Default testing address , no balance 
export const GERALD_ADDRESS: `0x${string}` =
  "0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b";
export const GERALD_PRIVATE_KEY: `0x${string}` =
  "0x99b3c12287537e38c90a9219d4cb074a89a16e9cdb20bf85728ebd97c343e342";

export const alith: KeyringPair = keyringEth.addFromUri(ALITH_PRIVATE_KEY);
export const baltathar: KeyringPair = keyringEth.addFromUri(BALTATHAR_PRIVATE_KEY);
export const charleth: KeyringPair = keyringEth.addFromUri(CHARLETH_PRIVATE_KEY);
export const dorothy: KeyringPair = keyringEth.addFromUri(DOROTHY_PRIVATE_KEY);
export const gerald: KeyringPair = keyringEth.addFromUri(GERALD_PRIVATE_KEY);