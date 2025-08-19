import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"

function Typing({ strings, speed = 60, backSpeed = 40, loop = true }){
  const [text, setText] = useState("")
  const idxRef = useRef(0)
  const charRef = useRef(0)
  const forwardRef = useRef(true)
  useEffect(() => {
    let mounted = true
    function tick(){
      const str = strings[idxRef.current]
      if(forwardRef.current){
        charRef.current += 1
        setText(str.slice(0, charRef.current))
        if(charRef.current === str.length){
          forwardRef.current = false
          setTimeout(tick, 900)
          return
        }
      } else {
        charRef.current -= 1
        setText(str.slice(0, charRef.current))
        if(charRef.current === 0){
          forwardRef.current = true
          idxRef.current = (idxRef.current + 1) % strings.length
        }
      }
      if(mounted) setTimeout(tick, forwardRef.current ? speed : backSpeed)
    }
    tick()
    return () => { mounted = false }
  },[strings,speed,backSpeed,loop])
  return <span>{text}</span>
}

export default function Hero(){
  const particlesInit = async engine => { await loadSlim(engine) }
  const blobA = useRef(null)
  const blobB = useRef(null)

  useEffect(() => {
    gsap.from(".hero-title", { y: 40, opacity: 0, duration: 1, ease: "power3.out" })
    gsap.from(".hero-sub", { y: 20, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out" })
    gsap.to(blobA.current, { x: -40, y: 20, rotate:6, duration: 10, repeat:-1, yoyo:true, ease:"sine.inOut" })
    gsap.to(blobB.current, { x: 40, y: -20, rotate:-6, duration: 12, repeat:-1, yoyo:true, ease:"sine.inOut" })
  },[])

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
      <div className="absolute -left-40 top-[-10%] w-96 h-96 rounded-full bg-indigo-600/30 blur-3xl" ref={blobA} />
      <div className="absolute -right-40 bottom-[-10%] w-96 h-96 rounded-full bg-violet-600/30 blur-3xl" ref={blobB} />
      <Particles init={particlesInit} className="absolute inset-0 -z-10" options={{
        fpsLimit:60, detectRetina:true, background:{color:"transparent"}, particles:{
          number:{value:60,density:{enable:true,area:900}}, color:{value:["#7c3aed","#06b6d4","#34d399"]},
          links:{enable:true,opacity:0.08,distance:120}, move:{enable:true,speed:0.6}, opacity:{value:0.35}, size:{value:{min:0.5,max:2.4}}
        }, interactivity:{events:{onHover:{enable:true,mode:"repulse"},resize:true}, modes:{repulse:{distance:90,duration:0.4}}}
      }} />
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="hero-title text-4xl md:text-6xl font-extrabold text-white">Hi, I’m <span className="text-indigo-400">Arsh Rai</span></h1>
        <div className="hero-sub mt-4 text-xl md:text-2xl text-neutral-300">
          <Typing strings={["MERN Stack Developer","Frontend & Backend","Building Production Apps","Always Learning"]} speed={45} backSpeed={30} />
        </div>
        <p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-lg">MERN Stack Developer with hands-on projects in React, Node, Express and MongoDB. I build elegant, performant and accessible web apps.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="/projects" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-2xl text-white font-medium transition">View Projects <ArrowRight size={16}/></a>
          <a href="mailto:arshrai2364@gmail.com" className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 px-6 py-3 rounded-2xl text-white font-medium transition">Contact Me <Mail size={16}/></a>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <a href="https://github.com/arsh-kodr" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/6 hover:bg-white/12 transition"><Github size={20}/></a>
          <a href="https://www.linkedin.com/in/arsh-rai-9a3119249/" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/6 hover:bg-white/12 transition"><Linkedin size={20}/></a>
        </div>
      </div>
    </section>
  )
}
