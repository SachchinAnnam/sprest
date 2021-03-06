import { SP } from "gd-sprest-def";

/**
 * Creates a document set item.
 * @param name - The name of the document set folder to create.
 * @param listName - The name of the document set library.
 * @param webUrl - The url of the web containing the document set library.
 */
export const createDocSet: (name: string, listName: string, webUrl?: string) => PromiseLike<SP.ListItem>;

/**
 * Determines if the user has permissions, based on the permission kind value
 */
export const hasPermissions: (permissionMask: any, permissions: Array<number> | number) => boolean;

/**
 * Convert a JSON string to a base object
 */
export function parse<T = any>(jsonString: string): T;


/**
 * XML HTTP Request
 */
export const request: (props: IRequest) => PromiseLike<any>;

/**
 * Request
 */
export interface IRequest {
    /** The data to pass in the request. */
    data?: any;

    /** The request headers. */
    headers?: { [key: string]: string };

    /** The request method. */
    method?: string;

    /** The request url. */
    url: string;
}