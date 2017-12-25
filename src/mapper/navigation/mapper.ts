import { RequestType } from "../../types";

/**
 * Navigation
 */
export const navigationservicerest = {
    /**
     * Properties
     */
    properties: [
        "MenuState|menustate|([Name])|menunode"
    ],

    /**
     * Methods
     */

    // Method to get the menu state.
    getMenuState: {
        argNames: ["menuNodeKey", "depth", "customProperties", "mapProviderName"],
        name: "MenuState",
        RequestType: RequestType.GetWithArgsInQS
    }
}
