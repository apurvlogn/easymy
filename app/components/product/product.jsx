import React from 'react'
import ProductInfo from 'components/product/productInfo'
import { Grid,Container,Segment,Header,Image} from 'semantic-ui-react'
import Breadcrumb from 'components/breadcrumb/breadcrumb'
import productimg from 'assetsimage/Image5@2x.png'
import productimgsm from 'assetsimage/Image5.png'
import 'components/product/product.scss'


const   Product = () => (
  
     <Grid id="productPage" className="easyproductPage" container column={2} doubling stackable>
     
      <Grid.Column only='computer' width={11} computer={16}>
           <Breadcrumb/>
      </Grid.Column>
           <Grid.Column computer={11} tablet={16} mobile={16}>
       <Header className="noboxshadow"  size='large'>Nintendo Switch Neon Joy-Con (1 Year MaxSoft Warranty) + Screen Protector</Header>
      </Grid.Column>
      <Grid.Column computer={11} tablet={8} mobile={16}>
        <Segment>
            <Image src={productimg} /></Segment>
      </Grid.Column>
      <Grid.Column computer={5} tablet={8} mobile={16}>
        <Segment><ProductInfo/></Segment>
      </Grid.Column>
        </Grid>    


)

export default Product

