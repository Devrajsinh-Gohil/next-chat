import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'

const ChatEngine = dynamic(() =>
    import("react-chat-engine").then((module) => module.ChatEngine)
)

const MessageFormSocial = dynamic(() =>
    import("react-chat-engine").then((module) => module.MessageFormSocial)
)

export default function Chats() {
    const { username, secret } = useContext(Context)
    const [showChat, setShowChat] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (typeof document !== null) {
            setShowChat(true)
        }
    })
    useEffect(() => {
        if (username.lenght === 0 || secret.length === 0) router.push('/')
    })
    if (!showChat) return <div />

    return (
        <div className="background">
            <div className="shadow">
                <ChatEngine
                    height='calc(100vh - 200px)'
                    projectID='197a5fbf-64a3-436e-a958-8b83ce4bade8'
                    userName={username}
                    userSecret={secret}
                    renderNewMessageForm={() => <MessageFormSocial />}
                />
            </div>
        </div>
    )
}
