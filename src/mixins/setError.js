import { useError } from "../stores/error";

const error = useError();

export default function useApiErr() {
  function setApiErr(params) {
    error.setError(params)
  }

  return { setApiErr }
}
