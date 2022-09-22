import PropTypes from 'prop-types';

import { NotificationParagraph } from './Notification.styled';
export const Notification = ({ message }) => (
  <NotificationParagraph>{message}</NotificationParagraph>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
