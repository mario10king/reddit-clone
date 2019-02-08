import React, {
  Component
} from 'react';
import Form from './Form';

class New extends Component {
  constructor(
    props
  ) {
    super(
      props
    );
    this.state = {
      wrongData: false
    };

    this.handleSubmit = this.handleSubmit.bind(
      this
    );
    this.handleSuccess = this.handleSuccess.bind(
      this
    );
    this.handleFailure = this.handleFailure.bind(
      this
    );
  }

  handleSuccess(
    body
  ) {
    localStorage.setItem(
      'username',
      body.username
    );
    this.props.history.push(
      '/'
    );
  }

  handleFailure() {
    this.setState(
      {
        wrongData: true
      }
    );
  }

  handleSubmit(
    e,
    data
  ) {
    e.preventDefault();
    fetch(
      '/users',
      {
        method:
          'POST',
        headers: {
          'Content-type':
            'application/json'
        },
        body: JSON.stringify(
          data
        )
      }
    )
      .then(
        response => {
          if (
            response.ok
          ) {
            return response
              .json()
              .then(
                body =>
                  this.handleSuccess(
                    body
                  )
              );
          } else {
            this.handleFailure();
          }
        }
      )
      .catch(
        error => {
          console.log(
            error
          );
        }
      );
  }

  render() {
    return (
      <div
        style={{
          textAlign:
            'center'
        }}
      >
        {this
          .state
          .wrongData && (
          <h3
            style={{
              color:
                'red'
            }}
          >
            Username
            and/or
            Password
            are
            Not
            Valid
          </h3>
        )}
        <Form
          handleSubmit={
            this
              .handleSubmit
          }
          value={
            'Sign Up'
          }
        />
      </div>
    );
  }
}

export default New;
