import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

 function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de login
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;