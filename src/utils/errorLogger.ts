const logError = (error: Error, info: { componentStack: string }) => {
  // ? log to an external API like TrackJS: https://trackjs.com/
  // eslint-disable-next-line no-console
  console.error("logError: ", error, info);
};

export default logError;
