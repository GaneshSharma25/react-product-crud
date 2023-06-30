import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [prdId, setPrdId] = useState("");
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    setPrdId(localStorage.getItem("pid", prdId));
    setPname(localStorage.getItem("pname", pname));
    setPrice(localStorage.getItem("price", price));
    setQty(localStorage.getItem("qty", qty));
    setDesc(localStorage.getItem("pdesc", desc));
  }, []);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3004/product/${prdId}`, {
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
      <h1>Update Product Details</h1>
      <form onSubmit={handleUpdate}>
        <table>
          <tr>
            <td>Enter Product ID : </td>
            <td>
              <input
                type="number"
                name="id"
                id="id"
                value={prdId}
                disabled
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
                value={pname}
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
                value={price}
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
                value={qty}
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
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit" name="btn" id="btn" value="Submit">
                Update Product
              </button>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}

export default Edit;
