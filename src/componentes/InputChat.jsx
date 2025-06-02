import { BsSendFill } from 'react-icons/bs';

const InputChat = () => {
    return (
        <form id="soul-chat" className="p-2 md:p-10 lg:p-20 lg:pb-7 bg-[#f9f9f9]">
            <div className="w-full min-w-60 max-w-3xl mx-auto mt-10 flex relative shadow-2xl rounded-full ">
                <input type="text" name="pregunta"
                className="focus:outline-none focus:ring-0; border-0 w-full px-6 py-3"
                ></input>
                <button form="soul-chat" id="soulChatButton" 
                    className="ml-3 px-4 py-2 w-20 bg-[#10bc69] text-white rounded-full hover:bg-[rgba(16,188,105,0.75)] transition" >
                    <BsSendFill className="inline-block"/>
                </button>
            </div>
        </form>
    );
}

export default InputChat;