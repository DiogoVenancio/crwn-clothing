import { ShopActionType } from './shop.types';

export const fetchCollectionsStart = () => ({
    type: ShopActionType.FECTH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

/* export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
} */



