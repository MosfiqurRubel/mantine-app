import { Button, createPolymorphicComponent } from '@mantine/core';
import type { ButtonProps } from '@mantine/core';

interface GradientButtonProps extends ButtonProps {
  customGradient?: string;
  customBackground?: string;
}

const _GradientButton = (props: GradientButtonProps) => {
  const {
    customGradient = 'linear-gradient(90deg, #db5095 0%, #1945e8 100%)',
    customBackground = '#22242D',
    children,
    ...others
  } = props;

  return (
    <Button
      variant="outline"
      radius="xl"
      size="lg"
      {...others}
      style={{
        display: 'inline-block',
        outline: 'none',
        border: 0,
        borderRadius: '50px',
        textTransform: 'capitalize',
        background: customBackground,
        color: '#fff',
        fontWeight: 600,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        padding: '10px 24px',
      }}
      className="gradient-btn"
    >
      {children}
    </Button>
  );
};

export const GradientButton = createPolymorphicComponent<
  'button',
  GradientButtonProps
>(_GradientButton);
