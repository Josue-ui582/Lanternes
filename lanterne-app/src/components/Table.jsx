import React from 'react'
import { FaRegSquarePlus } from "react-icons/fa6";
import {Table } from 'antd';

const columns = [
    {
      title: 'Nom',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <small>{text}</small>,
    },
    {
      title: 'Prenom',
      dataIndex: 'prenom',
      key: 'prenom',
    },
    {
      title: 'Motif',
      dataIndex: 'motif',
      key: 'motif',
    }
  ];

  const data = [
    {
      key: '1',
      name: 'John',
      prenom: 'Doe',
      motif: 'C001-LTE'
    },
    {
      key: '2',
      name: 'John',
      prenom: 'Doe',
      motif: 'C001-LTE'
    },
    {
      key: '3',
      name: 'John',
      prenom: 'Doe',
      motif: 'C001-LTE'
    },
  ];
  


function Tables() {
  return (
    <div>
        <div className='flex gap-10 mt-[50px] ml-[15px] liste'>
            <p>Liste Noire</p>
            <FaRegSquarePlus className='icon' />
        </div>
        <Table columns={columns} dataSource={data} className='mt-[10px] ml-[15px] rounded-lg h-[20px]' />
    </div>
  )
}

export default Tables