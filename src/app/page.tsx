import InfrastructureMonitor from '@/components/InfrastructureMonitor';
import NotificationCenter from '@/components/NotificationCenter';
import { Stack } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Stack spacing={2}>
        <InfrastructureMonitor />
        <NotificationCenter />
      </Stack>
    </main>
  );
}
