import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {TPlatform} from "./store/slices/userSlice/types.ts";
import store from "./store/store.ts";
import PopoutProvider from "./components/popouts/PopoutProvider.tsx";
import {Provider} from "react-redux";
import ExternalPlatformController from "./utility/externalPlatformController/externalPlatformController.ts";

const platform = import.meta.env.VITE_PLATFORM as TPlatform;
export const externalPlatformController = new ExternalPlatformController(platform);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PopoutProvider />
    <App />
    </Provider>
  </StrictMode>,
)