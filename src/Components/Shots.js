import React from 'react';
import Shot from './Shot';
import {listObj} from '../data/listObj';

class Shots extends React.Component{
    render(){
        return(
            <div className="container">
              {listObj.map(function(element){
                 return <Shot data={element} />
              }) }

            </div>
        );
    }
}
export default Shots;
