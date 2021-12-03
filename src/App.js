import { ThemeContext } from "./ThemeContext_Provide";
import React, { useCallback, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Start_Stop from './component/11_UseRef_Start_Stop';
import UseCallBacktest from './component/12_UseCallBack_And_ReactmemoHoc';
import UseReducerTest from './component/14_UseReducer';
import UseReducerTestLan2 from './component/15_UseReducer_Lan2';
import PHanmuoisauB from './component/16B_useContext_PRO';
import Usecontex from './component/16_useContext/index';
// import Avatar_preview from './component/With_preview_avatar';
// import Avatar_preview_ANTD from './component/With_preview_avatar_ANTD';
// import Avatar_preview from './component/With_preview_avatar';
// import Scroll from './component/Scroll_event_Test';
// import Todolist_localStorage from './component/Todolist_LocalStorage';
function App() {
  const [make, setMake] = useState('')
  const [allvalue, SetAllvalue] = useState([0, 0])

  const Onchagemake = (e) => {
    setMake(e.target.value)
  }
  const Them = () => {
    SetAllvalue([...allvalue, +make])
    setMake('')
  }

  const tinhtoan = useMemo(() => {
    return allvalue.reduce((a, b) => a + b)
  }, [allvalue])

  const hamvovan = (() => {
    console.log("🙉🍀-render hamvovan")
  }
  )

  return (
    <div >
      {/* <Todolist_localStorage /> */}
      {/* <Scroll /> */}
      {/* <Avatar_preview /> */}
      {/* <Avatar_preview_ANTD /> */}
      {/* <Start_Stop /> */}
      {/* <UseCallBacktest /> */}
      {/* <UseReducerTest /> */}
      {/* <UseReducerTestLan2 /> */}
      {/* <Usecontex /> */}
      {/* <PHanmuoisauB /> */} v

      <input
        value={make}
        onChange={Onchagemake}
      />
      <button onClick={Them}>
        Add
      </button>
      <button onClick={hamvovan}>
        thu
      </button>
      <div >Tong: {tinhtoan}</div>
      <ul>
        {
          allvalue && allvalue.map((x, i) => <li key={i}>{x}</li>)
        }
        <UseReducerTest prroo={hamvovan} />
      </ul>
    </div>
  );
}

export default App;
