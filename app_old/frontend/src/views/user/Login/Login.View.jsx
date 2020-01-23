import React from 'react';
import {
  CssBaseline,
  Container,
  Button,
  Card,
  CardContent,
  TextField
} from '@material-ui/core';

export default ({ getter, handler, classes }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Container maxWidth="sm" className={classes.container}>
          <Card raised className={classes.card}>
            <form onSubmit={handler('form', 'submit')}>
              <CardContent>
                <TextField
                  id="email"
                  type="email"
                  required
                  fullWidth
                  label="Email"
                  margin="normal"
                  onChange={handler('form', 'setEmail')}
                  value={getter('form', 'email')}
                />
                <TextField
                  id="password"
                  type="password"
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  onChange={handler('form', 'setPassword')}
                  value={getter('form', 'password')}
                />
              </CardContent>
              <CardContent>
                <Button
                  disabled={getter('form', 'ajaxInProgress')}
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
        </Container>
      </div>
    </React.Fragment>
  );
};
