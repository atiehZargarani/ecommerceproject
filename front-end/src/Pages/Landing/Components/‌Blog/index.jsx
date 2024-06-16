import React, { useEffect, useState } from 'react'
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



export default function Blog() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch(process.env.REACT_APP_BASE_API + "blogs?populate=*", {
            headers: {
                'Content-type': 'application/json',
                // 'Authorization': `Bearer ${token}`, // notice the Bearer before your token
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
            })

    }, [])
    const [expanded, setExpanded] = useState({});

    const handleExpandClick = (property) => {
      
        setExpanded({ ...expanded, [property]: !expanded[property] })
       
    };

    return (
        <div class="row align-items-center px-5 ">
            {data.map((item) => {
                return (
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 px-2 d-flex justify-content-center">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                        
                            title={item?.attributes?.name}
                            subheader={`منتشر کننده : ${item?.attributes?.authorname}`}
                            
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={process.env.REACT_APP_BASE_URL+item.attributes?.image?.data?.attributes?.url}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                             {item?.attributes?.summary}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        
                            <ExpandMore
                                expand={expanded[item?.attributes.property]}
                                onClick={()=>handleExpandClick(item?.attributes.property)}
                                aria-expanded={expanded[item?.attributes.property]}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded[item?.attributes.property]} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    {item?.attributes?.content}
                                </Typography>

                            </CardContent>
                        </Collapse>
                    </Card>
                    </div>
                )
            })}
        </div>
    );
}