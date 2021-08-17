let instance;

export const setCustomWebSocketInstance = async (customInstance) => {
  instance = customInstance;
  return new Promise((resolve, reject) => {
    instance.onopen = () => {
      resolve(instance);
    };
    instance.onerror = (err) => {
      reject(err);
    };
  });
};

export const dispatchOutgoingMessage = (payload) => {
  instance.send(payload);
};
