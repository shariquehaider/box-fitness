import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import MILKSHAKE from "../assets/milshake.jpg";

function Meal() {
  return (
    <>
    <Card>
        <CardHeader>
            <img src={MILKSHAKE} alt="MILKSHAKE" />
        </CardHeader>
        <CardContent>
            <CardDescription className="flex flex-col gap-2">
                <p>Milkshake (8 oz, made with whole milk and ice cream):</p>
                <div className="pl-2">
                    <p>Protein: 8g</p>
                    <p>Carbohydrates: 40g</p>
                    <p>Fat: 14g</p>
                    <p>Calories: 320</p>
                </div>
            </CardDescription>
        </CardContent>
    </Card>
    </>
  )
}

export default Meal