import { Box } from '@mui/material';
import InfrastructureMonitor from '@/components/InfrastructureMonitor';

export default function InfraPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#F3F4F6',
        p: 4,
      }}
    >
      <InfrastructureMonitor />
    </Box>
  );
}
