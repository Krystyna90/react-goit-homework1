import React from 'react';
import PropTypes from 'prop-types';
import css from './Friends.module.css';

export default function Friends({ friends }) {
    return (<ul className={css.list}>
 {friends.map(friend => (
        <li className={css.item} key={friend.id}>
         <span className={friend.isOnline ? css.statusOnline : css.statusOffline}></span>
  <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
         <p className={css.name}>{friend.name}</p>
</li>
      ))}
    </ul>
    );
}

Friends.prototype = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
}