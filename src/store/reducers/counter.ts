import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "..";

// 定义state类型
interface CounterStore {
  count: number;
}

const initialState: CounterStore = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // toolkit不需要关注数据不可变性，可以直接修改state，是因为使用了immer库
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // 使用PayloadAction可以限制payload类型
    incrementPayload: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getVideo.pending, (state) => {
        console.log("loading....");
      })
      .addCase(getVideo.fulfilled, (state, action) => {
        console.log(action, "请求成功");
      })
      .addCase(getVideo.rejected, (state) => {
        console.log("请求失败");
      });
  },
});

export const { increment, decrement, incrementPayload } = counterSlice.actions;

// 可以进行异步操作，使用方法同 redux-thunk
export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementPayload(amount));
  }, 2000);
};

export const getVideo = createAsyncThunk(
  "counter/getVideo",
  async (id: number) => {
    const res = await axios.get("http://localhost:4000/getVideo");
    return res.data.data
  }
);

// reducer需要注册到store中
export default counterSlice.reducer;
