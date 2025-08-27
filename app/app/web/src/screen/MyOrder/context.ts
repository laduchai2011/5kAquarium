import { createContext } from "react";
import type { MyOrderContextInterface } from "./type";

export const MyOrderContext = createContext<MyOrderContextInterface| undefined>(undefined);