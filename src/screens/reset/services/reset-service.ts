import { TLogin } from "../../../types/user";

const ResetSerivce = {
  reset: ({ username }: TLogin) => {
    return true;
  },
};

export default ResetSerivce;
