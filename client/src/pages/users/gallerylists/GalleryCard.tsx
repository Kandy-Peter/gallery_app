import React, { ReactElement } from 'react';
import {Card} from '@material-ui/core';
import './GalleryLists.scss';
import { baseUrl } from '../../../apicalls/ApiCallSetup';

export interface GalleryCardProps {
  items:any
}

 const GalleryCard:React.FC<GalleryCardProps> = ({items}:GalleryCardProps):ReactElement => 
{

    return (
       <Card>
       
         <img
          data-testid="img-display-is-present"
         className="image-for-post"
          src={`${baseUrl}img/${items.image}`}
         />
         <h4 className="elipse-text centred-text">
             {items.title}
             <br/>
         </h4>
         <p className="elipse-text centred-text">
              {items.description}
          </p>
       </Card> 
    );

}


export default GalleryCard;