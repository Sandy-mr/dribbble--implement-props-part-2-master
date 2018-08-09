import React from 'react';
import Cover from './Cover';
import Stats from './Stats';

class Shot extends React.Component{
    render(){
        return(
            <div className='container'>
                <article className='shot'>
                    <Cover image={this.props.data.img} />
                <div className='shots__stats'>
                    <Stats  views={this.props.data.stats[0]} comments={this.props.data.stats[1]} hearts={this.props.data.stats[2]} />
                </div>
                </article>
            </div>
        );
    }
}

export default Shot;
