/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Users
    /*********************************************************************************************************************************/
    Library.users = {};
    Library.users[RequestType.Get] = ["getByEmail", "getById"];
    Library.users[RequestType.GetDataAsParameter] = ["getByLoginName"];
    Library.users[RequestType.Post] = ["removeById"];
    Library.users[RequestType.PostDataAsParameter] = ["removeByLoginName"];
}
