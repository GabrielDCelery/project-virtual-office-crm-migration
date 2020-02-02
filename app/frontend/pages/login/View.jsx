import { useState } from 'react';
import {
  Box,
  CssBaseline,
  Container,
  Button,
  Card,
  CardContent,
  TextField
} from '@material-ui/core';
import UIFlexboxCenterPositioner from '~/components/UI/FlexboxCenterPositioner';

const LoginPageView = ({ actionLoginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      style={{
        backgroundColor: `${'#021A32'}`,
        background: `linear-gradient(135deg, ${'#1C344C'} 30%, ${'#021A32'} 90%)`,
        height: '100vh'
      }}
    >
      <CssBaseline />
      <Container maxWidth="sm" style={{ height: '100vh' }}>
        <UIFlexboxCenterPositioner>
          <Card raised>
            <form
              onSubmit={event => {
                event.preventDefault();
                actionLoginUser({ email, password });
              }}
            >
              <CardContent>
                <TextField
                  id="email"
                  type="email"
                  required
                  fullWidth
                  label="Email"
                  margin="normal"
                  onChange={event => setEmail(event.target.value)}
                  value={email}
                />
                <TextField
                  id="password"
                  type="password"
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  onChange={event => setPassword(event.target.value)}
                  value={password}
                />
              </CardContent>
              <CardContent>
                <Button
                  disabled={false}
                  fullWidth
                  type="submit"
                  color="secondary"
                  variant="contained"
                >
                  Login
                </Button>
              </CardContent>
            </form>
          </Card>
        </UIFlexboxCenterPositioner>
      </Container>
    </Box>
  );
};

export default LoginPageView;
