import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [prdId, setPrdId] = useState("");
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3004/product/add", {
        pid: prdId,
        pname: pname,
        price: price,
        qty: qty,
        pdesc: desc,
      })
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        window.alert(err);
      });
  };

  return (
    <>
      <h1>Add Product Details</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Enter Product ID : </td>
            <td>
              <input
                type="number"
                name="id"
                id="id"
                onChange={(e) => setPrdId(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Product Name : </td>
            <td>
              <input
                type="text"
                name="pname"
                id="pname"
                onChange={(e) => setPname(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Price : </td>
            <td>
              <input
                type="number"
                name="price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Qty : </td>
            <td>
              <input
                type="number"
                name="qty"
                id="qty"
                onChange={(e) => setQty(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Description : </td>
            <td>
              <input
                type="text"
                name="desc"
                id="desc"
                onChange={(e) => setDesc(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit" name="btn" id="btn" value="Submit">
                Add Product
              </button>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}

export default Create;
