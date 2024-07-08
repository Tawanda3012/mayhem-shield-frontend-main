import React from 'react';

const Messages = ({ isyou }) => {
    return (
        <div>
            {
                isyou ?
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <time className="text-xs opacity-50">12:45</time>
                            <div className="chat-bubble">
                            You were the Chosen One!
                            </div>
                        </div>
                        <div className="chat-footer opacity-50">
                            Delivered
                        </div>
                    </div>
                    :
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="chat-bubble">
                                You were the Chosen One!
                            </div>
                            <time className="text-xs opacity-50">12:45</time>
                        </div>
                        <div className="chat-footer opacity-50">
                            Delivered
                        </div>
                    </div>

            }
        </div>
    );
};

export default Messages;