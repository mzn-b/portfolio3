import { Form, Formik } from 'formik';
import { Alert, Box, Button, CircularProgress, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [status, setStatus] = useState<string | null>(null);

  const initialValues: FormValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = async (values: FormValues) => {
    setStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        setStatus('success');
        return 200;
      } else {
        setStatus('error');
        return 500;
      }
    } catch {
      return 500;
    }
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, handleChange, handleBlur, values, submitForm, resetForm }) => (
          <Form>
            <Stack spacing={2} sx={{
              width: 700,
              '& .MuiInputBase-root': { color: 'white' },
              '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white'
                },
                '&:hover fieldset': {
                  borderColor: '#90caf9'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#42a5f5'
                }
              }
            }}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                id="message"
                name="message"
                label="Message"
                multiline
                rows={4}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
              />
              <Button
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: '#1ae8e8'
                }}
                onClick={() => {
                  submitForm().then((resp) => {
                    if(resp === 200) {
                      resetForm();
                    }
                  });
                }}
              >
                {isSubmitting ? <CircularProgress size={24} /> : 'Send'}
              </Button>
              {status === 'success' && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  Email sent successfully!
                </Alert>
              )}
              {status === 'error' && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  Failed to send email. Please try again later.
                </Alert>
              )}
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};