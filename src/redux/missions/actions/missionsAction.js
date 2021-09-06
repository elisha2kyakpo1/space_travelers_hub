import * as MISSIONS_API from '../api/missionsApi'

const FETCH_API="FETCH_API"


export const fetchMissions =(payLoad)=>({
    type:FETCH_API,
    payLoad:payLoad,
});

export const getMissionsApi = ()=>(dispatch)=>{
    const missions= await MISSIONS_API.getMissions();
    if (missions){
        dispatch(missions)
    }
}