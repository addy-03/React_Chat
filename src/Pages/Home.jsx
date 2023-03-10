import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";
import "../styles/sidebar.scss";
import "../styles/chat.scss";


const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="chat-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
