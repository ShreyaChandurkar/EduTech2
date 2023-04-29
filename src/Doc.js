import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Admission() {
   
    const [ File, setFile] = React.useState('');
   
   
    const handleFileUpload = (event) => {
      setFile(event.target.files[0]);
    }

    return (
        
        <Container component="main" >
            <Typography color="secondary" align='center' component="h1" variant="h4" sx={{ mt: 10 }}>
                Upload documents
            </Typography>
            <Box component="form"  noValidate sx={{ mt: 5 }}>
                <Grid container spacing={3}>
                      <Grid item xs={12} sm={4}>
                      <Typography component="h3">
               Transfer Certificate(TC)
            </Typography>
                        <TextField                                                     
                            type="file" 
                            onChange={handleFileUpload}                           
                            required
                            fullWidth
                            id='Student pic'
                            name='Student pic'
                            autoComplete='family-name'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Typography component="h3">
               10th Marksheet
            </Typography>
                        <TextField
                         type="file" 
                         onChange={handleFileUpload}                           
                         required
                         fullWidth
                         id='Student pic'
                         name='Student pic'
                         autoComplete='family-name'
                        />
                        
                    </Grid>
                    
                    <Grid item xs={12} sm={4}>
                    <Typography component="h3">
                        12 th Marksheet
                        </Typography>
                        <TextField
                            type="file" 
                            onChange={handleFileUpload}                           
                            required
                            fullWidth
                            id='Student pic'
                            name='Student pic'
                            autoComplete='family-name'
                        />
                        
                    </Grid>

                    <Grid item xs={12} sm={4}>
                    <Typography component="h3">
                        Graduation certificate (if any)          
                      </Typography>
                        <TextField
                            type="file" 
                            onChange={handleFileUpload}                           
                            required
                            fullWidth
                            id='Student pic'
                            name='Student pic'
                            autoComplete='family-name'
                        />
                        
                    </Grid>

                    <Grid item xs={12} sm={4}>
                    <Typography component="h3">
               Post Graduation certificate (if any)
            </Typography>
                        <TextField
                            type="file" 
                            onChange={handleFileUpload}                           
                            required
                            fullWidth
                            id='Student pic'
                            name='Student pic'
                            autoComplete='family-name'
                        />
                        
                    </Grid>

                    <Grid item xs={12} sm={4}>
                    <Typography component="h3">
               Caste certificate
            </Typography>
                        <TextField
                            type="file" 
                            onChange={handleFileUpload}                           
                            required
                            fullWidth
                            id='Student pic'
                            name='Student pic'
                            autoComplete='family-name'
                        />
                          </Grid> 
                          <Grid item xs={12} sm={4}>
                          <Typography component="h3">
               Domicile certificate
            </Typography>
                        <TextField
                           type="file" 
                           onChange={handleFileUpload}                           
                           required
                           fullWidth
                           id='Student pic'
                           name='Student pic'
                           autoComplete='family-name'
                        />
                          </Grid> 
                          <Grid item xs={12} sm={4}>
                          <Typography component="h3">
               Adhar card 
            </Typography>
                        <TextField
                            type="file" 
                            onChange={handleFileUpload}                           
                            required
                            fullWidth
                            id='Student pic'
                            name='Student pic'
                            autoComplete='family-name'
                        />
                          </Grid> 
                          <Grid item xs={12} sm={4}>
                          <Typography component="h3">
               PAN card
            </Typography>
                        <TextField
                          type="file" 
                          onChange={handleFileUpload}                           
                          required
                          fullWidth
                          id='Student pic'
                          name='Student pic'
                          autoComplete='family-name'
                        />
                          </Grid> 
                </Grid>
                
                <Grid item xs={12} sm={4} >
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    submit
                </Button>
                </Grid>
            </Box>
        </Container>
      
    );
}
