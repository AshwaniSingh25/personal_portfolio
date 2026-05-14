export const createMessage = (role, content) => {
  return {
    id: crypto.randomUUID,
    role,
    content,
    timestamp: new Date().toISOString(),
  };
};
