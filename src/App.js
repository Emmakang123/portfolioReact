import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';

function App() {
  return (
    <div className="App">
      {/* BrowserRouter는 라우팅을 적용하기 위한 컴포넌트. 
          애플리케이션의 최상위 컴포넌트인 App컴포넌트를 감싸서 라우팅설정을 적용할수있도록함 */}
      <BrowserRouter> 
      {/* Routes 라우트들을 정의하는 컨테이너. 
          각각<Route>컴포넌트들을 <Routes>컴포넌트 내부에 정의하여 경로와 컴포넌트 매핑 */}
        <Routes>
          <Route path='/' element={<HomeView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
