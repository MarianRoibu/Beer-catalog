import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-bottom: 10rem;
  background-color: #ffffff;
 
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  z-index: 2;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Username = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

const PostText = styled.p`
  margin-bottom: 10px;
  color: #1d16169f;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  border-radius: 8px;
  overflow: hidden;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
`;

export function ContentManagement() {
  return (
    <Container>
      <ContentContainer>
        <PostContainer>
          <ProfileImage src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Profile Image" />
          <Username>@username1</Username>
          <PostText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            mollis nulla.
          </PostText>
        </PostContainer>
        <PostContainer>
          <ProfileImage src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Profile Image" />
          <Username>@username2</Username>
          <PostText>
            Ut nec lorem eget nisl venenatis ultrices sed at lacus. Nulla
            facilisi.
          </PostText>
          <VideoContainer>
            <Video
              src="https://www.youtube.com/embed/video-id1"
              title="Mock Video 1"
              frameBorder="0"
              allowFullScreen
            ></Video>
          </VideoContainer>
        </PostContainer>
        <PostContainer>
          <ProfileImage src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Profile Image" />
          <Username>@username3</Username>
          <PostText>
            Fusce id fringilla nulla. Integer volutpat, justo vel placerat
            egestas, lectus libero consequat sem, ut lobortis dolor augue in
            metus.
          </PostText>
        </PostContainer>
        <PostContainer>
          <ProfileImage src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Profile Image" />
          <Username>@username4</Username>
          <PostText>
            Phasellus at ipsum non mauris tristique tincidunt id sit amet ex.
            Integer eu metus felis. In commodo, libero eu placerat consequat.
          </PostText>
        </PostContainer>
        <PostContainer>
          <ProfileImage src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Profile Image" />
          <Username>@username5</Username>
          <PostText>
            Duis et orci ac ligula efficitur venenatis ut non dui. In hac
            habitasse platea dictumst.
          </PostText>
          <VideoContainer>
            <Video
              src="https://www.youtube.com/embed/video-id2"
              title="Mock Video 2"
              frameBorder="0"
              allowFullScreen
            ></Video>
          </VideoContainer>
        </PostContainer>
        <PostContainer>
          <ProfileImage src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Profile Image" />
          <Username>@username6</Username>
          <PostText>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nulla id sagittis sapien.
          </PostText>
        </PostContainer>
        <PostContainer>
          <ProfileImage src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Profile Image" />
          <Username>@username6</Username>
          <PostText>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nulla id sagittis sapien.
          </PostText>
        </PostContainer>
        <PostContainer>
          <ProfileImage src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Profile Image" />
          <Username>@username5</Username>
          <PostText>
            Duis et orci ac ligula efficitur venenatis ut non dui. In hac
            habitasse platea dictumst.
          </PostText>
          <VideoContainer>
            <Video
              src="https://www.youtube.com/embed/video-id2"
              title="Mock Video 2"
              frameBorder="0"
              allowFullScreen
            ></Video>
          </VideoContainer>
        </PostContainer>
        <PostContainer>
          <ProfileImage src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Profile Image" />
          <Username>@username6</Username>
          <PostText>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nulla id sagittis sapien.
          </PostText>
        </PostContainer>
        <PostContainer>
          <ProfileImage src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Profile Image" />
          <Username>@username6</Username>
          <PostText>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nulla id sagittis sapien.
          </PostText>
        </PostContainer>
        <PostContainer>
          <ProfileImage src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Profile Image" />
          <Username>@username6</Username>
          <PostText>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nulla id sagittis sapien.
          </PostText>
        </PostContainer>
        <PostContainer>
          <ProfileImage src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Profile Image" />
          <Username>@username5</Username>
          <PostText>
            Duis et orci ac ligula efficitur venenatis ut non dui. In hac
            habitasse platea dictumst.
          </PostText>
          <VideoContainer>
            <Video
              src="https://www.youtube.com/embed/video-id2"
              title="Mock Video 2"
              frameBorder="0"
              allowFullScreen
            ></Video>
          </VideoContainer>
        </PostContainer>
      </ContentContainer>
    </Container>
  );
}



 


