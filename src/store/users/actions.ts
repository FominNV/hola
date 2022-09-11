import {
  CreateContactType,
  DeleteContactType,
  GetUserContactsType,
  IContact,
  IResponse,
  IUserResponseData,
  UpdateContactType,
  UserActionTypes,
  UserFetchType,
  UserLogoutType,
} from "./types";

export const logoutUser: UserLogoutType = () => ({
  type: UserActionTypes.LOGOUT_USER,
  payload: { user: null, contacts: null },
});

