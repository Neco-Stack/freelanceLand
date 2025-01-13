import React from 'react';
import { Freelance } from '../types/types';
import MyFreelanceCard from './MyFreelanceCard';

interface Props {
  freelances: Freelance[];
  onDelete: (id:number) => void; 
}

const MyFreelanceList: React.FC<Props> = ({ freelances, onDelete }) => {
  return (
    <div className="freelance-list">
      {freelances.map((freelance) => (
        <MyFreelanceCard key={freelance.id} freelance={freelance} onDelete={onDelete}/>
      ))}
    </div>
  );
};

export default MyFreelanceList;
