import two from '/public/projects/2048.png';
import menu from '/public/projects/menu.png';
import note_manager_dashboard from '/public/projects/note_manager_dashboard.png';
import note_manager_login from '/public/projects/note_manager_login.png';
import note_manager_notes from '/public/projects/note_manager_notes.png';
import note_manager_share from '/public/projects/note_manager_share.png';
import ping_pong from '/public/projects/ping_pong.png';
import tetris from '/public/projects/tetris.png';
import typing_game_dashboard from '/public/projects/typing_game_dashboard.png';
import typing_game_login from '/public/projects/typing_game_login.png';
import typing_game_register from '/public/projects/typing_game_register.png';
import typing_game_stats from '/public/projects/typing_game_stats.png';
import word_drop_game_over from '/public/projects/word_drop_game_over.png';
import word_drop_menu from '/public/projects/word_drop_menu.png';
import word_drop_playing from '/public/projects/word_drop_playing.png';
import currency_converter from '/public/projects/currency_converter.png';

export const projectsData = [
    {
        id: 1,
        name: 'Typing Game',
        description: "A full-stack typing game built with Next.js, MongoDB, and NextAuth. Users can sign up, play typing tests (timed or unlimited), and view stats like WPM and accuracy. Includes password reset via email (Nodemailer + Gmail).  ",
        tools: ['MongoDB', 'Tailwind', 'Javascript', 'Next js'],
        role: 'Game Developer',
        code: 'https://github.com/pankajsharma0001/typing-game',
        demo: 'https://fast-typer-pro.vercel.app',
        images: [typing_game_login, typing_game_register, typing_game_dashboard, typing_game_stats],
    },
    {
        id: 2,
        name: 'Note Manager',
        description: 'The Note Manager is a web-based application designed to help users easily create, organize, and manage their notes in one place. It allows users to add, edit, delete, and view notes with a clean and responsive interface. Built with Next.js and integrated with Cloudinary for file storage, it supports file uploads (such as PDFs, images, and documents) and provides real-time updates for a smooth user experience.',
        tools: ['MongoDB', 'Tailwind', 'Javascript', 'Next js'],
        role: 'Game Developer',
        code: 'https://github.com/pankajsharma0001/NOTE-MANAGER',
        demo: 'https://jiteshdeo.vercel.app',
        images: [note_manager_login, note_manager_dashboard, note_manager_notes, note_manager_share],
    },
    {
        id: 3,
        name: 'Game Package',
        description: 'This game package contains a collection of games developed using the Raylib library in C++. The games included are Ping Pong, Tetris, 2048 and more games will be added in the future.',
        tools: ['C', 'C++'],
        code: 'https://github.com/pankajsharma0001/Game-Package',
        role: 'Full Stack Developer',
        demo: 'https://github.com/pankajsharma0001/Game-Package/releases/tag/v1.0',
        images: [menu, ping_pong, tetris, two],
    },
    {
        id: 4,
        name: 'Word Drop',
        description: "Word Drop is a fast-paced reflex and typing game built using graphics.h in C++. Words fall from the top of the screen, and your goal is to type them before they hit the bottom. If you miss, you lose health — but if you succeed, you score points and recover health. The longer you survive, the faster the words fall!",
        tools: ['C', 'C++'],
        code: 'https://github.com/pankajsharma0001/Word-Drop',
        demo: 'https://github.com/pankajsharma0001/Word-Drop/releases/tag/v1.2',
        images: [word_drop_menu, word_drop_playing, word_drop_game_over],
        role: 'Game Developer',
    },
    {
        id: 5,
        name: 'eComplaint-Automation-System',
        description: "The E-Complaint Management System is a web-based platform designed to streamline the process of filing, tracking, and resolving complaints in an efficient and transparent way. It enables users to register complaints online, while administrators and concerned authorities can manage, monitor, and respond to those complaints in real time.",
        tools: ['MongoDB', 'Tailwind', 'Javascript', 'Next js'],
        code: 'https://github.com/pankajsharma0001/eComplaint-Automation-System',
        demo: 'https://github.com/pankajsharma0001/eComplaint-Automation-System',
        images: [currency_converter],
        role: 'Game Developer',
    },
    {
        id: 6,
        name: 'Currency Converter',
        description: "A simple currency converter web application that allows users to convert amounts between different currencies. It fetches real-time exchange rates from a public API and provides an intuitive interface for users to input amounts and select currencies for conversion.",
        tools: ['Javascript', 'HTML', 'CSS'],
        code: 'https://github.com/pankajsharma0001/Currency-Converter',
        demo: 'https://pankajsharma0001.github.io/Currency-Converter/',
        images: [currency_converter],
    },
    {
        id: 7,
        name: 'Flappy Bird',
        description: "A simple Flappy Bird game built using Python and the Pygame library. The player controls a bird that must navigate through a series of pipes without colliding with them. The game features basic graphics and sound effects, providing an enjoyable experience for players of all ages.",
        tools: ['Python'],
        code: 'https://github.com/pankajsharma0001/Flappy-bird',
        demo: 'https://github.com/pankajsharma0001/Flappy-bird',
        images: [currency_converter],
    }
];
