import React, {
  Component
} from 'react';
import NewForm from './NewForm';

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

  handleSuccess() {
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
      '/posts',
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
            this.handleSuccess();
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
            Input
            Fields
            are
            not
            Valid
          </h3>
        )}
        <NewForm
          handleSubmit={
            this
              .handleSubmit
          }
        />
      </div>
    );
  }
}

export default New;
