import * as MISSIONS_API from '../api/missionsApi'

const FETCH_API="FETCH_API"


export const fetchMissions =(payLoad)=>({
    type:FETCH_API,
    payLoad:payLoad,
});