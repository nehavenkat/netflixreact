import React, {Component} from 'react';
import { Alert} from 'reactstrap';



class CommentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",

            comment: {
                rate: "",
                message: "",
                elementId: this.props.elementId
            },
            comments: []
        };

        // bind context to methods
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount = async () => {
        let response1 = await fetch("http://netflix-backend-neha.herokuapp.com/comments/" +  this.props.elementId)

        let comments = await response1.json();
        this.setState({ comments: comments });
    }
    

    /**
     * Handle form input field changes & update the state
     */
    handleFieldChange = event => {
        const { value, name } = event.target;

        this.setState({
            ...this.state,
            comment: {
                ...this.state.comment,
                [name]: value
            }
        });
    };

    /**
     * Form submit handler
     */
    onSubmit(e) {
        // prevent default form submission
        e.preventDefault();
        fetch("http://netflix-backend-neha.herokuapp.com/comments/" , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                 body: JSON.stringify(this.state.comment) 
    })
      }

    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }

    render() {
       const comments = this.state.comments.map(comment => {
            return (
                <Alert color="primary">
                {comment.message}
                </Alert>)
        });
        return (
            <React.Fragment>
                {comments}
                <form method="post" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            onChange={this.handleFieldChange}
                            value={this.state.comment.rate}
                            className="form-control"
                            placeholder="rating"
                            name="rate"
                            type="number"
                        />
                    </div>

                    <div className="form-group">
            <textarea
                onChange={this.handleFieldChange}
                value={this.state.comment.message}
                className="form-control"
                placeholder="Your Comment"
                name="message"
                rows="5"
            />
                    </div>

                    {this.renderError()}

                    <div className="form-group">
                        <button onClick={this.onSubmit} disabled={this.state.loading} className="btn btn-primary">
                            Comment ➤
                        </button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
export default CommentComponent;