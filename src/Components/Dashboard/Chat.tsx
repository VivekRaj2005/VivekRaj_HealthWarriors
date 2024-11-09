import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  MessageModel,
} from "@chatscope/chat-ui-kit-react";
import Navbar from "../Navbar";
import { useState } from "react";
import { PromiseToJSON } from "../../Utils/Buffer";
// import type { AriaAttributes, DOMAttributes } from "react";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    as?: string | typeof MessageInput;
  }
}

function Chat() {
  const [text, settext] = useState("");
  const [chats, setChats] = useState<MessageModel[]>([]);
  const [lang, setLang] = useState<string>("4");

  function AddChat(chat: string, incoming: boolean) {
    const newChats = chats;
    const newChat: MessageModel = {
      message: chat,
      direction: incoming ? "outgoing" : "incoming",
      position: "normal",
    };
    newChats.push(newChat);
    setChats(newChats);
    console.log(newChats);
  }

  function GetChat() {
    AddChat(text, false);
    settext("");
    PromiseToJSON(
      fetch("http://127.0.0.1:5000/api/chat", {
        method: "POST",
        body: JSON.stringify({
          lang,
          data: text,
        }),
      })
    ).then((data: any) => {
      AddChat(data.instruction, true);
      console.log(data.instruction);
    });
  }
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          height: "500px",
          marginTop: "50px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {chats.map((chat: MessageModel, key: number) => {
                return <Message model={chat} key={key} />;
              })}
            </MessageList>
            <div as={MessageInput}>
              <MessageInput
                value={text}
                onChange={(e) => {
                  settext(e);
                }}
              />
              <div className="w-full flex justify-center">
                <button
                  className="flex px-10 py-5 rounded-full bg-indigo-200"
                  onClick={GetChat}
                >
                  Send
                </button>
              </div>
            </div>
          </ChatContainer>
        </MainContainer>
      </div>
    </>
  );
}

export default Chat;
