import {createAction} from "../../helpers/create-action/create-action";

export const ActionType = {
  SET_SUBMIT_FAILED: `SET_SUBMIT_FAILED`,
  RESET_FORM_ERROR: `RESET_FORM_ERROR`
};

export const formAction = {
  setSubmitFailed: (paylpad) => createAction(ActionType.SET_SUBMIT_FAILED, paylpad),
  resetFormError: () => createAction(ActionType.RESET_FORM_ERROR)
};
