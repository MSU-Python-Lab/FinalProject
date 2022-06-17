import {Dispatch} from "redux";
import axios, {AxiosError, AxiosResponse} from "axios";
import {wrapUrl} from "../../helpers/urlWrapper";
import {apiUrl} from "../../config";
import {setAuthToken} from "../../helpers/AuthHelper";
import {TokenAction, TokenActionTypes} from "../../types/auth";
import {CommonResponseError} from "../../types/basicTypes";


interface AuthResponse {
    token: string
}

export const getAuthUser = (email: string, password: string) => {
    return async (dispatch: Dispatch<TokenAction>) => {
        dispatch({type: TokenActionTypes.FETCH_TOKEN, ts: Date.now()});
        return await axios.post(
            wrapUrl(`${apiUrl}/token/login/`),
            JSON.stringify({password, email}),
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (response: AxiosResponse<AuthResponse>) {
            console.log(response.data)
            setAuthToken(response.data.token)
            return dispatch({
                type: TokenActionTypes.FETCH_TOKEN_SUCCESS,
                payload: response.data,
                ts: Date.now()
            })

        }).catch((e: AxiosError<CommonResponseError>) => {
            return dispatch({
                type: TokenActionTypes.FETCH_TOKEN_ERROR,
                payload: e.toString(),
                ts: Date.now()
            })
        })
    }
}
