import axios from "axios";
import {wrapUrl} from "./urlWrapper";
import {authHeader} from "./AuthHelper";

export const fetcher = (url: string) => axios.put(wrapUrl(url),
    {
        headers: {
            ...authHeader(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 664aa1483af5fd9497395017395fb053eeedb47b'
        },
    }
).then(res => res.data)