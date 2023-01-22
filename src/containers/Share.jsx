import React from "react";
import { InlineShareButtons } from "sharethis-reactjs";

function Share({ id }) {
  if (navigator.share) {
    navigator
      .share({})
      .then(() => {
      })
      .catch((err) => {
      
      });
  } else {
    alert("cant share");
  }
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          h1 {
            font-size: 24px;
            font-weight: bold;
          }
          hr {
            margin-bottom: 40px;
            margin-top: 40px;
            width: 50%;
          }
        `,
        }}
      />

      <InlineShareButtons
        config={{
          alignment: "center", 
          color: "social", 
          enabled: true, 
          font_size: 16, 
          language: "en", 
          networks: [
            "whatsapp",
            "linkedin",
            "facebook",
            "twitter",
            "telegram",
          ],
          padding: 12,
          radius: 50, 
          size: 40, 

          url: `http://localhost:3000/news/${id}`, 
          image: "https://bit.ly/2CMhCMC", 
          description: "custom text",
          title: "title", 
          message: "custom email text", 
          subject: "custom email subject", 
          username: "custom twitter handle",
        }}
      />
    </div>
  );
}

export default Share;

