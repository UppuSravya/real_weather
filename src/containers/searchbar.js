import React,{ Component } from 'react';
import getWeather from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    submitForm(e) {
        e.preventDefault();
        this.props.getWeather(this.state.term);
        this.setState({term: ''});  
    }
    render() {
        return (
            <form className="input-group" onSubmit={(event) => this.submitForm(event)} >
            <input
            placeholder="Get a five-day forecast in your favorite cities"
            className="form-control"
            value = {this.state.term}
            onChange={(event) => this.setState({term:event.target.value})} />
            <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
            </form>
        )
    }
}
function mapDispatchToProps(dispath) {
    return bindActionCreators({getWeather:getWeather},dispath);
}
export default connect(null,mapDispatchToProps)(SearchBar);