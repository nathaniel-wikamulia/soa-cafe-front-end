import React, { useRef, useState, useEffect } from "react";

import './Order.css';

import Navbar from '../../Navbar/Navbar';
import Banner from '../../Banner/Banner';
import Table from '../../Table/Table';
import Footer from '../../Footer/Footer';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import * as ServiceOrder from "../../service/Order/Order";

function Order() {
  const [namaItem, setNamaItem] = useState(null);
  const [jumlahItem, setJumlahItem] = useState(null);
  const [menu, setMenu] = useState(null);
  const [price, setPrice] = useState(10000);
  const [orderSuccessStatus, setOrderSuccessStatus] = useState(false);

  const changeNamaItem = (event) => {
    setNamaItem(event.target.value);
  };

  const changeJumlahItem = (event) => {
    setJumlahItem(event.target.value);
  };


  const getDataMenuOrder = () => {
    ServiceOrder.apiGetMenuOrder().then((res) => {
      if (res.data.status === 200) {
        setMenu(res.data.data[0]);
      }
    })
  };

  const SimpanPesanan = async () => {
    ServiceOrder.apiSimpanPesanan(price, namaItem, jumlahItem).then((res) => {
      if (res.data.status === 200) {
        console.log("Success")
      }
      else {
        console.log("Failed")
      }
    });
  }

  useEffect(() => {
    getDataMenuOrder()
  }, [menu, orderSuccessStatus]);


  return (
    <div className="Order">
      <Navbar />
      <Banner />

      <Table></Table>

      <div className='button_position'>
        <br></br><br></br>
        <h2 align="center" style={{ color: '#333', marginBottom: '-5%' }}>Input Order</h2>

        <div className="order_container">
          <br></br>
          <input type="text" onChange={changeNamaItem} className="searchtextbox" placeholder="    Item's Name" />
          <br></br>
          <input type="text" onChange={changeJumlahItem} className="searchtextbox" placeholder="    Quantity" />
          <br></br>
          <div className='order_button_position'>
            <button className='button_order' onClick={() => SimpanPesanan()}>Order</button>
            <br></br>
          </div>

        </div></div>

      <Footer></Footer>
    </div>
  );
}

export default Order