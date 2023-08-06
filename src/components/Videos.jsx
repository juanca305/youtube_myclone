import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from './';
// import VideoCard from "./VideoCard";
// import ChannelCard from "./ChannelCard";

const Videos = ({videos, direction}) => {
  // if (!videos?.lenght) return 'Loading...';
    // console.log(videos);
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={3}>
      {
        videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
          </Box>
        ))}  
    </Stack>
  )
}

export default Videos