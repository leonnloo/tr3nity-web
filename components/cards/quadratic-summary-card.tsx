import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface ProjectDetailsCardProps {
    title: string;
    description: string;
    contributedFunds: string;
    matchedFunds: string;
    numberOfContributers: string;
}

const QuadraticSummaryCard: React.FC<ProjectDetailsCardProps> = ({
    title,
    description: desctiption,
    contributedFunds,
    matchedFunds,
    numberOfContributers,
}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desctiption}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Contributed funds: <strong>{contributedFunds} TR3</strong> </p>
            </CardContent>
            <CardContent>
                <p>Matched Funds: <strong>{matchedFunds} TR3</strong></p>
            </CardContent>
            <CardContent>
                <p>No of contributors: <strong>{numberOfContributers}</strong></p>
            </CardContent>
        </Card>
    );
};

export default QuadraticSummaryCard;
