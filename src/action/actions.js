import {
  FETCHING_USER_DATA,
  FETCHING_ALBUM_DATA,
  FETCHING_PHOTO_DATA,
} from './actionCreators';

export function fetchUserData() {
  return {
    type: FETCHING_USER_DATA,
  };
}

export function fetchAlbumData(userId: string) {
  return {
    type: FETCHING_ALBUM_DATA,
    payload: userId,
  };
}

export function fetchPhotoData(albumId: string) {
  return {
    type: FETCHING_PHOTO_DATA,
    payload: albumId,
  };
}
