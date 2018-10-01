import React from 'react'
import { Card, Icon, List } from 'semantic-ui-react'
import { Grid,Container,Segment,Header,Image,Divider,Button} from 'semantic-ui-react'
import 'components/product/product.scss'
import ContactDetails from 'components/product/contactDetails'
import sellermask from 'assetsimage/seller.svg'
import heart from 'assetsimage/ic_heart.svg'
import share from 'assetsimage/ic_share.svg'

const style={
    primaryColor:'#E01A1A',
    greyText:'#707070',
    darkText:'#333333',
}

const ProductInfo = () => (

    <Grid fluid stackable className='productInfo'>
      <Grid.Row>
        <List>
          <List.Item className='wishshare'>
            <span className="wishlist"><Image src={heart} size='tiny' verticalAlign='middle'/> Wishlist</span>
            <span className="share"><Image src={share} size='tiny' verticalAlign='middle'/> Share</span>
          </List.Item>
          <List.Item className='price'>
            <span className="heading">Price</span>
            <div className="value">RM1,289</div>
          </List.Item>
          <List.Item className='condition'>
            <span className="heading">Item Condition</span>
            <div className="value">Brand new in the box</div>
          </List.Item>
          <List.Item className='location'>
            <span className="heading">Item location</span>
            <div className="value">Bangsar south, Kuala lumpur</div>
          </List.Item>
          <List.Item className='seller'>
            <span className="heading">Seller Info</span>
            <div className="value"><Image src={sellermask} size='tiny' verticalAlign='top' circular/><span className='sellerName'>Takeshi Nakamura</span><span class="sellerType">Private Seller</span></div>
          </List.Item>
        </List>
      </Grid.Row>
  <ContactDetails/>
</Grid>


)

export default ProductInfo;
