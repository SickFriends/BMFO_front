import React, { useState } from "react";
import "./product_list.css";
function Product_list() {
    const [popup,setPopup] = useState(true);
  function test() {
    alert("hihihi");
  }
  return (
    <div className="product_list">
      <header></header>
      <section>
        <table>
          <tr>
            <td onClick={test}>
              <img src="C:\react-highlow\public\다운로드.jpg" alt = "no"/>
            </td>
            <td>
              <img src="http://placehold.it/150x150" />
            </td>
            <td>
              <img src="http://placehold.it/150x150" />
            </td>
            <td>
              <img src="http://placehold.it/150x150" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="http://placehold.it/150x150" />
            </td>
            <td>
              <img src="http://placehold.it/150x150" />
            </td>
            <td>
              <img src="http://placehold.it/150x150" />
            </td>
            <td>
              <img src="http://placehold.it/150x150" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="http://placehold.it/150x150" />
            </td>
            <td>
              <img src="http://placehold.it/150x150" />
            </td>
            <td>
              <img src="http://placehold.it/150x150" />
            </td>
            <td>
              <img src="http://placehold.it/150x150" />
            </td>
          </tr>
        </table>
       
      </section>
      <footer></footer>
    </div>
  );
}
export default Product_list;
