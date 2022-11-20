import './HomePage.css';
import Navbar from '../../Navbar/Navbar';
import Banner from '../../Banner/Banner';
import Table from '../../Table/Table';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className="HomePage">
      <Navbar />
      <Banner />

      <Table></Table>
      <br></br>
      <div className='button_position'>
        <Link to='/order' style={{ color: 'white', textDecoration: 'None' }}><button className='goto_order'>Order Now</button></Link>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default HomePage