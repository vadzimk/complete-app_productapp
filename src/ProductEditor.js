//allows user to edit a product or provide values foe a new product

import React from 'react';

export class ProductEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                id: props.product.id || "",
                name: props.product.name || "",
                category: props.product.category || "",
                price: props.product.price || "",
            }
        }
    }

    handleChange = (event) => {
        event.persist();  //does not set properties of synthaticEvent to null after the first call of setState
        this.setState(
            state => state.formData[event.target.name] = event.target.value
        );
    };

    handleClick = () => {
        this.props.saveCallback(this.state.formData);
    };

    render() {

        return (
            <div className="m-2">
                <div className="form-group">
                    <label>
                        ID
                    </label>
                    <input className="form-control" name="id"
                           disabled
                           value={this.state.formData.id}
                           onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>
                        Name
                    </label>
                    <input className="form-control" name="name"
                           value={this.state.name}
                           onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Category
                    </label>
                    <input className="form-control" name="category"
                           value={this.state.formData.category}
                           onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Price
                    </label>
                    <input className="form-control" name="price"
                           value={this.state.formData.price}
                           onChange={this.handleChange}
                    />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary m-1"
                            onClick={this.handleClick}>
                        Save
                    </button>
                    <button className="btn btn-secondary"
                            onClick={this.props.cancelCallback}>
                        Cancel
                    </button>
                </div>

            </div>
        )
    }
}