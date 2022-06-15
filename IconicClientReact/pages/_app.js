import '../styles/globals.css'
//import '../styles/stylesMain.css'
import '../styles/regpage.css'
import '../components/ModalWindow/modal.css'
import '../styles/forreg.css'
import { Provider } from 'react-redux'
import { useStore } from '../core/store'
import { ChakraProvider } from '@chakra-ui/react'


export default function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    )
}
