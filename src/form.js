
import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label for ="name1">Name</label>
                <input
                     id="name1"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label for ="job1">Job</label>
                <input
                      id="job1"
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange}/>
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;
