import React from "react";
import Header from "../components/Aibot/Header";
import ChatBooth from "../components/Aibot/ChatBooth";
import FooterAI from "../components/Aibot/Footerai";
import VideoControls from "../components/VideoCall/VideoConrols";
import VideoRoom from "../components/VideoCall/VideoRoom";


const AibotPage = () => {
  return (
    <div>
      <Header />
      <ChatBooth />
      <FooterAI />
      <VideoControls />
      <VideoRoom />


 
    </div>
  );
};

export default AibotPage;
