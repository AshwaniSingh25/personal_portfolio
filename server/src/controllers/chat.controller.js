import { chatService } from "../services/chat.service.js";

export const chatController = async (req, res) => {
  try {
    const chatResponse = req.body.messages;

    if (!chatResponse) {
      return res.status(400).json({ message: "Ask your question first" });
    }
    const chat = await chatService(chatResponse);

    if(chat.success){
        return res.status(200).json(chat);
    }
    else{
        return res.status(404).json("Not Working");
    }
  } catch (error) {
    console.error("Chat Controller Error", error);
    return res.status(500).json({ message: "Server Error!" });
  }
};
