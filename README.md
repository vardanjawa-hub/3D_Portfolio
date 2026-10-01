# 3D Portfolio Website

An interactive, immersive developer portfolio built with **React**, **Three.js** (via React Three Fiber), and **Tailwind CSS**. It combines animated 3D scenes with a clean, responsive layout to showcase projects, skills, and contact details.



**Live Demo:** [
vardanport.netlify.app](
vardanport.netlify.app)

---

## Features

- Interactive 3D scenes rendered with Three.js and React Three Fiber
- Animated particle backgrounds (star fields, floating points)
- Smooth, frame-rate independent animations using `useFrame`
- Fully responsive design for mobile, tablet, and desktop
- Clean UI styled with Tailwind CSS utility classes
- Sections for About, Skills, Projects, and Contact
- Fast build and hot reload

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React |
| 3D Rendering | Three.js, @react-three/fiber, @react-three/drei |
| Math Helpers | maath |
| Styling | Tailwind CSS |
| Markup | HTML5 |
| Language | JavaScript (ES6+) |
| Build Tool | Vite |

---

## Project Structure

```
3d-portfolio/
├── public/              # Static assets (images, models, icons)
├── src/
│   ├── assets/          # Images, fonts, 3D models
│   ├── components/      # Reusable UI and 3D components
│   │   ├── canvas/      # Three.js / R3F scenes (Stars, Earth, etc.)
│   │   └── ...          # Navbar, Hero, About, Projects, Contact
│   ├── constants/       # Static data (projects, skills, links)
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind directives and global styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vardanjawa-hub/3D_Portfolio.git
   cd 3D_Portfolio 
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Key Dependencies

```bash
npm install three @react-three/fiber @react-three/drei maath
npm install -D tailwindcss postcss autoprefixer
```

---

## How the 3D Scene Works

The particle background is created with `random.inSphere` from `maath`, which fills a typed array with random points inside a sphere. `useFrame` then rotates the cloud on every frame, using `delta` so the speed stays consistent across different screen refresh rates.

```jsx
const sphere = random.inSphere(new Float32Array(5001), { radius: 1.5 });

useFrame((state, delta) => {
  ref.current.rotation.x -= delta / 10;
  ref.current.rotation.y -= delta / 15;
});
```

> The array length must be a multiple of 3 (x, y, z per point), otherwise you will get `NaN` values.

---

## Customization

1. **Personal info:** edit the data in `src/constants/`
2. **Colors and fonts:** update `tailwind.config.js`
3. **3D models and textures:** replace files in `public/` or `src/assets/`
4. **Particle settings:** adjust `radius`, point `size`, and rotation speeds in the Stars component

---

## Deployment

This project can be deployed for free on:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

Build command: `npm run build`
Output directory: `dist`

---

## Performance Tips

- Compress 3D models (use `.glb` with Draco compression)
- Optimize textures and images (WebP recommended)
- Use `depthWrite={false}` on transparent particle materials
- Keep particle counts reasonable on mobile devices
- Lazy load heavy 3D sections with `React.lazy` and `Suspense`

---

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

**Vardan**

- GitHub: [@vardanjawa-hub](https://github.com/vardanjawa-hub)
- Email: balwinderjawanda0@example.com


---

## Acknowledgements

- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Drei](https://github.com/pmndrs/drei)
- [maath](https://github.com/pmndrs/maath)
- [Tailwind CSS](https://tailwindcss.com/)
