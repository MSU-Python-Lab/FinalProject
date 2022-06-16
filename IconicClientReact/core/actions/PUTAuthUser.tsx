import useSWR from "swr";
import {apiUrl} from "../../config";
import {fetcher} from "../../helpers/fetcher";

export interface Payment {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    phone: string,
}

export const PUTAuthUserRRR = () => {
    const {
        data,
        error
    } = useSWR<Payment>(`${apiUrl}/accounts/data/`, fetcher)

    return {
        payments: data,
        isLoading: !error && !data,
        isError: error
    }
}