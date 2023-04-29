import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

// import { Input } from '@material-ui/core';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
    name: string,
    board: string,
    year: number,
    percentage: number, 
    stream: string,
  ) {
    return { name, board, year, percentage, stream };
  }
  
  const rows = [
    createData('10th(Secondary)'),
    createData('12th(Higher Secondary)'),
    createData('Graduation'),
    createData('Post Graduation'),
  ];
  


export default function Admission() {
    const [course, setCourse] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [ File, setFile] = React.useState('');
    // const{register, handleSubmit}=React.useState('');
    // const [FNameError, setFNameError]=React.useState('');
   
   
    const handleFileUpload = (event) => {
      setFile(event.target.files[0]);
    }
  
    const handleChange = (event: SelectChangeEvent) => {
        setCourse(event.target.value);
        
    };
  
    const handleChange1 = (event: SelectChangeEvent) => {
        setGender(event.target.value);
        
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
        
    };
  
    // const handleFormSubmit = (formData : any)=> {
    //     console.log('form data is', formData);
    // }
    

    return (
        
        <Container component="main" >
            <Typography color="secondary" align='center' component="h1" variant="h4" sx={{ mt: 5 }}>
                Student Admission Form
            </Typography>
            <Box component="form"  noValidate sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <TextField
                        // error={FNameError && FNameError.length ? true : false}
                            autoComplete='given-name'
                            name='firstName'
                            required 
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id="firstName"
                            label="First Name"
                            autoFocus
                            // {...register('firstName')}
                            // helperText={FNameError}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='middleName'
                            label="Middle Name"
                            name='middleName'
                            autoComplete='family-name'
                        />
                        
                    </Grid>
                    
                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='lastName'
                            label="Last Name"
                            name='lastName'
                            autoComplete='family-name'
                        />
                        
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='Father name'
                            label="Father's Name"
                            name='Father name'
                            autoComplete='family-name'
                        />
                        
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='Mother name'
                            label="Mother's Name"
                            name='Mother name'
                            autoComplete='family-name'
                        />
                        
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='email'
                            label="Email Address"
                            name='email'
                            autoComplete='email'
                        />
                          </Grid> 
                          <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='phone'
                            label="Phone Number"
                            name='phone'
                            autoComplete='family-name'
                        />
                          </Grid> 
                          <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='Password'
                            label="Password "
                            name='Password'
                            autoComplete='new- password'
                        />
                          </Grid> 
                          <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='Confirm Password'
                            label="Confirm Password "
                            name='Confirm Password'
                            autoComplete='new- password'
                        />
                          </Grid> 



                          <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='Nationality'
                            label="Nationality"
                            name='Nationality'
                            autoComplete='family-name'
                        />
                        
                    </Grid>
                    <Grid item xs={12} sm={4}>

                        <TextField
                                           
                                           
                            type="file" 
                            onChange={handleFileUpload} 
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            required
                            fullWidth
                            id='Student pic'
                            label="Student pic"
                            // type="Student pic"
                            name='Student pic'
                            autoComplete='family-name'
                        />
                    </Grid>

                    <Grid item xs={12} sm={3}>

                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='DOB'
                            label="DOB"
                            name='DOB'
                            autoComplete='family-name'
                            
                        />
                        
                    </Grid>
                    {/* <Grid item xs={12} sm={4}> */}

                    <FormControl sx={{ m: 2, minWidth: 200  }}>
                        <InputLabel>Courses Applied</InputLabel>
                             <Select
                             
                              value={course}
                             label="Courses Applied"
                             InputProps={{
                                style: { height: '40px' },
                            }}
                             onChange={handleChange}
                             >
                         <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Enginnering</MenuItem>
                      <MenuItem value={2}>Mca</MenuItem>
                         <MenuItem value={3}>BSc</MenuItem>
                         </Select>
                        </FormControl> 
{/* </Grid> */}
                    
                    {/* <Grid item xs={12} sm={3}> */}
                    <FormControl sx={{ m: 2, minWidth: 200 }}>
                        <InputLabel>Gender</InputLabel>
                             <Select
                             InputProps={{
                                style: { height: '40px' },
                            }}
                              value={gender}
                             label="gender"
                             onChange={handleChange1}
                             >
                         <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Male</MenuItem>
                      <MenuItem value={2}>Female</MenuItem>
                         <MenuItem value={3}>Other</MenuItem>
                         </Select>
                        </FormControl> 
                    {/* </Grid> */}
                    <FormControl sx={{ m: 2, minWidth: 200 }}>
                        <InputLabel>Category</InputLabel>
                             <Select
                             InputProps={{
                                style: { height: '40px' },
                            }}
                              value={category}
                             label="category"
                             onChange={handleChange2}
                             >
                         <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Open</MenuItem>
                      <MenuItem value={2}>OBC</MenuItem>
                         <MenuItem value={3}>SC</MenuItem>
                         <MenuItem value={4}>Other</MenuItem>

                         </Select>
                        </FormControl> 

                        <Grid item xs={12} >
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='Correspondence Address'
                            label="Correspondence Address"
                            name='Correspondence Address'
                            autoComplete='family-Address'
                        />
                        
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='Permanent Address'
                            label="Permanent Address"
                            name='Permanent Address'
                            autoComplete='family-Address'
                        />
                        
                    </Grid>

                    <Typography component="h1" variant="h5" sx={{ mt: 5 }} >
                Education Qualification
            </Typography>

                    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead >
          <TableRow >
            <TableCell align="center">#</TableCell>
            <TableCell align="center">Board/University</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">Percentage</TableCell>
            <TableCell align="center">Stream</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='Board/University'
                            label="Board/University"
                            name='Board/University'
                            autoComplete='family-name'
                        /> 
                </TableCell>

              <TableCell align="right">
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='Year'
                            label="Year"
                            name='Year'
                            autoComplete='family-name'
                        />
                </TableCell>

              <TableCell align="right">
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='Percentage'
                            label="Percentage"
                            name='Percentage'
                            autoComplete='family-name'
                        />
              </TableCell>

              <TableCell align="right">
                        <TextField
                            required
                            fullWidth
                            InputProps={{
                                style: { height: '40px' },
                            }}
                            id='Stream'
                            label="Stream"
                            name='Stream'
                            autoComplete='family-name'
                        />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


                    <Grid item xs={12} >
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I hereby state that the facts mentioned above are true to the best of my knowledge and belief."
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
