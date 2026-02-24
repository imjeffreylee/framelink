'use client'

import Image from 'next/image'
import { Box, Typography } from '@mui/material'

interface StatusItemProps {
  icon: string
  mainText: string
  subText: string
}

export default function StatusItem({ icon, mainText, subText }: StatusItemProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
      <Box sx={{ width: 24, height: 24, position: 'relative' }}>
        <Image src={icon} alt="" width={24} height={24} style={{ width: '100%', height: '100%' }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#505050' }}>{mainText}</Typography>
        <Typography sx={{ fontSize: '0.75rem', color: '#505050' }}>{subText}</Typography>
      </Box>
    </Box>
  )
}
