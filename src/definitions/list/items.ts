import {
    IBase, IBaseCollection,
    IListItem, IListItemQueryResult, IListItemResult
} from "..";

/**
 * List Items
 */
export interface IListItems extends IBaseCollection<IListItemResult, IListItemQueryResult> {
    /**
     * Adds an item to the list item collection.
     * @param data - The item properties.
     */
    add(data): IBase<IListItem>;

    /**
     * Gets an item by the specified id.
     * @param id - The item id.
     */
    getById(id): IListItem;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IListItems>;
}