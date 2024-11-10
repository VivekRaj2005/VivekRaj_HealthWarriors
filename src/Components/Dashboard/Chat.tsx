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

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Language 1
                </h2>
                <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  ગુજરાતી,
                </h1>
                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Select
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
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
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  English
                </h1>
                <button
                  className={`flex items-center mt-auto text-white bg-${
                    lang === "4" ? "indigo" : "grey"
                  }-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-${
                    lang === "4" ? "indigo" : "grey"
                  }-600 rounded`}
                >
                  {lang === "4" ? "Selected" : "Select"}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Language 3
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  मराठी
                </h1>

                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Select
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Language 4
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  हिन्दी
                </h1>
                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Select
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
