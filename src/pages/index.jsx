import React, { useContext } from "react";
import { Context } from '../../context'
import { useRouter } from "next/router";
import axios from "axios";


export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context)
  const router = useRouter()
  // private key : ad10f565-99d1-4aed-bd84-411a85c8f8c6
  function onSubmit(e) {
    e.preventDefault()

    if (username.lenght === 0 || secret.length === 0) return
    axios.put(
      'https://api.chatengine.io/users/',
      { username, secret },
      { headers: { "Private-key": 'ad10f565-99d1-4aed-bd84-411a85c8f8c6' } }
    )
      .then(r => router.push('/chats'))
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Chat Room</div>
          <div className="input-container">
            <input type="email" placeholder="Email" className="text-input" onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" className="text-input" onChange={e => setSecret(e.target.value)} />
          </div>
          <button type="submit" className="submit-button">
            login / signup
          </button>
        </form>
      </div>
    </div>
  )
}