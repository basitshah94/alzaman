import { Grid,Card } from '@material-ui/core';
import {readAudioFiles} from '../redux/actions';
import './audio.css';
// import { saveAs } from 'file-saver';
import {Typography} from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

import {connect} from 'react-redux';
import React, { Component,  } from 'react';

class Audio extends Component{    
    state={
    }
    componentDidMount() {
        this.props.readAudioFiles()
    };
    renderImages=()=>{
        let i=0
        return this.props.audios.map((audio) => {
            i=i+1
            console.log(`http://localhost:9001/audio/${audio}`)
            return(<Grid item key={i} xs={3} md={3} sm={12}>
                <Typography variant='h6' className='logo'>
                    {audio}
                </Typography>
                <AudioPlayer
                elevation={1}
                width="100%"
                variation="default"
                spacing={3}
                download={true}
                order="standart"
                src={`http://localhost:9001/audio/${audio}`} 
                controls/>
                </Grid>)
        })
    }
    render(){
        return(
            <Grid container id='audio-container'>
                <Grid item xs={12} sm={12}>
                    <Typography variant='h1' className='logo'>
                       Audio Directory
                    </Typography>
                </Grid>
                {this.renderImages()}
            </Grid>
        )
    };s
}

const mapStateToProps=(state)=>{
    const {audios}=state
    return {audios}
}

export default connect(mapStateToProps,{readAudioFiles})(Audio);