import { postsApi } from 'utils/api';

const PostsListActions = {
    setItems: items => ({
            type: 'POSTS:SET_ITEMS',
            payload: items,
    }),
    removeItem: id => ({
        type: 'POSTS:REMOVE_ITEM',
        payload: id,
    }), 
    // remove from the server
    fetchRemoveItem: id => dispatch => {
        if (global.confirm("Do you really want to delete this post")) {
            dispatch(PostsListActions.removeItem(id));
            postsApi.remove(id);
        }
    },
    fetchItems:  () => dispatch => {
        postsApi.get().then(({ data }) => {
            console.log(data);
            dispatch(PostsListActions.setItems(data))
        });
    },
    fetchItem: id => dispatch => {
        postsApi.get(id).then(({ data }) => {
            console.log(data);
          dispatch(PostsListActions.appendItem(data));
        });
    },
    appendItem: item => ({
        type: 'POSTS:APPEND_ITEM',
        payload: item,
    }),
}

export default PostsListActions;