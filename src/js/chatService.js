let instance;

export const setCustomWebSocketInstance = async (customInstance) => {
  instance = customInstance;
  return new Promise((resolve, reject) => {
    instance.onopen = () => {
      console.log('connected');
      resolve(instance);
    };
    instance.onerror = (err) => {
      console.log(err);
      reject(err);
    };
  });
};

export const dispatchOutgoingMessage = (payload) => {
  instance.send(payload);
};
