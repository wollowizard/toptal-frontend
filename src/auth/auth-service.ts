import createAuth0Client, { Auth0Client, PopupLoginOptions } from "@auth0/auth0-spa-js";
import { isAuthenticated, popupOpen, user } from "../store";
import config from "./auth-config";

class AuthService {
  auth0Client: Auth0Client;
  init = async () => {
    try {
      this.auth0Client = await createAuth0Client({
        domain: config.domain,
        client_id: config.clientId,
        audience: config.audience
      });
      isAuthenticated.set(await this.auth0Client.isAuthenticated());
      user.set(await this.auth0Client.getUser());
    } catch (e) {
      console.error("Error initializing auth client", e);
    }
  }

  loginWithPopup = async (options?: PopupLoginOptions) => {
    popupOpen.set(true);
    try {
      await this.auth0Client.loginWithPopup(options);

      user.set(await this.auth0Client.getUser());
      isAuthenticated.set(true);
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
