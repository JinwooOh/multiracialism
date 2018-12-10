import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.symbol}
  </span>
);

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export class SubmitAnswer extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="container--submit">
        <button className="btn btn__checkAnswer" onClick={this.handleClickOpen}>
          Check My Answer
        </button>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">Did I get the answer?</DialogTitle>
          {this.props.checkAnswer() ? (
            <div>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: '2rem' }}>
                  <Emoji symbol="🙆🏻‍" />
                  Yes, you found them. Please check the discussion section.
                </DialogContentText>
              </DialogContent>
            </div>
          ) : (
            <div>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: '2rem' }}>
                  <Emoji symbol="🙅" />
                  Unfortunately, They are not his/her parents. Try again!
                </DialogContentText>
              </DialogContent>
            </div>
          )}
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </Dialog>
      </div>
    );
  }
}

export default SubmitAnswer;
