
import React from 'react';

interface StatutesViewProps {
  onBack: () => void;
}

const StatutesView: React.FC<StatutesViewProps> = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-950 min-h-screen pt-24 pb-20 px-4 print:p-0 print:bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Barra de Controles */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 print:hidden">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary font-bold transition-colors"
          >
            <span className="material-icons-round">arrow_back</span>
            Volver al portal
          </button>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePrint}
              className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
            >
              <span className="material-icons-round">print</span>
              Imprimir / Guardar Estatutos
            </button>
          </div>
        </div>

        {/* Documento Estilo Papel */}
        <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-[1rem] p-10 md:p-20 border border-slate-200 dark:border-slate-800 print:shadow-none print:border-none print:rounded-none">
          
          {/* Encabezado Oficial */}
          <div className="text-center mb-16 border-b border-slate-100 dark:border-slate-800 pb-12">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">
              ESTATUTOS DE LA ASOCIACIÓN
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-tight">
              ASOCIACIÓN ARAGONESA DE INTELIGENCIA ARTIFICIAL
            </h2>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-12 text-slate-800 dark:text-slate-200 leading-relaxed font-serif md:text-[17px] text-justify">
            
            {/* CAPITULO I */}
            <section>
              <h3 className="text-center font-black uppercase text-xl mb-8">
                CAPITULO I<br/>
                <span className="text-base font-bold">Denominación, fines, domicilio y ámbito</span>
              </h3>
              
              <div className="space-y-6">
                <p><strong>Artículo 1.</strong> Conforme al artículo 22 de la Constitución y de acuerdo con el régimen jurídico de la Ley Orgánica 1/2002, de 22 de marzo, reguladora del Derecho de Asociación y normas complementarias, con capacidad jurídica y plena capacidad de obrar, y carente de ánimo de lucro, se constituye la asociación denominada <strong>ASOCIACIÓN ARAGONESA DE INTELIGENCIA ARTIFICIAL</strong>.</p>
                
                <p><strong>Artículo 2.</strong> Esta asociación se constituye por tiempo indefinido.</p>
                
                <p><strong>Artículo 3.</strong> La Asociación tiene como fines esenciales, de carácter no lucrativo, los siguientes:</p>
                <ol className="list-decimal pl-8 space-y-4">
                  <li><strong>Promoción de la formación y el aprendizaje continuo:</strong> Fomentar y facilitar la capacitación y el conocimiento especializado en el campo de la Inteligencia Artificial, sus aplicaciones, ética e implicaciones, mediante la organización de cursos, talleres, seminarios y jornadas dirigidas a profesionales y público en general.</li>
                  <li><strong>Atención a colectivos prioritarios:</strong> Prestar especial atención a la tercera edad, juventud y mujeres en todas las acciones de capacitación y sensibilización.</li>
                  <li><strong>Divulgación y concienciación social:</strong> Difundir el conocimiento sobre la Inteligencia Artificial, sus beneficios y riesgos, y sensibilizar a la sociedad aragonesa sobre la importancia de su desarrollo responsable y ético, organizando conferencias, mesas redondas y publicaciones.</li>
                  <li><strong>Investigación y colaboración:</strong> Promover, financiar y realizar proyectos de investigación no lucrativa relacionados con la IA, y servir como plataforma de encuentro y networking entre profesionales, investigadores y empresas del sector en Aragón.</li>
                  <li><strong>Asesoramiento técnico:</strong> Ofrecer asesoramiento experto y técnico a entidades públicas y privadas en la implementación y desarrollo de sistemas de Inteligencia Artificial.</li>
                  <li><strong>Transferencia de conocimiento y desarrollo territorial:</strong> Contribuir al desarrollo económico, social y tecnológico de Aragón mediante la transferencia de conocimiento, la promoción del talento local y el impulso de iniciativas vinculadas a la Inteligencia Artificial.</li>
                  <li><strong>Igualdad, inclusión y reducción de la brecha digital:</strong> Promover la igualdad de oportunidades en el acceso al conocimiento y uso de la Inteligencia Artificial, fomentando la inclusión digital, la reducción de la brecha digital y la participación activa de colectivos poco representados.</li>
                  <li><strong>Sostenibilidad y transición verde:</strong> Impulsar el uso de la Inteligencia Artificial como herramienta para la eficiencia energética, la economía circular y la lucha contra el cambio climático en el territorio aragonés.</li>
                  <li><strong>Cohesión territorial y lucha contra la despoblación:</strong> Promover la aplicación de la IA para generar nuevas oportunidades económicas y mejorar los servicios públicos en el medio rural de Aragón.</li>
                  <li><strong>Ética y gobernanza de datos:</strong> Velar por un desarrollo tecnológico alineado con el marco legal europeo y la protección de los derechos fundamentales de la ciudadanía.</li>
                </ol>

                <p><strong>Artículo 4.</strong> Para el cumplimiento de los fines estatutarios definidos en el Artículo 3, la Asociación Aragonesa de Inteligencia Artificial podrá desarrollar, con carácter enunciativo y no limitativo, las siguientes actividades:</p>
                
                <div className="pl-4 space-y-6">
                  <h4 className="font-bold underline">A. Ámbito formativo y de capacitación</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>La organización, promoción, desarrollo y gestión de actividades formativas no regladas, tales como cursos, talleres, seminarios, jornadas, bootcamps, programas de especialización y cualesquiera otras acciones formativas...</li>
                    <li>La promoción del aprendizaje continuo (lifelong learning), mediante programas de capacitación, actualización y reconversión profesional, adaptados a las necesidades del mercado laboral y del tejido social y económico de Aragón.</li>
                    <li>El diseño, elaboración y difusión de materiales didácticos, contenidos educativos y recursos formativos...</li>
                    <li>Impulsar programas de formación no reglada, incluyendo acciones de orientación, sensibilización y alfabetización digital en materia de Inteligencia Artificial...</li>
                  </ul>

                  <h4 className="font-bold underline">B. Ámbito de divulgación y concienciación social</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>La organización y realización de actividades de divulgación, sensibilización y concienciación social en materia de Inteligencia Artificial...</li>
                    <li>La elaboración, edición y difusión de estudios, informes, guías, podcast, vídeos, newsletters, artículos...</li>
                    <li>Colaborar con medios de comunicación para fomentar un debate público informado y riguroso sobre el desarrollo tecnológico.</li>
                  </ul>

                  <h4 className="font-bold underline">C. Ámbito de investigación, innovación y colaboración</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>La promoción, impulso, financiación y realización de proyectos de investigación, innovación y desarrollo de carácter no lucrativo...</li>
                    <li>La creación de espacios de encuentro, colaboración, cooperación y networking entre profesionales, investigadores, empresas...</li>
                    <li>La participación en proyectos, redes, consorcios, programas y convocatorias de ámbito autonómico, nacional o internacional...</li>
                  </ul>

                  <h4 className="font-bold underline">D. Ámbito de asesoramiento y apoyo técnico</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>La prestación de asesoramiento, orientación y apoyo técnico especializado en materia de Inteligencia Artificial a entidades públicas y privadas... siempre en el marco de los fines estatutarios y sin carácter lucrativo.</li>
                    <li>La realización de estudios, análisis, diagnósticos y recomendaciones técnicas relacionados con la adopción, implementación y uso responsable, ético y eficiente de sistemas de IA.</li>
                  </ul>
                </div>

                <p><strong>Artículo 5.</strong> El ámbito territorial en el que la asociación va a realizar principalmente sus actividades es <strong>AUTONÓMICO</strong> (Aragón).</p>
              </div>
            </section>

            {/* CAPITULO II */}
            <section className="pt-8">
              <h3 className="text-center font-black uppercase text-xl mb-8">
                CAPITULO II<br/>
                <span className="text-base font-bold">Órgano de representación</span>
              </h3>
              <div className="space-y-6">
                <p><strong>Artículo 6.</strong> La asociación será gestionada y representada por una Junta Directiva formada por los siguientes cargos: PRESIDENTE, SECRETARIO y TESORERO. Éstos serán designados y revocados por la Asamblea General Ordinaria y su mandato tendrá una duración de 4 años.</p>
                <p>Las personas integrantes de la Junta Directiva ejercerán su cargo <strong>DE MANERA GRATUITA</strong>. Se procurará que la composición de la Junta Directiva refleje una representación equilibrada entre hombres y mujeres, garantizando una proporción no inferior al 40% de cada sexo...</p>
                
                <p><strong>Artículo 10. Facultades de la Junta Directiva:</strong> Las facultades de la Junta Directiva se extenderán, con carácter general a todos los actos propios de las finalidades de la asociación, siempre que no requieran, según estos estatutos, autorización expresa de la Asamblea General.</p>
                <div className="pl-6 space-y-2">
                  <p>a) Dirigir las actividades sociales y llevar la gestión económica y administrativa de la asociación...</p>
                  <p>b) Ejecutar los acuerdos de la Asamblea General.</p>
                  <p>c) Formular y someter a la aprobación de la Asamblea General los Balances y las Cuentas anuales.</p>
                  <p>d) Resolver sobre la admisión de nuevas personas socias.</p>
                  <p>h) Acordar la creación de un Comité Consultivo de Ética en Inteligencia Artificial... velando siempre por el respeto a los derechos humanos, la eliminación de sesgos algorítmicos y el cumplimiento del Reglamento de IA de la Unión Europea.</p>
                </div>
              </div>
            </section>

            {/* CAPITULO III */}
            <section className="pt-8">
              <h3 className="text-center font-black uppercase text-xl mb-8">
                CAPITULO III<br/>
                <span className="text-base font-bold">Asamblea General</span>
              </h3>
              <div className="space-y-6">
                <p><strong>Artículo 17.</strong> La Asamblea General es el órgano supremo de gobierno de la asociación y estará integrada por todas las personas socias.</p>
                <p><strong>Artículo 18.</strong> Las reuniones de la Asamblea General serán ordinarias y extraordinarias. La ordinaria se celebrará una vez al año dentro de los cuatro meses siguientes al cierre del ejercicio; las extraordinarias se celebrarán cuando las circunstancias lo aconsejen...</p>
              </div>
            </section>

            {/* CAPITULO IV */}
            <section className="pt-8">
              <h3 className="text-center font-black uppercase text-xl mb-8">
                CAPITULO IV<br/>
                <span className="text-base font-bold">Socios/as</span>
              </h3>
              <div className="space-y-6">
                <p><strong>Artículo 23.</strong> Podrán pertenecer a la asociación aquellas personas con capacidad de obrar que tengan interés en el desarrollo de los fines de la asociación.</p>
                <p><strong>Artículo 24.</strong> Dentro de la asociación existirán las siguientes clases de socios/as:</p>
                <ul className="list-disc pl-8 space-y-4">
                  <li><strong>Personas socias promotoras:</strong> quienes participen en el acto de constitución.</li>
                  <li><strong>Personas socias de número:</strong> quienes ingresen después de la constitución.</li>
                  <li><strong>Personas socias de honor:</strong> quienes por su prestigio o por haber contribuido de modo relevante al desarrollo de la asociación se hagan acreedores de la distinción.</li>
                  <li><strong>Personas socias protectoras:</strong> aquellas personas físicas o jurídicas que realicen una aportación económica especial destinada al sostenimiento de las actividades...</li>
                </ul>
              </div>
            </section>

            {/* CAPITULO V */}
            <section className="pt-8">
              <h3 className="text-center font-black uppercase text-xl mb-8">
                CAPITULO V<br/>
                <span className="text-base font-bold">Régimen de subvenciones públicas, control económico y buen gobierno</span>
              </h3>
              <div className="space-y-6 text-justify">
                <p><strong>Artículo 32. Capacidad para concurrir a subvenciones y ayudas públicas:</strong> La Asociación tiene plena capacidad jurídica para concurrir, solicitar, aceptar y gestionar subvenciones, ayudas públicas, convenios, encargos... ante administraciones públicas, y en particular ante la <strong>Administración de la Comunidad Autónoma de Aragón</strong>...</p>
                
                <p><strong>Artículo 34. Contabilidad y gestión económica de fondos públicos:</strong> La Asociación llevará una contabilidad ordenada y adecuada a su actividad... garantizando la trazabilidad, control y transparencia de los fondos públicos.</p>
                
                <p><strong>Artículo 38. Cumplimiento normativo y transparencia. ODS e Igualdad:</strong> La Asociación se compromete al cumplimiento de la normativa aplicable en materia de subvenciones públicas, transparencia, publicidad, protección de datos de carácter personal, igualdad y no discriminación. La Asociación incorpora y promueve activamente los Objetivos de Desarrollo Sostenible (ODS) de la Agenda 2030, con especial énfasis en los ODS 4 (Educación), 5 (Igualdad de Género), 9 (Innovación), 10 (Reducción de desigualdades), 11 (Ciudades y comunidades sostenibles), 13 (Acción por el clima) y 17 (Alianzas)...</p>
                
                <p><strong>Artículo 39. Transparencia activa y publicidad institucional:</strong> La Asociación desarrollará su actividad conforme a los principios de transparencia, acceso a la información pública y rendición de cuentas...</p>
              </div>
            </section>

            {/* CAPITULO VI */}
            <section className="pt-8">
              <h3 className="text-center font-black uppercase text-xl mb-8">
                CAPITULO VI<br/>
                <span className="text-base font-bold">Disolución</span>
              </h3>
              <div className="space-y-6">
                <p><strong>Artículo 40.</strong> Se disolverá voluntariamente cuando así lo acuerde la Asamblea General Extraordinaria, convocada al efecto, por la mayoría indicada en el artículo 20 de los presentes estatutos.</p>
                <p><strong>Artículo 41.</strong> En caso de disolución, se nombrará una comisión liquidadora la cual, una vez extinguidas las deudas, destinará el patrimonio resultante íntegramente a otras asociaciones, fundaciones o entidades sin ánimo de lucro... preferentemente radicadas en la Comunidad Autónoma de Aragón.</p>
              </div>
            </section>

            {/* DISPOSICIONES */}
            <div className="pt-16 space-y-8 border-t border-slate-100 dark:border-slate-800">
              <div className="text-center font-bold">
                <p className="uppercase mb-4">DISPOSICIÓN ADICIONAL</p>
                <p className="font-normal">En todo cuanto no esté previsto en los presentes estatutos se aplicará la vigente Ley Orgánica 1/2002, de 22 de marzo, reguladora del Derecho de Asociación, y las disposiciones complementarias.</p>
              </div>

              <div className="text-center pt-8">
                <p className="font-bold">En ZARAGOZA, a 02 de Enero de 2026</p>
                <p className="text-slate-400 mt-2 text-sm italic">(Firma de todas las personas promotoras)</p>
              </div>

              <div className="text-center pt-10 border-t border-slate-100 dark:border-slate-800">
                <p className="uppercase font-black text-xs tracking-widest text-slate-400 mb-4">DISPOSICIÓN FINAL ÚNICA:</p>
                <p className="font-bold mb-4">Reglamento de Régimen Interno</p>
                <p className="text-sm italic leading-relaxed px-10">La Asamblea General, a propuesta de la Junta Directiva, podrá aprobar un Reglamento de Régimen Interno que desarrolle los presentes Estatutos y regule las cuestiones de detalle relativas al funcionamiento interno, procedimientos operativos, comisiones de trabajo y cualesquiera otras materias no esenciales.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-8 text-center print:hidden">
          <p className="text-slate-400 text-xs mb-4">Documento generado fielmente del original para consulta pública.</p>
          <button 
            onClick={onBack}
            className="text-primary font-bold hover:underline flex items-center gap-2 mx-auto justify-center"
          >
            <span className="material-icons-round text-sm">west</span>
            Regresar al Sitio Principal
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatutesView;
