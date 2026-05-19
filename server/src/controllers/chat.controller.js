export const chatController = async (req, res) => {
  try {
    const {chatResponse} = req.body.message;

    if(!chatResponse) {
        return res.status(400).json({message: "Ask your question first"});
    }

  } catch (error) {
    console.error("Chat Controller Error", error);
    return res.status(500).json({message: "Server Error!"})
  }
};
