
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RadioGroup from '@material-ui/core/RadioGroup';
import { AccordionSummary, Accordion,Container, Divider, Radio, AccordionDetails, Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { FormControlLabel,TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {connect} from 'react-redux';
import ImgsViewer from "react-images-viewer";
import { saveAs } from 'file-saver';
import ReactPlayer from 'react-media-viewer';
import AudioPlayer from "react-h5-audio-player";
import ReactAudioPlayer from 'react-audio-player';
import './mediacard.css';
// import ReactPlayer from 'react-player/youtube';
// import ReactPlayer from 'react-video-js-player';

// import ReactWebMediaPlayer from 'react-web-media-player';
import { Media, Player } from 'react-media-player'
// const { PlayPause, MuteUnmute } = controls
class MediaCard extends Component{
    state={
        baseurl:'https://jamanshah.com/crj/',
        version:'',
        selectedValue:'',
        displayValues:[],
        mediaLinkBool:false,
        tarzainBool:false,
        roomBool:false,
        videoBool:false,
        riasatAliBool:false,
        stageBool:false,
        qaseeda:this.props.qaseeda_pak,
        medialink:'',
        isYoutubeLink:false,
        viewerIsOpen:false,
        isComboBoxEnabled:false,
        imgSet:{
            imgs:[{src:''},{src:''},{src:''}]
        }
        
    }
    componentDidMount() {
        this.handleQaseedaLoad();
    };
    handleQaseedaLoad=()=>{
        for (let tarzindx in this.state.qaseeda["tarzain"]){
            if(this.state.qaseeda["tarzain"][tarzindx]!=='None'){
                this.setState({tarzainBool:true})
                break
            }   
        }

        for (let tarzindx in this.state.qaseeda["media_link"]){
            if(this.state.qaseeda["media_link"][tarzindx]!=='None'){
                this.setState({mediaLinkBool:true})
                break
            }   
        }

        for (let tarzindx in this.state.qaseeda["video"]){
            if(this.state.qaseeda["video"][tarzindx]!=='None'){
                this.setState({videoBool:true})
                break
            }   
        }

        for (let tarzindx in this.state.qaseeda["riasat_ali_and_other"]){
            if(this.state.qaseeda["riasat_ali_and_other"][tarzindx]!=='None'){
                this.setState({riasatAliBool:true})
                break
            }   
        }

        if(this.state.qaseeda["room"]!=="None"){
                this.setState({roomBool:true})
            }

        if(this.state.qaseeda["stage"]!=="None"){
            this.setState({stageBool:true})
        } 
    }
    handleVersionChange=(event)=>{
        this.setState({displayValues:[]})
        this.setState({selectedValue:''});
        this.setState({version:event.target.value})
        this.setState({isYoutubeLink:false})
        this.setState({isComboBoxEnabled:false})
        this.setState({medialink:''})
        if(event.target.value==='Tarzain'){
            let tarzcount=0
            let tarzainArr=[]
            for (let tarzindx in this.state.qaseeda["tarzain"]){
                if(this.state.qaseeda["tarzain"][tarzindx]!=='None'){
                    // console.log(this.state.qaseeda["tarzain"][tarzindx])
                    tarzainArr.push(`Tarz-${parseInt(tarzindx)+1}`)
                    tarzcount+=1
                }   
            }
            // console.log(this.state.qaseeda["tarzain"].length)
            if(this.state.qaseeda["tarzain"].length<=1){
                for(let tarzindx in this.state.qaseeda["tarzain"]){
                    if(this.state.qaseeda["tarzain"][tarzindx]!=='None'){
                        let link=this.state.baseurl+this.state.qaseeda["tarzain"][tarzindx]
                        // console.log(link)
                        if (link)
                        {
                            if(link.includes('youtu')){
                                this.setState({isYoutubeLink:true})
                            }
                            this.setState({medialink:link})
                            break
                        }   
                    
                    }
                }
            }
            else{
                this.setState({displayValues:tarzainArr})
                this.setState({isComboBoxEnabled:true})
            }
        }
        else if(event.target.value==='MediaLink'){
            let tarzcount=0
            let tarzainArr=[]
            for (let tarzindx in this.state.qaseeda["media_link"]){
                if(this.state.qaseeda["media_link"][tarzindx]!=='None'){
                    // console.log(this.state.qaseeda["media_link"][tarzindx])
                    tarzainArr.push(`Media Link-${parseInt(tarzindx)+1}`)
                    tarzcount+=1
                }   
            }
            // console.log(this.state.qaseeda["media_link"].length)
            if(this.state.qaseeda["media_link"].length<=1){
                for(let tarzindx in this.state.qaseeda["media_link"]){
                    if(this.state.qaseeda["media_link"][tarzindx]!=='None'){
                        let link=this.state.baseurl+this.state.qaseeda["media_link"][tarzindx]
                        // console.log(link)
                        if (link)
                        {
                            if(link.includes('youtu')){
                                this.setState({isYoutubeLink:true})
                            }
                            this.setState({medialink:link})
                            break
                        }   
                    
                    }
                }
            }
            else{
                this.setState({displayValues:tarzainArr})
                this.setState({isComboBoxEnabled:true})
            }
        }
        else if(event.target.value==='RiasatAliAndOthers'){
            let tarzcount=0
            let tarzainArr=[]
            for (let tarzindx in this.state.qaseeda["riasat_ali_and_other"]){
                if(this.state.qaseeda["riasat_ali_and_other"][tarzindx]!=='None'){
                    // console.log(this.state.qaseeda["riasat_ali_and_other"][tarzindx])
                    tarzainArr.push(`Version-${parseInt(tarzindx)+1}`)
                    tarzcount+=1  
                }   
            }
            // console.log(this.state.qaseeda["riasat_ali_and_other"].length)
            if(this.state.qaseeda["riasat_ali_and_other"].length<=1){
                for(let tarzindx in this.state.qaseeda["riasat_ali_and_other"]){
                    if(this.state.qaseeda["riasat_ali_and_other"][tarzindx]!=='None'){
                        let link=this.state.baseurl+this.state.qaseeda["riasat_ali_and_other"][tarzindx]
                        // console.log(link)
                        if (link)
                        {
                            if(link.includes('youtu')){
                                this.setState({isYoutubeLink:true})
                            }
                            this.setState({medialink:link})
                            break
                        }   
                    
                    }
                }
            }
            else{
                this.setState({displayValues:tarzainArr})
                this.setState({isComboBoxEnabled:true})
            }
        }
        else if(event.target.value==='Video'){
            let tarzcount=0
            let tarzainArr=[]
            for (let tarzindx in this.state.qaseeda["video"]){
                if(this.state.qaseeda["video"][tarzindx]!=='None'){
                    // console.log(this.state.qaseeda["video"][tarzindx])
                    tarzainArr.push(`Video-${parseInt(tarzindx)+1}`)
                    tarzcount+=1  
                }   
            }
            // console.log(this.state.qaseeda["video"].length)
            if(this.state.qaseeda["video"].length<=1){
                for(let tarzindx in this.state.qaseeda["video"]){
                    if(this.state.qaseeda["video"][tarzindx]!=='None'){
                        let link=this.state.baseurl+this.state.qaseeda["video"][tarzindx]
                        // console.log(link)
                        if (link)
                        {
                            if(link.includes('youtu')){
                                this.setState({isYoutubeLink:true})
                            }
                            this.setState({medialink:link})
                            break
                        }   
                    
                    }
                }
            }
            else{
                this.setState({displayValues:tarzainArr})
                this.setState({isComboBoxEnabled:true})
            }
        }
        else if(event.target.value==='RoomRec'){
            let link=this.state.baseurl+this.state.qaseeda["room"]
            if (link)
            {
                if(link.includes('youtu')){
                    this.setState({isYoutubeLink:true})
                    link=this.state.qaseeda["room"]
                }
                this.setState({medialink:link}) 
            }   
        }
        else if(event.target.value==='StageRec'){
            let link=this.state.baseurl+this.state.qaseeda["stage"]
            if (link)
            {
                if(link.includes('youtu')){
                    this.setState({isYoutubeLink:true})
                    link=this.state.qaseeda["stage"]
                }
                this.setState({medialink:link}) 
            }   
        }
       
    };
    comboBoxChange=(_event, newInputValue) => {
        // this.setState({medialink:null})
        this.setState({isYoutubeLink:false})
        this.setState({selectedValue:newInputValue});
        if(this.state.version==='Tarzain'){
            const clickedIndex=parseInt((newInputValue.split('-'))[1])-1
            // this.setState({openStatus:true})
            let link=this.state.baseurl+this.state.qaseeda["tarzain"][clickedIndex] 
            if (link)
            {
                if(link.includes('youtu')){
                    this.setState({isYoutubeLink:true})
                    link=this.state.qaseeda["tarzain"][clickedIndex] 
                }
                this.setState({medialink:link})
            }
        }
        else if(this.state.version==='MediaLink'){
            const clickedIndex=parseInt((newInputValue.split('-'))[1])-1
            // console.log('Clicked',clickedIndex)
            // this.setState({openStatus:true})
            let link=this.state.baseurl+this.state.qaseeda["media_link"][clickedIndex] 
            // console.log(link)
            if (link)
            {
                if(link.includes('youtu')){
                    this.setState({isYoutubeLink:true})
                    link=this.state.qaseeda["media_link"][clickedIndex]
                }
                this.setState({medialink:link})
            }
        }
        else if(this.state.version==='RiasatAliAndOthers'){
            const clickedIndex=parseInt((newInputValue.split('-'))[1])-1
            // console.log('Clicked',clickedIndex)
            // this.setState({openStatus:true})
            let link=this.state.baseurl+this.state.qaseeda["riasat_ali_and_other"][clickedIndex] 
            // console.log(link)
            if (link)
            {
                if(link.includes('youtu')){
                    // console.log('youtube')
                    this.setState({isYoutubeLink:true})
                    link=this.state.qaseeda["riasat_ali_and_other"][clickedIndex]
                }
                this.setState({medialink:link})
            }
        }
        else if(this.state.version==='Video'){
            const clickedIndex=parseInt((newInputValue.split('-'))[1])-1
            // console.log('Clicked',clickedIndex)
            // this.setState({openStatus:true})
            let link=this.state.baseurl+this.state.qaseeda["video"][clickedIndex] 
            // console.log(link)
            if (link)
            {
                if(link.includes('youtu')){
                    // console.log('youtube')
                    this.setState({isYoutubeLink:true})
                    link=this.state.qaseeda["video"][clickedIndex]
                }
                this.setState({medialink:link})
            }
        }
    }
    pgClicked=()=>{
        // let charLen=6
        // let imgNumbr='123'
        // let zeroLen=charLen-imgNumbr.length
        // let zeroStr='0'.repeat(6-imgNumbr.length)
        // console.log(zeroStr+imgNumbr)
        console.log('Written',this.props.qaseeda_pak.written[0])
        var current=this.state.baseurl+this.props.qaseeda_pak.written[0].replace('\\\\','/')
        console.log('Current',current)
        const arraySplit=current.split('_')
        console.log(arraySplit)
        const jpg=arraySplit[1].split('.')
        console.log('jpg',jpg)
        const prev=arraySplit[0]+'_'+'0'.repeat(6-parseInt(jpg[0]).toString().length)+(parseInt(jpg[0])-1).toString()+'.jpg'//+jpg[1]
        console.log('prev',prev)
        const next=arraySplit[0]+'_'+'0'.repeat(6-parseInt(jpg[0]).toString().length)+(parseInt(jpg[0])+1).toString()+'.jpg'//+jpg[1]
        console.log('next',next)
        this.setState({imgSet:{
            imgs:[{src:prev},{src:current},{src:next}]
        }})
        this.setState({viewerIsOpen:true})
    }
    gotoNext=()=>{
        const current=this.state.imgSet['imgs'][2]['src']
        console.log('Current',current)
        const arraySplit=current.split('_')
        const jpg=arraySplit[1].split('.')
        const prev=arraySplit[0]+'_'+'0'.repeat(6-parseInt(jpg[0]).toString().length)+(parseInt(jpg[0])-1).toString()+'.jpg'//+jpg[1]
        console.log('Previous',prev)
        const next=arraySplit[0]+'_'+'0'.repeat(6-parseInt(jpg[0]).toString().length)+(parseInt(jpg[0])+1).toString()+'.jpg'//+jpg[1]
        console.log('Next',next)
        this.setState({imgSet:{
            imgs:[{src:prev},{src:current},{src:next}]
        }})
    }
    gotoPrevious=()=>{
        const current=this.state.imgSet['imgs'][0]['src']
        const arraySplit=current.split('_')
        const jpg=arraySplit[1].split('.')
        const prev=arraySplit[0]+'_'+'0'.repeat(6-parseInt(jpg[0]).toString().length)+(parseInt(jpg[0])-1).toString()+'.jpg'//+jpg[1]
        const next=arraySplit[0]+'_'+'0'.repeat(6-parseInt(jpg[0]).toString().length)+(parseInt(jpg[0])+1).toString()+'.jpg'//+jpg[1]
        this.setState({imgSet:{
            imgs:[{src:prev},{src:current},{src:next}]
        }})
    }
    handleImageDownload=async()=>{
        const img_url=this.state.imgSet.imgs[1].src;
        const image = await fetch(img_url);
        const imageBlog = await image.blob()
        const img_arr=this.state.imgSet.imgs[1].src.split('/');
        const img_name=img_arr[img_arr.length-1];
        console.log('Img URL:',img_url,'Img:',img_name);
        saveAs(imageBlog,img_name)
    }
        
    render(){
        return(
            <Accordion className='accordian'>
                <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel1a-content"
                 id={(this.state.mediaLinkBool||
                    this.state.tarzainBool||
                    this.state.roomBool||
                    this.state.videoBool||
                    this.state.riasatAliBool||
                    this.state.stageBool)?"panel1a-header-data":"panel1a-header"}
                >
                    <Grid container>
                    <Grid item className='col' xs={1} sm={1} onClick={this.pgClicked}>
                    <Link>
                        <b>{parseInt(this.state.qaseeda["pg_no"])+'        '}</b>
                    </Link>
                    </Grid>
                    <Grid className='text-center'  item className='col' xs={1} sm={1}>
                        {this.state.qaseeda['sinf']+'        '}
                    </Grid>
                    <Grid item className='col' xs={1} sm={1}>
                        {this.state.qaseeda["sub_cat"].split(' ').slice(0,5).join(' ')}
                        {/* {this.state.qaseeda['sub_cat']} */}
                    </Grid>
                    <Grid item className='col' xs={2} sm={2}>
                        {this.state.qaseeda['main_cat']}
                    </Grid>
                    <Grid item className='col' xs={1} sm={1}>
                        {this.state.qaseeda['language']}
                    </Grid>
                    <Grid  item xs={4} sm={4}>
                            <b>{(this.state.qaseeda.search_cat!='book')?(
                                this.state.qaseeda["title"]
                            ):(
                                '...'+this.state.qaseeda["title"].split(' ').slice(0,12).join(' ')
                            )}</b>
                            
                    </Grid>
                    <Grid item className='col' xs={2} sm={2}>
                        {this.state.qaseeda['book_name']}
                    </Grid>
                    </Grid>
                    
                </AccordionSummary>
                <Divider></Divider>
                <AccordionDetails id={this.state.qaseeda.search_cat+'-details'}>
                {/* {this.state.qaseeda.search_cat!='book'} */}
                    {(this.state.qaseeda.search_cat!='book')?(
                        <Grid container>
                            <Grid id="mediaPlayer" item xs={12} md={6} sm={12}>
                                {this.state.medialink &&
                                    <div>
                                        {this.state.isYoutubeLink &&
                                            <Media>
                                                <div className="media-player">
                                                    <Player src={this.state.medialink}/>
                                                </div>
                                            </Media>
                                        }
                                        {!this.state.isYoutubeLink &&
                                            <div>
                                                {/* <ReactPlayer
                                                url={this.state.medialink} 
                                                /> */}
                                                {/* <AudioPlayer
                                                    autoPlay
                                                    src={this.state.medialink} 
                                                    onPlay={e => console.log("onPlay")}
                                                    // other props here
                                                /> */}
                                                <ReactAudioPlayer
                                                    src={this.state.medialink}
                                                    autoPlay
                                                    controls
                                                    />
                                            </div>
                                        }
                                    </div>
                                }
                            </Grid> 
                            
                            <Grid item className='meta' xs={6} sm={6}>
                                    <RadioGroup value={this.state.version} onChange={this.handleVersionChange}>
                                        <Container className='radioGroup'>
                                            <FormControlLabel value='Tarzain' disabled ={(this.state.tarzainBool)?false:true} control={<Radio color="primary"/>} label="Tarzain" />
                                            <FormControlLabel value='MediaLink' disabled ={(this.state.mediaLinkBool)?false:true} control={<Radio color="primary"/>} label="Media Link" />
                                            <FormControlLabel value='RiasatAliAndOthers' disabled ={(this.state.riasatAliBool)?false:true} control={<Radio color="primary"/>} label="Riasat Ali And Others" />
                                            <FormControlLabel value='Video' disabled ={(this.state.videoBool)?false:true} control={<Radio color="primary"/>} label="Video" />
                                            <FormControlLabel value='RoomRec' disabled ={(this.state.roomBool)?false:true} control={<Radio color="primary"/>} label="Room" />
                                            <FormControlLabel value='StageRec' disabled ={(this.state.stageBool)?false:true} control={<Radio color="primary"/>} label="Stage" />
                                            {this.state.isComboBoxEnabled}
                                        </Container>
                                        <Container className='comboBox'>
                                        {this.state.isComboBoxEnabled &&
                                        <Autocomplete
                                            className='combobox'
                                            value={this.state.selectedValue}
                                            onChange={this.comboBoxChange}
                                            options={this.state.displayValues}
                                            renderInput={(params) => <TextField placeholder="Click to select more audio / video" {...params} variant="outlined" />}
                                            />
                                        }
                                        </Container>  
                                    </RadioGroup> 
                            </Grid>
                            
                        </Grid>

                    ):(
                        <div>
                            <p>
                                {this.state.qaseeda.title}
                            </p>
                        </div>
                    )
                    }
                    
                </AccordionDetails>
                <ImgsViewer
                    imgs={this.state.imgSet['imgs']}
                    currImg={1}
                    customControls={[<Button onClick={this.handleImageDownload}>Dowload</Button>]}
                    isOpen={this.state.viewerIsOpen}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClose={()=>{
                        this.setState({viewerIsOpen:false})
                    }}
                />
            </Accordion>
        )
    };
}
export default MediaCard;
