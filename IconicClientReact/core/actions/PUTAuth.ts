import {Dispatch} from "redux";
import axios, {AxiosError, AxiosResponse} from "axios";
import {wrapUrl} from "../../helpers/urlWrapper";
import {apiUrl} from "../../config";
import {getAuthToken, setAuthToken} from "../../helpers/AuthHelper";
import {TokenAction, TokenActionTypes} from "../../types/auth";
import {CommonResponseError} from "../../types/basicTypes";


export const putAuthUser = (username: string, first_name: string, last_name: string, phone: string) => {
    return async (dispatch: Dispatch<TokenAction>) => {
        dispatch({type: TokenActionTypes.FETCH_TOKEN, ts: Date.now()});
        return await axios.put(
            wrapUrl(`${apiUrl}/accounts/data/`),
            JSON.stringify({username, first_name, last_name, phone}),
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + getAuthToken()
                },
            }
        ).then(function (response: AxiosResponse) {
            console.log(response.data)


        }).catch((e: AxiosError<CommonResponseError>) => {
        })
    }
}
