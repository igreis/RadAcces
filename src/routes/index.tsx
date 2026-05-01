import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield, Smartphone, Users, Bell, KeyRound, Mail, Calendar,
  ChevronRight, CheckCircle2, Sparkles, Lock, Zap, ArrowRight
} from "lucide-react";
import bannerImg from "@/assets/radaccess-banner.png";
import screenLogin from "@/assets/screen-login.png";
import screenHome from "@/assets/screen-home.png";
import screenVisitors from "@/assets/screen-visitors.png";
import screenInvite from "@/assets/screen-invite.png";

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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-[var(--gradient-primary)] grid place-items-center shadow-[var(--shadow-glow)]">
              <span className="font-black text-primary-foreground text-sm tracking-tighter">R</span>
            </div>
            <span className="font-bold tracking-tight">RADAccess</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Recursos</a>
            <a href="#preview" className="hover:text-foreground transition">App</a>
            <a href="#how" className="hover:text-foreground transition">Como funciona</a>
            <a href="#cta" className="hover:text-foreground transition">Baixar</a>
          </nav>
          <a href="#cta" className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full bg-[var(--gradient-primary)] text-primary-foreground hover:scale-105 transition-transform">
            Começar <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24" style={{ background: "var(--gradient-hero)" }}>
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />
        {/* glow orbs */}
        <div className="absolute top-20 -left-20 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary-glow mb-6">
              <Sparkles className="h-3.5 w-3.5" /> Tecnologia RADCOM • Residencial
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
              Seu condomínio
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                na palma da mão.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Abra portões, convide visitantes e gerencie a portaria — tudo a partir do
              celular, com a segurança de uma das maiores empresas de tecnologia residencial do Brasil.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--gradient-primary)] text-primary-foreground font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform">
                Baixar o app <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card/50 backdrop-blur hover:bg-card transition">
                Ver recursos
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Grátis para moradores</div>
              <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-accent" /> Criptografia ponta a ponta</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto w-[280px] md:w-[320px]">
              <div className="absolute -inset-10 bg-primary/30 blur-3xl rounded-full" />
              <motion.img
                src={screenHome}
                alt="App RADAccess - tela inicial"
                className="relative rounded-[2.5rem] shadow-[var(--shadow-elegant)] border border-border"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={screenInvite}
                alt="Convidar visitante"
                className="hidden md:block absolute -right-32 top-12 w-[220px] rounded-[2rem] shadow-[var(--shadow-elegant)] border border-border"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/50 bg-card/30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: "30+", l: "anos de RADCOM" },
            { v: "1M+", l: "moradores conectados" },
            { v: "24/7", l: "monitoramento" },
            { v: "<1s", l: "abertura de portão" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>{s.v}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-sm font-semibold text-primary-glow uppercase tracking-widest mb-3">Recursos</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Tudo que você precisa para um condomínio <span className="text-primary-glow">conectado</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative p-7 rounded-3xl border border-border bg-[var(--gradient-card)] backdrop-blur hover:border-primary/40 transition-all hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 grid place-items-center mb-5 group-hover:bg-[var(--gradient-primary)] group-hover:border-transparent transition">
                  <f.icon className="h-5 w-5 text-primary-glow group-hover:text-primary-foreground transition" />
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW */}
      <section id="preview" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-sm font-semibold text-primary-glow uppercase tracking-widest mb-3">O App</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Desenhado para o uso diário.
            </h2>
            <p className="text-muted-foreground text-lg">
              Interface limpa, navegação rápida e tudo o que importa a um toque de distância.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-4 items-end">
            {[
              { src: screenLogin, title: "Acesso seguro", desc: "Login protegido com biometria opcional." },
              { src: screenHome, title: "Painel principal", desc: "Acesso rápido a todas as funções do condomínio." },
              { src: screenVisitors, title: "Visitantes", desc: "Gerencie quem entra na sua unidade." },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full" />
                  <img src={s.src} alt={s.title} className="relative mx-auto rounded-[2rem] border border-border shadow-[var(--shadow-elegant)] max-w-[260px]" />
                </div>
                <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-primary-glow uppercase tracking-widest mb-3">Como funciona</div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                Três passos para a sua nova rotina.
              </h2>
              <div className="space-y-6">
                {[
                  { n: "01", t: "Baixe o app", d: "Disponível para iOS e Android, gratuito para moradores cadastrados." },
                  { n: "02", t: "Ative com sua portaria", d: "Sua administradora libera seu acesso em segundos." },
                  { n: "03", t: "Pronto para usar", d: "Abra portões, convide visitantes e receba notificações em tempo real." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-5 group">
                    <div className="text-3xl font-black text-primary-glow w-14 shrink-0">{s.n}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{s.t}</h3>
                      <p className="text-muted-foreground">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-[var(--gradient-primary)] opacity-30 blur-3xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                <img src={screenInvite} alt="Convite" className="rounded-3xl border border-border shadow-[var(--shadow-elegant)] translate-y-8" />
                <img src={screenVisitors} alt="Visitantes" className="rounded-3xl border border-border shadow-[var(--shadow-elegant)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-28 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/30 p-12 md:p-20 text-center" style={{ background: "var(--gradient-primary)" }}>
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <Zap className="relative mx-auto h-12 w-12 text-primary-foreground mb-6" />
            <h2 className="relative text-4xl md:text-6xl font-black text-primary-foreground tracking-tight mb-6">
              Pronto para acessar
              <br /> o futuro do seu lar?
            </h2>
            <p className="relative text-primary-foreground/90 text-lg max-w-xl mx-auto mb-10">
              Baixe agora o RADAccess e descubra como controlar tudo do seu condomínio é simples.
            </p>
            <div className="relative flex flex-wrap justify-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-background text-foreground font-semibold hover:scale-105 transition">
                <Smartphone className="h-4 w-4" /> App Store
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-background text-foreground font-semibold hover:scale-105 transition">
                <Smartphone className="h-4 w-4" /> Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-[var(--gradient-primary)] grid place-items-center">
              <span className="font-black text-primary-foreground text-xs">R</span>
            </div>
            <span>© {new Date().getFullYear()} RADCOM • RADAccess Residencial</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Privacidade</a>
            <a href="#" className="hover:text-foreground transition">Termos</a>
            <a href="#" className="hover:text-foreground transition">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
