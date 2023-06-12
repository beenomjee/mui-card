import styled from "@emotion/styled"
import { Stack, Typography } from "@mui/material"

const MyCard = styled(Stack)(({ theme }) => ({
    background: theme.palette.custom.main,
    width: 'min(400px, 95vw)',
    borderRadius: 15,
    minHeight: 220,
    padding: 30,
    position: 'relative',
    zIndex: -1,
    overflow: 'hidden',

    "::before": {
        content: `""`,
        display: 'block',
        width: 500,
        aspectRatio: 1,
        background: 'rgba(0,0,0,0.1)',
        borderRadius: "50%",
        position: 'absolute',
        right: 0,
        top: 0,
        transform: 'translate(45%, -80%)'
    },

    "::after": {
        content: `""`,
        display: 'block',
        width: 400,
        aspectRatio: 1,
        background: 'rgba(0,0,0,0.1)',
        borderRadius: "50%",
        position: 'absolute',
        left: 0,
        bottom: 0,
        transform: 'translate(-40%, 73%)'
    }
}))

const Image = styled('img')(() => ({
    width: 50
}));


const Card = () => {
    return (
        <MyCard justifyContent="space-between">
            <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
                <Stack>
                    <Typography fontWeight="500" variant="body2" gutterBottom color="#ffffff9c" component="span">Current Balance</Typography>
                    <Typography variant="h5" fontWeight="500" color="white" component="span">NGN5,750,20</Typography>
                </Stack>
                <Stack alignItems="center">
                    <Image src="/logo.png" />
                    <Typography variant="caption" fontSize="10px" color="white">matercard</Typography>
                </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography fontWeight="500" variant="body2" gutterBottom color="#ffffff9c" component="span">5282 **** **** 1289</Typography>
                <Typography variant="body1" fontWeight="500" color="white" component="span">09/25</Typography>
            </Stack>
        </MyCard>
    )
}

export default Card