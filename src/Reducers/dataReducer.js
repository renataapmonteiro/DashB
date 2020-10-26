import { FETCHED_DATA } from '../Actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default function( state = [], action){
    // eslint-disable-next-line default-case
    switch( action.type ){
        case FETCHED_DATA:
            return [ action.payload.data, ...state ]
    }
    return state;
}