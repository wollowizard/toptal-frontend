import createAuth0Client, { Auth0Client, PopupLoginOptions } from "@auth0/auth0-spa-js";
import { isAuthenticated, popupOpen, token, user } from "../store";
import config from "./auth-config";

class AuthService {
  auth0Client: Auth0Client;
  init = async () => {
    await this.createClient();
    isAuthenticated.set(await this.auth0Client.isAuthenticated());
    user.set(await this.auth0Client.getUser());
  }

  createClient = async () => {
    this.auth0Client = await createAuth0Client({
      domain: config.domain,
      client_id: config.clientId
    });
  }

  loginWithPopup = async (options?: PopupLoginOptions) => {
    popupOpen.set(true);
    try {
      await this.auth0Client.loginWithPopup(options);

      user.set(await this.auth0Client.getUser());
      isAuthenticated.set(true);
      token.set(await this.auth0Client.getTokenSilently())
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
    } finally {
      popupOpen.set(false);
    }
  }
  logout = () => {
    return this.auth0Client.logout();
  }
}

const authService = new AuthService();

export default authService;
