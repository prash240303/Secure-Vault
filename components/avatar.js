import * as React from 'react';
import { Avatar } from 'react-native-paper';


const MyAvatar = ({username, size}) => (
  <Avatar.Text size={size} label={username} />
);
export default MyAvatar