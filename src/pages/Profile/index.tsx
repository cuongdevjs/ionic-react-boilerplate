/**
*
* Profile
*
*/

import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectProfile } from './selectors';
import { profileSaga } from './saga';
import { ProfileWrapper } from './styled';

interface Props {}


export const Profile = memo((props: Props) => {
useInjectReducer({ key: sliceKey, reducer: reducer });
useInjectSaga({ key: sliceKey, saga: profileSaga });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const profile = useSelector(selectProfile);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dispatch = useDispatch();


return (
<ProfileWrapper>
  <span>profile</span>
</ProfileWrapper>
);

});
