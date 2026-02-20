import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Choices = () => {
    return (
        <div className="h-full grid place-items-center">
            <div className="relative space-y-2">
                <Card className="w-full max-w-xl">
                    <CardHeader className="">
                        <CardTitle className="flex items-center gap-3"><img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/62ecdc0d7ca5c6df32148c169556bc8d3782fca4/assets/World%20map/Color/world_map_color.svg" alt="Fluent World Map Icon" /><p className="">Let's explore our platforms </p></CardTitle>
                    </CardHeader>
                    <hr className="w-11/12 mx-auto -translate-y-2" />
                    <CardContent className="flex flex-col sm:flex-row gap-8">
                        <div className="space-y-2">
                            <CardDescription>Step out of your comfort Zone with <b>Your Mentor</b></CardDescription>

                            <Button type="button" className="cursor-pointer">Mentor App</Button>
                        </div>
                        <div className="space-y-2">
                            <CardDescription>Expand your knowledge with <b>Learning App</b></CardDescription>
                            <Button type="button" className="cursor-pointer">Learning App</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Choices;
