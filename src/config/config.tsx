
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { mainnet, arbitrum, base, sepolia, bscTestnet } from "wagmi/chains";

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_WEBMODAL_PROJECT_ID

if (!projectId) throw new Error("Project ID is not defined");

export const metadata = {
  name: "Remitt",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"]
};

// Create wagmiConfig
const chains = [mainnet, arbitrum, base, sepolia, bscTestnet ] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  auth: {
    email: false, // default to true
    socials: [],
    showWallets: true, // default to true
    walletFeatures: true // default to true
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
});
