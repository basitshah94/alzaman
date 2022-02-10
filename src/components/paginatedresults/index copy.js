import { ContactSupport } from '@material-ui/icons';
import React, {Component,lazy} from 'react';
const QasidaMediaCard=lazy(() => import('../qasidamediacard'));

class PaginatedItems extends Component{
    state={
        itemOffset: (this.props.currentPage * 500) % this.props.items.length,
        endOffset:  ((this.props.currentPage * 500) % this.props.items.length) + 500,
        currentItems:[],
        itemsPerPage:500,
    }
    componentDidMount(){
        const newOffset =(this.props.currentPage * this.state.itemsPerPage) % this.props.items.length;
        this.setState({itemOffset:newOffset});

        var endOffset = this.state.itemOffset + this.state.itemsPerPage;
        this.setState({currentItems:this.props.items.slice(this.state.itemOffset, endOffset)});
    }
    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            console.log('Props changed')
            const newOffset =(this.props.currentPage * this.state.itemsPerPage) % this.props.items.length;

            console.log('new offset',newOffset);
            this.setState({itemOffset:newOffset});

            var endOffset = this.state.itemOffset + 500;
            console.log(this.props.items.slice(this.state.itemOffset, endOffset))

            
            this.setState({currentItems:this.props.items.slice(this.state.itemOffset, endOffset)});
        }
        
    }
    renderQasaidPaginated(){
        
        let i=0;
        return this.state.currentItems.map((qaseeda) => {
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