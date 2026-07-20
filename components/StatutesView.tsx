import React from 'react';
import { useLanguage } from './LanguageContext';

interface StatutesViewProps {
  onBack: () => void;
}

const StatutesView: React.FC<StatutesViewProps> = ({ onBack }) => {
  const { t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-950 min-h-screen pt-24 pb-20 px-4 print:p-0 print:bg-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Control Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 print:hidden">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary font-bold transition-colors"
          >
            <span className="material-icons-round">arrow_back</span>
            {t({
              es: "Volver al portal",
              en: "Back to portal",
              de: "Zurück zum Portal",
              fr: "Retour au portail",
              it: "Torna al portale",
              ro: "Înapoi la portal"
            })}
          </button>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePrint}
              className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
            >
              <span className="material-icons-round">print</span>
              {t({
                es: "Imprimir / Guardar Estatutos",
                en: "Print / Save Statutes",
                de: "Satzung drucken / speichern",
                fr: "Imprimer / Enregistrer les Statuts",
                it: "Stampa / Salva lo Statuto",
                ro: "Tipărește / Salvează Statutul"
              })}
            </button>
          </div>
        </div>

        {/* Paper Style Document */}
        <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-[1rem] p-10 md:p-20 border border-slate-200 dark:border-slate-800 print:shadow-none print:border-none print:rounded-none">
          
          {/* Official Header */}
          <div className="text-center mb-16 border-b border-slate-100 dark:border-slate-800 pb-12">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">
              {t({
                es: "ESTATUTOS DE LA ASOCIACIÓN",
                en: "STATUTES OF THE ASSOCIATION",
                de: "SATZUNG DES VEREINS",
                fr: "STATUTS DE L'ASSOCIATION",
                it: "STATUTO DELL'ASSOCIAZIONE",
                ro: "STATUTUL ASOCIAȚIEI"
              })}
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-tight">
              {t({
                es: "ASOCIACIÓN ARAGONESA DE INTELIGENCIA ARTIFICIAL",
                en: "ARAGONESE ASSOCIATION OF ARTIFICIAL INTELLIGENCE",
                de: "ARAGONESISCHE VEREINIGUNG FÜR KÜNSTLICHE INTELLIGENZ",
                fr: "ASSOCIATION ARAGONAISE D'INTELLIGENCE ARTIFICIELLE",
                it: "ASSOCIAZIONE ARAGONESE DI INTELLIGENZA ARTIFICIALE",
                ro: "ASOCIAȚIA ARAGONEZĂ DE INTELIGENȚĂ ARTIFICIALĂ"
              })}
            </h2>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-12 text-slate-800 dark:text-slate-200 leading-relaxed font-serif md:text-[17px] text-justify">
            
            {/* CAPITULO I */}
            <section>
              <h3 className="text-center font-black uppercase text-xl mb-8">
                {t({
                  es: "CAPÍTULO I",
                  en: "CHAPTER I",
                  de: "KAPITEL I",
                  fr: "CHAPITRE I",
                  it: "CAPITOLO I",
                  ro: "CAPITOLUL I"
                })}<br/>
                <span className="text-base font-bold">
                  {t({
                    es: "Denominación, fines, domicilio y ámbito",
                    en: "Name, Purposes, Address, and Scope",
                    de: "Name, Zweck, Sitz und Geltungsbereich",
                    fr: "Dénomination, buts, siège et champ d'application",
                    it: "Denominazione, scopi, sede e ambito",
                    ro: "Denumirea, scopurile, sediul și domeniul de aplicare"
                  })}
                </span>
              </h3>
              
              <div className="space-y-6">
                <p>
                  <strong>{t({ es: "Artículo 1.", en: "Article 1.", de: "Artikel 1.", fr: "Article 1.", it: "Articolo 1.", ro: "Articolul 1." })}</strong>{" "}
                  {t({
                    es: "Conforme al artículo 22 de la Constitución y de acuerdo con el régimen jurídico de la Ley Orgánica 1/2002, de 22 de marzo, reguladora del Derecho de Asociación y normas complementarias, con capacidad jurídica y plena capacidad de obrar, y carente de ánimo de lucro, se constituye la asociación denominada ASOCIACIÓN ARAGONESA DE INTELIGENCIA ARTIFICIAL.",
                    en: "In accordance with Article 22 of the Constitution and pursuant to the legal framework of Organic Law 1/2002, of March 22, regulating the Right of Association and complementary regulations, with legal capacity and full capacity to act, and lacking profit motives, the association named ARAGONESE ASSOCIATION OF ARTIFICIAL INTELLIGENCE is established.",
                    de: "In Übereinstimmung mit Artikel 22 der Verfassung und gemäß den rechtlichen Rahmenbedingungen des Organgesetzes 1/2002 vom 22. März zur Regelung des Vereinsrechts und ergänzenden Bestimmungen wird der gemeinnützige Verein mit eigener Rechtspersönlichkeit und voller Geschäftsfähigkeit unter dem Namen ARAGONESISCHE VEREINIGUNG FÜR KÜNSTLICHE INTELLIGENZ gegründet.",
                    fr: "Conformément à l'article 22 de la Constitution et selon le régime juridique de la loi organique 1/2002 du 22 mars, régissant le droit d'association et les dispositions complémentaires, dotée de la personnalité juridique et de la pleine capacité d'agir, et sans but lucratif, est constituée l'association dénommée ASSOCIATION ARAGONAISE D'INTELLIGENCE ARTIFICIELLE.",
                    it: "In conformità con l'articolo 22 della Costituzione e secondo il regime giuridico della Legge Organica 1/2002, del 22 marzo, che disciplina il Diritto di Associazione e le norme complementari, dotata di personalità giuridica e piena capacità di agire, e senza fini di lucro, si costituisce l'associazione denominata ASSOCIAZIONE ARAGONESE DI INTELLIGENZA ARTIFICIALE.",
                    ro: "În conformitate cu articolul 22 din Constituție și conform regimului juridic al Legii Organice 1/2002 din 22 martie, care reglementează Dreptul de Asociere și normele complementare, cu personalitate juridică și capacitate deplină de exercițiu, și fără scop lucrativ, se constituie asociația denumită ASOCIAȚIA ARAGONEZĂ DE INTELIGENȚĂ ARTIFICIALĂ."
                  })}
                </p>
                
                <p>
                  <strong>{t({ es: "Artículo 2.", en: "Article 2.", de: "Artikel 2.", fr: "Article 2.", it: "Articolo 2.", ro: "Articolul 2." })}</strong>{" "}
                  {t({
                    es: "Esta asociación se constituye por tiempo indefinido.",
                    en: "This association is established for an indefinite duration.",
                    de: "Dieser Verein wird auf unbestimmte Zeit gegründet.",
                    fr: "Cette association est constituée pour une durée indéterminée.",
                    it: "Questa associazione è costituita a tempo indeterminato.",
                    ro: "Această asociație este constituită pe o durată nedeterminată."
                  })}
                </p>
                
                <p>
                  <strong>{t({ es: "Artículo 3.", en: "Article 3.", de: "Artikel 3.", fr: "Article 3.", it: "Articolo 3.", ro: "Articolul 3." })}</strong>{" "}
                  {t({
                    es: "La Asociación tiene como fines esenciales, de carácter no lucrativo, los siguientes:",
                    en: "The Association has the following essential non-profit purposes:",
                    de: "Der Verein verfolgt die folgenden wesentlichen, gemeinnützigen Zwecke:",
                    fr: "L'Association a pour buts essentiels, à caractère non lucratif, les suivants :",
                    it: "L'Associazione ha come scopi essenziali, di natura non lucrativa, i seguenti:",
                    ro: "Asociația are ca scopuri esențiale, cu caracter neprofitabil, următoarele:"
                  })}
                </p>
                <ol className="list-decimal pl-8 space-y-4">
                  <li>
                    <strong>{t({ es: "Promoción de la formación:", en: "Promotion of training:", de: "Förderung der Aus- und Weiterbildung:", fr: "Promotion de la formation :", it: "Promozione della formazione:", ro: "Promovarea formării profesionale:" })}</strong>{" "}
                    {t({
                      es: "Fomentar y facilitar la capacitación y el conocimiento especializado en el campo de la Inteligencia Artificial mediante cursos, talleres y jornadas.",
                      en: "Promote and facilitate specialized training and knowledge in the field of Artificial Intelligence through courses, workshops, and seminars.",
                      de: "Förderung und Erleichterung von spezialisierter Ausbildung und Wissen im Bereich der Künstlichen Intelligenz durch Kurse, Workshops und Seminare.",
                      fr: "Favoriser et faciliter la formation et les connaissances spécialisées dans le domaine de l'Intelligence Artificielle via des cours, des ateliers et des séminaires.",
                      it: "Promuovere e facilitare la formazione e le conoscenze specializzate nel campo dell'Intelligenza Artificiale attraverso corsi, workshop e seminari.",
                      ro: "Promovarea și facilitarea instruirii și cunoștințelor de specialitate în domeniul Inteligenței Artificiale prin cursuri, ateliere și seminarii."
                    })}
                  </li>
                  <li>
                    <strong>{t({ es: "Colectivos prioritarios:", en: "Priority demographics:", de: "Prioritäre Zielgruppen:", fr: "Groupes prioritaires :", it: "Gruppi prioritari:", ro: "Grupuri prioritare:" })}</strong>{" "}
                    {t({
                      es: "Prestar especial atención a la tercera edad, juventud y mujeres en todas las acciones de capacitación y alfabetización digital.",
                      en: "Pay special attention to seniors, youth, and women in all digital literacy and training actions.",
                      de: "Besondere Berücksichtigung von Senioren, Jugendlichen und Frauen bei allen Maßnahmen zur digitalen Kompetenz und Ausbildung.",
                      fr: "Prêter une attention particulière aux seniors, aux jeunes et aux femmes dans toutes les actions d'alphabétisation numérique et de formation.",
                      it: "Prestare particolare attenzione agli anziani, ai giovani e alle donne in tutte le azioni di alfabetizzazione digitale e formazione.",
                      ro: "Acordarea unei atenții deosebite seniorilor, tineretului și femeilor în toate acțiunile de alfabetizare digitală și instruire."
                    })}
                  </li>
                  <li>
                    <strong>{t({ es: "Divulgación y ética:", en: "Dissemination and ethics:", de: "Verbreitung und Ethik:", fr: "Vulgarisation et éthique :", it: "Divulgazione ed etica:", ro: "Diseminare și etică:" })}</strong>{" "}
                    {t({
                      es: "Difundir el conocimiento sobre la IA, sus beneficios y riesgos, velando por un desarrollo tecnológico ético y alineado con la regulación europea.",
                      en: "Spread knowledge about AI, its benefits and risks, ensuring ethical technological development aligned with European regulations.",
                      de: "Verbreitung von Wissen über KI, deren Vorteile und Risiken, um eine ethische technologische Entwicklung im Einklang mit den europäischen Vorschriften zu gewährleisten.",
                      fr: "Diffuser les connaissances sur l'IA, ses avantages et ses risques, en veillant à un développement technologique éthique conforme aux réglementations européennes.",
                      it: "Diffondere la conoscenza sull'IA, i suoi vantaggi e rischi, garantendo uno sviluppo tecnologico etico in linea con le normative europee.",
                      ro: "Diseminarea cunoștințelor despre IA, beneficiile și riscurile acesteia, asigurând o dezvoltare tehnologică etică în conformitate cu reglementările europene."
                    })}
                  </li>
                </ol>

                <p>
                  <strong>{t({ es: "Artículo 5.", en: "Article 5.", de: "Artikel 5.", fr: "Article 5.", it: "Articolo 5.", ro: "Articolul 5." })}</strong>{" "}
                  {t({
                    es: "El ámbito territorial en el que la asociación va a realizar principalmente sus actividades es AUTONÓMICO (Aragón).",
                    en: "The territorial scope in which the association will mainly carry out its activities is REGIONAL (Aragon).",
                    de: "Der räumliche Geltungsbereich, in dem der Verein seine Aktivitäten hauptsächlich ausübt, ist REGIONAL (Aragonien).",
                    fr: "Le champ d'application territorial dans lequel l'association exercera principalement ses activités est RÉGIONAL (Aragon).",
                    it: "L'ambito territoriale in cui l'associazione svolgerà principalmente le sue attività è REGIONALE (Aragona).",
                    ro: "Domeniul teritorial în care asociația își va desfășura în principal activitățile este REGIONAL (Aragon)."
                  })}
                </p>
              </div>
            </section>

            {/* CAPITULO II */}
            <section className="pt-8">
              <h3 className="text-center font-black uppercase text-xl mb-8">
                {t({
                  es: "CAPÍTULO II",
                  en: "CHAPTER II",
                  de: "KAPITEL II",
                  fr: "CHAPITRE II",
                  it: "CAPITOLO II",
                  ro: "CAPITOLUL II"
                })}<br/>
                <span className="text-base font-bold">
                  {t({
                    es: "Órgano de representación",
                    en: "Governing Board",
                    de: "Vertretungsorgan",
                    fr: "Organe de représentation",
                    it: "Organo di rappresentanza",
                    ro: "Organul de reprezentare"
                  })}
                </span>
              </h3>
              <div className="space-y-6">
                <p>
                  <strong>{t({ es: "Artículo 6.", en: "Article 6.", de: "Artikel 6.", fr: "Article 6.", it: "Articolo 6.", ro: "Articolul 6." })}</strong>{" "}
                  {t({
                    es: "La asociación será gestionada por una Junta Directiva formada por los siguientes cargos: PRESIDENTE, SECRETARIO y TESORERO, elegidos democráticamente por un mandato de 4 años.",
                    en: "The association will be managed by a Board of Directors consisting of: PRESIDENT, SECRETARY, and TREASURER, democratically elected for a term of 4 years.",
                    de: "Der Verein wird von einem Vorstand geleitet, der aus folgenden Positionen besteht: PRÄSIDENT, SCHRIFTFÜHRER und SCHATZMEISTER, die für eine Amtszeit von 4 Jahren demokratisch gewählt werden.",
                    fr: "L'association sera gérée par un Conseil d'Administration composé des postes suivants : PRÉSIDENT, SECRÉTAIRE et TRÉSORIER, élus démocratiquement pour un mandat de 4 ans.",
                    it: "L'associazione sarà gestita da un Consiglio Direttivo composto da: PRESIDENTE, SEGRETARIO e TESORIERE, eletti democraticamente per un mandato di 4 anni.",
                    ro: "Asociația va fi gestionată de un Consiliu Director format din: PREȘEDINTE, SECRETAR și TREZORIER, aleși în mod democratic pentru un mandat de 4 ani."
                  })}
                </p>
                <p>
                  {t({
                    es: "Las personas integrantes de la Junta Directiva ejercerán su cargo DE MANERA GRATUITA y se procurará una representación equilibrada entre hombres y mujeres (proporción no inferior al 40%).",
                    en: "The members of the Board of Directors will exercise their duties FREE OF CHARGE, and balanced representation between men and women will be sought (proportion not less than 40%).",
                    de: "Die Mitglieder des Vorstands üben ihre Ämter UNENTGELTLICH aus; eine ausgewogene Vertretung von Männern und Frauen wird angestrebt (Anteil nicht weniger als 40 %).",
                    fr: "Les membres du Conseil d'Administration exerceront leurs fonctions GRATUITEMENT, et une représentation équilibrée entre hommes et femmes sera recherchée (proportion minimale de 40 %).",
                    it: "I membri del Consiglio Direttivo eserciteranno il loro mandato GRATUITAMENTE e si cercherà di garantire una rappresentanza equilibrata tra uomini e donne (proporzione non inferiore al 40%).",
                    ro: "Membrii Consiliului Director își vor exercita atribuțiile GRATUIT și se va urmări o reprezentare echilibrată între bărbați și femei (proporție de cel puțin 40%)."
                  })}
                </p>
              </div>
            </section>

            {/* CAPITULO III */}
            <section className="pt-8">
              <h3 className="text-center font-black uppercase text-xl mb-8">
                {t({
                  es: "CAPÍTULO III",
                  en: "CHAPTER III",
                  de: "KAPITEL III",
                  fr: "CHAPITRE III",
                  it: "CAPITOLO III",
                  ro: "CAPITOLUL III"
                })}<br/>
                <span className="text-base font-bold">
                  {t({
                    es: "Asamblea General",
                    en: "General Assembly",
                    de: "Mitgliederversammlung",
                    fr: "Assemblée Générale",
                    it: "Assemblea Generale",
                    ro: "Adunarea Generală"
                  })}
                </span>
              </h3>
              <div className="space-y-6">
                <p>
                  <strong>{t({ es: "Artículo 17.", en: "Article 17.", de: "Artikel 17.", fr: "Article 17.", it: "Articolo 17.", ro: "Articolul 17." })}</strong>{" "}
                  {t({
                    es: "La Asamblea General es el órgano supremo de gobierno de la asociación y estará integrada por todas las personas socias.",
                    en: "The General Assembly is the supreme governing body of the association and will be composed of all members.",
                    de: "Die Mitgliederversammlung ist das oberste Entscheidungsorgan des Vereins und setzt sich aus allen Mitgliedern zusammen.",
                    fr: "L'Assemblée Générale est l'organe suprême de l'association et est composée de tous los membres.",
                    it: "L'Assemblea Generale è l'organo supremo di governo dell'associazione ed è composta da tutti i soci.",
                    ro: "Adunarea Generală este organul suprem de conducere al asociației și este formată din toți membrii."
                  })}
                </p>
              </div>
            </section>

            {/* CAPITULO IV */}
            <section className="pt-8">
              <h3 className="text-center font-black uppercase text-xl mb-8">
                {t({
                  es: "CAPÍTULO IV",
                  en: "CHAPTER IV",
                  de: "KAPITEL IV",
                  fr: "CHAPITRE IV",
                  it: "CAPITOLO IV",
                  ro: "CAPITOLUL IV"
                })}<br/>
                <span className="text-base font-bold">
                  {t({
                    es: "Socios/as",
                    en: "Membership",
                    de: "Mitglieder",
                    fr: "Membres",
                    it: "Soci",
                    ro: "Membrii"
                  })}
                </span>
              </h3>
              <div className="space-y-6">
                <p>
                  {t({
                    es: "Dentro de la asociación existirán las siguientes clases de socios/as:",
                    en: "Within the association there will be the following classes of members:",
                    de: "Innerhalb des Vereins gibt es folgende Mitgliedschaftskategorien:",
                    fr: "Au sein de l'association, il existe les catégories de membres suivantes :",
                    it: "All'interno dell'associazione esisteranno le seguenti categorie di soci:",
                    ro: "În cadrul asociației vor exista următoarele categorii de membri:"
                  })}
                </p>
                <ul className="list-disc pl-8 space-y-4">
                  <li>
                    <strong>{t({ es: "Socios/as de Honor:", en: "Honorary Members:", de: "Ehrenmitglieder:", fr: "Membres d'Honneur :", it: "Soci d'Onore:", ro: "Membri de Onoare:" })}</strong>{" "}
                    {t({
                      es: "Quienes por su prestigio o por haber contribuido de modo relevante al desarrollo de la asociación se hagan acreedores de la distinción.",
                      en: "Those who, due to their prestige or significant contribution to the development of the association, earn this distinction.",
                      de: "Personen, die sich aufgrund ihres Ansehens oder ihres herausragenden Beitrags zur Entwicklung des Vereins diese Auszeichnung verdienen.",
                      fr: "Ceux qui, en raison de leur prestige ou de leur contribution importante au développement de l'association, méritent cette distinction.",
                      it: "Coloro che, per il loro prestigio o per aver contribuito in modo rilevante allo sviluppo dell'associazione, meritano tale distinzione.",
                      ro: "Cei care, prin prestigiul lor sau prin contribuția semnificativă la dezvoltarea asociației, merită această distincție."
                    })}
                  </li>
                  <li>
                    <strong>{t({ es: "Socios/as Protectores:", en: "Sponsoring Members:", de: "Fördermitglieder:", fr: "Membres Protecteurs :", it: "Soci Sostenitori:", ro: "Membri Susținători:" })}</strong>{" "}
                    {t({
                      es: "Aquellas personas físicas o jurídicas que realicen una aportación económica especial destinada al sostenimiento de las actividades.",
                      en: "Natural or legal persons who make a special financial contribution destined for the sustainability of activities.",
                      de: "Natürliche oder juristische Personen, die einen besonderen finanziellen Beitrag zur Unterstützung der Aktivitäten leisten.",
                      fr: "Personnes physiques ou morales qui apportent une contribution financière particulière destinée au soutien des activités.",
                      it: "Persone fisiche o giuridiche che forniscono un contributo finanziario speciale destinato a sostenere le attività.",
                      ro: "Persoane fizice sau juridice care oferă o contribuție financiară specială destinată susținerii activităților."
                    })}
                  </li>
                </ul>
              </div>
            </section>

            {/* CAPITULO V */}
            <section className="pt-8">
              <h3 className="text-center font-black uppercase text-xl mb-8">
                {t({
                  es: "CAPÍTULO V",
                  en: "CHAPTER V",
                  de: "KAPITEL V",
                  fr: "CHAPITRE V",
                  it: "CAPITOLO V",
                  ro: "CAPITOLUL V"
                })}<br/>
                <span className="text-base font-bold">
                  {t({
                    es: "Régimen de subvenciones públicas, control económico y buen gobierno",
                    en: "Public Subsidies, Economic Control, and Good Governance",
                    de: "Öffentliche Zuschüsse, Wirtschaftliche Kontrolle und Gute Führung",
                    fr: "Régime des subventions publiques, contrôle économique et bonne gouvernance",
                    it: "Regime delle sovvenzioni pubbliche, controllo economico e buon governo",
                    ro: "Regimul subvențiilor publice, controlul economic și buna guvernanță"
                  })}
                </span>
              </h3>
              <div className="space-y-6 text-justify">
                <p>
                  <strong>{t({ es: "Artículo 32.", en: "Article 32.", de: "Artikel 32.", fr: "Article 32.", it: "Articolo 32.", ro: "Articolul 32." })}</strong>{" "}
                  {t({
                    es: "La Asociación tiene plena capacidad jurídica para concurrir y gestionar subvenciones, ayudas públicas y convenios ante administraciones públicas, y en particular ante la Administración de la Comunidad Autónoma de Aragón.",
                    en: "The Association has full legal capacity to apply for and manage subsidies, public aid, and agreements before public administrations, particularly the Administration of the Autonomous Community of Aragon.",
                    de: "Der Verein besitzt die volle Rechtsfähigkeit, Zuschüsse, öffentliche Hilfen und Vereinbarungen bei öffentlichen Verwaltungen, insbesondere bei der Verwaltung der Autonomen Gemeinschaft Aragonien, zu beantragen und zu verwalten.",
                    fr: "L'Association a la pleine capacité juridique de solliciter et de gérer des subventions, des aides publiques et des conventions auprès des administrations publiques, et en particulier auprès de l'Administration de la Communauté Autonome d'Aragon.",
                    it: "L'Associazione ha piena capacità giuridica di richiedere e gestire sovvenzioni, aiuti pubblici e convenzioni presso le pubbliche amministrazioni, e in particolare presso l'Amministrazione della Comunità Autonoma dell'Aragona.",
                    ro: "Asociația are capacitate juridică deplină de a solicita și gestiona subvenții, ajutoare publice și acorduri în fața administrațiilor publice, în special în fața Administrației Comunității Autonome Aragon."
                  })}
                </p>
                
                <p>
                  <strong>{t({ es: "Artículo 38. ODS e Igualdad:", en: "Article 38. SDGs and Equality:", de: "Artikel 38. SDGs und Gleichstellung:", fr: "Article 38. ODD et Égalité :", it: "Articolo 38. SDG e Uguaglianza:", ro: "Articolul 38. ODD și Egalitate:" })}</strong>{" "}
                  {t({
                    es: "La Asociación incorpora y promueve activamente los Objetivos de Desarrollo Sostenible (ODS) de la Agenda 2030, con especial énfasis en el ODS 4 (Educación), 5 (Igualdad de Género), 9 (Innovación) y 10 (Reducción de desigualdades), garantizando la transparencia de fondos públicos mediante publicación activa.",
                    en: "The Association actively incorporates and promotes the Sustainable Development Goals (SDGs) of the 2030 Agenda, focusing on SDG 4 (Quality Education), 5 (Gender Equality), 9 (Industry, Innovation, and Infrastructure), and 10 (Reduced Inequalities), ensuring the transparency of public funds through active publication.",
                    de: "Der Verein integriert und fördert aktiv die Ziele für nachhaltige Entwicklung (SDGs) der Agenda 2030, mit besonderem Schwerpunkt auf SDG 4 (Bildung), 5 (Geschlechtergleichstellung), 9 (Innovation) und 10 (Weniger Ungleichheiten), um die Transparenz öffentlicher Mittel durch aktive Veröffentlichung zu gewährleisten.",
                    fr: "L'Association intègre et promeut activement les Objectifs de Développement Durable (ODD) de l'Agenda 2030, avec un accent particulier sur l'ODD 4 (Éducation), 5 (Égalité entre les sexes), 9 (Innovation) et 10 (Inégalités réduites), garantissant la transparence des fonds publics par une publication active.",
                    it: "L'Associazione recepisce e promuove attivamente gli Obiettivi di Sviluppo Sostenibile (SDG) dell'Agenda 2030, con particolare enfasi sugli SDG 4 (Istruzione), 5 (Uguaglianza di Genere), 9 (Innovazione) e 10 (Riduzione delle disuguaglianze), garantendo la trasparenza dei fondi pubblici attraverso la pubblicazione attiva.",
                    ro: "Asociația încorporează și promovează activ Obiectivele de Dezvoltare Durabilă (ODD) ale Agendei 2030, cu accent deosebit pe ODD 4 (Educație), 5 (Egalitate de Gen), 9 (Inovare) și 10 (Reducerea inegalităților), garantând transparența fondurilor publice prin publicare activă."
                  })}
                </p>
              </div>
            </section>

            {/* CAPITULO VI */}
            <section className="pt-8">
              <h3 className="text-center font-black uppercase text-xl mb-8">
                {t({
                  es: "CAPÍTULO VI",
                  en: "CHAPTER VI",
                  de: "KAPITEL VI",
                  fr: "CHAPITRE VI",
                  it: "CAPITOLO VI",
                  ro: "CAPITOLUL VI"
                })}<br/>
                <span className="text-base font-bold">
                  {t({
                    es: "Disolución",
                    en: "Dissolution",
                    de: "Auflösung",
                    fr: "Dissolution",
                    it: "Scioglimento",
                    ro: "Dizolvare"
                  })}
                </span>
              </h3>
              <div className="space-y-6">
                <p>
                  <strong>{t({ es: "Artículo 41.", en: "Article 41.", de: "Artikel 41.", fr: "Article 41.", it: "Articolo 41.", ro: "Articolul 41." })}</strong>{" "}
                  {t({
                    es: "En caso de disolución, el patrimonio resultante se destinará íntegramente a otras asociaciones o entidades sin ánimo de lucro, preferentemente radicadas en la Comunidad Autónoma de Aragón.",
                    en: "In case of dissolution, the remaining assets will be destined entirely to other non-profit associations or entities, preferably located in the Autonomous Community of Aragon.",
                    de: "Im Falle der Auflösung wird das verbleibende Vermögen vollständig an andere gemeinnützige Vereine oder Einrichtungen übertragen, die vorzugsweise ihren Sitz in der Autonomen Gemeinschaft Aragonien haben.",
                    fr: "En cas de dissolution, l'actif net subsistant sera entièrement attribué à d'autres associations ou entités sans but lucratif, de préférence établies dans la Communauté Autonome d'Aragon.",
                    it: "In caso di scioglimento, il patrimonio residuo sarà devoluto interamente ad altre associazioni o enti senza fini di lucro, preferibilmente con sede nella Comunità Autonoma dell'Aragona.",
                    ro: "În caz de dizolvare, patrimoniul rezultat va fi direcționat integral către alte asociații sau entități fără scop lucrativ, de preferință cu sediul în Comunitatea Autonomă Aragon."
                  })}
                </p>
              </div>
            </section>

            {/* PROVISIONS */}
            <div className="pt-16 space-y-8 border-t border-slate-100 dark:border-slate-800">
              <div className="text-center font-bold">
                <p className="uppercase mb-4">
                  {t({
                    es: "DISPOSICIÓN ADICIONAL",
                    en: "ADDITIONAL PROVISION",
                    de: "ZUSATZBESTIMMUNG",
                    fr: "DISPOSITION ADDITIONNELLE",
                    it: "DISPOSIZIONE ADDIZIONALE",
                    ro: "DISPOZIȚIE ADIȚIONALĂ"
                  })}
                </p>
                <p className="font-normal text-slate-600 dark:text-slate-400">
                  {t({
                    es: "En todo cuanto no esté previsto en los presentes estatutos se aplicará la vigente Ley Orgánica 1/2002, de 22 de marzo, reguladora del Derecho de Asociación, y las disposiciones complementarias.",
                    en: "In everything not provided for in these statutes, the current Organic Law 1/2002, of March 22, regulating the Right of Association, and complementary provisions shall apply.",
                    de: "In allen Angelegenheiten, die in dieser Satzung nicht geregelt sind, gilt das geltende Organgesetz 1/2002 vom 22. März zur Regelung des Vereinsrechts sowie die ergänzenden Bestimmungen.",
                    fr: "Pour tout ce qui n'est pas prévu par les présents statuts, la loi organique 1/2002 du 22 mars régissant le droit d'association et les dispositions complémentaires s'appliqueront.",
                    it: "Per tutto quanto non previsto dal presente statuto, si applicherà la vigente Legge Organica 1/2002, del 22 marzo, che disciplina il Diritto di Associazione, e le disposizioni complementari.",
                    ro: "Pentru tot ceea ce nu este prevăzut în prezentul statut, se va aplica Legea Organică în vigoare 1/2002 din 22 martie, care reglementează Dreptul de Asociere, și dispozițiile complementare."
                  })}
                </p>
              </div>

              <div className="text-center pt-8">
                <p className="font-bold">
                  {t({
                    es: "En ZARAGOZA, a 02 de Enero de 2026",
                    en: "In ZARAGOZA, on January 2, 2026",
                    de: "In ZARAGOZA, am 2. Januar 2026",
                    fr: "À SARAGOSSE, le 2 janvier 2026",
                    it: "In SARAGOZZA, il 2 Gennaio 2026",
                    ro: "În ZARAGOZA, la 2 Ianuarie 2026"
                  })}
                </p>
                <p className="text-slate-400 mt-2 text-sm italic">
                  {t({
                    es: "(Firma de todas las personas promotoras)",
                    en: "(Signature of all promoting members)",
                    de: "(Unterschrift aller Gründungsmitglieder)",
                    fr: "(Signature de tous les membres fondateurs)",
                    it: "(Firma di tutti i membri promotori)",
                    ro: "(Semnătura tuturor membrilor fondatori)"
                  })}
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-8 text-center print:hidden">
          <p className="text-slate-400 text-xs mb-4">
            {t({
              es: "Documento generado fielmente del original para consulta pública.",
              en: "Document faithfully generated from the original for public consultation.",
              de: "Dokument getreu dem Original für die öffentliche Einsichtnahme erstellt.",
              fr: "Document fidèlement généré à partir de l'original pour consultation publique.",
              it: "Documento generato fedelmente dall'originale per la consultazione pubblica.",
              ro: "Document generat cu fidelitate din original pentru consultare publică."
            })}
          </p>
          <button 
            onClick={onBack}
            className="text-primary font-bold hover:underline flex items-center gap-2 mx-auto justify-center"
          >
            <span className="material-icons-round text-sm">west</span>
            {t({
              es: "Regresar al Sitio Principal",
              en: "Return to Main Site",
              de: "Zurück zur Hauptseite",
              fr: "Retourner au Site Principal",
              it: "Torna al Sito Principale",
              ro: "Înapoi la Site-ul Principal"
            })}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatutesView;
