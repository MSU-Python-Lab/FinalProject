import {useRouter} from 'next/router'

import {useEffect} from 'react'
import {authExists} from "../../helpers/AuthHelper";

export default function withAuth(WrappedComponent: any) {
    return (props: unknown) => {
        const router = useRouter()
        useEffect(() => {
            const user = authExists()
            if (!user) {
                router.replace('/firstpage')
            }
        }, [])
        return <WrappedComponent {...props} />
    }
}