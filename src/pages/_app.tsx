import { ChakraProvider } from '@chakra-ui/react';
import { HeaderMenu } from '../components/HeaderMenu';
import { theme } from '../styles/theme';

import '../components/SwiperCarrousel/styles.css';

// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <HeaderMenu />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
