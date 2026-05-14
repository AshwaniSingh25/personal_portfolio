import MessageBubble from "./MessageBubble";

const ChatMessages = (props) => {
  return (
    <div className="relative z-10 flex-1 overflow-y-auto px-5 py-6 space-y-4">
     {props.messages.map((message,indx)=>(
      <MessageBubble key={indx} role={message.role}
      content={message.content} />
     ))}
    </div>
  );
};

export default ChatMessages;