import React from 'react';
import Paper from 'material-ui/Paper';
import { redA200 } from 'material-ui/styles/colors';
import './Disclaimer.css';

const paperStyle = {
  padding: '0.5rem',
  backgroundColor: redA200,
};

export default class Disclaimer extends React.Component {
  render() {
    const disclaimerClass = this.props.isVisible ? 'disclaimer disclaimer--visible' : 'disclaimer';
    return (
      <div className={disclaimerClass}>
        <Paper zDepth={1} rounded={false} style={paperStyle}>
          <p className="disclaimer__text">
            Re:Juice Me is in no way affiliated with, authorized, maintained, sponsored or endorsed by <a className="disclaimer__link" href="http://www.juicestopsmoothies.com/">Juice Stop</a> or any of its affiliates or subsidiaries including or <a className="disclaimer__link" href="http://juicestoplincoln.com/">its franchisee(s) in Lincoln, NE</a>.
            This is an independent, unofficial site.
            All information on this site is unofficial and subject to change without notice.
            Contact Juice Stop directly or visit their web pages to confirm before your visit.
          </p>
        </Paper>
      </div>
    );
  }
}
