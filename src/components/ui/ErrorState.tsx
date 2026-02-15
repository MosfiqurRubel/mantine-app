import DOMPurify from 'dompurify'; // Recommended for safety
import { Alert } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';

const ErrorState = ({ error }: { error?: any }) => {
  const sanitizedHTML = DOMPurify.sanitize(error?.data);

  return (
    <Alert
      icon={<IconAlertTriangle />}
      title="Error"
      color="red"
      variant="filled"
      radius="md"
      mt="md"
    >
      {error?.originalStatus}
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </Alert>
  );
};

export default ErrorState;

// import React from 'react';
// import DOMPurify from 'dompurify'; // Recommended for safety

// function MyComponent({ htmlContent }) {
//   // Sanitize the HTML before use (see Security below)
//   const sanitizedHTML = DOMPurify.sanitize(htmlContent);

//   return (
//     <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
//   );
// }

// export default MyComponent;
