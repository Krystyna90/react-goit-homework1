import React from 'react';
import PropTypes from 'prop-types';
import css from './Friends.module.css';
import FriendListItem from './FriendListItem';

export default function Friends({ friends }) {
    return (<ul className={css.list}>
 {friends.map(friend => (<FriendListItem id={friend.id} avatar={friend.avatar} name ={friend.name} isOnline={friend.isOnline}></FriendListItem>
      ))}
    </ul>
    );
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
}