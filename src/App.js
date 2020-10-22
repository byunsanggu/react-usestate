import React, {useRef, useState, useMemo,useCallback} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import InputSample from "./InputSample";
import UserList from "./USerList" 
import CreateUser from './CreateUser';


function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length; 
}

const initialState = {
  inputs : {
    username : '',
    email : ''
  }, 
}

function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email : ''
  }); 
  const { username, email } = inputs;
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs( inputs => ({
        ...inputs,
        [name] : value 
      })); 
    }, []); 
   
  const [users, setUsers]  = useState([
    {
        id : 1,
        username : 'velopert',
        email : 'pulbic.velopert@gamil.com',
        active : true
    }, 
    {
        id : 2,
        username : 'tester',
        email : 'tester@example.com',
        active : false
    },
    {
        id : 3,
        username : 'liz',
        email : 'liz@example.com',
        active : false
    }
]); 

  const nextId = useRef(4); 
  const onCreate = useCallback(() => {
    const user = {
      id : nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    //나중에 구현 할 배열에 항목 추가하는 로직 
    setInputs({
      username : '',
      email : ''
    }); 
    nextId.current += 1; 
  }, [users, username, email]); 

  const onRemove = useCallback( 
   id => {
    //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을만듬 
    // = user.id가 id인 것을 제거함
    setUsers(users => users.filter(user => user.id !== id)); 
  },
   []); 

  const onToggle = useCallback(
    id => {
    setUsers(users =>
      users.map(user => 
        user.id === id ? {...user, active : !user.active} : user
      )
    );
  }, []);
  const count = useMemo(() => countActiveUsers(users),[users]);  
  return (
    <>
      <CreateUser 
        username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
      />
    <UserList users = {users} onRemove={onRemove} onToggle = {onToggle}/>
    <div>활성 사용자 수 : {count}</div>
    </>
  );
  // return (
  //   // <InputSample/ >
  //   <UserList/>
  // );


  // const [color, setColor] = useState('red');
  // function onClick() {
  //     setColor('blue');
  // }

  // return (
  //     <button style={{backgroundColor : color}} onClick={onClick}>
  //         좋아요 
  //     </button>
  // )
}

export default App;
