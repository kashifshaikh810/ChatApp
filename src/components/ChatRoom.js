import React, {Component} from 'react';
import firebase from 'firebase';

class ChatRoom extends Component{

    constructor(props, context){
        super(props, context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: '',
            messages: []
        }
    }

componentDidMount(){
    console.log('componentDidMount')
    firebase.database().ref('messages/').on('value', (snapshot) => {
        console.log(snapshot.val(), 'asasssa')
        const currentMessages = snapshot.val();
        let arr = [];
        for(let i in currentMessages){
            arr.push(currentMessages[i])
        }

        if(currentMessages !=null){
            console.log(currentMessages, ">>>>>>>>>>>>>")
            this.setState({
                messages: arr   
            })
        }
    })
} 


submitMessage(event){
    console.log('submitMessage: '+this.state.message)
    const nextMessage = {
        id: this.state.message.length,
        text: this.state.message
    }

firebase.database().ref('messages/').push(nextMessage)

//   var list = Object.assign([], this.state.messages)
//   list.push(nextMessage)
//   this.setState({
//       messages: list
//   })
}


updateMessage(event){
    console.log('updateMessage: '+event.target.value)
    this.setState({
        message: event.target.value
    })
} 

    render(){
        const currentMessage = this.state.messages.map((message, i) => {
            return (
                <li key={message.id}>{message.text}</li>
            )

        })

        return(
            <div>
                <ol>
                    {currentMessage}
                </ol>
                <input onChange={this.updateMessage} type="text" placeholder="type message" />
                <br />
                <button onClick={this.submitMessage}>Submit Message</button>
                </div>
        )
    }
}

export default ChatRoom;