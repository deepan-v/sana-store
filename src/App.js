import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AboutPage from "./Pages/About/AboutPage";
import ContactPage from "./Pages/Contact/ContactPage";
import MainPage from "./Pages/ShoppingPage/MainPage";
import ProductPage from "./Pages/Product/ProductPage";
import Footer from "./Components/Footer/Footer";
import PageLayout from "./PageLayout/PageLayout";
import { useState } from "react";
import { useCustom } from "./ContextApi/ContextApi";

function App() {
  
  let{Products} = useCustom()
      let {SetBool , Boolean , } = Products
  let ToNavigate = JSON.parse(localStorage.getItem('password'))



   if(!Boolean){
     return <PageLayout/>

   }

   if(ToNavigate === Boolean){
    console.log('main');
     return (
    <div className="App">
       <Navbar/>
       <main className="MainContainer" >
         <Routes> 
              <Route path="/" element={<ProductPage/>} />  
              <Route path="/ContactPage" element={<ContactPage/>}/>
              <Route path="/AboutPage" element={<AboutPage/>}/>
              <Route path="/ShoppingPage" element={<MainPage/>}/>
         </Routes>
       </main>
       <Footer/>
    </div>
  );
   }
  }

export default App;
