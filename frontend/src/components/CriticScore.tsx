import {Badge} from '@chakra-ui/react'

interface props {
    score: number
}

const CriticScore = ({score}: props) => {
    const color = score >= 75 ? 'green' : score >= 50 ? 'yellow' : 'red';

  return (
    <Badge colorPalette={color} fontSize={'18px'} paddingX={3} paddingY={2}>{score}</Badge>
  )
}

export default CriticScore