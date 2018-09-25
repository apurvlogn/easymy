import React from 'react'
import { Card, Icon, List } from 'semantic-ui-react'
import { Grid,Container,Segment,Header,Image,Divider,Button} from 'semantic-ui-react'
import 'components/product/product.scss'
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
        <Grid.Row id="footermobile" column={3} only='mobile' container  mobile={16}>
     <Button>
         <span className='svgIcon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.458 24"><path class="a" d="M0,0H24.458V24H0Z"/><path class="b" d="M6.689,10.79A15.3,15.3,0,0,0,13.4,17.38l2.242-2.2a1.027,1.027,0,0,1,1.039-.24,11.827,11.827,0,0,0,3.638.57,1.013,1.013,0,0,1,1.019,1V20a1.013,1.013,0,0,1-1.019,1A17.163,17.163,0,0,1,3,4,1.013,1.013,0,0,1,4.019,3H7.586A1.013,1.013,0,0,1,8.6,4a11.166,11.166,0,0,0,.581,3.57.99.99,0,0,1-.255,1.02Z" transform="translate(0.057)"/></svg>
         </span>
         0176895xxx
         </Button>
     <Button>
          <span className='svgIcon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.054 24"><path class="b" d="M20.79,4H4.088A2.042,2.042,0,0,0,2.01,6L2,18a2.051,2.051,0,0,0,2.088,2h16.7a2.051,2.051,0,0,0,2.088-2V6A2.051,2.051,0,0,0,20.79,4Zm0,4-8.351,5L4.088,8V6l8.351,5L20.79,6Z" transform="translate(0.088)"/><path class="a" d="M0,0H25.054V24H0Z"/></svg>
         </span>
         Email
    </Button>
     <Button>
          <span className='svgIcon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.96 24"><rect class="a" width="24.96" height="24"/><rect class="a" width="24.96" height="24"/><path class="b" d="M20.508,9.3h0l-.1,4.9a3.082,3.082,0,0,1-3.224,2.9H11.356c-.52,0-.728.1-.832.2l-1.248.9c.208,1,1.456,1.5,2.6,1.5h4.472c.312,0,.52,0,.624.1l2.7,2.2V19.7h.832a2.242,2.242,0,0,0,2.288-2V11.4A2.184,2.184,0,0,0,20.508,9.3ZM9.8,16.2c.1-.1.312-.2.832-.2h5.1a3.055,3.055,0,0,0,3.12-2.9V4.6A2.728,2.728,0,0,0,16.036,2H4.908A2.864,2.864,0,0,0,2.1,5v8.2A2.91,2.91,0,0,0,5.22,16h.832v3.1Z" transform="translate(0.084)"/></svg>
         </span>
         Chat 
     </Button>
    </Grid.Row>
        <Grid.Row only='computer tablet' container className="rowTopBorder" mobile={16}>
    <span className='interestLabel'>Interested with the ad? Contact the seller</span>
     <Button fluid>
         <span className='svgIcon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.458 24"><path class="a" d="M0,0H24.458V24H0Z"/><path class="b" d="M6.689,10.79A15.3,15.3,0,0,0,13.4,17.38l2.242-2.2a1.027,1.027,0,0,1,1.039-.24,11.827,11.827,0,0,0,3.638.57,1.013,1.013,0,0,1,1.019,1V20a1.013,1.013,0,0,1-1.019,1A17.163,17.163,0,0,1,3,4,1.013,1.013,0,0,1,4.019,3H7.586A1.013,1.013,0,0,1,8.6,4a11.166,11.166,0,0,0,.581,3.57.99.99,0,0,1-.255,1.02Z" transform="translate(0.057)"/></svg>
         </span>
         0176895xxx
         </Button>
     <Button fluid>
          <span className='svgIcon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.054 24"><path class="b" d="M20.79,4H4.088A2.042,2.042,0,0,0,2.01,6L2,18a2.051,2.051,0,0,0,2.088,2h16.7a2.051,2.051,0,0,0,2.088-2V6A2.051,2.051,0,0,0,20.79,4Zm0,4-8.351,5L4.088,8V6l8.351,5L20.79,6Z" transform="translate(0.088)"/><path class="a" d="M0,0H25.054V24H0Z"/></svg>
         </span>
         Email
    </Button>
     <Button fluid>
          <span className='svgIcon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.96 24"><rect class="a" width="24.96" height="24"/><rect class="a" width="24.96" height="24"/><path class="b" d="M20.508,9.3h0l-.1,4.9a3.082,3.082,0,0,1-3.224,2.9H11.356c-.52,0-.728.1-.832.2l-1.248.9c.208,1,1.456,1.5,2.6,1.5h4.472c.312,0,.52,0,.624.1l2.7,2.2V19.7h.832a2.242,2.242,0,0,0,2.288-2V11.4A2.184,2.184,0,0,0,20.508,9.3ZM9.8,16.2c.1-.1.312-.2.832-.2h5.1a3.055,3.055,0,0,0,3.12-2.9V4.6A2.728,2.728,0,0,0,16.036,2H4.908A2.864,2.864,0,0,0,2.1,5v8.2A2.91,2.91,0,0,0,5.22,16h.832v3.1Z" transform="translate(0.084)"/></svg>
         </span>
         Chat 
     </Button>
    </Grid.Row>
        
    </Grid>
)

export default ProductInfo;
