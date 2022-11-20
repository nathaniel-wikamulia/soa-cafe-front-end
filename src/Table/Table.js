import React, { useState, useEffect } from "react";

import './Table.css'
import * as ServiceHomePage from "../service/HomePage/HomePage";

function Table() {
    const [menu, setMenu] = useState(null);

    const getHomePageMenu = () => {
        ServiceHomePage.apiGetMenu().then((res) => {
            if (res.data.status === 200) {
                setMenu(res.data.data);
            }
        })
    };

    useEffect(() => { 
        getHomePageMenu()
    }, [menu]);

    return (
        <div>
            <h1 align="center" style={{ color: '#333' }}>Menu</h1>

            <div align='center'>
                <table className='content_table'>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Americano</td>
                            <td>Rp 20.000,00</td>
                        </tr>
                        <tr>
                            <td>Cold Brew</td>
                            <td>Rp 25.000,00</td>
                        </tr>
                        <tr>
                            <td>Chocolate Brownies</td>
                            <td>Rp 30.000,00</td>
                        </tr>
                        <tr>
                            <td>Croissant</td>
                            <td>Rp 20.000,00</td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default Table