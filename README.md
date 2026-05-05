# 🌍 Gezi Vitrinim - Modern Tur ve Seyahat Portalı

Gezi Vitrinim, modern gezginler için tasarlanmış, yüksek performanslı ve premium görsel tasarıma sahip bir turizm platformudur. Malatya çıkışlı turlar başta olmak üzere, günübirlik, konaklamalı ve yurt dışı turlarını kullanıcıya en şık şekilde sunar.

![Gezi Vitrinim Banner](https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200)

## ✨ Özellikler

-   🚀 **Hızlı ve Modern**: Next.js 15 App Router mimarisi ile ultra hızlı sayfa geçişleri.
-   💎 **Premium Tasarım**: Framer Motion ile güçlendirilmiş akıcı animasyonlar ve modern glassmorphism UI bileşenleri.
-   🛠 **Sanity CMS Entegrasyonu**: Turlar, fiyatlar ve içerikler teknik bilgi gerektirmeden kolayca yönetilebilir.
-   📱 **Mobil Öncelikli (Mobile-First)**: Tüm cihazlarda mükemmel görünen duyarlı (responsive) tasarım.
-   💬 **Doğrudan İletişim**: Tek tıkla WhatsApp üzerinden rezervasyon ve bilgi alma imkanı.
-   🔍 **Akıllı Filtreleme**: Kategori bazlı (Günübirlik, Konaklamalı, Kültür, Yurt Dışı) tur arama.

## 🛠 Teknoloji Yığını

-   **Framework**: [Next.js 15](https://nextjs.org/)
-   **İçerik Yönetimi (CMS)**: [Sanity.io](https://www.sanity.io/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animasyonlar**: [Framer Motion](https://www.framer.com/motion/)
-   **İkonlar**: [Lucide React](https://lucide.dev/)
-   **Dil**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları takip edin:

1.  **Depoyu klonlayın:**
    ```bash
    git clone https://github.com/talhaff/Gezivitrinim.git
    cd Gezivitrinim
    ```

2.  **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    ```

3.  **Çevresel değişkenleri ayarlayın:**
    `.env.local` dosyası oluşturun ve Sanity proje bilgilerinizi ekleyin:
    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=proje_id_niz
    NEXT_PUBLIC_SANITY_DATASET=production
    ```

4.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```

Tarayıcınızda `http://localhost:3000` adresine giderek projeyi görüntüleyebilirsiniz.

## 📁 Dosya Yapısı

-   `src/app`: Next.js sayfa yönlendirmeleri ve layout'lar.
-   `src/components`: Tekrar kullanılabilir UI bileşenleri (TourCard, Navbar, Footer vb.).
-   `src/sanity`: Sanity CMS şemaları ve bağlantı ayarları.
-   `src/types`: TypeScript tip tanımlamaları.
-   `public`: Statik varlıklar (resimler, SVG'ler).

## 📄 Lisans

Bu proje kişisel kullanım ve geliştirme amacıyla oluşturulmuştur.

---

**Gezivitrinim** - *Hayallerinizdeki tatili keşfedin.*
