import { Grid,Card } from '@material-ui/core';
import {readFileNames} from '../redux/actions';
import './pdf_books.css';
import { saveAs } from 'file-saver';
import {Typography} from '@material-ui/core';

import {connect} from 'react-redux';
import React, { Component,  } from 'react';

class PdfBooks extends Component{    
    state={
    }
    componentDidMount() {
        this.props.readFileNames()
    };
    renderImages=()=>{
        let i=0
        return this.props.files.map((image) => {
            i=i+1
            return(<Grid item key={i} xs={12} sm={12}><img  width='700vw' onClick={this.handleClick} src={`http://localhost:9001/pdfdata/intro/${image}`}/></Grid>)
        })
    }
    handleClick=(event,key)=>{
        let pdfpath=event.target.getAttribute("src").replace('intro','pdf')
        pdfpath=pdfpath.replace('jpg','pdf')
        const pdf_arr=pdfpath.split('/');
        const pdf_name=pdf_arr[pdf_arr.length-1];
        saveAs(pdfpath,pdf_name)
    }
    render(){
        return(
            <Grid container id='pdf-container'>
                <Grid item xs={12} sm={12}>
                    <Typography variant='h1' className='logo'>
                        PDF Books Library
                    </Typography>
                </Grid>
                {this.renderImages()}
            </Grid>
        )
    };s
}

const mapStateToProps=(state)=>{
    const {files}=state
    return {files}
}

export default connect(mapStateToProps,{readFileNames})(PdfBooks);