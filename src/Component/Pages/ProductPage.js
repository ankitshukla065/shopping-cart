import React, { Component } from 'react';
import { Modal, ModalBody, Input, InputGroup, InputGroupAddon, Button, ModalFooter, Alert } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: true,
          backdrop: false,
        };
    
        this.toggle = this.toggle.bind(this); 
        this.func = this.func.bind(this);
      }
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
      func(id){
          var val = document.getElementById("ProductInput" + id).value;
          return val;
          
      }

    render()
    {
            const products = this.props.products;
            var index = products.findIndex((p) => p._id === this.props.match.params.productId);
            const product = products[index];
            if(product != null)
            {
                return (
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop} size="lg"> 
                        <ModalBody>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <h1>{product.name}</h1>
                                        <img src={product.image} alt="" height="400" width="300" />
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <h3>Price</h3>
                                        <InputGroup id={"ProductInputGroup" + product._id}>
                                            <Input id={"ProductInput" + product._id} type="number" placeholder="Enter Quantity" min="1"  />                        
                                            <InputGroupAddon id={"ProductInputGroupAddOn" + product._id} addonType="append">
                                               <Link to="/"><Button id={"ProductButton" + product._id} size="lg" color="success" onClick={() => this.props.addProduct(product, this.func(product._id))}>Add to Cart</Button></Link>
                                            </InputGroupAddon>
                                    </InputGroup>
                                    <div class="product-detail">
                                    <h3 class="title">Product Highlights</h3>
                                    <ul>
                                        <li><strong>Wattage Output:</strong> 1100 Watts</li>
                                        <li><strong>Number of Speeds:</strong> 3 </li>
                                        <li><strong>Capacity (volume):</strong> 72.0 Oz.</li>
                                        <li><strong>Appliance Capabilities:</strong> Blends</li>
                                        <li><strong>Includes:</strong> Travel Lid</li>
                                        <li><strong>Material:</strong> Plastic</li>
                                        <li><strong>Finish:</strong> Painted</li>
                                        <li><strong>Metal Finish:</strong> Chrome</li>
                                        <li><strong>Safety and Security Features:</strong> Non-Slip Base</li>
                                        <li><strong>Care and Cleaning:</strong> Easy-To-Clean, Dishwasher Safe Parts</li>
                                    </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </ModalBody>
                            <ModalFooter>
                            <Link to="/"><Button color="secondary" onClick={this.toggle}>Close</Button></Link>
                            </ModalFooter>
                    </Modal>
            );
        }
        else{
            return(
                <Alert color="danger">
                    Product you have searched for is not found. Please <a href="/" className="alert-link">Click here</a>. to go to homePage.
                </Alert>
            )
        }
    }
}

export default withRouter(ProductPage);