import axios from "axios";
import {wrapUrl} from "./urlWrapper";
import {authHeader, getAuthToken} from "./AuthHelper";

export const fetcher = (url: string) => axios.get(wrapUrl(url),
    {
        headers: {
            ...authHeader(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + getAuthToken()
        },
    }
).then(res => res.data)