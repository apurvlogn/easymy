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

const ProductInfo = (props) => (

    <Grid fluid="true" stackable className='productInfo'>
      <Grid.Row>
        <List>
          <List.Item className='wishshare'>
            <span className="wishlist"><Image src={heart} size='tiny' verticalAlign='middle'/> Wishlist</span>
            <span className="share"><Image src={share} size='tiny' verticalAlign='middle'/> Share</span>
          </List.Item>
          <List.Item className='price'>
            <span className="heading">Price</span>
            <div className="value">{props.productinfo.price}</div>
          </List.Item>
          <List.Item className='condition'>
            <span className="heading">Item Condition</span>
            <div className="value">{props.productinfo.condition}</div>
          </List.Item>
          <List.Item className='location'>
            <span className="heading">Item location</span>
            <div className="value">{props.productinfo.location}</div>
          </List.Item>
          <List.Item className='seller'>
            <span className="heading">Seller Info</span>
            <div className="value"><Image src={sellermask} size='tiny' verticalAlign='top' circular/><span className='sellerName'>{props.productinfo.seller.name}</span><span className="sellerType">{props.productinfo.seller.type}</span></div>
          </List.Item>
        </List>
      </Grid.Row>
  <ContactDetails contactinfo={props.productinfo.seller.contactDetails}/>
</Grid>


)

export default ProductInfo;
