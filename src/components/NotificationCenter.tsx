'use client';

import Image from 'next/image';
import { Box, Typography, Paper } from '@mui/material';

interface NotificationItemProps {
  icon: string;
  title: string;
  status: string;
  statusColor: string;
}

function NotificationItem({
  icon,
  title,
  status,
  statusColor,
}: NotificationItemProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2.5,
        py: 0,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
        <Box
          sx={{ width: 20, height: 20, position: 'relative', flexShrink: 0 }}
        >
          <Image
            src={icon}
            alt=""
            width={20}
            height={20}
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Typography
          sx={{ fontSize: '0.875rem', fontWeight: 400, color: '#505050' }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{ fontSize: '0.875rem', fontWeight: 400, color: statusColor }}
      >
        {status}
      </Typography>
    </Box>
  );
}

export default function NotificationCenter() {
  const items: NotificationItemProps[] = [
    {
      icon: '/icons/notifications/store-availability.svg',
      title: 'Store Availability',
      status: 'Ok 99.9%',
      statusColor: '#5A8D40',
    },
    {
      icon: '/icons/notifications/basestation-fault.svg',
      title: 'BaseStation Fault',
      status: 'Error 7',
      statusColor: '#C90B0B',
    },
    {
      icon: '/icons/notifications/trx-fault.svg',
      title: 'TRX Fault',
      status: 'Warning 16%',
      statusColor: '#FDCE00',
    },
    {
      icon: '/icons/notifications/device-update.svg',
      title: 'Device Update (WFU)',
      status: 'Ok 8%',
      statusColor: '#5A8D40',
    },
    {
      icon: '/icons/notifications/unresponsive.svg',
      title: 'Unresponsive devices',
      status: 'Ok 8%',
      statusColor: '#5A8D40',
    },
    {
      icon: '/icons/notifications/low-battery.svg',
      title: 'Low battery device',
      status: 'Error 12%',
      statusColor: '#C90B0B',
    },
    {
      icon: '/icons/notifications/integration.svg',
      title: 'Integration',
      status: 'Ok',
      statusColor: '#5A8D40',
    },
  ];

  return (
    <Paper
      sx={{
        width: 1,
        maxWidth: 400,
        bgcolor: '#FFFFFF',
        borderRadius: 2.5,
        overflow: 'hidden',
        boxShadow: 2,
      }}
    >
      {/* Header */}
      <Box sx={{ px: 2.5, pt: 1.25, pb: 0 }}>
        <Typography
          sx={{ fontSize: '1.125rem', fontWeight: 700, color: '#505050' }}
        >
          Notification center (All Stores 314)
        </Typography>
      </Box>

      {/* Status Items Container */}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 320,
          pb: 1.25,
        }}
      >
        {items.map((item, idx) => (
          <NotificationItem key={idx} {...item} />
        ))}
      </Box>
    </Paper>
  );
}
