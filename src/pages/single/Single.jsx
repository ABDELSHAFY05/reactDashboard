import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//import Chart from "../../components/chart/Chart";
//import List from "../../components/table/Table";
import { collection , getDocs } from 'firebase/firestore';
import React , {useState , useEffect,useContext} from 'react'
import {db} from "../../firebase"
import { UserContext } from "../../context/AuthContext";


function Single() {
  let {user} = useContext(UserContext)
    const [users,setUsers]=useState([]);
    const usersCollectionRef = collection(db , "users")
    useEffect(() =>{
      const getUsers = async ()=>{
        const data = await getDocs(usersCollectionRef);
        //console.log(JSON.stringify(data.docs.map((doc) => ({...doc.data(), id :doc.id }))))
        setUsers(data.docs.map((doc) => ({...doc.data(), id :doc.id })));

      }
      getUsers()
    },[])

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        {user != null && users.filter(u=>u.id===user.uid).map((u,k)=> (
      <div key={k}>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={u.img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{u.displayName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{u.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{u.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {u.address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{u.country}</span>
                </div>
              </div>
            </div>
           </div>
           </div>
           
      </div>
      ))}
    </div>
    </div>
    
    
    
  );
};

export default Single;