import './App.css'
import ChatBot from 'react-simple-chatbot'

function App() {
  const steps = [ 
  {
    id: '1',
    message: 'Hello, Welcome to Async Futura',
    trigger: '2'
  },
  {
    id: '2',
    message: 'Please enter your name:',
    trigger: 'waiting1'
  },
  {
    id: 'waiting1',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    message: 'Hi {previousValue}, Thanks for contact Async, Please select your issue',
    trigger: '4'
  },
  {
    id: '4',
    options: [
      { value: 'Mobile Application', label: 'Mobile', trigger: '5'},
      { value: 'Digital Market', label: 'Marketing', trigger: '6'},
      { value: 'Ad Banners', label: 'Ad & Banners', trigger: '7'},
      { value: 'Web Application', label: 'Web App', trigger: '8'},
    ]
  },
  {
    id: '5',
    message: 'Thank for telling your Mobile Application issue',
    end: true
  },
  {
    id: '6',
    message: 'Thank for telling your Digital Market issue',
    end: true
  },
  {
    id: '7',
    message: 'Thank for telling your Ad Banners issue',
    end: true
  },
  {
    id: '8',
    message: 'Thank for telling your Web Application issue',
    end: true
  },
]
  

  return (
    <>
    <div>
      <ChatBot steps={steps} floating={true}/>
    </div>
      
    </>
  )
}

export default App
