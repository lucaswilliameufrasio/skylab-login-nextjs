import React from 'react'
import { Divider as ChrakraDivider, Grid } from '@chakra-ui/core'

const Divider: React.FC = () => {
  return (
    <Grid gridTemplateColumns="1fr 1fr" columnGap={12} opacity={0.4}>
      <ChrakraDivider marginY={6} />
      <ChrakraDivider marginY={6} />
    </Grid>
  )
}

export default Divider
