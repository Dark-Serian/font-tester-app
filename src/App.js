import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';

function App() {
  function aaa(){
    const fontQuery = document.getElementById('font-input')
    const text = fontQuery.value
    const font1 = document.getElementById('font-1')
    font1.textContent=text
    const font2 = document.getElementById('font-2')
    font2.textContent=text
    const font3 = document.getElementById('font-3')
    font3.textContent=text
    const font4 = document.getElementById('font-4')
    font4.textContent=text
    const font5 = document.getElementById('font-5')
    font5.textContent=text
    const font6 = document.getElementById('font-6')
    font6.textContent=text
    const font7 = document.getElementById('font-7')
    font7.textContent=text
    const font8 = document.getElementById('font-8')
    font8.textContent=text
    if(typeof(text) == "string"){
      const fontDownload1 = document.getElementById('font-download-1')
      fontDownload1.textContent="دانلود فونت 1"
      const fontDownload2 = document.getElementById('font-download-2')
      fontDownload2.textContent="دانلود فونت 2"
      const fontDownload3 = document.getElementById('font-download-3')
      fontDownload3.textContent="دانلود فونت 3"
      const fontDownload4 = document.getElementById('font-download-4')
      fontDownload4.textContent="دانلود فونت 4"
      const fontDownload5 = document.getElementById('font-download-5')
      fontDownload5.textContent="دانلود فونت 5"
      const fontDownload6 = document.getElementById('font-download-6')
      fontDownload6.textContent="دانلود فونت 6"
      const fontDownload7 = document.getElementById('font-download-7')
      fontDownload7.textContent="دانلود فونت 7"
      const fontDownload8 = document.getElementById('font-download-8')
      fontDownload8.textContent="دانلود فونت 8"
    }
  }
  function sele(){
    const selectQuery = document.getElementById('selecter')
    const selectValue = selectQuery.value
    const font1 = document.getElementById('font-1')
    const font2 = document.getElementById('font-2')
    const font3 = document.getElementById('font-3')
    const font4 = document.getElementById('font-4')
    const font5 = document.getElementById('font-5')
    const font6 = document.getElementById('font-6')
    const font7 = document.getElementById('font-7')
    const font8 = document.getElementById('font-8')
    if(selectValue == 'آبی'){
      font1.style.color="#3982f0"
      font2.style.color="#3982f0"
      font3.style.color="#3982f0"
      font4.style.color="#3982f0"
      font5.style.color="#3982f0"
      font6.style.color="#3982f0"
      font7.style.color="#3982f0"
      font8.style.color="#3982f0"
    }
    else if(selectValue == 'سبز'){
      font1.style.color="#18b72a"
      font2.style.color="#18b72a"
      font3.style.color="#18b72a"
      font4.style.color="#18b72a"
      font5.style.color="#18b72a"
      font6.style.color="#18b72a"
      font7.style.color="#18b72a"
      font8.style.color="#18b72a"
    }
    else if(selectValue == 'قرمز'){
      font1.style.color="#b31613"
      font2.style.color="#b31613"
      font3.style.color="#b31613"
      font4.style.color="#b31613"
      font5.style.color="#b31613"
      font6.style.color="#b31613"
      font7.style.color="#b31613"
      font8.style.color="#b31613"
    }
    else if(selectValue == 'زرد'){
      font1.style.color="#ffd900"
      font2.style.color="#ffd900"
      font3.style.color="#ffd900"
      font4.style.color="#ffd900"
      font5.style.color="#ffd900"
      font6.style.color="#ffd900"
      font7.style.color="#ffd900"
      font8.style.color="#ffd900"
    }
    else if(selectValue == 'خاکستری'){
      font1.style.color="#979797"
      font2.style.color="#979797"
      font3.style.color="#979797"
      font4.style.color="#979797"
      font5.style.color="#979797"
      font6.style.color="#979797"
      font7.style.color="#979797"
      font8.style.color="#979797"
    }
    else if(selectValue == 'مشکی'){
      font1.style.color="#080808"
      font2.style.color="#080808"
      font3.style.color="#080808"
      font4.style.color="#080808"
      font5.style.color="#080808"
      font6.style.color="#080808"
      font7.style.color="#080808"
      font8.style.color="#080808"
    }
    else if(selectValue == 'بنفش'){
      font1.style.color="#571c66"
      font2.style.color="#571c66"
      font3.style.color="#571c66"
      font4.style.color="#571c66"
      font5.style.color="#571c66"
      font6.style.color="#571c66"
      font7.style.color="#571c66"
      font8.style.color="#571c66"
    }
    else{
      font1.style.color=""
      font2.style.color=""
      font3.style.color=""
      font4.style.color=""
      font5.style.color=""
      font6.style.color=""
      font7.style.color=""
      font8.style.color=""
    }  
  }
  function fontSizer(){
    const font1 = document.getElementById('font-1')
    const font2 = document.getElementById('font-2')
    const font3 = document.getElementById('font-3')
    const font4 = document.getElementById('font-4')
    const font5 = document.getElementById('font-5')
    const font6 = document.getElementById('font-6')
    const font7 = document.getElementById('font-7')
    const font8 = document.getElementById('font-8')
    const sizeQuery = document.getElementById('size-input')
    const sizeValue = sizeQuery.value
    font1.style.fontSize=sizeValue+"px"
    font2.style.fontSize=sizeValue+"px"
    font3.style.fontSize=sizeValue+"px"
    font4.style.fontSize=sizeValue+"px"
    font5.style.fontSize=sizeValue+"px"
    font6.style.fontSize=sizeValue+"px"
    font7.style.fontSize=sizeValue+"px"
    font8.style.fontSize=sizeValue+"px"
  }
  return ( 
    <div className="App">
      <h1 className='fonts'>فونت یاب</h1>
      <input id='size-input' placeholder='سایز فونت مورد نظر را وارد کنید' type='number' onInput={fontSizer}></input>
      <input id='font-input' placeholder='کلمه را وارد کنید' onInput={aaa}></input>
      <select id='selecter' onInput={sele}>
        <option id='optioner'>رنگ</option>
        <option id='option-blue'>آبی</option>
        <option id='option-green'>سبز</option>
        <option id='option-red'>قرمز</option>
        <option id='option-yellow'>زرد</option>
        <option id='option-gray'>خاکستری</option>
        <option id='option-black'>مشکی</option>
        <option id='option-purple'>بنفش</option>
      </select>
      <p id='font-1'></p>
      <a href='fonts/B Titr Bold_0.ttf' id='font-download-1' download></a>
      <br></br>
      <p id='font-2'></p>
      <a href='fonts/B Zar_0.ttf' id='font-download-2' download></a>
      <br></br>
      <p id='font-3'></p>
      <a href='fonts/Dirooz.ttf' id='font-download-3' download></a>
      <br></br>
      <p id='font-4'></p>
      <a href='fonts/EntezarC3_v2.0.1.ttf' id='font-download-4' download></a>
      <br></br>
      <p id='font-5'></p>
      <a href='fonts/Far_Ashgar.ttf' id='font-download-5' download></a>
      <br></br>
      <p id='font-6'></p>
      <a href='fonts/IranNastaliq.ttf' id='font-download-6' download></a>
      <br></br>
      <p id='font-7'></p>
      <a href='fonts/Mj_Barik.ttf' id='font-download-7' download></a>
      <br></br>
      <p id='font-8'></p>
      <a href='fonts/Mj_Tail Mediom_0.ttf' id='font-download-8' download></a>
      <br></br>
    </div>
    
  );
}

export default App;
