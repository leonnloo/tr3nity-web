import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import samepleImage from "@/public/sample-1.png";
import Link from "next/link";

interface CardProps {
  showDetails?: boolean;
}

const ProposalCard: React.FC<CardProps> = ({ showDetails = false }) => {
  return (
    <Link href={""}>
      <Card className="w-full max-w-md m-5">
        <Image
          src={samepleImage}
          width={300}
          height={200}
          alt="Research"
          className="h-48 w-full object-cover"
        />
        <CardHeader>
          <CardTitle>Early Detection of Gestational Diabetes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Researching non-invasive methods for the early detection of
            gestational diabetes to ensure healthier pregnancies.
          </p>
          {showDetails && (
            <>
              <Progress value={20} className="w-full mb-2" />
              <p className="text-sm text-gray-600">
                1000 TR3 ≈ 50,000 TR3 raised
              </p>
              <p className="text-sm text-gray-600">
                End date: <span className="font-semibold">02 JUL 2023</span>
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProposalCard;
