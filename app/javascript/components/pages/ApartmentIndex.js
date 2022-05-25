import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { CardTitle, Col } from 'reactstrap'


export default class ApartmentIndex extends Component {
  render() {
    console.log(this.props.apartments);
    return (
      <>
      <h3>View available apartments</h3>

      <Col sm="6">
        {this.props.apartments && this.props.apartments.map(apartment => {
        return(
        <NavLink to={`/apartmentshow/${apartment.id}`} key={apartment.id}>
          <CardTitle>
              <h2>{apartment.city}</h2>
              <h2>{apartment.state}</h2>
              <h2>{apartment.price}</h2>
          </CardTitle>
        </NavLink>
                )
              }
            )
          }
      </Col>
      </>
    )
  }
}









  