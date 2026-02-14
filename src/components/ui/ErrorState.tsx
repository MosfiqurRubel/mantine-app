import { Alert } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';

const ErrorState = ({ error }: { error?: unknown }) => {
  let message = 'Something went wrong while fetching products.';

  if (error && typeof error === 'object') {
    try {
      message = JSON.stringify(error);
    } catch {
      message = String(error);
    }
  }

  return (
    <Alert
      icon={<IconAlertTriangle />}
      title="Error"
      color="red"
      variant="filled"
      radius="md"
      mt="md"
    >
      {message}
    </Alert>
  );
};

export default ErrorState;
