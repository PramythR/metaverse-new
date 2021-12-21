import '../styles/globals.css'
import {MoralisProvider} from "react-moralis";




function MyApp({ Component, pageProps }) {

  return(
        <MoralisProvider appId = {process.env.NEXT_PUBLIC_APP_ID} serverUrl = {process.env.NEXT_PUBLIC_SEVER_URL}>
          <Component {...pageProps} />
        </MoralisProvider>


  );
}

export default MyApp
