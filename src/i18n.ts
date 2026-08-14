export const languages = { en: 'EN', es: 'ES' } as const;
export type Lang = keyof typeof languages;

export const content = {
  en: {
    meta: {
      title: 'Diego Treviño — Software Engineer',
      description:
        'Software engineer, ex-Google. Planet-scale distributed systems, high-performance C++20, and full-stack products that ship.',
    },
    nav: { work: 'Work', about: 'About', experience: 'Experience', contact: 'Contact' },
    hero: {
      title: ['Diego', 'Treviño'],
      role: 'Software Engineer',
      lede:
        'I spent four years at Google keeping planet-scale systems fast, cheap, and boringly reliable. Now I build products end-to-end for the people who need them.',
      cta: 'See the work',
      ctaAlt: 'Get in touch',
      location: 'Available for work',
    },
    work: {
      kicker: 'Selected work',
      title: 'Things I built',
      items: [
        {
          name: 'Renovacreto',
          type: 'Product · Rails 8',
          year: '2026',
          summary:
            'Payroll and project-tracking platform for a construction company. Org hierarchy, lot-by-lot build progress and a payroll engine that handles reconciliation + auditing.',
          tags: ['Ruby on Rails 8', 'PostgreSQL', 'Hotwire', 'Kamal'],
          links: [],
        },
        {
          name: 'lab404.org',
          type: 'Design + build',
          year: '2026',
          summary:
            'Brand identity, design system, and site built for lab404, a design studio client. Design and front-end delivered end to end.',
          tags: ['Design', 'Front-end', 'Brand'],
          links: [{ label: 'lab404.org', href: 'https://lab404.org' }],
        },
        {
          name: 'Zanzibar / Core Data',
          type: 'Infrastructure · Google',
          year: '2021–2026',
          summary:
            'Google\'s global authorization system. Designed a serving strategy that cut storage cost 90% at 150M QPS, launched a C++20 bulk upload service moving billions of records a day, and led schema migration for petabytes across thousands of databases.',
          tags: ['C++20', 'Distributed systems', 'Spanner', 'SRE'],
          links: [],
        },
        {
          name: 'LLVM-Reduce',
          type: 'Open source',
          year: '2019',
          summary:
            'Re-architected LLVM\'s test-case reducer. The rewrite runs 10× faster and produces 3× smaller cases than Bugpoint; the community proposal behind it became the foundation for the tool that shipped.',
          tags: ['C++17', 'LLVM', 'Compilers'],
          links: [
            {
              label: 'Read the proposal',
              href: 'https://releases.llvm.org/14.0.0/docs/BugpointRedesign.html',
            },
            { label: 'LLVM Dev Meeting talk', href: 'https://www.youtube.com/watch?v=n1jDj7J9N8c' },
          ],
        },
      ],
    },
    about: {
      kicker: 'About',
      title: 'Systems person, product brain',
      body: [
        'I write critical software that matters.',
        'At Google, I owned services handling >300M queries per second (QPS). So every line needed to be thoroughly tested; otherwise things break and people notice. That mindset carried over to my product work.',
        'The company (whose payroll system I built): doesn\'t care about latency graphs, they care that the crew gets paid correctly and on time.',
        'These days I work independently, leaning hard on AI tooling to move at a pace that used to need a team. ',
        'Spanish native, English fluent, French conversational.',
      ],
      skills: {
        title: 'Toolkit',
        groups: [
          { label: 'Languages', items: ['C++20', 'Ruby', 'Python 3', 'JavaScript', 'SQL', 'Go'] },
          { label: 'Frameworks', items: ['Rails 8', 'Hotwire', 'Astro', 'LLVM'] },
          { label: 'Infra', items: ['PostgreSQL', 'Kubernetes', 'Docker', 'GCP', 'AWS', 'Kamal', 'gRPC', 'Bazel'] },
        ],
      },
    },
    experience: {
      kicker: 'Experience',
      title: 'The track record',
      items: [
        {
          role: 'Software Engineer',
          org: 'Independent',
          place: 'New York, NY',
          period: 'Feb 2026 — Present',
          icon: 'freelance',
          points: [
            'Built a payroll system in Ruby on Rails, leveraging Claude Code and GitHub Copilot to accelerate proficiency and automate end-to-end processes — delivered 10x productivity boost.',
            'Designed and built the brand, design system, and site for lab404, a design studio client.',
          ],
        },
        {
          role: 'Software Engineer',
          org: 'Google — Core Data',
          place: 'New York, NY',
          period: 'Sep 2021 — Jan 2026',
          icon: 'core',
          points: [
            'Designed a serving strategy for a globally distributed system at 150M QPS: 90% storage cost reduction, 99.99% availability, sub-50ms latency SLO.',
            'Launched a C++20 global bulk upload service processing billions of records daily, cutting client wait times 80%.',
            'Modernized a 200K+ LOC C++20 codebase; 20% faster builds and tests unblocked critical migrations.',
            'Led schema migration infrastructure for petabytes across thousands of databases with SLOs intact.',
            'Built automated rollback and recovery pipelines — data restoration went from hours to minutes.',
            'Deprecated a legacy sync system outright, ending recurring on-call incidents and improving startup reliability.',
            'Scoped and mentored an intern project that shipped an automated recovery tool and an AI-assisted library migration, both now in production.',
          ],
        },
        {
          role: 'Software Engineering Intern',
          org: 'Google — Developer Tools',
          place: 'Sunnyvale, CA',
          period: 'Summer 2019 & 2020',
          icon: 'tools',
          points: [
            'Created LLVM-Reduce, a C++17 test-case reducer running 10× faster with 3× smaller output than the legacy tool.',
            'Designed a high-throughput C++ bulk processing service adopted by hundreds of internal clients.',
            'Automated a brittle manual deletion workflow, taking large-scale client deletions from weeks to hours.',
          ],
        },
      ],
      education: {
        title: 'Education',
        degree: 'B.S. Computer Science & Technology Engineering',
        school: 'Tecnológico de Monterrey (ITESM)',
        detail: 'Monterrey, Nuevo León · Dec 2020',
      },
    },
    contact: {
      kicker: 'Contact',
      title: "Let's build something",
      body: 'Open to freelance work, contract engineering, and interesting full-time roles. Fastest way to reach me is email.',
      email: 'hola@diego.tf',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diegotrev/', icon: 'linkedin' },
        { label: 'GitHub', href: 'https://github.com/diegotf30', icon: 'github' },
        { label: 'Instagram', href: 'https://www.instagram.com/diegotf30/', icon: 'instagram' },
      ],
    },
  },

  es: {
    meta: {
      title: 'Diego Treviño — Ingeniero de Software',
      description:
        'Ingeniero de software, ex-Google. Sistemas distribuidos a escala planetaria, C++20 de alto rendimiento y productos completos que sí salen a producción.',
    },
    nav: { work: 'Proyectos', about: 'Perfil', experience: 'Experiencia', contact: 'Contacto' },
    hero: {
      title: ['Diego', 'Treviño'],
      role: 'Ingeniero de Software',
      lede:
        'Pasé cuatro años en Google manteniendo sistemas de escala planetaria rápidos, baratos y aburridamente confiables. Hoy construyo productos completos para quien los necesita.',
      cta: 'Ver proyectos',
      ctaAlt: 'Contáctame',
      location: 'Disponible para proyectos',
    },
    work: {
      kicker: 'Trabajo seleccionado',
      title: 'Lo que he construido',
      items: [
        {
          name: 'Renovacreto',
          type: 'Producto · Rails 8',
          year: '2026',
          summary:
            'Plataforma de nómina y seguimiento de obra para una constructora residencial mexicana. Jerarquía de cuadrillas, avance lote por lote y un motor de nómina que maneja CURP/RFC/NSS, topes fiscales y conciliación por centro de costos.',
          tags: ['Ruby on Rails 8', 'PostgreSQL', 'Hotwire', 'Kamal'],
          links: [],
        },
        {
          name: 'lab404.org',
          type: 'Diseño + desarrollo',
          year: '2025',
          summary:
            'Identidad de marca, sistema de diseño y sitio construidos para lab404, un estudio de diseño cliente. Diseño y front-end entregados de punta a punta.',
          tags: ['Diseño', 'Front-end', 'Marca'],
          links: [{ label: 'lab404.org', href: 'https://lab404.org' }],
        },
        {
          name: 'Zanzibar / Core Data',
          type: 'Infraestructura · Google',
          year: '2021–2026',
          summary:
            'El sistema global de autorización de Google. Diseñé una estrategia de serving que bajó 90% el costo de almacenamiento a 150M QPS, lancé un servicio C++20 de carga masiva que mueve miles de millones de registros al día y dirigí la migración de esquemas de petabytes en miles de bases de datos.',
          tags: ['C++20', 'Sistemas distribuidos', 'Spanner', 'SRE'],
          links: [],
        },
        {
          name: 'LLVM-Reduce',
          type: 'Código abierto',
          year: '2019',
          summary:
            'Rediseñé el reductor de casos de prueba de LLVM. La reescritura corre 10× más rápido y produce casos 3× más chicos que Bugpoint; la propuesta a la comunidad se volvió la base de la herramienta que hoy existe.',
          tags: ['C++17', 'LLVM', 'Compiladores'],
          links: [
            {
              label: 'Leer la propuesta',
              href: 'https://releases.llvm.org/14.0.0/docs/BugpointRedesign.html',
            },
            { label: 'Charla en LLVM Dev Meeting', href: 'https://www.youtube.com/watch?v=n1jDj7J9N8c' },
          ],
        },
      ],
    },
    about: {
      kicker: 'Perfil',
      title: 'Cabeza de sistemas, instinto de producto',
      body: [
        'Escribo software que tiene que aguantar. En Google Core Data fui dueño de servicios con 150M de consultas por segundo — donde un mal deploy es una nota de prensa y donde "hazlo 90% más barato" es un problema real de un trimestre con una respuesta real.',
        'Esa costumbre se me pasa al producto. Renovacreto es un sistema de nómina para una constructora en México: a nadie ahí le importan mis gráficas de latencia, les importa que la cuadrilla cobre bien el viernes. Misma disciplina, otro marcador.',
        'Hoy trabajo por mi cuenta, apoyándome fuerte en herramientas de IA para avanzar a un ritmo que antes pedía un equipo. Español nativo, inglés fluido, francés conversacional.',
      ],
      skills: {
        title: 'Herramientas',
        groups: [
          { label: 'Lenguajes', items: ['C++20', 'Ruby', 'Python 3', 'JavaScript', 'SQL', 'Go', 'Swift'] },
          { label: 'Frameworks', items: ['Rails 8', 'Hotwire', 'Astro', 'LLVM'] },
          { label: 'Infra', items: ['PostgreSQL', 'Kubernetes', 'Docker', 'GCP', 'AWS', 'Kamal', 'gRPC', 'Bazel'] },
        ],
      },
    },
    experience: {
      kicker: 'Experiencia',
      title: 'La trayectoria',
      items: [
        {
          role: 'Ingeniero de Software — Freelance',
          org: 'Independiente',
          place: 'Nueva York, NY',
          period: 'Feb 2026 — Presente',
          icon: 'freelance',
          points: [
            'Construí de punta a punta un sistema completo de nómina y seguimiento de obra en Ruby on Rails para un cliente constructor.',
            'Diseñé y construí la marca, el sistema de diseño y el sitio de lab404, un estudio de diseño cliente.',
            'Flujo intensivo con IA (Claude Code, Copilot) para una entrega ~10× más rápida trabajando solo.',
          ],
        },
        {
          role: 'Ingeniero de Software',
          org: 'Google — Core Data (Zanzibar)',
          place: 'Nueva York, NY',
          period: 'Sep 2021 — Ene 2026',
          icon: 'core',
          points: [
            'Diseñé la estrategia de serving de un sistema distribuido global a 150M QPS: 90% menos costo de almacenamiento, 99.99% de disponibilidad y SLO de latencia bajo 50ms.',
            'Lancé un servicio C++20 de carga masiva global que procesa miles de millones de registros al día, reduciendo 80% los tiempos de espera del cliente.',
            'Modernicé una base de código C++20 de 200K+ líneas; builds y pruebas 20% más rápidos desbloquearon migraciones críticas.',
            'Dirigí la infraestructura de migración de esquemas para petabytes en miles de bases de datos sin romper SLOs.',
            'Construí pipelines automáticos de rollback y recuperación — la restauración de datos pasó de horas a minutos.',
            'Deprecié por completo un sistema de sincronización heredado, eliminando incidentes recurrentes de on-call.',
            'Definí y mentoreé un proyecto de internado que entregó una herramienta de recuperación automática y una migración de biblioteca asistida por IA, ambas en producción.',
          ],
        },
        {
          role: 'Ingeniero de Software (Internado)',
          org: 'Google — Developer Tools',
          place: 'Sunnyvale, CA',
          period: 'Veranos 2019 y 2020',
          icon: 'tools',
          points: [
            'Creé LLVM-Reduce, un reductor de casos de prueba en C++17 10× más rápido y con salidas 3× más chicas que la herramienta anterior.',
            'Diseñé un servicio C++ de procesamiento masivo de alto throughput adoptado por cientos de clientes internos.',
            'Automaticé un flujo manual y frágil de borrado, llevando eliminaciones a gran escala de semanas a horas.',
          ],
        },
      ],
      education: {
        title: 'Educación',
        degree: 'Ing. en Ciencias Computacionales y Tecnologías',
        school: 'Tecnológico de Monterrey (ITESM)',
        detail: 'Monterrey, Nuevo León · Dic 2020',
      },
    },
    contact: {
      kicker: 'Contacto',
      title: 'Hagamos algo',
      body: 'Abierto a freelance, contratos de ingeniería y roles de tiempo completo interesantes. Lo más rápido es el correo.',
      email: 'hola@diego.tf',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diegotrev/', icon: 'linkedin' },
        { label: 'GitHub', href: 'https://github.com/diegotf30', icon: 'github' },
        { label: 'Instagram', href: 'https://www.instagram.com/diegotf30/', icon: 'instagram' },
      ],
    },
  },
} as const;
