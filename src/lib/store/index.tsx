import { Balance } from "@/hooks/useBalances";
import { createContext, useContext } from "react";

export interface ContextInterface {
  balances: {
    [key: string]: Array<Balance>;
  };
  setBalances: Function;
  usdBalance: string;
  setUsdBalance: Function;
  identity: string;
  setIdentity: Function;
}

export const AppContext = createContext<ContextInterface>({} as ContextInterface);

export function useAppContext() {
	return useContext(AppContext);
}


export default function () {
  return <div></div>;
}