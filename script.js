const detailData = {
  "perpustakaan": {
    icon: "📚",
    title: "Perpustakaan",
    desc: "Perpustakaan sekolah menyediakan ruang baca yang nyaman dan koleksi bacaan yang mendukung kegiatan belajar siswa di luar jam kelas.",
    points: [
      "Koleksi buku pelajaran, referensi, dan bacaan umum",
      "Ruang baca yang tenang dan nyaman",
      "Dikelola untuk mendukung tugas dan literasi siswa",
      "Terbuka setiap hari sekolah aktif"
    ]
  },
  "lab-komputer": {
    icon: "💻",
    title: "Laboratorium Komputer",
    desc: "Laboratorium komputer digunakan untuk pembelajaran informatika serta pengenalan teknologi digital bagi siswa.",
    points: [
      "Unit komputer untuk praktik siswa",
      "Mendukung mata pelajaran Informatika/TIK",
      "Digunakan untuk pelatihan dan kegiatan ekstrakurikuler IT",
      "Akses internet untuk kebutuhan pembelajaran"
    ]
  },
  "lab-ipa": {
    icon: "🔬",
    title: "Laboratorium IPA",
    desc: "Laboratorium IPA menjadi tempat siswa melakukan praktikum untuk memperdalam pemahaman konsep sains secara langsung.",
    points: [
      "Digunakan untuk praktikum Fisika, Kimia, dan Biologi",
      "Dilengkapi alat dan bahan peraga dasar",
      "Mendukung pembelajaran berbasis eksperimen",
      "Didampingi guru mata pelajaran IPA"
    ]
  },
  "lapangan": {
    icon: "⚽",
    title: "Lapangan Olahraga",
    desc: "Lapangan olahraga digunakan untuk kegiatan pendidikan jasmani, upacara, dan berbagai aktivitas siswa di luar ruangan.",
    points: [
      "Digunakan untuk mata pelajaran PJOK",
      "Tempat pelaksanaan upacara bendera",
      "Mendukung latihan ekstrakurikuler olahraga",
      "Digunakan untuk kegiatan sekolah lainnya"
    ]
  },
  "tempat-ibadah": {
    icon: "🕌",
    title: "Tempat Ibadah",
    desc: "Tempat ibadah disediakan untuk mendukung kegiatan keagamaan warga sekolah sehari-hari.",
    points: [
      "Digunakan untuk salat berjamaah",
      "Mendukung kegiatan Rohis",
      "Tempat kajian dan pembinaan karakter",
      "Terbuka bagi seluruh warga sekolah"
    ]
  },
  "ruang-kelas": {
    icon: "🏫",
    title: "Ruang Kelas",
    desc: "Ruang kelas menjadi tempat utama kegiatan belajar mengajar sehari-hari dengan suasana yang mendukung konsentrasi siswa.",
    points: [
      "Dilengkapi meja, kursi, dan papan tulis",
      "Sirkulasi udara dan pencahayaan yang memadai",
      "Digunakan untuk kegiatan belajar setiap hari",
      "Kapasitas disesuaikan dengan jumlah rombongan belajar"
    ]
  },
  "pramuka": {
    icon: "⛺",
    title: "Pramuka",
    desc: "Pramuka melatih kedisiplinan, kemandirian, kerja sama, dan jiwa kepemimpinan siswa melalui berbagai kegiatan kepramukaan.",
    points: [
      "Latihan rutin setiap minggu",
      "Kegiatan baris-berbaris dan tali-temali",
      "Melatih kekompakan dan kerja tim",
      "Persiapan mengikuti perkemahan"
    ]
  },
  "pmr": {
    icon: "❤️",
    title: "PMR",
    desc: "Palang Merah Remaja mengenalkan kepedulian sosial dan keterampilan dasar pertolongan pertama kepada siswa.",
    points: [
      "Pelatihan pertolongan pertama dasar",
      "Menumbuhkan kepedulian sosial",
      "Bertugas pada kegiatan sekolah tertentu",
      "Kerja sama dengan unit PMI setempat"
    ]
  },
  "olahraga": {
    icon: "⚽",
    title: "Olahraga",
    desc: "Ekstrakurikuler olahraga mengembangkan kemampuan fisik dan prestasi siswa di berbagai cabang olahraga.",
    points: [
      "Latihan futsal, bola voli, dan atletik",
      "Persiapan mengikuti kompetisi antarsekolah",
      "Melatih sportivitas dan kerja sama tim",
      "Latihan rutin di lapangan sekolah"
    ]
  },
  "seni": {
    icon: "🎨",
    title: "Seni",
    desc: "Ekstrakurikuler seni menjadi wadah bagi siswa untuk mengembangkan kreativitas melalui seni tari, musik, dan rupa.",
    points: [
      "Latihan seni tari dan musik",
      "Kegiatan seni rupa dan kerajinan",
      "Tampil pada acara dan pentas sekolah",
      "Mengembangkan bakat dan kepercayaan diri siswa"
    ]
  },
  "rohis": {
    icon: "📖",
    title: "Rohis",
    desc: "Rohani Islam mendukung kegiatan keagamaan dan pembentukan karakter siswa melalui kajian dan pembinaan rutin.",
    points: [
      "Kajian keagamaan rutin",
      "Pembinaan akhlak dan karakter",
      "Kegiatan pada hari besar keagamaan",
      "Terbuka bagi siswa yang berminat"
    ]
  },
  "it": {
    icon: "💡",
    title: "IT",
    desc: "Ekstrakurikuler IT mengembangkan kemampuan siswa dalam bidang teknologi, komputer, dan keterampilan digital dasar.",
    points: [
      "Pengenalan dasar pemrograman",
      "Pelatihan desain dan pengoperasian komputer",
      "Mendukung minat siswa di bidang teknologi",
      "Latihan menggunakan fasilitas laboratorium komputer"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {

  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach((element) => {
    observer.observe(element);
  });


  const header = document.getElementById("header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }


  const loginLink = document.getElementById("loginLink");

  if (loginLink) {
    const sudahLogin = sessionStorage.getItem("login");

    if (sudahLogin === "true") {
      loginLink.textContent = "Keluar";
      loginLink.href = "#";

      loginLink.addEventListener("click", (e) => {
        e.preventDefault();

        sessionStorage.removeItem("login");
        sessionStorage.removeItem("username");

        window.location.reload();
      });
    }
  }


  // Detail modal for facility & extracurricular cards
  const modal = document.getElementById("detailModal");
  const modalIcon = document.getElementById("modalIcon");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalList = document.getElementById("modalList");
  const modalClose = document.getElementById("modalClose");

  function openModal(key) {
    const data = detailData[key];
    if (!data || !modal) return;

    modalIcon.textContent = data.icon;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalList.innerHTML = "";

    data.points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      modalList.appendChild(li);
    });

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".facility-card, .extra-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.key));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(card.dataset.key);
      }
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });


  // Mobile hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      hamburger.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen);
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }


  // Highlight active nav link while scrolling
  const navLinks = document.querySelectorAll(".nav-menu a[data-nav]");
  const sections = Array.from(navLinks)
    .map((link) => document.getElementById(link.dataset.nav))
    .filter(Boolean);

  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.dataset.nav === entry.target.id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach((section) => navObserver.observe(section));
  }


  // Back-to-top button
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("show", window.scrollY > 400);
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }


  // Animated stat counters
  const statNumbers = document.querySelectorAll(".stat-number");

  if (statNumbers.length) {
    const animateCount = (el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = target;
        }
      }

      requestAnimationFrame(tick);
    };

    const statObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach((stat) => statObserver.observe(stat));
  }

});