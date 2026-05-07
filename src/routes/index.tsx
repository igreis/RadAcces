import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield, Smartphone, Users, Bell, KeyRound, Mail, Calendar,
  CheckCircle2, Sparkles, Lock, Zap, ArrowRight, Activity, Cpu, Radar, Fingerprint, Wifi, Plus
} from "lucide-react";
import screenLogin from "@/assets/login.png";
import screenHome from "@/assets/home.png";
import screenVisitors from "@/assets/visitante.png";
import screenCorrespondencia from "@/assets/correspondencia.png";
import SplineScene from "@/components/ui/spline";
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RADAccess — Controle de acesso residencial inteligente" },
      { name: "description", content: "Abra portões, convide visitantes e gerencie seu condomínio direto do celular. Tecnologia RADCOM para uma vida residencial mais segura e moderna." },
      { property: "og:title", content: "RADAccess — Acesso residencial na palma da mão" },
      { property: "og:description", content: "Controle remoto, convites de visitantes, correspondência e eventos. Tudo em um só app." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: KeyRound, title: "Abrir portões", desc: "Libere o acesso ao seu condomínio com um único toque, de onde estiver." },
  { icon: Mail, title: "Convidar visitantes", desc: "Envie convites digitais com data, validade e QR code de entrada." },
  { icon: Users, title: "Gestão de visitantes", desc: "Cadastre familiares, prestadores e amigos com permissões específicas." },
  { icon: Bell, title: "Correspondência", desc: "Receba notificações instantâneas quando chegar uma encomenda." },
  { icon: Calendar, title: "Eventos do condomínio", desc: "Acompanhe a agenda, reservas e comunicados em tempo real." },
  { icon: Shield, title: "Registro seguro", desc: "Histórico completo de visitas com autenticação e criptografia." },
];

function Landing() {

    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Global ambient mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-60"
        style={{ background: "var(--gradient-mesh)", filter: "blur(120px)" }}
      />
      <div className="fixed inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: "linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* NAV */}
      <header className="fixed top-4 inset-x-0 z-50 px-4">
        <div className="max-w-7xl mx-auto rounded-2xl backdrop-blur-2xl bg-background/40 border border-primary/20 hud-corners shadow-[var(--shadow-hud)]">
          <div className="px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 rounded-xl bg-[var(--gradient-primary)] grid place-items-center shadow-[var(--shadow-glow)]">
                <span className="font-black text-primary-foreground text-sm tracking-tighter">R</span>
                <div className="absolute inset-0 rounded-xl border border-primary-glow/60 animate-hud-pulse" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold tracking-tight text-sm">RADAccess</span>
                <span className="text-[10px] text-primary-glow/80 tracking-[0.2em] uppercase">v2.0 · online</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-muted-foreground tracking-wide uppercase">
              <a href="#features" className="hover:text-primary-glow transition">Sistemas</a>
              <a href="#preview" className="hover:text-primary-glow transition">Interface</a>
              <a href="#how" className="hover:text-primary-glow transition">Protocolo</a>
              <a href="#cta" className="hover:text-primary-glow transition">Deploy</a>
            </nav>
            <a href="#cta" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-[var(--gradient-primary)] text-primary-foreground hover:scale-105 transition-transform shadow-[var(--shadow-glow)]">
              Iniciar <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[var(--gradient-hero)]">

        {/* Spline 3D — fundo full screen */}
        <div className="absolute inset-0">
          <SplineScene style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Seu conteúdo por cima, se houver */}
        <div className="relative z-10 flex items-center min-h-screen">
          {/* texto, botões, etc */}
        </div>

      </section>

      {/* STATS */}
      <section className="relative border-y border-primary-glow/20 bg-card/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: "30+", l: "anos RADCOM", i: Cpu },
            { v: "1M+", l: "moradores", i: Users },
            { v: "24/7", l: "monitoramento", i: Radar },
            { v: "<1s", l: "resposta", i: Zap },
          ].map((s) => (
            <div key={s.l} className="relative text-center hud-corners py-2">
              <s.i className="mx-auto h-4 w-4 text-primary-glow/70 mb-2" />
              <div className="font-mono text-3xl md:text-5xl font-black text-gradient-primary">{s.v}</div>
              <div className="text-[10px] md:text-xs text-muted-foreground mt-1 uppercase tracking-[0.25em]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>



      {/* PREVIEW */}
      <section id="preview" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-60" />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, oklch(0.85 0.18 215 / 0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary-glow uppercase tracking-[0.3em] mb-4">
              <span className="h-px w-8 bg-primary-glow" /> Interface <span className="h-px w-8 bg-primary-glow" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              Desenhado como uma <span className="text-gradient-primary">cabine de comando</span>.
            </h2>
            <p className="text-muted-foreground text-lg">
              Cada toque com propósito. Cada tela com a clareza de uma HUD.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-4 items-end">

            {/* 01 — Identificação (anima com scroll) */}
            <div className="text-center">
              <div className="relative mb-6 group">
                <div className="absolute inset-0 mx-auto max-w-[260px]" />
                <img src={screenLogin} alt="Identificação" className="relative mx-auto max-w-[260px] group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
              <div className="font-mono text-[10px] text-primary-glow/70 uppercase tracking-[0.3em] mb-1">01 / 03</div>
              <h3 className="font-bold text-lg mb-1">Identificação</h3>
              <p className="text-sm text-muted-foreground">Autenticação multifator com biometria opcional.</p>
            </div>

            {/* 02 — Central */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="relative mb-6 group">
                <div className="absolute -inset-6 mx-auto max-w-[260px]" />
                <img src={screenHome} alt="Central" className="relative mx-auto max-w-[260px] group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
              <div className="font-mono text-[10px] text-primary-glow/70 uppercase tracking-[0.3em] mb-1">02 / 03</div>
              <h3 className="font-bold text-lg mb-1">Central</h3>
              <p className="text-sm text-muted-foreground">Tudo do condomínio acessível em um único toque.</p>
            </motion.div>

            {/* 03 — Vigilância */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6 group">
                <div className="absolute inset-0 mx-auto max-w-[260px]" />
                <img src={screenVisitors} alt="Vigilância" className="relative mx-auto max-w-[260px] group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
              <div className="font-mono text-[10px] text-primary-glow/70 uppercase tracking-[0.3em] mb-1">03 / 03</div>
              <h3 className="font-bold text-lg mb-1">Vigilância</h3>
              <p className="text-sm text-muted-foreground">Controle absoluto sobre quem entra e quando.</p>
            </motion.div>

          </div>
        </div>
      </section> 
      
      {/* HOW IT WORKS */}
      
      <section id="how" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-primary-glow uppercase tracking-[0.3em] mb-4">
                <span className="h-px w-8 bg-primary-glow" /> Protocolo de inicialização
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10">
                Três passos. <br /> <span className="text-gradient-primary">Zero atrito.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { n: "01", t: "Download", d: "Disponível para iOS e Android. Instalação em segundos." },
                  { n: "02", t: "Ativação", d: "Sua administradora autoriza o acesso à sua unidade." },
                  { n: "03", t: "Online", d: "Sistema totalmente operacional. Você no comando." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-5 group items-start p-4 rounded-xl border border-transparent hover:border-primary-glow/30 hover:bg-card/30 transition">
                    <div className="font-mono text-3xl font-black text-gradient-primary w-14 shrink-0">{s.n}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                        {s.t}
                        <span className="h-px flex-1 bg-gradient-to-r from-primary-glow/40 to-transparent" />
                      </h3>
                      <p className="text-muted-foreground text-sm">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-[var(--gradient-primary)] opacity-40 blur-3xl rounded-full animate-hud-pulse" />
              <div className="absolute -inset-4 rounded-3xl border border-primary-glow/20 animate-hud-rotate" style={{ animationDuration: "40s" }} />
              <div className="relative grid grid-cols-2 gap-4">
                <img src={screenCorrespondencia} alt="Convite" className="rounded-3xl border border-primary-glow/30 shadow-[var(--shadow-elegant)] translate-y-8" />
                <img src={screenCorrespondencia} alt="Visitantes" className="rounded-3xl border border-primary-glow/30 shadow-[var(--shadow-elegant)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-primary-glow/10 rounded-full blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(147,51,234,0.08),transparent_45%)]" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center space-y-4 mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary-glow/20 backdrop-blur-sm">
              <span className="text-sm text-primary-glow font-medium uppercase tracking-wider">• Módulos •</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
              <span className="text-foreground">Sistemas integrados em um só </span>
              <span className="bg-gradient-to-r from-primary-glow via-primary to-primary-glow bg-clip-text text-transparent">
                núcleo
              </span>
              <span className="text-foreground">.</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-3xl bg-black/20 shadow-2xl shadow-black/30 border border-primary-glow/15 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-glow/50 p-7"
              >
                {/* Index */}
                <div className="absolute top-3 right-3 font-mono text-[10px] text-primary-glow/50 tracking-widest">
                  {String(i + 1).padStart(3, "0")}
                </div>

                {/* Icon */}
                <div className="relative h-12 w-12 rounded-xl bg-primary/15 border border-primary-glow/40 grid place-items-center mb-5 group-hover:bg-[var(--gradient-primary)] group-hover:border-transparent transition shadow-[var(--shadow-hud)]">
                  <f.icon className="h-5 w-5 text-primary-glow group-hover:text-primary-foreground transition" />
                </div>

                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>

                {/* Bottom shine */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-glow/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary-glow/40 p-12 md:p-20 text-center hud-corners shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-primary)" }}>
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-primary-foreground/30 animate-hud-rotate" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-primary-foreground/20 animate-hud-rotate" style={{ animationDirection: "reverse" }} />
            <div className="relative inline-flex h-16 w-16 mx-auto mb-6 rounded-2xl bg-primary-foreground/15 backdrop-blur grid place-items-center border border-primary-foreground/30">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="relative text-4xl md:text-6xl font-black text-primary-foreground tracking-tighter mb-6 leading-[0.95]">
              Pronto para assumir <br /> o controle?
            </h2>
            <p className="relative text-primary-foreground/90 text-lg max-w-xl mx-auto mb-10">
              Inicialize o RADAccess e transforme o seu condomínio em um sistema inteligente.
            </p>
            <div className="relative flex flex-wrap justify-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-background text-foreground font-bold uppercase tracking-wider text-sm hover:scale-105 transition shadow-[var(--shadow-elegant)]">
                <Smartphone className="h-4 w-4" /> App Store
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-background text-foreground font-bold uppercase tracking-wider text-sm hover:scale-105 transition shadow-[var(--shadow-elegant)]">
                <Smartphone className="h-4 w-4" /> Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-primary-glow/20 py-10 backdrop-blur-xl bg-background/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-[var(--gradient-primary)] grid place-items-center">
              <span className="font-black text-primary-foreground text-xs">R</span>
            </div>
            <span>© {new Date().getFullYear()} RADCOM • RADAccess Residencial</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-glow transition">Privacidade</a>
            <a href="#" className="hover:text-primary-glow transition">Termos</a>
            <a href="#" className="hover:text-primary-glow transition">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
