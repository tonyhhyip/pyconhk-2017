import React from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';

export default function TimeCell(props) {
  const start = moment(props.start).tz('Asia/Hong_Kong').format('HH:mm');
  const end = moment(props.end).tz('Asia/Hong_Kong').format('HH:mm');
  return <div className="col s12 m12 l2 grid time-grid">{start} - {end}</div>;
}

TimeCell.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
