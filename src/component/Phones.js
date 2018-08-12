import React from 'react';
import { Link, Route } from 'react-router-dom';
import {productsData} from '../container/productData';
import { Card, Feed } from 'semantic-ui-react'
import Phone from './Phone'



const Products = ({ match }) => {

  var linkList = productsData.map( (product) => {
    return(
      <Feed.Event key={product.id}>
          <Feed.Label image={product.image} />
          <Feed.Content>
            <Feed.Date />
            <Feed.Summary>
              <Link to={`${match.url}/${product.id}`}>
                {product.name}
              </Link>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      )

    })

  return(
    <div>
        <Card>
         <Card.Content>
           <Card.Header>Últimos telefonos</Card.Header>
         </Card.Content>
         <Card.Content>
           <Feed>{linkList}</Feed>
         </Card.Content>
       </Card>

        <Route path={`${match.url}/:productId`}
            render={ (props) => <Phone data= {productsData} {...props} />}/>
        <Route exact path={match.url}
            render={() => (
            <div>Please select a product.</div>
            )}
        />
    </div>
  )
}

export default Products;
