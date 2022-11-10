import { ActionType } from "../action-types/index";

export interface IPost {
    userId?: number;
    id?: number;
    title: string;
    body: string;
}

export type PostState = IPost[]

interface FetchDataAction {
    type: ActionType.FETCHDATA;
    payload: PostState;
}

interface PostAction {
    type: ActionType.POST;
    payload: PostState;
}

interface DeleteAction {
    type: ActionType.DELETE;
    payload: PostState;
}

export type Action = FetchDataAction | DeleteAction | PostAction;