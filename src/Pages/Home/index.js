import React, { useEffect, useRef, useState } from 'react'
import getJsonData from '../../Utils/getJsonData';
import JobCard from '../../Components/Core/Card';
import { Grid, Select, Typography } from '@mui/material';
import "./style.css";
import CustomFilter from './Filter';

const Home = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const scrollContainerRef = useRef(null);

    const [filter, setFilter] = useState({
        location: "",
        company: "",
        minExp: 0,
        minPay: 0,
        searchText: ""
    });
    const [filterData, setFilterData] = useState({
        location: [],
        company: [],
        minExp: 0,
        minPay: 0,
        searchText: ""
    });
    const applyFilter = (data, filter) => {
        setFilteredData( data.filter(job => {
          // Check if job location matches the filter location
          if (filter.location && job.location.toLowerCase() !== filter.location.toLowerCase()) {
            return false;
          }
          
          // Check if job company matches the filter company
          if (filter.company && job.companyName.toLowerCase() !== filter.company.toLowerCase()) {
            return false;
          }
          
          // Check if job minimum experience is greater than or equal to filter minimum experience
          if (filter.minExp && job.minExp < filter.minExp) {
            return false;
          }
          
          // Check if job minimum pay is greater than or equal to filter minimum pay
          if (filter.minPay && job.minJdSalary < filter.minPay) {
            return false;
          }
          
          // Check if job contains the search text in job details, job role, or company name
          if (filter.searchText &&
              !(
                job.jobDetailsFromCompany.toLowerCase().includes(filter.searchText.toLowerCase()) ||
                job.jobRole.toLowerCase().includes(filter.searchText.toLowerCase()) ||
                job.companyName.toLowerCase().includes(filter.searchText.toLowerCase())
              )
            ) {
            return false;
          }
          
          // If all conditions are met, include the job in the filtered result
          return true;
        }));
      };
    useEffect(() => {
        applyFilter(data, filter);
    }, [filter, data]);
    const updateFilter = (job) => {
        setFilterData((prevFilter) => ({
          ...prevFilter,
          location: prevFilter.location.includes(job.location) ? prevFilter.location : [...prevFilter.location, job.location],
          company: prevFilter.company.includes(job.companyName) ? prevFilter.company : [...prevFilter.company, job.companyName],
          minExp: Math.min(prevFilter.minExp, job.minExp),
          minPay: Math.min(prevFilter.minPay, job.minJdSalary),
        }));
    };
    const fetchData = async () => {
        setLoading(true);
        try {
            getJsonData({ limit: 10, offset: offset }).then((newData) => {
                setData((prevData) => [...new Set([...prevData, ...newData?.jdList])]);
                setOffset((prevOffset) => prevOffset + 10);
                if (newData.length === 0) {
                    setHasMore(false);
                }
            })
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 50 && hasMore) { // Adjust threshold as needed
            fetchData();
        }
    };

    useEffect(() => {
        data.forEach((job) => {
            updateFilter(job);
          });
    }, [data]);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <CustomFilter filter={filterData} setFilter={setFilter} />
        <Grid spacing={2} className='scroll-container' ref={scrollContainerRef}>
            {filteredData.length > 0 ? filteredData.map((item) => {
                 return <JobCard key={item.id} data={item} /> }):<Typography variant='h3'>{"Job Not Found!"}</Typography>}
        </Grid>
        </>
    )
}

export default Home