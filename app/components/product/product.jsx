import React from 'react'
import ProductInfo from 'components/product/productInfo'
import { Grid,Container,Segment,Header,Image} from 'semantic-ui-react'
import Breadcrumb from 'components/breadcrumb/breadcrumb'
import productimg from 'assetsimage/Image5@2x.png'
import productimgsm from 'assetsimage/Image5.png'
import 'components/product/product.scss'


class Product extends React.Component{
  constructor(props)
  {
    super(props);

    this.state = {
      product:{
        name:'Nintendo Switch Neon Joy-Con (1 Year MaxSoft Warranty) + Screen Protector',
        productimgs :productimg,
        productInfo:{
          price:'RM1,289',
          condition:'Brand new in the box',
          location:'Bangsar south,Kuala lumpur',
          seller:{
            name:'Takeshi Nakamura',
            type:'Private Seller',
            contactDetails:{
              phone:'0176865xxx',
              email:'Email',
              chat :'Chat'
            }
          }
        }
      }
    }
  }
  render()
  {
  const productInfo = this.state.product.productInfo;
    return (
      <Grid id="productPage" className="easyproductPage" container column={2} doubling stackable>

        <Grid.Column only='computer' width={11} computer={16}>
          <Breadcrumb/>
        </Grid.Column>
        <Grid.Column computer={11} tablet={16} mobile={16}>
          <Header className="noboxshadow"  size='large'>{this.state.product.name}</Header>
        </Grid.Column>
        <Grid.Column computer={11} tablet={8} mobile={16}>
          <Segment>
            <Image src={this.state.product.productimgs}/>\
            </Segment>
          </Grid.Column>
          <Grid.Column computer={5} tablet={8} mobile={16}>
            <Segment><ProductInfo productinfo={productInfo}/></Segment>
          </Grid.Column>
        </Grid>

      )

    }


  }

  export default Product
