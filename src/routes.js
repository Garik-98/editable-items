import EditableItems from "./components/common/EditableItems";

export default [
    /************
     *   ROOT   *
    ************/
    {
        path: "/",
        redirect: {
            name: "items"
        }
    },

    /************
     * ITEMS *
    ************/
    {
        path: "/items",
        component: EditableItems,
        name: "items"
    },

    /************
     * FALLBACK *
    ************/
    {
        path: "*",
        redirect: {
            name: "items"
        }
    }
];
