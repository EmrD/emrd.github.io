import React from "react";
import { useEffect } from "react";

function OpenVideoButton({ iframeSrc }) {
  const handleOpenVideo = () => {
    const videoWindow = window.open("", "_blank", "width=800,height=600");
    if (videoWindow) {
      videoWindow.document.write(`
        <html>
          <head><title>ApplyBAU Video</title></head>
          <body style="margin:0; display:flex; justify-content:center; align-items:center; height:100vh; background:#000;">
            ${iframeSrc}
          </body>
        </html>
      `);
    }else if (!videoWindow){
      alert("Please allow pop-up permission and refresh the page to see the video")
    }
  };

  useEffect(() => {
    handleOpenVideo()
  }, [])
}

export default OpenVideoButton;
