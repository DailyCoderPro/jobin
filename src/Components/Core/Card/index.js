import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TruncateTextComponent from '../Truncate';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function JobCard({data}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
      <CardHeader
        avatar={
          <Avatar src={data.logoUrl} sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={<Typography variant='subtitle2' fontSize={16}>{data.companyName}</Typography> || "NA"}
        subheader={<><Typography>{data.jobRole || ""}</Typography><Typography>{data.location}</Typography></>}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {<TruncateTextComponent text={data?.jobDetailsFromCompany || ""} maxLength={100}/>} 
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='card_action-container'>
        <Button variant='contained' fullWidth color='info' >
        <Link to={data.jdLink} target='_blank'>Easy Apply</Link>
        </Button>
      </CardActions>
      <CardContent>
        <Typography variant='body2'>Experience required</Typography>
        {data.minExp && data.maxExp ? <Typography variant='body2'>{data.minExp} - {data.maxExp} Years</Typography> :  <Typography variant='body2'>0 Years</Typography>}
      </CardContent>
    </Card>
  );
}