import { TABS } from "../src/Helper/commonFuntion";

export interface WalletData {
    balance: string;
    auto_fill_amount: string;
    auto_fill_date: string;
  }
  
  export interface Campaign {
    title: string;
    completed: number;
    pending: number;
  }

 
  export type TabType = typeof TABS[number];
  