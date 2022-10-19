import React, { memo, useState } from "react";
import {
  Button,
  Image,
  Upload,
  message,
} from "antd";
import axios from "axios";
const UploadVideo = memo(() => {

  const [imageUrl, setImageUrl] = useState("");

  const beforeUpload = (file: any) => {
    if (file.type === "video/mp4") {
      return true;
    }
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return true;
  };

  const upload = async () => {
    const res = await axios.get("http://localhost:4000");
    console.log(res);
  };

  const onChange = (info: any) => {
    if (info.file.status === "done") {
      const path = info.file.response.path;
      console.log(path);
      if (typeof path === "string") {
        setImageUrl(path);
      }
    }
  };
  return (
    <div>
      {" "}
      <Button onClick={upload}>上传视频</Button>
      <Upload
        action={"http://localhost:4000/upload"}
        name="file"
        beforeUpload={beforeUpload}
        onChange={onChange}
      >
        <Button>Click to Upload</Button>
      </Upload>
      <Image src={imageUrl}></Image>
      <div>
        <Button
          onClick={() => {
            axios.get("http://localhost:4000/delete/all").then((res) => {
              console.log(res);
            });
          }}
        >
          删除上传的数据
        </Button>
      </div>
    </div>
  );
});

export default UploadVideo;
