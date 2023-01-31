import React, { useEffect, useState } from "react";
import "../style/table.css";

export default function EmployeTable() {
  const [searchval, setSearchVal] = useState("");
  const [data, setData] = useState([]);
  const [searchdata, setSearchData] = useState([]);
  useEffect(() => {
    setData([
      {
        user_id: 101,
        name: "Anom",
        address: "Mumbai",
        phone_no: 987665432,
        role: "employe",
        asset: "laptop,charger,mouse",
       
        assets:[
            {
               
                item_no:100,
                serial_no:132,
                item_name:"Charger",
                status:"allocated",
            },
            {
                item_no:101,
                serial_no:3454,
                item_name:"Mouse",
                status:"dammaged"
            }
        ]
      },
      {
        user_id: 102,
        name: "Megha",
        address: "Mumbai",
        phone_no: 9988776655,
        role: "employe",
        asset: "laptop,charger,mouse",
        assets:[
            {
                item_no:105,
                serial_no:3454,
                item_name:"Charger",
                status:"allocated"
            },
            {
                item_no:108,
                serial_no:3454,
                item_name:"Mouse",
                status:"dammaged"
            }
        ]
      },
      {
        user_id: 103,
        name: "Subham",
        address: "Mumbai",
        phone_no: 8899776655,
        role: "employe",
        asset: "laptop,charger,mouse",
        assets:[
            {
                item_no:102,
                serial_no:3454,
                item_name:"Charger",
                status:"allocated"
            },
            {
                item_no:102,
                serial_no:3454,
                item_name:"Mouse",
                status:"dammaged"
            }
        ]
        
      },
    ]);
    setSearchData([
        {
          user_id: 101,
          name: "Anom",
          address: "Mumbai",
          phone_no: 987665432,
          role: "employe",
          asset: "laptop,charger,mouse",
         
          assets:[
              {
                  item_no:109,
                  serial_no:3454,
                  item_name:"Charger",
                  status:"allocated"
              },
              {
                  item_no:101,
                  serial_no:3454,
                  item_name:"Mouse",
                  status:"dammaged"
              }
          ]
        },
        {
          user_id: 102,
          name: "Megha",
          address: "Mumbai",
          phone_no: 9988776655,
          role: "employe",
          asset: "laptop,charger,mouse",
          assets:[
              {
                  item_no:105,
                  serial_no:3454,
                  item_name:"Charger",
                  status:"allocated"
              },
              {
                  item_no:108,
                  serial_no:3454,
                  item_name:"Mouse",
                  status:"dammaged"
              }
          ]
        },
        {
          user_id: 103,
          name: "Subham",
          address: "Mumbai",
          phone_no: 8899776655,
          role: "employe",
          asset: "laptop,charger,mouse",
          assets:[
              {
                  item_no:102,
                  serial_no:3454,
                  item_name:"Charger",
                  status:"allocated"
              },
              {
                  item_no:102,
                  item_name:"Mouse",
                  serial_no:3454,
                  status:"dammaged"
              }
          ]
          
        },
      ]);
  }, []);

  const onSearch = () => {
    // console.log(filterData)
    const filterdata = data.filter((val) => {
      if (searchval === "") {
        return data;
      } else if (val.user_id.toString().includes(searchval)) {
        return val;
      }
    });

    setSearchData(filterdata);
  };

  return (
    <>
      <h4
        style={{
          textAlign: "center",
        }}
      >
        Employee Table
      </h4>
      <br />
      <div
        style={{
          display: "flex",
        }}
      >
        <input
          type="text"
          placeholder="Search by user id"
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
          style={{
            width: "20%",
            height: "20px",
            borderRadius: "5px",
            border: "1px solid black",
            padding: "5px",
            marginLeft: "40%",
            marginBottom: "10px",
            display: "flex",
          }}
        />
        <button
          onClick={onSearch}
          style={{
            padding: "10px",
            fontWeight: 400,
            fontSize: "14px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "0",
            textAlign: "center",
            marginLeft: "1%",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "right",
            color: "#FFF",
            backgroundColor: "blue",
          }}
        >
          Search
        </button>
      </div>
      <div className="table-view">
        <table>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone No</th>
            <th>Role</th>
            <th>Asset</th>
          </tr>
          {searchdata.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.user_id}</td>
                <td>{val.name}</td>
                <td>{val.address}</td>
                <td>{val.phone_no}</td>
                <td>{val.role}</td>
                <td>{val.asset}</td>
              </tr>
            );
          })}
        </table>
      </div>

{
    searchdata.length === 1 ?

      <div>
        <h4
          style={{
            textAlign: "center",
          }}
        >
          Asset Table
        </h4>

        <div className="table-view">
          <table>
            <tr>
              <th>Item No</th>
              <th>Item Name</th>
              <th>Serial No</th>
              <th>Status</th>
            </tr>
            {searchdata?.map((val, key) => (
                val?.assets?.map((val1,key) => {
                    console.log(val1)

                    return (
                      <tr >
                        <td>{val1?.item_no}</td>
                        <td>{val1?.item_name}</td>
                        <td>{val1?.serial_no}</td>
                        <td>{val1?.status}</td>
                      </tr>
                    );
                })
            ))}
          </table>
        </div>
      </div>
      :""
}
    </>
  );
}
