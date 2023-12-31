import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const ResetPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', // Center content vertically
          textAlign: 'center',
          backgroundColor: '#FDFDFD',
          borderRadius: '10px',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
          padding: '30px',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Password Reset
        </Typography>
        <Typography variant="body1" gutterBottom>
          An email has been sent to your email address. Please follow the link in your email app reset your password.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Can't find the email? Check your spam folder or click the link below to request for a new one.
        </Typography>
        <Link href="https://mail.google.com">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              marginTop: '30px',
              bgcolor: '#F53838', // Red Color
              color: '#fff', // White Text Color
              '&:hover': {
                bgcolor: '#e53030', // Slightly darker shade on hover
              },
            }}
          >
            Open email app
          </Button>
        </Link>
        <Typography variant="body2" sx={{ marginTop: '20px' }}>
          Having trouble?{' '}
          <Link href="/password-reset" color="primary" underline="always">
            Request for a new link
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default ResetPage;
