import React, { useEffect } from 'react';



const User = React.memo(function User({user, onRemove, onToggle }) {
    useEffect(() => {
        console.log('user값이 설정됨');
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('user가 바꾸기ㅣ 전 ');
            console.log('컴포넌트가 화면에서 사라짐'); 
        }; 

    },[user]); 

    return (
        <div>
            <b
             style={{
                 cursor : 'pointer',
                 color : user.active ? 'green' : 'black'
              }}
              onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b> 
            &nbps;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

function UserList({users, onRemove, onToggle}) {
    return ( 
        <div>
            {users.map(user => (
                <User 
                user={user} 
                key = {user.id} 
                onRemove={onRemove}
                onToggle={onToggle}
             /> 
            ))}
        </div>
    );
}

export default React.memo(UserList); 