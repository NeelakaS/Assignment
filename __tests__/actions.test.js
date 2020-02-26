import {
  fetchAlbumData,
  fetchPhotoData,
  fetchUserData,
} from '../src/action/actions';
import {
  FETCHING_USER_DATA,
  FETCHING_ALBUM_DATA,
  FETCHING_PHOTO_DATA,
} from '../src/action/actionCreators';

describe('actions test', () => {
  it('should test the Album action', () => {
    const userId = 5;
    const expectedAction = {
      type: FETCHING_ALBUM_DATA,
      payload: userId,
    };
    expect(fetchAlbumData(userId)).toEqual(expectedAction);
  });
  it('should test the Photo action', () => {
    const albumId = 3;
    const expectedAction = {
      type: FETCHING_PHOTO_DATA,
      payload: albumId,
    };
    expect(fetchPhotoData(albumId)).toEqual(expectedAction);
  });

  it('should test the User action', () => {
    const expectedAction = {
      type: FETCHING_USER_DATA,
    };
    expect(fetchUserData()).toEqual(expectedAction);
  });
});
