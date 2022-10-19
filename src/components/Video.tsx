import { Button } from "antd";
import axios from "axios";
import React, { memo, useState } from "react";
import ReactPlayer from "react-player";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { decrement, getVideo, increment, incrementAsync, incrementPayload } from "../store/reducers/counter";

const VideoPlay = memo(() => {
  const [videoUrl, setVideoUrl] = useState("https://v.hoopchina.com.cn/bbs-editor-web/editor/2022-10/7ff5d9f5118cce39ee2a9dc4aebb02aa_transcode.mp4?auth_key=1666088099-2-0-41880b659d6daacfae41c5ef50e56877");
  // 获取counter Slice
  const count = useAppSelector(state => {
    return state.counter;
  });

  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>视频播放</h1>

      <h4>{count.count}</h4>

      <Button
        type="primary"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +1
      </Button>
      <br />
      <Button
        type="dashed"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -1
      </Button>
      <Button
      onClick={() => {
        dispatch(incrementPayload(2));
      }}>
        参数increment
      </Button>
      <Button
      onClick={() => {
        dispatch(getVideo(3))
      }}>
        异步增加
      </Button>
      <Button
        onClick={() => {
          axios.get("http://localhost:4000/getVideo").then((res) => {
            setVideoUrl(res.data.videoPath);
          });

        }}
      >
        获取视频
      </Button>
      {videoUrl}
      <ReactPlayer url={videoUrl} width={400} controls />
    </div>
  );
});

export default VideoPlay;
