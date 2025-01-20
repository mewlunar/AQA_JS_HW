import { apiConfig } from "../../config/apiConfig";
import type { ICredentials } from "../../data/types/signIn.types";
import { IRequestOptions, IResponseFields } from "../../data/types/api.types";
import { AxiosApiClient } from "../apiClients/axios.apiClient";
import { logStep } from "../../utils/reporter/decorators";

class SignInController {
  constructor(private apiClient = new AxiosApiClient()) {}

  @logStep("Login via API")
  async login(credentials: ICredentials) {
    const options: IRequestOptions = {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      data: credentials,
      baseURL: apiConfig.baseUrl,
      url: apiConfig.endpoints.Login,
    };
    return await this.apiClient.send<IResponseFields>(options);
  }
}

export default new SignInController();
