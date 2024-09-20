# GitHub Portfolio

### If you're struggling to create a portfolio website that looks professional, you don't have to search any further. You can use this GitHub Portfolio template to create your very own personalized portfolio using just your GitHub username! The website is designed to be user-friendly and easily customizable, which makes it an ideal solution for developers and freelancers alike.

---

# Demo :movie_camera:

![localhost_3000_](https://github.com/user-attachments/assets/38923fdf-44bf-4a5a-a0cf-d10addeebbf1)

## View live preview [here](https://github-portfolio-phi.vercel.app/)
---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/github-portfolio.git

cd github-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

If you want to use Google Analytics, Please create a new `.env` file from `.env.example` file and provide the value.

Eg:

```env
NEXT_PUBLIC_GTM = ""
```

### Now, you have to customize user data in the `data` [folder](https://github.com/said7388/developer-portfolio/tree/main/data).

Eg:

```javascript
import TiktokSquare from "@/public/svgs/TiktokSquare";
import { BsLinkedin } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

export const userData = {
  githubUser: "realg701",
  devUsername: "realg701",
  socials: [
    {
      title: "https://github.com/realg701",
      icon: <FaGithubSquare size={32} />,
    },
    {
      title: "https://www.linkedin.com/in/abdul-haseeb-qadir-6283a9275/",
      icon: <BsLinkedin size={28} />,
    },
    {
      title: "https://twitter.com/realg701/",
      icon: <FaTwitterSquare size={32} />,
    },
    {
      title: "https://youtube.com/@realg701",
      icon: <FaYoutubeSquare size={32} />,
    },
    {
      title: "https://instagram.com/en_ediut",
      icon: <FaInstagramSquare size={32} />,
    },
    {
      title: "https://www.facebook.com/realg701/",
      icon: <FaFacebookSquare size={32} />,
    },
    { title: "https://tiktok.com/@en_ediut", icon: <TiktokSquare size={28} /> },
  ],
  resume:
    "https://docs.google.com/document/d/1DjFNn43OjHRhX17MuwYo_ZIfnx6F3yECZZyK5fEe5eQ/edit?usp=sharing",
  frameworks: ["ReactJS", "NextJS"],
  libraries: [, "TailwindCSS", "Bootstrap", "MUI"],
  technologies: ["NextJS", "ReactJS", "ExpressJS"],
  languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
  databases: ["MongoDB", "Firebase"],
  timezone: "+5",
};
```

---

---

# Packages Used :package:

|   Used Package List   |
| :-------------------: |
|         next          |
|  @next/third-parties  |
|         axios         |
|      react-icons      |
| react-github-calendar |
|         sass          |
|      tailwindcss      |

---

## Disclaimer

In this repository, I have used some open source APIs. All credits go to the owners of those repositories.
