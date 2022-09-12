import React from 'react';
import css from './Friends.module.css';

export default function FriendListItem({id,avatar, name, isOnline}) {
    return (
<li className={css.item} key={id}>
          <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
   <img className={avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
 </li>
    )
}

