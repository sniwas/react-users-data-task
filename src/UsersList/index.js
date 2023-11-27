import React, { useState, useEffect } from 'react';
import { List } from 'react-virtualized';
import "./style.css"
import Header from '../Header';

const UserList = ({ data }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [listHeight, setListHeight] = useState(250);

  const updateListHeight = () => {
    const screenWidth = window.innerWidth;
    const newHeight = screenWidth >= 720 ? 500 : 250;
    setListHeight(newHeight);
  };

  useEffect(() => {
    updateListHeight();
    window.addEventListener('resize', updateListHeight);
    return () => {
      window.removeEventListener('resize', updateListHeight);
    };
  }, []);
  const rowRenderer = ({ key, index, style }) => {
    const user = data[index];

    const isSelected = user === selectedUser;

    return (
      <div
        key={key}
        style={{
          ...style,
          cursor: 'pointer',
          backgroundColor: isSelected ? '#e0e0e0' : 'transparent', 
        }}
        onClick={() => setSelectedUser(user)}
      >
        <div>
        <div>{user.name}</div>
        <div>Age: {user.age}</div>
        <hr />
        </div>
      </div>
    );
  };

  const sidebarRenderer = () => {
    if (!selectedUser) {
      return null;
    }

    return (
      <div className='card-cointainer'>
        <div className='card'>
        <h2>User Information</h2>
        <div>
          <strong>ID:</strong> {selectedUser.id}
        </div>
        <div>
          <strong>Name:</strong> {selectedUser.name}
        </div>
        <div>
          <strong>Age:</strong> {selectedUser.age}
        </div>
        <div>
          <strong>Occupation:</strong> {selectedUser.occupation}
        </div>
        <div>
          <strong>Address:</strong> {selectedUser.address}, {selectedUser.country}
        </div>
        <br/>
        <div>
          <strong> -- Vehicle Details --</strong>
          <div>
          <strong>Make: </strong> {selectedUser.vehicle.make}
        </div> 
        <div>
          <strong>Name: </strong> {selectedUser.vehicle.name}
        </div>
        <div>
          <strong>Model: </strong> {selectedUser.vehicle.year}
        </div>
        <div>
          <strong>VIN:</strong> {selectedUser.vehicle.vin}
        </div>
        <div>
          <strong>Colour:</strong> {selectedUser.vehicle.color}
        </div>
        </div>

        </div>
      </div>
    );
  };

  return (
    <div style={{textAlign:"center"}}>
      <Header />
      <div style={{margin:"0px 30px"}}>
        <h1 style={{justifyContent:'center',display:"flex"}}>User  Details</h1>
        <div className='userdetails'>
          <div style={{ flex: '1'}}>
            <div style={{ display: 'flex', justifyContent: 'center', margin:"50px 0px" }}>
              <List
                width={300}
                height={listHeight}
                rowCount={data.length}
                rowHeight={50}
                rowRenderer={rowRenderer}
              />
            </div>
          </div>
          <div style={{ flex: '1' }}>{sidebarRenderer()}</div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
