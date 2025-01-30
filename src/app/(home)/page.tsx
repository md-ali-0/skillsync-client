import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BookOpen, Calendar, Star, Users } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Learn and Share Skills with SkillSync
                            </h1>
                            <p className="text-xl mb-6">
                                Connect with peers, teach what you know, and
                                learn something new.
                            </p>
                            <Button
                                size="lg"
                                className="bg-white text-primary hover:bg-gray-100"
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="https://bizantheme.com/html/eduna-demo/assets/img/images/th-1/hero-img-1.png"
                                alt="SkillSync Platform"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Why Choose SkillSync?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <BookOpen className="mr-2" />
                                    Diverse Skills
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Access a wide range of skills taught by
                                    experienced peers.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Users className="mr-2" />
                                    Community-Driven
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Join a vibrant community of learners and
                                    teachers.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Calendar className="mr-2" />
                                    Flexible Scheduling
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Book sessions that fit your schedule and
                                    learning pace.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Popular Skills Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Popular Skills
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Web Development",
                            "Digital Marketing",
                            "Graphic Design",
                            "Data Science",
                            "Language Learning",
                            "Music",
                            "Photography",
                            "Cooking",
                        ].map((skill) => (
                            <Button
                                key={skill}
                                variant="outline"
                                className="text-sm"
                            >
                                {skill}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        How SkillSync Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Create Your Profile
                            </h3>
                            <p className="text-gray-600">
                                Sign up and list the skills you can teach or
                                want to learn.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Connect with Peers
                            </h3>
                            <p className="text-gray-600">
                                Find teachers or students that match your
                                interests.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Start Learning
                            </h3>
                            <p className="text-gray-600">
                                Book sessions and begin your skill-sharing
                                journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        What Our Users Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Star className="text-yellow-400 mr-2" />
                                    <Star className="text-yellow-400 mr-2" />
                                    <Star className="text-yellow-400 mr-2" />
                                    <Star className="text-yellow-400 mr-2" />
                                    <Star className="text-yellow-400 mr-2" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    &quot;SkillSync has been a game-changer for
                                    my learning journey. I&apos;ve learned so
                                    much from talented peers!&quot;
                                </CardDescription>
                                <p className="mt-4 font-semibold">
                                    - Sarah K., Web Developer
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Star className="text-yellow-400 mr-2" />
                                    <Star className="text-yellow-400 mr-2" />
                                    <Star className="text-yellow-400 mr-2" />
                                    <Star className="text-yellow-400 mr-2" />
                                    <Star className="text-yellow-400 mr-2" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    &quot;Teaching on SkillSync has been
                                    incredibly rewarding. It&apos;s great to
                                    share my knowledge and help others
                                    grow.&quot;
                                </CardDescription>
                                <p className="mt-4 font-semibold">
                                    - Michael R., Graphic Designer
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Start Your Learning Journey?
                    </h2>
                    <p className="text-xl mb-8">
                        Join SkillSync today and unlock a world of peer-to-peer
                        learning opportunities.
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-gray-100"
                    >
                        Sign Up Now
                    </Button>
                </div>
            </section>
        </div>
    );
}
