import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {IWidget, IWidgetStore} from 'src/widgets/@types';
import {widgetsApiActions} from 'src/widgets/actions/api';

const initialState: IWidgetStore = {
  data: [],
  loading: false
};

export const getWidgets = createAsyncThunk('widgets/get', async () => {
  try {
    const widgets = await widgetsApiActions.get();

    return widgets ?? [];
  } catch (error) {
    console.log('Error get widgets', error);
  }
});

export const widgetsSlice = createSlice({
  name: 'widgets',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<IWidget>) => {
      state.data.push(action.payload);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getWidgets.pending, state => {
        state.loading = true;
      })
      .addCase(getWidgets.rejected, state => {
        state.loading = false;
      })
      .addCase(getWidgets.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  }
});

const widgetReducers = widgetsSlice.reducer;
const widgetActions = widgetsSlice.actions;

export {widgetReducers, widgetActions};
