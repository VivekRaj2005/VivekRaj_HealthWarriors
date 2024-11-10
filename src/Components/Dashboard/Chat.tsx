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
    settext("");
  }

  function GetChat() {
    AddChat(text, false);

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
      <div className="lg:flex lg:flex-row-reverse lg:justify-evenly">
        <section className="text-gray-600 body-font overflow-hidden w-1/3">
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap -m-4 lg:flex-col">
              <div className="p-4 w-full" onClick={() => setLang("1")}>
                <div
                  className={`h-full p-6 rounded-lg border-2 border-${
                    lang === "1" ? "indigo" : "grey"
                  }-500 flex flex-col relative overflow-hidden`}
                >
                  {lang === "1" ? (
                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      Selected
                    </span>
                  ) : (
                    <></>
                  )}
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    Language 1
                  </h2>
                  <h1 className="text-3xl text-gray-900 pb-4 border-b border-gray-200 leading-none">
                    ગુજરાતી,
                  </h1>
                </div>
              </div>
              <div className="p-4 w-full" onClick={() => setLang("4")}>
                <div
                  className={`h-full p-6 rounded-lg border-2 border-${
                    lang === "4" ? "indigo" : "grey"
                  }-500 flex flex-col relative overflow-hidden`}
                >
                  {lang === "4" ? (
                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      Selected
                    </span>
                  ) : (
                    <></>
                  )}
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    Language 2
                  </h2>
                  <h1 className="text-3xl text-gray-900 leading-none flex items-center pb-4 border-b border-gray-200">
                    English
                  </h1>
             
                </div>
              </div>
              <div className="p-4 w-full" onClick={() => setLang("2")}>
                <div
                  className={`h-full p-6 rounded-lg border-2 border-${
                    lang === "2" ? "indigo" : "grey"
                  }-500 flex flex-col relative overflow-hidden`}
                >
                  {lang === "2" ? (
                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      Selected
                    </span>
                  ) : (
                    <></>
                  )}{" "}
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    Language 3
                  </h2>
                  <h1 className="text-3xl text-gray-900 leading-none flex items-center pb-4 border-b border-gray-200">
                    मराठी
                  </h1>
                 
                </div>
              </div>
              <div className="p-4 w-full" onClick={() => setLang("3")}>
                <div
                  className={`h-full p-6 rounded-lg border-2 border-${
                    lang === "3" ? "indigo" : "grey"
                  }-500 flex flex-col relative overflow-hidden`}
                >
                  {lang === "3" ? (
                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      Selected
                    </span>
                  ) : (
                    <></>
                  )}
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    Language 4
                  </h2>
                  <h1 className="text-3xl text-gray-900 leading-none flex items-center pb-4 border-b border-gray-200">
                    हिन्दी
                  </h1>
                
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="h-[500px] lg:h-[80vh] w-1/2"
          style={{
            position: "relative",
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
      </div>
    </>
  );
}

export default Chat;
