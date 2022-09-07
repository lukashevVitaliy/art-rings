import { motion } from 'framer-motion';
import '../styles/globals.css';
import { StoreProvider } from '../utils/store';

function MyApp({ Component, pageProps, router }) {
  return (
    <StoreProvider>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
        transition={{ duration: 0.6 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </StoreProvider>
  );
}

export default MyApp;
