    import React from 'react';
    import img from 'assetsimage/easy.svg';
    import {Grid} from 'semantic-ui-react' 

    class EasyHeader extends React.Component {
        constructor(props)
        {
            super(props);
            this.state = {
                title:'easy.my'
            };
        }

       
       render() {
        const status =this.state.title;

        return (
          <div>
                
            <div className="navheader">
                <div className="title">
                <img
        className="image"
        src={img}
        alt="Logo"
      /></div>
        </div>
                
            </div>
        );
      }
        
      }
    export default EasyHeader;

