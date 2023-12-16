class UrlUtils {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getParamsSearch(params: any): string {
    if (!params) {
      return "";
    }
    const payloadStr = Object.keys(params)
      .map((key) => {
        return `${key}=${params[key]}`;
      })
      .join("&");
    return `?${payloadStr}`;
  }
}

export { UrlUtils };
