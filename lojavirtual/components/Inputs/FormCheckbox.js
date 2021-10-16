import React, {Component} from 'react';

export default class FormCheckbox extends Component {
    render () {
        const {name, selected, label, onChange} = this.props;
        return (
            <div className="form-input form-check">
                <input type="checkbox" checked={selected} name={name} onChange={onChange} />
                <label>&nbsp;{label} </label>                
            </div>
        )
    }
}