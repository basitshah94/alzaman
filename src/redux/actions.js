export const SET_QASAID_SEARCH_FIELD = 'SET_QASAID_SEARCH_FIELD';
export const setQasaidSearchField= (field) => {
    return {type:'SET_QASAID_SEARCH_FIELD',payload:field}
};

export const SET_QASAID_SEARCH_TERM = 'SET_QASAID_SEARCH_TERM';
export const setQasaidSearchTerm= (term) => {
    return {type:'SET_QASAID_SEARCH_TERM',payload:term}
};


export const SET_QASAID = 'SET_QASAID';
export const setQasaid= (qasaid) => {
    return {type:'SET_QASAID',payload:qasaid}
};


export const FETCH_COMBOBOXVALUES = 'FETCH_COMBOBOXVALUES';
export const fetchComboboxValues= (value,comboBoxArr) => {
    // console.log(`http://localhost:9000/getComboxValues?v=${value}&type=${comboBoxArr[0].type}&sinf=${comboBoxArr[1].sinf}&lang=${comboBoxArr[2].lang}&book=${comboBoxArr[3].book}&main_cat=${comboBoxArr[4].main_cat}`)
    return async (dispatch,getState) => {
            // let comboboxValuesRes=await fetch(`http://localhost:9000/getComboxValues?v=${value}&type=${comboBoxArr[0].type}&sinf=${comboBoxArr[1].sinf}&lang=${comboBoxArr[2].lang}&book=${comboBoxArr[3].book}&main_cat=${comboBoxArr[4].main_cat}`);
            
            // let comboboxValuesData=await comboboxValuesRes.json();
            // console.log("Fetched combo values",comboboxValuesData)
            // dispatch({type:'FETCH_COMBOBOXVALUES',payload:comboboxValuesData})
    }
};

export const SEARCH_QASAID = 'SEARCH_QASAID';
export const searchQasaid= (value='',comboBoxArr=[]) => {
    return async (dispatch,getState) => {
        let qasaidRes={}
        let qasaidData=[]
        if(value==''){
            const {qasaidSearchTerm,searchCategory}=getState()
            
            if(searchCategory=='poetry'){
                // qasaidRes=await fetch(`http://localhost:9000/searchQasida?v=${qasaidSearchTerm}`)
                qasaidData=await qasaidRes.json()
            }
            else if (searchCategory=='books'){
                // qasaidRes=await fetch(`http://localhost:9000/searchBook?v=${qasaidSearchTerm}`)
                qasaidData=await qasaidRes.json()
            }
            else {
                // qasaidRes=await fetch(`http://localhost:9000/searchBoth?v=${qasaidSearchTerm}`)
                qasaidData=await qasaidRes.json()
            }
        }else{
                // qasaidRes=await fetch(`http://localhost:9000/searchCombo?&type=${comboBoxArr[0].type}&sinf=${comboBoxArr[1].sinf}&lang=${comboBoxArr[2].lang}&book=${comboBoxArr[3].book}&main_cat=${comboBoxArr[4].main_cat}`);
                qasaidData=await qasaidRes.json();
                // console.log('Combobox search',qasaidData)
        }
        dispatch({type:'SEARCH_QASAID',payload:qasaidData})
    }
};

export const SEARCH_QASAID_COMBOBOX = 'SEARCH_QASAID_COMBOBOX';
export const searchQasaidComboBox= (comboBoxArr) => {
    return async (dispatch,getState) => {
        const {qasaidSearchTerm,searchCategory}=getState()
        let qasaidRes={}
        let qasaidData=[]
        // qasaidRes=await fetch(`http://localhost:9000/searchCombo?type=${comboBoxArr[0].type}&sinf=${comboBoxArr[1].sinf}&lang=${comboBoxArr[2].lang}&book=${comboBoxArr[3].book}&main_cat=${comboBoxArr[4].main_cat}`);
        // qasaidRes=await fetch(`http://localhost:9000/searchCombo?v=${qasaidSearchTerm}`)
        qasaidData=await qasaidRes.json()
        dispatch({type:'SEARCH_QASAID_COMBOBOX',payload:qasaidData})

    }
};

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const setSearchTerm= (term) => {
    return {type:'SET_SEARCH_TERM',payload:term}
};

export const SET_SEARCH_CATEGORY = 'SET_SEARCH_CATEGORY';
export const setSearchCategory= (term) => {
    return {type:'SET_SEARCH_CATEGORY',payload:term}
};

export const LOGO_URL = 'LOGO_URL';
export const setLogo= () => {
    return {type:'LOGO_URL',payload:Math.floor(Math.random() * 9)}
};

export const READ_FILE_NAMES = 'READ_FILE_NAMES';
export const readFileNames= () => {
    return async (dispatch,getState) => {
        let fienameRes={}
        let fienameData=[]
        // fienameRes=await fetch(`http://localhost:9000/readfiles?p=D%3a%2fjamanshah%2fpdf%2fintro`);
        // console.log('Resp',fienameRes)
        fienameData=await fienameRes.json()
        // console.log('Action Data',fienameData)
        dispatch({type:'READ_FILE_NAMES',payload:fienameData})
        // return {type:'READ_FILE_NAMES',payload:fienameData}
    }
};

export const READ_AUDIO_FILES = 'READ_AUDIO_FILES';
export const readAudioFiles= () => {
    return async (dispatch,getState) => {
        let fienameRes={}
        let fienameData=[]
        // fienameRes=await fetch(`http://localhost:9000/readfiles?p=D%3a%2fjamanshah%2faudio`);
        console.log('Resp',fienameRes)
        fienameData=await fienameRes.json()
        console.log('Action Data',fienameData)
        dispatch({type:'READ_AUDIO_FILES',payload:fienameData})
        // return {type:'READ_FILE_NAMES',payload:fienameData}
    }
};