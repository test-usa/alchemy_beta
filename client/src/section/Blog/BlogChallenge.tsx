import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function BlogChallenge() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4 w-full">
                <input type="text" placeholder="Search" className="border rounded-md p-2 w-full sm:w-1/3" />
                <Button className="bg-primary text-white w-full sm:w-auto" onClick={() => setIsOpen(true)}>
                    Create a Challenge
                </Button>
            </div>

            {/* Fitness Posts */}
            {[1, 2, 3].map((post, index) => (
                <div key={index} className="w-full mb-16">
                    <div className="w-full h-[300px] sm:h-[400px] lg:h-[512px]">
                        <img className="w-full h-full object-cover rounded-md" src="https://plus.unsplash.com/premium_photo-1674059549794-20e75cb6dc45?mark=https://images.unsplash.com/opengraph/logo.png&mark-w=64&mark-align=top,left&mark-pad=50&h=630&w=1200&crop=faces,edges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM3MTIzOTUyfA&ixlib=rb-4.0.3" alt="Post" />
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <img className="w-8 h-8 rounded-full" src="https://plus.unsplash.com/premium_photo-1674059549794-20e75cb6dc45?mark=https://images.unsplash.com/opengraph/logo.png&mark-w=64&mark-align=top,left&mark-pad=50&h=630&w=1200&crop=faces,edges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzM3MTIzOTUyfA&ixlib=rb-4.0.3" alt="User" />
                        <p className="text-gray-800 font-medium">Ricky Smith</p>
                    </div>
                    <div className="mt-4 space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold">FitLife Chronicles</h2>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Your go-to hub for fitness tips, success stories, and expert advice. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <Button variant="outline" className="mt-2 w-full sm:w-auto">Comment</Button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Comment Section */}
            <div className="mb-8 w-full">
                <Label htmlFor="message">Your Comments</Label>
                <Textarea placeholder="Type your message here." id="message" className="w-full" />
                <Button variant="default" className="mt-2 w-full sm:w-auto">Submit</Button>
            </div>

            {/* Challenge Form Modal */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-md sm:max-w-xl md:max-w-2xl w-full mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg z-40 transform transition-all duration-300 ease-in-out">
                    <DialogHeader>
                        <DialogTitle className="text-center text-lg sm:text-xl font-semibold">Create a Challenge</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 sm:space-y-5">
                        <Label>Challenge Name</Label>
                        <Input placeholder="Type here" className="text-sm sm:text-base" />

                        <Label>Time</Label>
                        <Input placeholder="Type here" className="text-sm sm:text-base" />

                        <Label>Calories (Kcal)</Label>
                        <Input placeholder="Type here" className="text-sm sm:text-base" />

                        <Label>Upload Image</Label>
                        <Input type="file" className="text-sm sm:text-base" />
                    </div>
                    <DialogFooter className="flex flex-col sm:flex-row gap-2">
                        <Button variant="ghost" onClick={() => setIsOpen(false)} className="w-full sm:w-auto">Cancel</Button>
                        <Button className="bg-primary text-white w-full sm:w-auto">Post Challenge</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}