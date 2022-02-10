import { ContactSupport } from '@material-ui/icons';
import React, {Component,lazy} from 'react';
const QasidaMediaCard=lazy(() => import('../qasidamediacard'));

class PaginatedItems extends Component{
    state={

    }
    componentDidMount(){

    }

    renderQasaidPaginated(){
        
        let i=0;
        return this.props.items.map((qaseeda) => {
            i+=1
            return(<QasidaMediaCard  key={qaseeda.id} id={i-1} qaseeda_pak={qaseeda}/>)
        })
    }
    render(){
        return(this.renderQasaidPaginated())
    }
}
// Add a <div id="container"> to your HTML to see the componend rendered.

export default PaginatedItems;