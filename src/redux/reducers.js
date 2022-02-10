import {combineReducers} from 'redux'
import {
    SET_QASAID_SEARCH_FIELD,
    SET_QASAID_SEARCH_TERM,
    SEARCH_QASAID,
    SET_SEARCH_TERM,
    SET_SEARCH_CATEGORY,
    LOGO_URL,
    FETCH_COMBOBOXVALUES,
    SET_QASAID,
    READ_FILE_NAMES,
    READ_AUDIO_FILES
} from './actions';

//------------------------------------------------------------
export const qasaidDataReducer = (state = [], action) => {
    
    const { type, payload } = action;
    switch (type) {
    case SEARCH_QASAID: {
        
        return payload
    }
    case SET_QASAID:{
        return payload
    }
    default:
        return state;
    }
}

export const qasaidSearchTermReducer=(state=[],action)=>{
    const {type,payload}=action;
    switch(type){
        case SET_QASAID_SEARCH_TERM:{
            // if(window.location.pathname!='/results'){
            //     window.location.pathname='/results'
            //   }
            return payload
        }
        default:
            return state;
    }
}

export const searchTermReducer=(state=[],action)=>{
    const {type,payload}=action;
    switch(type){
        case SET_SEARCH_TERM:{
            return payload
        }
        default:
            return state;
    }
}

export const qasaidSearchFieldReducer=(state=[],action)=>{
    const {type,payload}=action;
    switch(type){
        case SET_QASAID_SEARCH_FIELD:{
            return payload
        }
        default:
            return state;
    }
}


export const searchCatergoryReducer=(state=[],action)=>{
    const {type,payload}=action;
    switch(type){
        case SET_SEARCH_CATEGORY:{
            // if(window.location.pathname!='/results'){
            //     window.location.pathname='/results'
            //   }
            return payload
        }
        default:
            return state;
    }
}


export const getComboxvaluesReducer=(state=[],action)=>{
    const {type,payload}=action;
    // console.log('fetch reducer',payload)
    switch(type){
        case FETCH_COMBOBOXVALUES:{
            
            // if(window.location.pathname!='/results'){
            //     window.location.pathname='/results'
            //   }
            return payload
        }
        default:
            return state;
    }
}


export const setLogo=(state=[],action)=>{
    const {type,payload}=action;
    switch(type){
        case LOGO_URL:{
            return payload
        }
        default:
            return state;
    }
}
export const readFileNamesReducer=(state=[],action)=>{
    const {type,payload}=action;
    // const {files}=payload;

    // console.log('Reducer data',payload)
    switch(type){
        case READ_FILE_NAMES:{

            return payload
        }
        case READ_AUDIO_FILES:{
            return payload
        }
        default:
            return state;
    }
}
export const readAudioFilesReducer=(state=[],action)=>{
    const {type,payload}=action;
    switch(type){
        case READ_AUDIO_FILES:{
            return payload
        }
        default:
            return state;
    }
}
//-------------------------------------------------------------------
export default combineReducers({
    qasaid:qasaidDataReducer,
    qasaidSearchTerm:qasaidSearchTermReducer,
    qasaidSearchField:qasaidSearchFieldReducer,
    searchTerm:searchTermReducer,
    searchCategory:searchCatergoryReducer,
    imgNumber:setLogo,
    comboxValues:getComboxvaluesReducer,
    files:readFileNamesReducer,
    audios:readFileNamesReducer
})