import { Button, Stack, Typography } from "@mui/material"
import { Card } from "./components"
import { FaRegUser } from 'react-icons/fa';
import { TbArrowsTransferDown } from 'react-icons/tb'
import styled from "@emotion/styled";

const MyButton = styled(Button)(({ theme }) => ({
  fontSize: '.6rem',
  minWidth: 'unset',
  color: 'black',

  [theme.breakpoints.down('sm')]: {
    fontSize: '.5rem'
  }
}))

const App = () => {
  return (
    <Stack minHeight="100vh" alignItems='center' justifyContent="center">
      <Card />
      <Stack direction="row" alignItems="center" justifyContent="space-between" width='min(400px, 95vw)'>
        <Stack direction="row" gap="10px" pt="3px">
          <Stack direction="row" gap="2px" alignItems="center">
            <FaRegUser fontSize="12px" color="#4546f7" />
            <Typography sx={{ fontSize: { xs: '10px', sm: '11px' } }} variant="caption">Johnson Addy</Typography>
          </Stack>
          <Stack direction="row" gap="2px" alignItems="center">
            <TbArrowsTransferDown fontSize="12px" color="#4546f7" />
            <Typography sx={{ fontSize: { xs: '10px', sm: '11px' } }} variant="caption">56 transactions(NGN500,000)</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center">
          <MyButton size="small" variant="text">Block</MyButton>
          <MyButton size="small" variant="text">Delete</MyButton>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default App