import React from 'react';
import css from './Friends.module.css';

export default function FriendListItem({avatar, name, isOnline}) {
    return (
<li className={css.item}>
          <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
   <img className={avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
 </li>
    )
}
FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired
    }),
  ),
}
