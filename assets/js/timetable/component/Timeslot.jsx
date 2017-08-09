import React from 'react';
import PropTypes from 'prop-types';
import TimeCell from './TimeCell';
import TopicCell from '../container/TopicCell';
import Venue from '../container/Venue';
import GridCell from './GridCell';
import CommunityCell from '../container/CommunityCell';

export default function Timeslot(props) {
  return (
    <div className="row time-slot-grid">
      <TimeCell start={props.timeslot.timeStart} end={props.timeslot.timeEnd} key={`time-${props.slot}`} />
      {props.sessions.map((session) => {
        if (session.topic) {
          return (
            <TopicCell
              key={`topic-${session.topic}-${session.name}`}
              id={session.topic}
              col={props.sessions.length}
              name={session.name}
              dayslot={`${props.dayslot}`}
            />
          );
        } else if (session.community) {
          return (
            <CommunityCell
              key={`community-${session.name}`}
              id={session.community}
              path={session.path}
              col={props.sessions.length}
              name={session.name}
              venue={session.venue}
            />
          );
        }
        return (
          <GridCell key={`session-${session.name}`} className="col grid session-grid" col={props.sessions.length}>
            <div className="session-title">
              {session.name}
            </div>
            <div className="session-details">
              <ul>
                {session.venue && <Venue id={session.venue} />}
              </ul>
            </div>
          </GridCell>
        );
      })}
    </div>
  );
}

Timeslot.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.object).isRequired,
  timeslot: PropTypes.shape({
    timeStart: PropTypes.string.isRequired,
    timeEnd: PropTypes.string.isRequired,
  }).isRequired,
  slot: PropTypes.string.isRequired,
};
