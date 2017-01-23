import { ODataQuery } from "../definitions";
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class OData {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private _expand?;
    private _filter?;
    private _getAllItems?;
    private _orderBy?;
    private _select?;
    private _skip?;
    private _top?;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    constructor(oData: ODataQuery);
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    Expand: Array<string>;
    Filter: string;
    GetAllItems: boolean;
    OrderBy: Array<string>;
    readonly QueryString: string;
    Select: Array<string>;
    Skip: number;
    Top: number;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private getQSValue(qsKey, keys?);
}