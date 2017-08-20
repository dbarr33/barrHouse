
import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';

import { dismissSnackbar } from '../../actions/notifications.actions';

const Notification = ({ snackbar, dismiss }) => {
  console.log(snackbar)
  return (
    <Snackbar
      message={snackbar.message}
      open={snackbar.display}
      autoHideDuration={4000}
      onRequestClose={dismiss}
    />
  );
};

Notification.propTypes = {
  snackbar: PropTypes.object,
  dismiss: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    snackbar: state.notifications.snackbar,
  };
}
const mapDispatchToProps = dispatch => ({
  dismiss: () => dispatch(dismissSnackbar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
