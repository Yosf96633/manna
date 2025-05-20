"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"; // Using ShadCN scroll-area [^1]
import {
  Trophy,
  Quote,
  Star,
  Medal,
  ThumbsUp,
  Coffee,
  Moon,
  Volume2,
  Instagram,
  Linkedin,
  Twitter,
  Play,
  Pause,
} from "lucide-react";
 const audioData = [
    { title: "mhhhhhhhhhhhh", src: "/v1.ogg" },
    { title: "Fine", src: "/v2.ogg" },
    { title: "Boys Issues", src: "/v3.ogg" },
  ];
export default function HallOfFame() {
  const [audioPlaying, setAudioPlaying] = useState<number | null>(null);
  const audioRefs = useRef<HTMLAudioElement[]>([]);
   const toggleAudio = (index: number) => {
    const currentAudio = audioRefs.current[index];

    if (!currentAudio) return;

    // Pause all others
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (audioPlaying === index) {
      currentAudio.pause();
      setAudioPlaying(null);
    } else {
      currentAudio.play();
      setAudioPlaying(index);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Manna Chummper
            </span>{" "}
            Hall of Fame
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground md:text-2xl"
          >
            Where memes are born and legends are roasted 🔥
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-80 sm:w-80 md:h-96 md:w-96">
              <Image
                src="/pand.jpg"
                alt="Friend's Portrait"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:from-pink-600 hover:to-violet-600"
            >
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              >
                Enter the World of Pandistan 🎭
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Legendary Moments Carousel */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Legendary Moments 📸
          </motion.h2>

          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div className="flex w-max space-x-6 p-4">
              {[
                { caption: "Weird smile", delay: 0.1, src: "/1.jpeg" },
                { caption: "Sleep Mode Activated", delay: 0.2, src: "/2.jfif" },
                { caption: "Feel unset", delay: 0.3, src: "/3.jfif" },
                { caption: "CEO of Pandistan", delay: 0.4, src: "/4.jfif" },
                {
                  caption: "Bought phone for personal usage",
                  delay: 0.5,
                  src: "/5.jfif",
                },
                { caption: "Suspicious Look", delay: 0.6, src: "/6.jfif" },
                { caption: "Unorderd lips", delay: 0.6, src: "/7.jfif" },
              ].map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: photo.delay }}
                  whileHover={{ y: -10 }}
                  className="shrink-0"
                >
                  <div className="overflow-hidden rounded-lg bg-muted">
                    <div className="relative h-[250px] w-[300px] sm:h-[300px] sm:w-[400px]">
                      <Image
                        src={`${photo.src}`}
                        alt={`Legendary Moment ${index + 1}`}
                        fill
                        className=" transition-transform hover:scale-105"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-center text-lg font-medium">
                    {photo.caption}
                  </p>
                </motion.div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* Famous Quotes Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Famous Quotes 💬
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {[
              { quote: "Translation ❌ Transaction ✔", delay: 0.1 },
              { quote: "Pasand ❌ Pand ✔", delay: 0.2 },
              {
                quote: "Kaka holy holy sab kuch anda",
                delay: 0.3,
              },
              {
                quote: "Tornado ❌ Trondo ✔",
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div key={index} variants={item} className="h-full">
                <Card className="h-full overflow-hidden border-none bg-white shadow-lg dark:bg-gray-800">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Quote className="h-8 w-8 text-pink-500" />
                      <Badge variant="outline" className="text-xs">
                        Wisdom #{index + 1}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-medium italic">{item.quote}</p>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">
                    — Overheard in{" "}
                    {
                      [
                        "Rahman pura",
                
                        "Bawli",
                        "Trondo",
                        "Australia jana",
                      ][index]
                    }
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Carousel */}

      {/* Audio Roast Section */}
       <section className="py-16 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          Audio Roasts 🎙️
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {audioData.map((audio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Volume2 className="h-5 w-5 text-pink-500" />
                    {audio.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 rounded-full"
                      onClick={() => toggleAudio(index)}
                    >
                      {audioPlaying === index ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </Button>
                    <audio
                      ref={(el) => (audioRefs.current[index] = el!)}
                      src={audio.src}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Fan Testimonials */}
     
      {/* Fake Wikipedia Bio */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Wikipedia Bio 📚
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="shrink-0">
                    <div className="relative h-32 w-32 overflow-hidden rounded-lg">
                      <Image
                        src="/pand.jpg"
                        alt="Wikipedia Profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Abdul Rehman</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Born: Sometime in the past • Occupation: Australia jana
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">
                    Early Failures (2001–Now)
                  </h3>
                  <p className="mt-2">
                    Manna — the man, the myth, the walking repair shop. From
                    fixing bikes, TVs, and solar panels to cooking daal and
                    unclogging your sink — this guy does it all. After acing FSc
                    Pre-Engineering (with “honors in chai-making”), he joined
                    Sahara College to continue his journey of confusing the
                    world with his endless talents and zero sleep.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold">Skills</h3>
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    <li>Procrastination — Level: Legendary</li>
                    <li>Snoring — Certified Sleep Machine™</li>
                    <li>Googling StackOverflow — Equivalent to 3 PhDs</li>
                    <li>Making Excuses — Undisputed World Champion</li>
                    <li>
                      Meme Selection — Emotionally Accurate 100% of the Time
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold">Legacy</h3>
                  <p className="mt-2">
                    Now on a mission to upgrade his CGPA by escaping Pakistan —
                    currently applying for study visas to Australia and the UK,
                    where he plans to repair microwaves and dreams… at the same
                    time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 text-center text-white">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg"
          >
            Made with 0% effort and 100% sarcasm by Yoshaaaaaaaaaaaa 😂
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex justify-center space-x-6"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram (banned)</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn (empty)</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter (suspended)</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex justify-center space-x-4"
          >
            {["😂", "🎉", "🏆", "💯", "🔥"].map((emoji, index) => (
              <motion.span
                key={index}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="text-2xl"
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
