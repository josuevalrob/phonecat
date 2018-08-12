import React from 'react';
import { Image, Grid, Label, Container, Header } from 'semantic-ui-react'

const Phone = ({match,data}) => {
  var product= data.find(p => p.id === Number(match.params.productId));
  var productData;

  if(product)
    productData =
<Container fluid>
    <Header as='h2'>{product.name} </Header>
    <Grid>
      <Grid.Column width={4}>
        <Image
          size = 'medium'
          label={{ as: 'a', color: 'blue', content: product.status, icon: 'in cart', ribbon: true }}
          src={product.image}
        />
      </Grid.Column>
      <Grid.Column width={9}>
        <p>{product.description}</p>
      </Grid.Column>
      <Grid.Column width={3}>
        <Label as='a' color='teal' tag>
        {product.price}
        </Label>
      </Grid.Column>
    </Grid>
</Container>
;
  else
    productData = <h2> Sorry. Product doesnt exist </h2>;

  return (
    <div>
      <div>
         {productData}
      </div>
    </div>
  )
}

export default Phone
