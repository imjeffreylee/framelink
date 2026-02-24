'use client';

import Image from 'next/image';
import { Box, Button, Paper, Typography } from '@mui/material';
import StatusItem from './InfraStatusItem';

export default function InfrastructureMonitor() {
  return (
    <Paper
      sx={{
        width: 1,
        maxWidth: 420,
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: 2,
      }}
    >
      {/* Header with Title and CSV Export Button */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 1.25,
          py: 1.25,
          bgcolor: 'white',
        }}
      >
        <Typography
          sx={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#505050' }}
        >
          Infrastructure (All BS 365)
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: '#5A8D40',
            borderColor: '#5A8D40',
            textTransform: 'none',
            borderRadius: 1,
            px: 1.25,
            py: 1.25,
            gap: 0.5,
          }}
        >
          <Image
            src="/icons/download.svg"
            alt="Download"
            width={20}
            height={20}
          />
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: 'normal',
              color: '#5A8D40',
            }}
          >
            CSV
          </Typography>
        </Button>
      </Box>

      {/* Status Indicators Container */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2.5,
          py: 0,
          gap: 8,
        }}
      >
        <StatusItem
          icon="/icons/status-ok.svg"
          mainText="99,5%"
          subText="BS online (358/365)"
        />
        <StatusItem
          icon="/icons/alert-triangle.svg"
          mainText="0,5%"
          subText="BS fault (7/365)"
        />
      </Box>

      {/* TRX Fault Alert Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.25,
          px: 2.5,
          py: 1.25,
          bgcolor: '#FAFAFA',
          borderTop: '1px solid #C6C6C6',
        }}
      >
        <Box
          sx={{ width: 24, height: 24, flexShrink: 0, position: 'relative' }}
        >
          <Image
            src="/icons/alert-circle.svg"
            alt="Alert"
            width={24}
            height={24}
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            sx={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#505050' }}
          >
            16%
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', color: '#505050' }}>
            TRX fault (54/1082)
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
