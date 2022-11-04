import React from 'react';
import {useStore} from 'store/store';


function Header() {
  const {count, clear} = useStore()
  return (
    <header className='bg-blue-700 text-white font-bold text-3xl p-5 flex'>
        <div>Header</div>
        <div>{count}</div>
        <button onClick={clear}>Clear Cart</button>
    </header>
  )
};

export default Header;
