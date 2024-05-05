import { FormControl, InputLabel, MenuItem, Select, Slider } from '@mui/material'
import React, { useEffect, useState } from 'react'

const CustomFilter = ({filter, setFilter}) => {
    const [searchText, setSearchText] = useState("");
    const [minExp, setMinExp] = useState(0);
    const [minPay, setMinPay] = useState(0);
    const [location, setLocation] = useState('');
    const [company, setCompany] = useState('');

    useEffect(() => {
        setFilter(
            {
                location: location,
                company: company,
                minExp: minExp,
                minPay: minPay,
                searchText: searchText
            }
        )
    },[searchText, minExp, minPay, location, company]);

  return (
    <div className='filter-container'>
        <div className='search-container'>
            <input value={searchText} onChange={(e)=> setSearchText(e.target.value)} placeholder='Company Name, Job Role '/>
        </div>
        <div className='base-pay-filter'>
            <span className='title'>Minimum Basepay($k)</span>
            <Slider aria-label="Volume" valueLabelDisplay="auto" value={minPay} onChange={(e)=> setMinPay(e.target.value)}
        max={150} />

        </div>
        <div className='exp-filter'>
            <span className='title'>Minimum Experiance(Years)</span>
            <Slider aria-label="minExp" valueLabelDisplay="auto" value={minExp} min={0}
        max={20} onChange={(e)=> setMinExp(e.target.value)} />

        </div>
        <FormControl className='select-container'>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Location"
            
              onChange={(e)=> setLocation(e.target.value)}
            >

             {filter.location.map((item)=>     <MenuItem value={item}>{item}</MenuItem>)}
            <MenuItem value={""}>All</MenuItem>
            </Select>
        </FormControl> 
        <FormControl className='select-container'>
            <InputLabel id="demo-simple-select-label">Company Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={company}
              label="Company"
            
              onChange={(e)=> setCompany(e.target.value)}
            >

             {filter.company.map((item)=>     <MenuItem value={item}>{item}</MenuItem>)}
                <MenuItem value={""}>All</MenuItem>
            </Select>
        </FormControl> 
    </div>
  )
}

export default CustomFilter