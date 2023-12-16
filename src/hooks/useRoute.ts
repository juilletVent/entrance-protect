import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { UrlUtils } from "../utils/UrlUtils";

export function useRoute() {
  const navigate = useNavigate();

  const routePush = useCallback(
    (path: string, params?: object) => {
      const targetURL = `${path}${UrlUtils.getParamsSearch(params)}`;
      navigate(targetURL);
    },
    [navigate]
  );

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return { routePush, goBack };
}
