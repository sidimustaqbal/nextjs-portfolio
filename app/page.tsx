'use client'

import Image from 'next/image'
import { Github, Linkedin, Code, Server, Database, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: formData,
    })
    if (response.ok) {
      alert('Email sent successfully!')
    } else {
      alert('Failed to send email. Please try again.')
    }
  }

  const skills = [
    { name: 'PHP', level: 'Expert' },
    { name: 'HTML', level: 'Expert' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'MySQL', level: 'Advanced' },
    { name: 'Postgres', level: 'Intermediate' },
    { name: 'Linux', level: 'Advanced' },
    { name: 'Next.js', level: 'Intermediate' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200 text-sky-900">
      <header className="bg-gradient-to-r from-sky-700 to-indigo-800 text-white py-8 md:py-12 shadow-lg">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in-down">Muhammad Sidi Mustaqbal</h1>
          <p className="text-xl md:text-2xl animate-fade-in-up">Web Developer</p>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-8 md:py-16 max-w-6xl">
        <section id="about" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-indigo-800">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/img/headshot.png"
                alt="Muhammad Sidi Mustaqbal"
                width={320}
                height={320}
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-lg md:text-xl bg-white bg-opacity-70 p-6 md:p-8 rounded-lg shadow-md backdrop-blur-sm animate-fade-in max-w-2xl">
              As a seasoned web developer with a strong foundation in PHP and a growing expertise in modern JavaScript frameworks like Next.js, I bring a versatile skill set to every project. My experience spans from backend development to crafting responsive front-end interfaces, always with a focus on creating efficient, scalable, and user-friendly web applications.
            </p>
          </div>
        </section>

        <section id="skills" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-indigo-800">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={`bg-gradient-to-r from-sky-400 to-indigo-400 p-4 md:p-6 rounded-lg text-white text-center shadow-md transform hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-semibold text-lg md:text-xl">{skill.name}</h3>
                <p className="text-sm md:text-base mt-1">{skill.level}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-indigo-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { name: 'Queue Management System', description: 'Developed a system to efficiently manage and optimize queues in various settings.', icon: <Server className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" /> },
              { name: 'Presensi Online', description: 'Created an online attendance system for remote work environments.', icon: <Code className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" /> },
              { name: 'Electronic Mail App for Public Services', description: 'Designed and implemented an electronic mail application to streamline public service communications.', icon: <Database className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" /> },
              { name: 'Other Projects', description: 'Worked on various web applications, focusing on user experience and performance optimization.', icon: <Code className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" /> },
            ].map((project, index) => (
              <div 
                key={project.name} 
                className={`bg-white p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl md:text-2xl font-semibold ml-3">{project.name}</h3>
                </div>
                <p className="text-base md:text-lg">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-indigo-800">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="mb-6 text-lg md:text-xl">Feel free to reach out to me for collaborations or opportunities.</p>
              <div className="flex gap-4">
                <Button asChild className="bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 text-base md:text-lg py-2 md:py-3 px-4 md:px-6">
                  <a href="https://github.com/sidimustaqbal" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5 md:h-6 md:w-6" /> GitHub
                  </a>
                </Button>
                <Button asChild className="bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 text-base md:text-lg py-2 md:py-3 px-4 md:px-6">
                  <a href="https://www.linkedin.com/in/sidimustaqbal" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5 md:h-6 md:w-6" /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-white bg-opacity-70 p-6 md:p-8 rounded-lg shadow-md backdrop-blur-sm">
              <Input type="text" name="name" placeholder="Your Name" required className="text-base md:text-lg py-2 md:py-3" />
              <Input type="email" name="email" placeholder="Your Email" required className="text-base md:text-lg py-2 md:py-3" />
              <Input type="text" name="subject" placeholder="Subject" required className="text-base md:text-lg py-2 md:py-3" />
              <Textarea name="message" placeholder="Your Message" required className="min-h-[100px] md:min-h-[150px] text-base md:text-lg py-2 md:py-3" />
              <Button type="submit" className="w-full bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-base md:text-lg py-2 md:py-3">
                <Send className="mr-2 h-5 w-5 md:h-6 md:w-6" /> Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-sky-800 to-indigo-900 text-white py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-6xl">
          <p className="text-base md:text-lg">&copy; 2024 Muhammad Sidi Mustaqbal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}