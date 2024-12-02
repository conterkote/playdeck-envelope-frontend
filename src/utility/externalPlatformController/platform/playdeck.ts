import ExternalPlatformControllerInstance from "./abstract.ts";
import {TExternalPlatformUserData} from "../../hooks/useInitExternalPlatform.ts";

export type Profile = {
  avatar: string,
  username: string,
  firstName: string,
  lastName: string,
  telegramId: number,
  locale: 'en' | 'ru',
  token: string, // You can read more about our jwt token https://github.com/ton-play/playdeck-integration-guide/wiki/4.--User-JWT
  params: { [key: string]: string }, // You can create a link with a query string to the game using the method customShare or getShareLink
  sessionId: string,
  currentGameStarted: number
};

class Playdeck implements ExternalPlatformControllerInstance {
  constructor() {
  }

  async init(): Promise<TExternalPlatformUserData> {
    return new Promise((res) => {
      const receiveUserInfo = (e: MessageEvent["data"]) => {
        const playdeck = e?.data.playdeck;
        if (!playdeck) return;
        if (playdeck.method === "getUserProfile") {
          const userProfile = playdeck.value as Profile;
          const {avatar, telegramId, lastName, firstName, token} = userProfile
          const userData: TExternalPlatformUserData = {
            user_id: `${telegramId}`,
            token,
            photo: avatar,
            name: `${lastName} ${firstName}`,
            platform: "playdeck"
          }
          res(userData);
        }

      }

      window.addEventListener("message", receiveUserInfo)
      window.parent.postMessage({playdeck: {method: "getUserProfile"}}, "*")
    })
  }

  setLoadingProgress(percentage: number) {
    const payload = {
      playdeck: {
        method: "setLoadingProgress",
        value: percentage
      }
    }
    window.postMessage(payload, "*")
  }
}

export default Playdeck;