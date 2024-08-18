'use client'
import React from "react";
import QuadraticSummaryCard from "@/components/cards/quadratic-summary-card";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const QuadraticFundingSummaryPage = () => {
    const data = {
        labels: ['Neuroplasticity', 'Nanoparticle', 'CRISPR'],
        datasets: [
            {
                label: 'Number of Contributors',
                data: [2, 4, 10],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Matched Funds (TR3)',
                data: [12500, 25000, 62500],
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 6,
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Contributors vs Matched Funds (Contributed Funds: 100 TR3)',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    };

    return (
        <div className="pm flex flex-col mt-10">
            <h1 className="font-extrabold text-4xl mb-8">Quadratic funding summary - 100,000 TR3 Matching Pool</h1>
            <div className="grid grid-cols-3 gap-6 space-x-10 h-full">
                <QuadraticSummaryCard title="Neuroplasticity in Alzheimer's Disease" description="A pioneering study exploring neuroplasticity mechanisms to develop novel therapeutic approaches for Alzheimer's disease patients." contributedFunds="100" matchedFunds="12500.00" numberOfContributers="2"></QuadraticSummaryCard>
                <QuadraticSummaryCard title="Nanoparticle Drug Delivery Systems" description="This project aims to develop advanced nanoparticle-based drug delivery systems for targeted cancer therapy, improving efficacy and reducing side effects." contributedFunds="100" matchedFunds="25000.00" numberOfContributers="4"></QuadraticSummaryCard>
                <QuadraticSummaryCard title="CRISPR Gene Therapy for Rare Diseases" description="A groundbreaking project focused on developing CRISPR-based gene therapies for rare genetic disorders, aiming to provide curative treatments for previously untreatable conditions." contributedFunds="100" matchedFunds="62500.00" numberOfContributers="10"></QuadraticSummaryCard>
            </div>
            <div className="flex flex-col mt-20 w-full">
                <h1 className="font-extrabold text-4xl mb-8">Graph visualisation</h1>
                <div className="w-full h-[800px]">
                    <Line options={options} data={data} />
                </div>
            </div>
        </div>
    );
};

export default QuadraticFundingSummaryPage;