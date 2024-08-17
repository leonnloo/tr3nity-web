import React from 'react';
import FundItem from './FundItem';
import { CartItem, Fund } from '@/types/interfaces';


interface CartGrantContainerProps {
    fund: Fund;
    cartItems: CartItem[];
    onUpdateCart: (fundId: string, projectId: string, amount: number) => void;
}

const CartGrantContainer: React.FC<CartGrantContainerProps> = ({ fund, cartItems, onUpdateCart }) => {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">{fund.name} | {fund.category}</h2>
            {fund.projects.map(project => (
                <FundItem
                    key={project.id}
                    project={project}
                    fundId={fund.id}
                    cartAmount={cartItems.find(item => item.projectId === project.id)?.amount || 0}
                    onUpdateCart={onUpdateCart}
                />
            ))}
            <div className="text-right mt-2">
                Total Donation: {cartItems.reduce((sum, item) => sum + item.amount, 0)} TR3
            </div>
        </div>
    );
};

export default CartGrantContainer;