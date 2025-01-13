import React from 'react';
import { Freelance } from '../types/types';

interface Props {
  freelance: Freelance;
  onDelete: (id: number) => void
}

const MyFreelanceCard: React.FC<Props> = ({ freelance, onDelete }) => {
  return (
    <div className="freelance-card">
      <h3>{freelance.name}</h3>
      <p>{freelance.description}</p>
      <small>Created: {new Date(freelance.created_at).toLocaleString()}</small>
      <button onClick={() => onDelete(freelance.id)}>Delete</button>
    </div>
  );
};

export default MyFreelanceCard;
