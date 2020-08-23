import { ADD_COMMENT } from "../types/FakeBookType";


export const addCommentAction = (userComment) => ({
    type: ADD_COMMENT,
    userComment
})
