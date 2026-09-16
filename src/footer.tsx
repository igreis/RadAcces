import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import logo from '../src/assets/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-primary/20 bg-card/30 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex flex-col leading-none max-w-[160px]">
                            <a href="#hero">
                                <img src={logo} />
                            </a>

                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Desenvolvendo o futuro digital com tecnologia de ponta e inovação contínua.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Serviços</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Desenvolvimento Web
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Aplicativos Mobile
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Soluções Cloud
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Consultoria Tech
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Empresa</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#features" className="hover:text-primary transition-colors">
                                    Funcionalidades
                                </a>
                            </li>
                            <li>
                                <a href="#integracoes" className="hover:text-primary transition-colors">
                                    Integrações
                                </a>
                            </li>
                            <li>
                                <a href="#publico" className="hover:text-primary transition-colors">
                                    Público 
                                </a>
                            </li>
                            <li>
                                <a href="#how" className="hover:text-primary transition-colors">
                                    Diferenciais 
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Contatos</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="tel:+5534992318655" className="hover:text-primary transition-colors">
                                    +55 (34) 99231-8655
                                </a>
                            </li>
                            <li>
                                <a href="tel:+5534998380404" className="hover:text-primary transition-colors">
                                    +55 (34) 99838-0404
                                </a>
                            </li>
                            <li>
                                <a href="tel:+553430100101" className="hover:text-primary transition-colors">
                                    +55 (34) 3010-0101
                                </a>
                            </li>
                            <li className="mt-2">
                                <a href="mailto:contato@m3uzz.com" className="hover:text-primary transition-colors">
                                    sintac@m3uzz.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Redes Sociais</h3>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/company/m3uzz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all"
                            >
                                <FaLinkedin className="w-5 h-5 text-primary" />
                            </a>
                            <a
                                href="https://www.facebook.com/share/1BvhSvyaGd/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all"
                            >
                                <FaFacebook className="w-5 h-5 text-primary" />
                            </a>
                            <a
                                href="https://www.instagram.com/m3_sintac?igsi=MTZrMWl1bGUxMWtiMg=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all"
                            >
                                <FaInstagram className="w-5 h-5 text-primary" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-primary/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        <p>
                            © {currentYear} Sintac. Todos os direitos reservados.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-primary transition-colors">
                                Política de Privacidade
                            </a>
                            <a href="#" className="hover:text-primary transition-colors">
                                Termos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
