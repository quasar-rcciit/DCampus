import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import { Button, ButtonGroup, Badge } from 'react-bootstrap';

class AllOrders extends Component{
    render() {
        return(
            <div className="container" style={{ textAlign: "center" }}>
                <h1 style={{ marginTop: "1%", marginBottom: "1%", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                    <b>Previous Orders</b>
                </h1>
                <Table responsive bordered hover>
                    <thead>
                        <tr>
                        <th>Order no.</th>
                        <th>Ordered by</th>
                        <th>Ordered item</th>
                        <th>Ordered Quantity</th>
                        <th>Price</th>
                        <th>Delivery Location</th>
                        <th>Room / Table no.</th>
                        <th>Delivery Status</th>
                        <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.orders.map((orderItem, key) => {
                        return(
                            <tr>
                            <td>{key+1}</td>
                            <td>{orderItem.customer}</td>
                            <td>{orderItem.name}</td>
                            <td>{orderItem.quantity}</td>
                            <td>{this.props.web3.utils.fromWei(orderItem.totalPrice)}&nbsp;ETH</td>
                            <td>{orderItem.hostelOrCanteen == 0 ? "Hostel" : "Canteen"}</td>
                            <td>{orderItem.number}</td>
                            <td>
                                <Button
                                //disable if order already delivered or user is not the owner
                                variant={orderItem.delivered == 0 ? "success" : "warning"}
                                disabled={orderItem.delivered == 0 || this.props.account != this.props.canteenOwner}
                                onClick={() => this.props.orderDeliver(key)}>
                                    {orderItem.delivered == 0 ? "Delivered" : "Not delivered"}
                                </Button>
                            </td>
                            <td>
                                <ButtonGroup className="me-2" aria-label="First group">
                                    <Button
                                    disabled={orderItem.customer != this.props.account || orderItem.rating !=0 || orderItem.delivered==1}
                                    onClick={() => this.props.onOrderDelivered(key, 1)}
                                    variant={orderItem.rating == 1 ? "danger" : "secondary"}
                                    >1</Button>
                                    <Button
                                    disabled={orderItem.customer != this.props.account || orderItem.rating !=0 || orderItem.delivered==1}
                                    onClick={() => this.props.onOrderDelivered(key, 2)}
                                    variant={orderItem.rating == 2 ? "danger" : "secondary"}
                                    >2</Button>
                                    <Button
                                    disabled={orderItem.customer != this.props.account || orderItem.rating !=0 || orderItem.delivered==1}
                                    onClick={() => this.props.onOrderDelivered(key, 3)}
                                    variant={orderItem.rating == 3 ? "warning" : "secondary"}
                                    >3</Button>
                                    <Button
                                    disabled={orderItem.customer != this.props.account || orderItem.rating !=0 || orderItem.delivered==1}
                                    onClick={() => this.props.onOrderDelivered(key, 4)}
                                    variant={orderItem.rating == 4 ? "success" : "secondary"}
                                    >4</Button>
                                    <Button
                                    disabled={orderItem.customer != this.props.account || orderItem.rating !=0 || orderItem.delivered==1}
                                    onClick={() => this.props.onOrderDelivered(key, 5)}
                                    variant={orderItem.rating == 5 ? "success" : "secondary"}
                                    >5</Button>
                                </ButtonGroup>
                            </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default AllOrders;