import React, { useState } from 'react'
import logo1 from '../components/assets/bird.gif'
import styless from '../components/ChatBot.css'

import ChatMessage from './ChatMessage'
import { analyze } from './Utils'


const ChatBot = () => {
    const [messages, setMessages]=useState([
        {
            message: 'Birdie here to help! What is your name'
        }
    ])
    const[text,setText]=useState('');
    const onSend=()=>{
        let list =[...messages, {message: text, user: true}];
        if(list.length>2){
            const reply=analyze(text)
            list =[...list,
                
                {message:reply}
            ]

        }
        else{
            list=[
                ...list,
                {
                    message: `Hey ${text}, How can I help you today?`,
                }
            ];
        }
        setMessages(list)
        setText("")
        setTimeout(()=>{
            document.querySelector("#copyright").scrollIntoView();
        },1);
    }
  return (
    <>
    <div className='top_container' style={styless}>

        <div className='d-flex  align-items-center justify-content-center padding-top-20px mb-4'>
            <img id="birdimage"  src={logo1} alt="stick" height={150} width={180} border-radius={10}/>
            <h1 className='text-title'>ChirpBot</h1>

        </div>
        <div className='chat_message'>
           { messages.length > 0 && messages.map((data) => <ChatMessage {...data}/>) }
           <div className='d-flex' mt-2>
            <input type='text' className='form-control' value={text} onChange={(e)=> setText(e.target.value)}/>
            <button className='send_button' onClick={onSend}>Send</button>
          
           </div>
           <div id='copyright' className='mt-3'>Copyrights reserved @ Dhanu Sri</div>

        </div>
        </div>
      
    </>
  )
}

export default ChatBot
