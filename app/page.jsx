import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span>Desenvolvedor Front-End</span>
            <h1>
              Olá, eu sou <br />
              <span>Adauto Marques</span>
            </h1>
          </div>
          <div>Foto</div>
        </div>
      </div>
    </section>
  );
}
