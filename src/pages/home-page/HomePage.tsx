import Stack from '@mui/material/Stack';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const HomePage = () => {

  return (
    <Stack gap={2}>
      <Header />
      <Footer />
    </Stack>
  )
}

export default HomePage;