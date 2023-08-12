import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottomContainer,
  VideosDetailsContainer,
  VideosDetailsText,
  NavLink,
} from './styledComponents'

const VideoCardTwo = props => {
  const {details} = props
  const {title, id, thumbnailUrl, viewCount} = details
  return (
    <NavLink to={`videos/${id}`}>
      <VideoCardContainer>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoCardBottomContainer>
          <VideosDetailsContainer>
            <VideosDetailsText>{title}</VideosDetailsText>
            <VideosDetailsText>{viewCount} views</VideosDetailsText>
          </VideosDetailsContainer>
        </VideoCardBottomContainer>
      </VideoCardContainer>
    </NavLink>
  )
}

export default VideoCardTwo
