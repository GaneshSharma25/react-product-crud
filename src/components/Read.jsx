import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("http://localhost:3004/products")
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`http://localhost:3004/product/${id}`)
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function setDataToStorage(pid, pname, price, qty, pdesc) {
    localStorage.setItem("pid", pid);
    localStorage.setItem("pname", pname);
    localStorage.setItem("price", price);
    localStorage.setItem("qty", qty);
    localStorage.setItem("pdesc", pdesc);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>PRODUCT DETAILS</h1>

      <Link to="/create">
        <button type="button">Add Product</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>PID</th>
            <th>PNAME</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((prd) => {
            return (
              <>
                <tr>
                  <td>{prd.pid}</td>
                  <td>{prd.pname}</td>
                  <td>{prd.price}</td>
                  <td>{prd.qty}</td>
                  <td>{prd.pdesc}</td>
                  <td>
                    <Link to="/edit">
                      <button
                        type="button"
                        onClick={() =>
                          setDataToStorage(
                            prd.pid,
                            prd.pname,
                            prd.price,
                            prd.qty,
                            prd.pdesc
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        if (
                          window.confirm("Do you want to delete the product?")
                        ) {
                          handleDelete(prd.pid);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Read;
