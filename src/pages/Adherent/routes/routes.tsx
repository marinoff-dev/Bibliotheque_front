import { AdherentDetails, AdherentList } from "@/features/adherents/components";
import { RouteObject } from "react-router-dom";
import Adherents from "../Adherents";

export const adherentRoutes: RouteObject = {
    path: "adherents",
    element: <Adherents />,
    children: [
        {
            path: "",
            element: <AdherentList />
        },
        {
            path: ":id",
            element: <AdherentDetails />
        },
    ]
}