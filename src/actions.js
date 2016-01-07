// EXAMPLE:
// keys
//
// export const SELECT_REDDIT = 'SELECT_REDDIT';
// export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';
// export const REQUEST_POSTS = 'REQUEST_POSTS';
// export const RECEIVE_POSTS = 'RECEIVE_POSTS';

// EXAMPLE:
// sync action
//
// export function selectReddit(reddit) {
//     return {
//         type: SELECT_REDDIT,
//         reddit,
//     };
// }

// EXAMPLE:
// async action
//
// export function fetchPosts(reddit) {
//     return function(dispatch) {
//         dispatch(requestPosts(reddit));
//
//         return axios.get(`http://www.reddit.com/r/${reddit}.json`)
//             .then(response => response.data)
//             .then(json => {
//                 dispatch(receivePosts(reddit, json));
//             });
//     };
// }
//
// function shouldFetchPosts(state, reddit) {
//     const posts = state.postsByReddit[reddit];
//     if (!posts) {
//         return true;
//     } else if (posts.isFetching) {
//         return false;
//     } else {
//         return posts.didInvalidate;
//     }
// }
//
// export function fetchPostsIfNedded(reddit) {
//     return (dispatch, getState) => {
//         if (shouldFetchPosts(getState(), reddit)) {
//             return dispatch(fetchPosts(reddit));
//         } else {
//             return Promise.resolve();
//         }
//     };
// }
